"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import Button from "./Button";

interface SubmitProps {
  children: string;
}

function Submit({ children }: SubmitProps) {
  const data = useFormStatus();
  console.log(data);
  return (
    <Button type="submit" disabled={data.pending}>
      {children}
    </Button>
  );
}

export default Submit;
