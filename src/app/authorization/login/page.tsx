import FormField from "@/components/FormField/server_component";
import styles from "@/styles/form.module.scss";
import { login } from "@/app/actions";
import Form from "@/components/Form";
import LoginErrorMessage from "@/components/LoginErrorMessage";
import FormLink from "@/components/FormLink";

function LoginPage() {
  return (
    <div className={styles.form_wrapper}>
      <Form action={login} title="Login">
        <FormLink
          href="/authorization/create-organization"
          prefix="Or you can"
          postfix="."
        >
          create new organization
        </FormLink>
        <LoginErrorMessage />
        <FormField
          label="Organization name"
          placeholder="Microsoft corporations"
        />
        <FormField label="User names" placeholder="Name Surname" />
        <FormField label="Password" placeholder="*****" type="password" />
      </Form>
    </div>
  );
}

export default LoginPage;
