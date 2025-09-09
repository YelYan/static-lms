import "express";
import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      auth?: {
        payload: JwtPayload & {email : string ; userId : string};
        token: string;
      };  
      cookies: Record<string, string> & {
        auth_token?: string;
      };
    }
  }
}
