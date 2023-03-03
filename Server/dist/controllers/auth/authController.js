"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Forgetpassword = exports.Resitpassword = exports.Login = exports.Register = void 0;
const Register = (req, res, nex) => {
    res.json({ message: 'hello register' });
};
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
