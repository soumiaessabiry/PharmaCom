"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHanlder_1 = require("./middleware/errorHanlder");
const express_1 = __importStar(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const authRoute_1 = __importDefault(require("../src/routes/authRoute"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = require("./config/db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, express_1.urlencoded)({ extended: true }));
app.use("/pharmacom/", authRoute_1.default);
app.use(() => {
    throw (0, http_errors_1.default)(404, "note found page");
});
app.use(errorHanlder_1.errorHandler);
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
