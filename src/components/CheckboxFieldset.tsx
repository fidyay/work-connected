import Checkbox from "./Checkbox";
import styles from "@/styles/checkboxes.module.scss";

interface CheckboxFieldsetProps {
  legend: string;
  labels: string[];
}

function CheckboxFieldset({ legend, labels }: CheckboxFieldsetProps) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      {labels.map((label) => (
        <Checkbox key={label} label={label} />
      ))}
    </fieldset>
  );
}

export default CheckboxFieldset;
