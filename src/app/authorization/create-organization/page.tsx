import FormFieldServer from "@/components/FormField/server_component";
import FormFieldClient from "@/components/FormField/client_component";
import Submit from "@/components/Submit";
import styles from "@/styles/authorization_form.module.scss";
import { createOrganisation } from "@/app/actions";

function CreateOrganizationPage() {
  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form} action={createOrganisation}>
        <h1 className={styles.form_title}>Create organization</h1>
        <FormFieldClient
          label="Organization name"
          placeholder="Microsoft corporations"
          model="Organization"
          field="name"
        />
        <FormFieldServer label="Creator's names" placeholder="Name Surname" />
        <FormFieldServer
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
