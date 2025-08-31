class CustomError extends Error {
    statusCode : number;
    constructor(message : string, statusCode : number) {
        super(message);
        this.statusCode = statusCode;

        // This is important for making sure the prototype chain is correct
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
export function getErrorMessages (error : unknown) :string {
    if(error instanceof CustomError) {
        return error.message;
    }

    if(error && typeof error === "object" && "message" in error){
        return String(error.message)
    }

    if(typeof error === "string") {
        return error
    }
    return "Unknown error occurred!!!";
}