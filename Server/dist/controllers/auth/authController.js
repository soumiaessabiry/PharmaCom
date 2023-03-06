"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Forgetpassword = exports.Resitpassword = exports.Login = exports.Register = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const usersModel_1 = __importDefault(require("../../models/usersModel"));
const Register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    try {
        const checkUser = yield usersModel_1.default.findOne({ email });
        if (checkUser)
            return next((0, http_errors_1.default)(406, "email is areadd exist"));
        const creatUser = new usersModel_1.default({
            username, email, password
        });
        yield creatUser.save();
        res.json({ creatUser });
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.Register = Register;
const Login = (req, res, nex) => {
    res.json({ message: 'hello login' });
};
exports.Login = Login;
const Resitpassword = (req, res, nex) => {
    res.json({ message: 'hello resit' });
};
exports.Resitpassword = Resitpassword;
const Forgetpassword = (req, res, nex) => {
    res.json({ message: 'hello forget' });
};
exports.Forgetpassword = Forgetpassword;
