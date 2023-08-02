import FormField from "@/components/FormField/server_component";
import Button from "@/components/Button";
import SelectionRoles from "@/components/SelectionRoles";
import styles from "@/styles/authorization_form.module.scss";

function CreateAccountPage() {
  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form}>
        <h1 className={styles.form_title}>Create user account</h1>
        <FormField label="Person's names" placeholder="Name Surname" />
        <SelectionRoles title="Roles" />
        <div className={styles.form_button_wrapper}>
          <Button href="/authorization/create-organization">Back</Button>
          <Button href="/">Next</Button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccountPage;
