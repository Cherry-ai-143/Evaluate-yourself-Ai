/**
 * Central API endpoint constants for the frontend.
 * Keep backend paths in one place to avoid magic strings throughout the app.
 */

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api/v1";

export const AUTH_LOGIN = "/auth/login";
export const AUTH_REGISTER = "/users";

export const USERS = "/users";
export const CURRENT_USER = "/users/me";

export const COURSES = "/courses";
export const LESSONS = "/lessons";
export const ASSESSMENTS = "/assessments";
export const AI = "/ai";
export const UPLOADS = "/uploads";
export const ANALYTICS = "/analytics";
