import { Button } from "@/components/ui/button";
import { fetchLogout } from "@/services/auth/auth-api-client";
import { useMutation } from "@tanstack/react-query";
import useValidationErrors from "@/shared/hooks/useValidationErrors";
import { AxiosError } from "axios";
import type { ErrorResponse } from "@/types/api.type";
import toast from "react-hot-toast";

const Header = () => {
  const { showValidationError } = useValidationErrors();
  const mutation = useMutation({
    mutationFn: fetchLogout,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      showValidationError(error as AxiosError<ErrorResponse>);
    },
  });
  return (
    <div>
      <Button
        className="bg-red-500 text-white cursor-pointer"
        onClick={() => mutation.mutate()}
      >
        Log Out
      </Button>
    </div>
  );
};

export default Header;
