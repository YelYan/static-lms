import toast from "react-hot-toast";;
import { AxiosError } from "axios";
import type { ErrorResponse } from "@/types/api.type";

const useValidationErrors = () => {
    const showValidationError = (error : AxiosError<ErrorResponse>) => {
        const validationErrors = error as AxiosError<ErrorResponse>;

        // if server did not respond
        if (!validationErrors.response) {
          toast.error("An unknown error occurred:");
          console.error("An unknown error occurred:", error);
          return;
        }
        
        // auth error
        if(validationErrors?.response?.data.error.code === "ERR_AUTH"){
            toast.error(validationErrors.response.data.error.message)
        } 

        // validation error
        if(validationErrors?.response?.data.error.code === "ERR_VALIDATION" ){
            const firstErrorMessage = validationErrors.response.data.error.errors[0].message;
            toast.error(firstErrorMessage);
        }
    }


    return {showValidationError};
}

export default useValidationErrors;