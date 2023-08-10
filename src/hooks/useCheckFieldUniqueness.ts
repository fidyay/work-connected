import { useEffect, useState } from "react";

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

interface FError {
  code: number;
  name: string;
  message: string;
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
  useEffect(() => {
    const controller = new AbortController();
    if (newValue === "") {
      setStatus("initial");
    } else {
      setStatus("pending");
      fetch(`/api/check-name-validity/${model}/${field}/${newValue}`, {
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((responseResult: ResponseResult) => {
          const { result } = responseResult;
          if (result) {
            setStatus("checked");
          } else {
            setStatus("rejected");
          }
        })
        .catch((e: FError) => {
          if (
            e.name !== "AbortError" ||
            e.code !== 20 ||
            e.message !== "The user aborted a request."
          ) {
            console.error(e);
          }
        });
    }
    return () => {
      controller.abort();
    };
  }, [field, model, newValue]);
  return {
    pending: status === "pending",
    checked: status === "checked",
    rejected: status === "rejected",
    initial: status === "initial",
  };
}

export default useCheckFieldUniqueness;
