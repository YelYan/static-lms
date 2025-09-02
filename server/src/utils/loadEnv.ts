import dotenv from 'dotenv'
import path from "path"

export function loadEnv () {
    const NODE_ENV = process.env.NODE_ENV ?? "development";
    dotenv.config({
        path : path.resolve(process.cwd(), `.env.${NODE_ENV}`)
    });
}
