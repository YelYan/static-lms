import AuthForm from "../components/AuthForm";
import { registerSchema } from "@/types/schemas.type";
import { registerformControls } from "@/shared/constants";
import { useRegister } from "@/services/auth/auth-api-client";

const Register = () => {
  const registerMutation = useRegister();

  function onSubmit(data: unknown) {
    registerMutation.mutate(data);
  }
  return (
    <div>
      <h1>Register</h1>

      <AuthForm
        type="register"
        onSubmit={onSubmit}
        formControls={registerformControls}
        formSchemas={registerSchema}
        isPending={registerMutation.isPending}
        formValues={{ name: "", email: "", password: "" }}
      />
    </div>
  );
};

export default Register;
