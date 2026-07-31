import { apiClient } from "./axios";
import { CURRENT_USER } from "./endpoints";
import type { CurrentUser } from "@/types/auth";

/**
 * Fetch the currently authenticated user profile.
 */
export async function getCurrentUser(): Promise<CurrentUser> {
  const response = await apiClient.get<CurrentUser>(CURRENT_USER);

  return response.data;
}
