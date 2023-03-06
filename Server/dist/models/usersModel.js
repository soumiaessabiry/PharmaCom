"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: "Client"
    },
    confirme: {
        type: Boolean,
        default: false
    }
});
exports.default = (0, mongoose_1.model)("user", userSchema);
