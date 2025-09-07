import { AxiosError } from "axios";
import { fetchLogin } from "@/services/auth/auth-api-client";
import { useMutation } from "@tanstack/react-query";
import type { ErrorResponse } from "@/types/api.type";
import useValidationErrors from "@/shared/hooks/useValidationErrors";
import toast from "react-hot-toast";
import { loginSchema } from "@/types/schemas.type";
import AuthForm from "../components/AuthForm";
import { loginformControls } from "@/shared/constants";

const Login = () => {
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
        type="login"
        onSubmit={onSubmit}
        formControls={loginformControls}
        formSchemas={loginSchema}
        isPending={mutation.isPending}
        formValues={{ email: "", password: "" }}
      />
    </div>
  );
};

export default Login;
