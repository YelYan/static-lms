import { forgotpasswordSchema } from "@/types/schemas.type";
import AuthForm from "../components/AuthForm";
import { forgotPasswordformControls } from "@/shared/constants";
import { useForgotPassword } from "@/services/auth/auth-api-client";

const ForgotPassword = () => {
  const forgotPasswordMutation = useForgotPassword();

  const onSubmit = (data: { email: string } | unknown) => {
    forgotPasswordMutation.mutate(data);
  };
  return (
    <div>
      <AuthForm
        type="forgot"
        onSubmit={onSubmit}
        formControls={forgotPasswordformControls}
        formSchemas={forgotpasswordSchema}
        isPending={forgotPasswordMutation.isPending}
        isSuccess={forgotPasswordMutation.isSuccess}
        formValues={{ email: "" }}
      />
    </div>
  );
};

export default ForgotPassword;
