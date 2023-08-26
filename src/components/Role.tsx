"use client";
import React, { useRef } from "react";
import Cross from "./svg/Cross";
import styles from "@/styles/role.module.scss";
import { CSSTransition } from "react-transition-group";
interface RoleProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  selected?: boolean;
  value: string;
}

function Role({ children, onClick, selected, value }: RoleProps) {
  const cross = useRef<HTMLSpanElement>(null);

  return (
    <label
      className={styles.label + (selected ? ` ${styles.selected}` : "")}
      onClick={onClick}
    >
      <input
        checked={selected}
        className={styles.checkbox}
        type="checkbox"
        value={value}
      />
      {"@" + children}
      <CSSTransition
        in={selected}
        nodeRef={cross}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: styles.cross_enter_active,
          enterDone: styles.cross_enter_active,
          enter: styles.cross_enter,
          exitDone: styles.cross_exit_active,
          exitActive: styles.cross_exit_active,
          exit: styles.cross_exit,
        }}
      >
        <Cross className={styles.cross_default} ref={cross} />
      </CSSTransition>
    </label>
  );
}

export default Role;
