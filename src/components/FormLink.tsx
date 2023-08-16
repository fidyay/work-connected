import Link from "next/link";
import styles from "@/styles/form_link.module.scss";

interface FormLinkProps {
  prefix?: string;
  href: string;
  children: string;
  postfix?: string;
}

function FormLink({
  prefix = "",
  href,
  children,
  postfix = "",
}: FormLinkProps) {
  return (
    <span className={styles.prefix}>
      {prefix}{" "}
      <Link className={styles.link} href={href}>
        {children}
      </Link>
      {postfix}
    </span>
  );
}

export default FormLink;
