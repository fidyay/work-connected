"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "@/styles/login_error_message.scss";

function LoginErrorMessage() {
  const { pending } = useFormStatus();
  const wasPending = useRef<boolean>(false);
  const div = useRef<HTMLDivElement>(null);
  let shouldRender = false;
  if (wasPending.current && !pending) {
    shouldRender = true;
  } else if (pending) {
    wasPending.current = true;
  }
  return (
    <CSSTransition
      in={shouldRender}
      nodeRef={div}
      addEndListener={(done) =>
        div.current?.addEventListener("transitionend", done, false)
      }
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: styles.message_enter_active,
        enter: styles.message_enter,
        exitActive: styles.message_enter_active,
        exit: styles.message_exit,
      }}
    >
      <div className={styles.message} ref={div}>
        Wrong information, please try again.
      </div>
    </CSSTransition>
  );
}

export default LoginErrorMessage;
