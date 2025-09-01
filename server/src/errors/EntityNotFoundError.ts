import CustomError from "./customError.js"

class EntityNotFoundError extends CustomError<ErrorCode> {}

export default EntityNotFoundError;