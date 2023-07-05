import FormField from "@/components/FormField";
import Button from "@/components/Button";
import Role from "@/components/Role";

function CreateCompanyPage() {
  return (
    <form>
      <FormField label="Company name" placeholder="Microsoft corporations" />
      <Role>admin</Role>
      <div>
        <Button href="/authorization/create-company">Back</Button>
        <Button href="/">Next</Button>
      </div>
    </form>
  );
}

export default CreateCompanyPage;
