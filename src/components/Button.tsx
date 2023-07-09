"use client";
import React from "react";
import Link from "next/link";
import styles from "@/styles/button.module.scss";

interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

function Button({ children, onClick, href }: ButtonProps) {
  return href ? (
    <Link className={styles.button} href={href}>
      {children}
    </Link>
  ) : (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
