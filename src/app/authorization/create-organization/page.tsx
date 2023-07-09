import FormField from "@/components/FormField";
import Button from "@/components/Button";
import styles from "@/styles/authorization_form.module.scss";

function CreateOrganizationPage() {
  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form}>
        <h1 className={styles.form_title}>Create organization</h1>
        <FormField
          label="Organization name"
          placeholder="Microsoft corporations"
        />
        <div className={styles.form_button_wrapper}>
          <Button href="/">Back</Button>
          <Button href="/authorization/create-account">Next</Button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrganizationPage;
