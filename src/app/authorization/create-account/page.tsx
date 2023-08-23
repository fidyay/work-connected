import FormFieldServer from "@/components/FormField/server_component";
import FormFieldClient from "@/components/FormField/client_component";
import SelectionRoles from "@/components/SelectionRoles";
import styles from "@/styles/form.module.scss";
import Form from "@/components/Form";
import { createUser } from "@/app/actions";
import DownloadUserInfo from "@/components/DownloadUserInfo";

function CreateAccountPage() {
  return (
    <div className={styles.form_wrapper}>
      <DownloadUserInfo>
        <Form action={createUser} title="Create account">
          <FormFieldClient
            label="User names"
            placeholder="Microsoft corporations"
            model="User"
            field="names"
          />
          <FormFieldServer
            label="Password"
            placeholder="*****"
            type="password"
          />
          <SelectionRoles title="Roles" />
        </Form>
      </DownloadUserInfo>
    </div>
  );
}

export default CreateAccountPage;
