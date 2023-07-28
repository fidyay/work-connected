import styles from "@/styles/form_field.module.scss";

interface FormFieldProps {
  label: string;
  placeholder?: string;
  type?: "text" | "password";
}
function FormField({ label, placeholder, type = "text" }: FormFieldProps) {
  return (
    <label className={styles.label}>
      {label}:
      <input
        className={styles.input}
        name={label.toLocaleLowerCase()}
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
}

export default FormField;
