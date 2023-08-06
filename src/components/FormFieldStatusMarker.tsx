"use client";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { type checkingState } from "@/hooks/useCheckFieldUniqueness";
import { useRef } from "react";
import Cross from "./svg/Cross";
import Checkmark from "./svg/Checkmark";
import Info from "./svg/Info";
import Loader from "./Loader";
import styles from "@/styles/field_status_marker.module.scss";

interface FormFieldStatusMarkerProps {
  checked: boolean;
  pending: boolean;
  rejected: boolean;
  initial: boolean;
  text: string;
  fieldName: string;
}

function getFieldStateStr({
  checked,
  pending,
  rejected,
  initial,
}: FormFieldStatusMarkerProps): checkingState {
  if (checked) return "checked";
  else if (pending) return "pending";
  else if (rejected) return "rejected";
  else return "initial";
}

function LoaderWrapper() {
  return (
    <span className={styles.marker_loader_wrapper}>
      <Loader className={styles.marker_loader} />
    </span>
  );
}

function Marker({
  status,
}: {
  status: "checked" | "pending" | "rejected" | "initial";
}) {
  switch (status) {
    case "checked":
      return <Checkmark className={styles.marker_checkmark} />;
    case "pending":
      return <LoaderWrapper />;
    case "rejected":
      return <Cross className={styles.marker_reject} />;
    default:
      return <Info className={styles.marker_info} />;
  }
}

function MarkerText({
  checked,
  pending,
  rejected,
  initial,
  text,
  fieldName,
}: FormFieldStatusMarkerProps) {
  let str: string;
  switch (true) {
    case checked:
      str = "Checked";
      break;
    case pending:
      str = "Pending";
      break;
    case rejected:
      str = `${text} is already taken`;
      break;
    default:
      str = `${fieldName} must be unique`;
  }
  return <span className={styles.text}>{str}</span>;
}

function FormFieldStatusMarker(props: FormFieldStatusMarkerProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  let divClassName = styles.wrapper;
  switch (true) {
    case props.checked:
      divClassName += ` ${styles.wrapper_success}`;
      break;
    case props.rejected:
      divClassName += ` ${styles.wrapper_reject}`;
      break;
    case props.pending:
      divClassName += ` ${styles.wrapper_pending}`;
      break;
  }
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={getFieldStateStr(props)}
        nodeRef={nodeRef}
        addEndListener={(done) => {
          nodeRef.current?.addEventListener("transitionend", done, false);
        }}
        classNames="fade"
      >
        <div ref={nodeRef} className={divClassName}>
          <Marker status={getFieldStateStr(props)} />
          <MarkerText {...props} />
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default FormFieldStatusMarker;
