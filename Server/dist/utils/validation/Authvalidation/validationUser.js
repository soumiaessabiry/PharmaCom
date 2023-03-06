"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidation = void 0;
const validateSchema_1 = require("./validateSchema");
const validator_1 = __importDefault(require("../../validator"));
const registerValidation = (req, res, next) => (0, validator_1.default)(validateSchema_1.valideSchema.dataRegister, req.body, next);
exports.registerValidation = registerValidation;
