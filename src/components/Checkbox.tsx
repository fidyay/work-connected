"use client";
import { useState } from "react";
import styles from "@/styles/checkboxes.module.scss";

interface CheckboxProps {
  label: string;
}

function Checkbox({ label }: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);
  let buttonClassName = styles.button;
  if (checked) buttonClassName += ` ${styles.button_checked}`;
  return (
    <label className={styles.checkbox}>
      {label}{" "}
      <input value={label.toLowerCase()} checked={checked} type="checkbox" />
      <button
        type="button"
        className={buttonClassName}
        onClick={() => setChecked(!checked)}
      >
        <span className={styles.background} />
        <span className={styles.indicator} />
      </button>
    </label>
  );
}

export default Checkbox;
