"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import Button from "./Button";
import Loader from "./Loader";
import styles from "@/styles/submit.module.scss";

interface SubmitProps {
  children: string;
}

function Submit({ children }: SubmitProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className={styles.submit} disabled={pending}>
      {pending ? <Loader className={styles.loader} /> : children}
    </Button>
  );
}

export default Submit;
