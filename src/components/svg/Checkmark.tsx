import React, { forwardRef } from "react";
import styles from "@/styles/svg.module.scss";

interface CheckmarkProps {
  style?: React.CSSProperties;
  className?: string;
}

const Checkmark = forwardRef(function Checkmark(
  { style, className = "" }: CheckmarkProps,
  ref?: React.ForwardedRef<HTMLSpanElement>
) {
  return (
    <span ref={ref} style={style} className={className}>
      <svg
        className={styles.svg}
        width="10"
        height="10"
        viewBox="0 0 24 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 17L0 8L1.414 6.586L9 14.171L22.586 0.585999L24 2L9 17Z" />
      </svg>
    </span>
  );
});

export default Checkmark;
