"use client";
import React from "react";
import Link from "next/link";
import styles from "@/styles/button.module.scss";

interface LinkProps {
  children: string;
  href: string;
  className?: string;
}

interface ButtonProps {
  children: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

type ElProps = LinkProps | ButtonProps;

function Button(props: ElProps) {
  if ((props as LinkProps).href) {
    const { children, href, className = "" } = props as LinkProps;
    return (
      <Link
        className={styles.button + `${className.length ? " " : ""}${className}`}
        href={href}
      >
        {children}
      </Link>
    );
  } else {
    const {
      children,
      type = "button",
      disabled = false,
      onClick,
      className = "",
    } = props as ButtonProps;
    return (
      <button
        className={styles.button + `${className.length ? " " : ""}${className}`}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
