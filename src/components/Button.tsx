"use client";
import React from "react";
import Link from "next/link";
import styles from "@/styles/button.module.scss";

interface LinkProps {
  children: string;
  href: string;
}

interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

type ElProps = LinkProps | ButtonProps;

function Button(props: ElProps) {
  if ((props as LinkProps).href) {
    const { children, href } = props as LinkProps;
    return (
      <Link className={styles.button} href={href}>
        {children}
      </Link>
    );
  } else {
    const {
      children,
      type = "button",
      disabled = false,
      onClick,
    } = props as ButtonProps;
    return (
      <button
        type={type}
        disabled={disabled}
        className={styles.button}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
