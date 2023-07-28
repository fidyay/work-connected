import FormField from "@/components/FormField";
import Submit from "@/components/Submit";
import styles from "@/styles/authorization_form.module.scss";
import { createOrganisation } from "@/app/actions";

function CreateOrganizationPage() {
  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form} action={createOrganisation}>
        <h1 className={styles.form_title}>Create organization</h1>
        <FormField
          label="Organization name"
          placeholder="Microsoft corporations"
        />
        <FormField label="Creator's names" placeholder="Name Surname" />
        <FormField
          label="Creator's password"
          placeholder="*****"
          type="password"
        />
        <div className={styles.form_button_wrapper}>
          <Submit>Submit</Submit>
        </div>
      </form>
    </div>
  );
}

export default CreateOrganizationPage;
