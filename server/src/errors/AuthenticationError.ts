import CustomError from "./customError.js";

class AuthenticationError extends CustomError<ErrorCode>{}
export default AuthenticationError;