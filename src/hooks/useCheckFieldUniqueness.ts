import { useEffect, useState, useRef } from "react";

export type checkingState = "pending" | "checked" | "rejected" | "initial";

interface FieldRequestStatus {
  pending: boolean;
  rejected: boolean;
  checked: boolean;
  initial: boolean;
}

interface ResponseResult {
  result: boolean;
}

export type ModelNames = "User" | "Organization" | "Role" | "Chat";

export interface NameQueryParams {
  newValue: string;
  model: ModelNames;
  field: string;
}

function useCheckFieldUniqueness(
  newValue: string,
  model: ModelNames,
  field: string
): FieldRequestStatus {
  const [status, setStatus] = useState<checkingState>("initial");
  const controller = useRef<AbortController>(new AbortController());
  useEffect(() => {
    controller.current.abort();
    if (newValue === "") {
      setStatus("initial");
    } else {
      setStatus("pending");
      fetch(`/api/check-name-validity/${model}/${field}/${newValue}`, {
        signal: controller.current.signal,
      })
        .then((res) => res.json())
        .then((responseResult: ResponseResult) => {
          if (responseResult.result) {
            setStatus("checked");
          } else {
            setStatus("rejected");
          }
        })
        .catch(console.error);
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      controller.current.abort();
    };
  }, [controller, field, model, newValue, setStatus, status]);
  return {
    pending: status === "pending",
    checked: status === "checked",
    rejected: status === "rejected",
    initial: status === "initial",
  };
}

export default useCheckFieldUniqueness;
