"use client";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { type checkingState } from "@/hooks/useCheckFieldUniqueness";
import { useRef, useEffect, type Ref, RefObject } from "react";
import Cross from "./svg/Cross";
import Checkmark from "./svg/Checkmark";
import Info from "./svg/Info";
import Loader from "./Loader";
import styles from "@/styles/field_status_marker.module.scss";
import useWindowSize from "@/hooks/useWindowSize";

interface FormFieldStatusMarkerProps {
  checked: boolean;
  pending: boolean;
  rejected: boolean;
  initial: boolean;
  text: string;
  fieldName: string;
  inputRef: RefObject<HTMLInputElement>;
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
  const { width: windowWidth, height: windowHeight } = useWindowSize();
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
  function setPos() {
    const { inputRef } = props;
    const node = nodeRef.current;
    const input = inputRef.current;
    if (node && input) {
      const rect = input.getBoundingClientRect();
      const inputRect = {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
      };
      const { offsetWidth: nodeWidth, offsetHeight: nodeHeight } = node;
      const inputCenter = {
        x: inputRect.left + inputRect.width / 2,
        y: inputRect.top + inputRect.height / 2,
      };
      const gap = 10;
      if (inputRect.left + inputRect.width + nodeWidth + gap >= windowWidth) {
        node.style.left = `${inputCenter.x}px`;
        node.style.top = `${inputRect.top - gap - nodeHeight / 2}px`;
      } else {
        node.style.left = `${
          inputRect.left + inputRect.width + gap + nodeWidth / 2
        }px`;
        node.style.top = `${inputCenter.y}px`;
      }
    }
  }
  const curStatus = getFieldStateStr(props);
  useEffect(setPos);
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={curStatus}
        nodeRef={nodeRef}
        addEndListener={(done) => {
          nodeRef.current?.addEventListener("transitionend", done, false);
          nodeRef.current?.addEventListener("transitionstart", setPos, false);
        }}
        classNames={{
          enterActive: styles.wrapper_enter_active,
          enter: styles.wrapper_enter,
          exitActive: styles.wrapper_exit_active,
          exit: styles.wrapper_exit,
        }}
      >
        <div ref={nodeRef} className={divClassName}>
          <Marker status={curStatus} />
          <MarkerText {...props} />
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default FormFieldStatusMarker;
