import { AxiosError } from "axios";
import { fetchLogin } from "@/services/auth/auth-api-client";
import { useMutation } from "@tanstack/react-query";
import type { ErrorResponse } from "@/types/api.type";
import useValidationErrors from "@/shared/hooks/useValidationErrors";
import toast from "react-hot-toast";
import { loginSchema } from "@/types/schemas.type";
import AuthForm from "../components/AuthForm";
import { forgotPasswordformControls } from "@/shared/constants";

const ForgotPassword = () => {
  const { showValidationError } = useValidationErrors();

  const mutation = useMutation({
    mutationFn: fetchLogin,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      showValidationError(error as AxiosError<ErrorResponse>);
    },
  });

  const onSubmit = (data: unknown) => {
    mutation.mutate(data);
  };
  return (
    <div>
      <AuthForm
        type="forgot"
        onSubmit={onSubmit}
        formControls={forgotPasswordformControls}
        formSchemas={loginSchema}
        isPending={mutation.isPending}
        isSuccess={mutation.isSuccess}
        formValues={{ email: "", password: "" }}
      />
    </div>
  );
};

export default ForgotPassword;
