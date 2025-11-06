import { loginformControls, registerformControls, forgotPasswordformControls, resetPasswordFormControls } from "@/shared/constants";
import { buildSchemas } from "@/shared/hooks/buildSchemas";

export type AuthType = "login" | "signup" | "forgot" | "reset";

export type FormControlsT = Record<"name" | "label" | "componentType" , string> & { 
    type? : string
    placeholder?: string;
    validation?: {required : boolean , maxLength? : number , minLength? : number}
};

export const loginSchema = buildSchemas(loginformControls);
export const registerSchema = buildSchemas(registerformControls);
export const forgotpasswordSchema = buildSchemas(forgotPasswordformControls)
export const resetPasswordSchema = buildSchemas(resetPasswordFormControls)

export type AuthFormPropsT = {
  isSuccess?: boolean;
  type?: AuthType;
  onSubmit: (data: unknown) => void;
  formControls: FormControlsT[] ;
  formValues: Record<string, unknown>;
  formSchemas: typeof loginSchema | typeof registerSchema | typeof forgotpasswordSchema | typeof resetPasswordSchema;
  isPending?: boolean;
};

