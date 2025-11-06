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
    <div className="py-4">
      <AuthForm
        type="signup"
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
