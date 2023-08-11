import styles from "@/styles/form.module.scss";
import Submit from "./Submit";

interface FormProps {
  action: (data: FormData) => Promise<void>;
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

function Form({ action, title, children }: FormProps) {
  return (
    <form className={styles.form} action={action}>
      <h1 className={styles.form_title}>{title}</h1>
      {children}
      <div className={styles.form_button_wrapper}>
        <Submit>Submit</Submit>
      </div>
    </form>
  );
}

export default Form;
