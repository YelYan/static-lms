import { loadEnv } from '#utils/loadEnv.js';
loadEnv();

const config = {
    debug : process.env.APP_DEBUG === "true",
    env : process.env.NODE_ENV ?? "development",
    mongoUri : process.env.MONGO_URI ?? "",
    port : parseInt(process.env.PORT ?? "9000"),
    level : process.env.LOG_LEVEL ?? "info",
    appSecret: process.env.APP_SECRET ?? "",
    FRONTEND_URL : process.env.FRONTEND_URL ?? "http://localhost:5173",
}

// allow the frontend to make requests to your API
// export const corsOptions :CorsOptionsT = {
//     origin : process.env.FRONTEND_URL ?? "http://localhost:5173",
//     credentials : true, // to allow your API to set cookies on the browser
// }

export default  config ;