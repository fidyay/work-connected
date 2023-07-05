"use client";
import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

function Button({ children, onClick, href }: ButtonProps) {
  return href ? (
    <Link href={href}>{children}</Link>
  ) : (
    <button onClick={onClick}>{children}</button>
  );
}

export default Button;
