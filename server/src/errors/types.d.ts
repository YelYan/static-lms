type ErrorCode ="ERR_AUTH" | "ERR_NF" | "ERR_VALIDATION" 

interface ValidationError  {
    error : {
        code : ErrorCode;
        errors : {message : string}[]
        message : string;
    }
}