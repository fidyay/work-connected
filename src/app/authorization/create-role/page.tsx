import FormFieldClient from "@/components/FormField/client_component";
import styles from "@/styles/form.module.scss";
import Form from "@/components/Form";
import { createRole } from "@/app/actions";
import CheckboxFieldset from "@/components/CheckboxFieldset";

const labels: string[] = ["Creating roles", "Creating users"];

function CreateRolePage() {
  return (
    <div className={styles.form_wrapper}>
      <Form action={createRole} title="Create role">
        <FormFieldClient
          label="Role name"
          placeholder="user"
          model="Role"
          field="name"
        />
        <CheckboxFieldset legend="Permissions" labels={labels} />
      </Form>
    </div>
  );
}

export default CreateRolePage;
