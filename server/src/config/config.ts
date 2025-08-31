const config = {
    debug : process.env.APP_DEBUG === "true",
    env : process.env.NODE_ENV ?? "development",
    mongoUri : process.env.MONGO_URI ?? "",
    port : parseInt(process.env.PORT ?? "9000"),
}

export default config;