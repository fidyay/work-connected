import styles from "@/styles/form_field.module.scss";

interface FormFieldProps {
  label: string;
  placeholder?: string;
}
function FormField({ label, placeholder }: FormFieldProps) {
  return (
    <label className={styles.label}>
      {label}:
      <input
        className={styles.input}
        name={label.toLocaleLowerCase()}
        type="text"
        placeholder={placeholder}
      />
    </label>
  );
}

export default FormField;
