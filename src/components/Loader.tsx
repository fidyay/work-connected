import styles from "@/styles/loader.module.scss";

interface LoaderProps {
  className?: string;
}

function Loader({ className = "" }: LoaderProps) {
  return (
    <div
      className={styles.loader + `${className.length ? " " : ""}${className}`}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
