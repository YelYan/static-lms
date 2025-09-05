import "express";
import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      auth?: {
        payload: JwtPayload;
        token: string;
      };
      cookies: Record<string, string> & {
        auth_token?: string;
      };
    }
  }
}
