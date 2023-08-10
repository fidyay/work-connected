"use client";
import styles from "@/styles/form_field.module.scss";
import RequiredMarker from "../RequiredMarker";
import { FormFieldProps } from "./server_component";
import { useState, useRef } from "react";
import useCheckFieldUniqueness, {
  type ModelNames,
} from "@/hooks/useCheckFieldUniqueness";
import FormFieldStatusMarker from "../FormFieldStatusMarker";

interface FormFieldClientProps extends FormFieldProps {
  model: ModelNames;
  field: string;
}

function FormFieldClient({
  label,
  placeholder,
  type = "text",
  optional = false,
  model,
  field,
}: FormFieldClientProps) {
  const [value, setValue] = useState<string>("");
  const input = useRef<HTMLInputElement>(null);
  const [showMarker, setShowMarker] = useState(false);
  const { checked, pending, rejected, initial } = useCheckFieldUniqueness(
    value,
    model,
    field
  );
  let className = styles.input;
  if (checked) className += ` ${styles.success}`;
  return (
    <label className={styles.label}>
      {label}
      {!optional && <RequiredMarker />}:
      <input
        onFocus={() => setShowMarker(true)}
        onBlur={() => setShowMarker(false)}
        ref={input}
        value={value}
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          setValue(target.value);
        }}
        required={!optional}
        className={className}
        name={label.toLocaleLowerCase()}
        type={type}
        placeholder={placeholder}
        pattern={rejected ? `^(?!${value}\s*$).*$` : `${value}`}
      />
      <FormFieldStatusMarker
        checked={checked}
        pending={pending}
        rejected={rejected}
        initial={initial}
        fieldName={label}
        text={value}
        inputRef={input}
        className={showMarker ? "" : styles.unfocused_fields_marker}
      />
    </label>
  );
}

export default FormFieldClient;
