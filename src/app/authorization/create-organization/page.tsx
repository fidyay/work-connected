import FormFieldServer from "@/components/FormField/server_component";
import FormFieldClient from "@/components/FormField/client_component";
import styles from "@/styles/form.module.scss";
import { createOrganisation } from "@/app/actions";
import Form from "@/components/Form";
import FormLink from "@/components/FormLink";

function CreateOrganizationPage() {
  return (
    <div className={styles.form_wrapper}>
      <Form action={createOrganisation} title="Create organization">
        <FormLink href="/authorization/login" prefix="Or you can" postfix=".">
          login to your account
        </FormLink>
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
      </Form>
    </div>
  );
}

export default CreateOrganizationPage;
