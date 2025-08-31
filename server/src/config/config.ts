const config = {
    env : process.env.NODE_ENV ?? "development",
    mongoUri : process.env.MONGO_URI ?? "",
    port : process.env.PORT ?? "9000",
}

export default config;