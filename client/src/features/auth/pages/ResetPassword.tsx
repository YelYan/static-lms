import { AxiosError } from "axios";
import { fetchLogin } from "@/services/auth/auth-api-client";
import { useMutation } from "@tanstack/react-query";
import type { ErrorResponse } from "@/types/api.type";
import useValidationErrors from "@/shared/hooks/useValidationErrors";
import toast from "react-hot-toast";
import { resetPasswordSchema } from "@/types/schemas.type";
import AuthForm from "../components/AuthForm";
import { resetPasswordFormControls } from "@/shared/constants";

const ResetPassword = () => {
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
        type="reset"
        onSubmit={onSubmit}
        formControls={resetPasswordFormControls}
        formSchemas={resetPasswordSchema}
        isPending={mutation.isPending}
        isSuccess={mutation.isSuccess}
        formValues={{ confirmPassword: "", password: "" }}
      />
    </div>
  );
};

export default ResetPassword;
