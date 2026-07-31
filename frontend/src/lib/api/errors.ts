import axios from "axios";

/**
 * Normalize API errors into a user-friendly message.
 */
export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data as
      | { detail?: unknown }
      | undefined;

    if (typeof responseData?.detail === "string") {
      return responseData.detail;
    }

    if (Array.isArray(responseData?.detail)) {
      const firstError = responseData.detail[0];

      if (
        firstError &&
        typeof firstError === "object" &&
        "msg" in firstError &&
        typeof (firstError as { msg?: string }).msg === "string"
      ) {
        return (firstError as { msg: string }).msg;
      }
    }

    if (error.response?.status === 401) {
      return "Incorrect email or password.";
    }

    if (error.response?.status && error.response.status >= 500) {
      return "The server is currently unavailable. Please try again shortly.";
    }

    if (typeof error.message === "string" && error.message.trim()) {
      return error.message;
    }
  }

  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
}
