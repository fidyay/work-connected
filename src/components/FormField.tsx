interface FormFieldProps {
  label: string;
  placeholder?: string;
}
function FormField({ label, placeholder }: FormFieldProps) {
  return (
    <label>
      {label}:{" "}
      <input
        name={label.toLocaleLowerCase()}
        type="text"
        placeholder={placeholder}
      />
    </label>
  );
}

export default FormField;
