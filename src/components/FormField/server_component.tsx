import styles from "@/styles/form_field.module.scss";
import RequiredMarker from "../RequiredMarker";

export interface FormFieldProps {
  label: string;
  placeholder?: string;
  type?: "text" | "password";
  optional?: boolean;
}
function FormField({
  label,
  placeholder,
  type = "text",
  optional = false,
}: FormFieldProps) {
  return (
    <label className={styles.label}>
      {label}
      {!optional && <RequiredMarker />}:
      <input
        required={!optional}
        className={styles.input}
        name={label.toLocaleLowerCase()}
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
}

export default FormField;
