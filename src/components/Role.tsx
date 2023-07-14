"use client";
import React from "react";
import Cross from "./svg/Cross";
import styles from "@/styles/role.module.scss";

interface RoleProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  selected?: boolean;
}

function Role({ children, onClick, selected }: RoleProps) {
  return (
    <span
      className={styles.span + (selected ? ` ${styles.selected}` : "")}
      onClick={onClick}
    >
      {"@" + children}
      {!!selected && <Cross className={styles.cross} />}
    </span>
  );
}

export default Role;
