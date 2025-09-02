import { loadEnv } from '#utils/loadEnv.js';
loadEnv();

const config = {
    debug : process.env.APP_DEBUG === "true",
    env : process.env.NODE_ENV ?? "development",
    mongoUri : process.env.MONGO_URI ?? "",
    port : parseInt(process.env.PORT ?? "9000"),
    level : process.env.LOG_LEVEL ?? "info",
    appSecret: process.env.APP_SECRET ?? "",
}

export default config;