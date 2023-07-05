import FormField from "@/components/FormField";
import Button from "@/components/Button";

function CreateCompanyPage() {
  return (
    <form>
      <FormField label="Company name" placeholder="Microsoft corporations" />
      <div>
        <Button href="/">Back</Button>
        <Button href="/authorization/create-account">Next</Button>
      </div>
    </form>
  );
}

export default CreateCompanyPage;
