"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.valideSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.valideSchema = {
    dataRegister: joi_1.default.object({
        username: joi_1.default.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        email: joi_1.default.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: joi_1.default.string().min(4).max(7),
        role: joi_1.default.string()
    })
};
