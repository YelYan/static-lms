import z from "zod";
import { loginformControls, registerformControls } from "@/shared/constants";
import { buildSchemas } from "@/shared/hooks/buildSchemas"; 

export const loginSchema = buildSchemas(loginformControls);
export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerSchema = buildSchemas(registerformControls);
export type RegisterFormValues = z.infer<typeof registerSchema>;
