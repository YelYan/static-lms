import { AxiosError } from "axios";
import toast from "react-hot-toast";
import type { ErrorResponse } from "@/types/api.type";

// Type guard for AxiosError
export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return (error as AxiosError<T>)?.isAxiosError === true;
}

export function showValidationError(error: unknown) {
  if (!isAxiosError<ErrorResponse>(error)) {
    console.error("Non-Axios error:", error);
    toast.error("An unexpected error occurred.");
    return;
  }

  const validation = error.response?.data;
  if (!validation) {
    toast.error("No response from server.");
    return;
  }

  const { code, message, errors } = validation.error;

  if (code === "ERR_AUTH") {
    toast.error(message);
    return;
  }

  if (code === "ERR_VALIDATION" && errors?.length) {
    toast.error(errors[0].message);
    return;
  }

  toast.error(message || "An unknown error occurred.");
}
