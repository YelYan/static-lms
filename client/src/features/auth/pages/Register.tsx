import { fetchRegister } from "@/services/auth/auth-api-client";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import type { ErrorResponse } from "@/types/api.type";
import useValidationErrors from "@/shared/hooks/useValidationErrors";
import AuthForm from "../components/AuthForm";
import { registerSchema } from "@/types/schemas.type";
import { registerformControls } from "@/shared/constants";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const { showValidationError } = useValidationErrors();

  const mutation = useMutation({
    mutationFn: fetchRegister,
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/login");
    },
    onError: (error) => {
      showValidationError(error as AxiosError<ErrorResponse>);
    },
  });

  function onSubmit(data: unknown) {
    mutation.mutate(data);
  }
  return (
    <div>
      <h1>Register</h1>

      <AuthForm
        type="register"
        onSubmit={onSubmit}
        formControls={registerformControls}
        formSchemas={registerSchema}
        isPending={mutation.isPending}
        formValues={{ name: "", email: "", password: "" }}
      />
    </div>
  );
};

export default Register;
