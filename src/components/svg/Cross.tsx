import React, { forwardRef } from "react";
import styles from "@/styles/cross.module.scss";
interface CrossProps {
  style?: React.CSSProperties;
  className?: string;
}

const Cross = forwardRef(function Cross(
  { style, className = "" }: CrossProps,
  ref?: React.ForwardedRef<HTMLSpanElement>
) {
  return (
    <span ref={ref} style={style} className={className}>
      <svg
        className={styles.cross}
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.464 8.53503L8.536 1.46503M1.464 1.46503L8.536 8.53503"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </span>
  );
});

export default Cross;
