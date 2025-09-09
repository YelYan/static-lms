import { loginSchema } from "@/types/schemas.type";
import AuthForm from "../components/AuthForm";
import { loginformControls } from "@/shared/constants";
import { useLogin } from "@/services/auth/auth-api-client";

const Login = () => {
  const loginMutation = useLogin();

  const onSubmit = (data: unknown) => {
    loginMutation.mutate(data);
  };

  return (
    <div>
      <AuthForm
        type="login"
        onSubmit={onSubmit}
        formControls={loginformControls}
        formSchemas={loginSchema}
        isPending={loginMutation.isPending}
        formValues={{ email: "", password: "" }}
      />
    </div>
  );
};

export default Login;
