import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import LoadingSpinner from "@/shared/common/loading/LoadingSpinner";
import { registerformControls } from "@/shared/constants";
import useRenderFormErrors from "@/shared/hooks/useRenderFormErrors";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, registerSchema } from "@/types/schemas.type";
import { useEffect } from "react";

type AuthType = "login" | "register" | "forgot" | "reset";

type AuthFormProps = {
  isSuccess?: boolean;
  type?: AuthType;
  onSubmit: (data: unknown) => void;
  formControls: typeof registerformControls;
  formValues: Record<string, unknown>;
  formSchemas: typeof loginSchema | typeof registerSchema;
  isPending?: boolean;
};

const AuthForm = ({
  type,
  isSuccess,
  onSubmit,
  formControls,
  formValues,
  formSchemas,
  isPending = false,
}: AuthFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchemas),
    defaultValues: formValues,
  });

  // Call the hook at the top level and get the error rendering function
  const { renderFormErrors } = useRenderFormErrors();
  const { title, description, actionText, actionLink } = getAuthFormText(
    type as AuthType
  );

  // 🔹 Centralized function for text based on auth type
  function getAuthFormText(type: AuthType) {
    switch (type) {
      case "login":
        return {
          title: "Login to your account",
          description: "Enter your email below to login to your account",
          actionText: "Sign Up",
          actionLink: "/register",
        };
      case "register":
        return {
          title: "Create your account",
          description: "Enter your details below to register a new account",
          actionText: "Login",
          actionLink: "/login",
        };
      case "forgot":
        return {
          title: "Forgot Password",
          description:
            "Enter your email address below, and we'll send you reset instructions",
          actionText: "Back to Login",
          actionLink: "/login",
        };
      case "reset":
        return {
          title: "Reset Your Password",
          description: "Enter a new password for your account",
          actionText: "Back to Login",
          actionLink: "/login",
        };
      default:
        return {
          title: "",
          description: "",
          actionText: "",
          actionLink: "/",
        };
    }
  }

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, reset]);

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {actionText && actionLink && (
          <CardAction>
            <Link to={actionLink} className="cursor-pointer">
              <Button variant="link">{actionText}</Button>
            </Link>
          </CardAction>
        )}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-5">
            {formControls.map((formControl) => {
              return (
                <div className="flex flex-col gap-2" key={formControl.name}>
                  <Label htmlFor={formControl.name}>{formControl.label}</Label>
                  <Controller
                    control={control}
                    name={formControl.name}
                    render={({ field }) => (
                      <div className="relative">
                        <Input
                          {...field}
                          id={formControl.name}
                          name={formControl.name}
                          type={formControl.type}
                          placeholder={formControl.placeholder}
                          value={
                            typeof field.value === "string" ||
                            typeof field.value === "number" ||
                            Array.isArray(field.value) ||
                            typeof field.value === "undefined"
                              ? field.value ?? ""
                              : ""
                          }
                          onChange={(e) => field.onChange(e.target.value)}
                        />
                        {errors[formControl.name] &&
                          renderFormErrors(
                            errors[formControl.name]?.message as string
                          )}
                      </div>
                    )}
                  />
                </div>
              );
            })}
          </div>

          {type === "login" && (
            <div className="text-sm text-right">
              <Link to="/forgot-password" className="text-blue-500 underline">
                Forgot password?
              </Link>
            </div>
          )}
          <Button
            className="bg-blue-300 cursor-pointer relative w-full"
            type="submit"
            disabled={isSubmitting || isPending}
          >
            {isSubmitting || isPending ? <LoadingSpinner /> : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
