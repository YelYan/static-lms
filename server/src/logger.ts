/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import config from "#config/config.js"
import winston from "winston";
import DailyRotateFile from 'winston-daily-rotate-file';

const logLevels = {
    error : 0, //highest priority
    warn : 1,
    info : 2,
    http : 3,
    debug : 4,
}

const dailyRotateCombinedTransport : DailyRotateFile = new DailyRotateFile({
    filename: "logs/combined-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    level: "debug",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
})

const dailyRotateErrorTransport : DailyRotateFile = new DailyRotateFile({
    filename: "logs/error-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    level: "error",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d"
});


const logger = winston.createLogger({
    levels : logLevels,
    level : config.level,
    format : winston.format.combine(
        winston.format.timestamp({ format : "YYYY-MM-DD HH:mm:ss:ms A" }),
        winston.format.printf(({ timestamp, level, message, logMetadata, stack }) => {
// eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-base-to-string
            return `${timestamp}: [${level}]: ${message}: ${stack ?? ""}: ${logMetadata ?? ""}`;
        })
    ),
    transports : [
        new winston.transports.Console(),
        dailyRotateCombinedTransport,
        dailyRotateErrorTransport
    ]
})

export default logger;