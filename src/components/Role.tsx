"use client";
import React, { useRef } from "react";
import Cross from "./svg/Cross";
import styles from "@/styles/role.module.scss";
import { CSSTransition } from "react-transition-group";
interface RoleProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  selected?: boolean;
}

function Role({ children, onClick, selected }: RoleProps) {
  const cross = useRef<HTMLSpanElement>(null);

  return (
    <span
      className={styles.span + (selected ? ` ${styles.selected}` : "")}
      onClick={onClick}
    >
      {"@" + children}
      <CSSTransition
        in={selected}
        nodeRef={cross}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: styles.cross_enter_active,
          enter: styles.cross_enter,
          exitActive: styles.cross_exit_active,
          exit: styles.cross_exit,
        }}
      >
        <Cross className={styles.cross_default} ref={cross} />
      </CSSTransition>
    </span>
  );
}

export default Role;
