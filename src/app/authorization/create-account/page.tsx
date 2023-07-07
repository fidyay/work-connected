import FormField from "@/components/FormField";
import Button from "@/components/Button";
import SelectionRoles from "@/components/SelectionRoles";

function CreateAccountPage() {
  return (
    <form>
      <FormField label="Person's names" placeholder="Name Surname" />
      <SelectionRoles title="Roles" />
      <div>
        <Button href="/authorization/create-company">Back</Button>
        <Button href="/">Next</Button>
      </div>
    </form>
  );
}

export default CreateAccountPage;
