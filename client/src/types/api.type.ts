export interface ErrorResponse {
  error: {
    code: string;
    message: string;
    errors: { message: string }[];
  };
}