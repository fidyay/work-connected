import React, { forwardRef } from "react";
import styles from "@/styles/svg.module.scss";

interface InfoProps {
  style?: React.CSSProperties;
  className?: string;
}

const Info = forwardRef(function Info(
  { style, className = "" }: InfoProps,
  ref?: React.ForwardedRef<HTMLSpanElement>
) {
  return (
    <span ref={ref} style={style} className={className}>
      <svg
        className={styles.info}
        width="2"
        height="12"
        viewBox="0 0 2 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 11.75C0.801893 11.7474 0.612629 11.6676 0.472534 11.5275C0.332439 11.3874 0.25259 11.1981 0.25 11V4C0.25 3.80109 0.329018 3.61032 0.46967 3.46967C0.610323 3.32902 0.801088 3.25 1 3.25C1.19891 3.25 1.38968 3.32902 1.53033 3.46967C1.67098 3.61032 1.75 3.80109 1.75 4V11C1.74741 11.1981 1.66756 11.3874 1.52747 11.5275C1.38737 11.6676 1.19811 11.7474 1 11.75ZM1 2.25C0.801893 2.24741 0.612629 2.16756 0.472534 2.02747C0.332439 1.88737 0.25259 1.69811 0.25 1.5V1C0.25 0.801088 0.329018 0.610322 0.46967 0.46967C0.610323 0.329018 0.801088 0.25 1 0.25C1.19891 0.25 1.38968 0.329018 1.53033 0.46967C1.67098 0.610322 1.75 0.801088 1.75 1V1.5C1.74741 1.69811 1.66756 1.88737 1.52747 2.02747C1.38737 2.16756 1.19811 2.24741 1 2.25Z" />
      </svg>
    </span>
  );
});

export default Info;
