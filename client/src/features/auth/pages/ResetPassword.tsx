import { useLocation } from "react-router";
// import { resetPasswordSchema } from "@/types/schemas.type";
import AuthForm from "../components/AuthForm";
import { resetPasswordFormControls } from "@/shared/constants";
import { useResetPassword } from "@/services/auth/auth-api-client";

type ResetPasswordFormDataT = Record<"confirmPassword" | "password", string>;

const ResetPassword = () => {
  const location = useLocation();
  const resetpasswordMutation = useResetPassword();
  const pathSegments = location.pathname.split("/"); // split the URL by "/"
  const resetToken = pathSegments[pathSegments.length - 1]; // last segment

  const onSubmit = (data: ResetPasswordFormDataT | unknown) => {
    const formData = data as ResetPasswordFormDataT;
    resetpasswordMutation.mutate({
      resetToken,
      password: formData.password,
    });
  };
  return (
    <div className="py-4">
      <AuthForm
        type="reset"
        onSubmit={onSubmit}
        formControls={resetPasswordFormControls}
        // formSchemas={resetPasswordSchema}
        isPending={resetpasswordMutation.isPending}
        isSuccess={resetpasswordMutation.isSuccess}
        formValues={{ confirmPassword: "", password: "" }}
      />
    </div>
  );
};

export default ResetPassword;
