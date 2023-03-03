"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const authRoute_1 = __importDefault(require("../src/routes/authRoute"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = require("./config/db");
const app = (0, express_1.default)();
app.use("/pharmacom/", authRoute_1.default);
app.use(() => {
    throw (0, http_errors_1.default)(404, "note found page");
});
const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res
        .status(err.statusCode || 500)
        .json({ message: err.message || "An unkown error" });
};
app.use(errorHandler);
mongoose_1.default
    .connect(db_1.URL_DB)
    .then(() => {
    console.log("Success to Connected with database ");
    app.listen(db_1.PORT, () => {
        console.log(`Listening On PORT ${db_1.PORT}`);
    });
})
    .catch(() => {
    throw (0, http_errors_1.default)(501, "Unable to connect database");
});
