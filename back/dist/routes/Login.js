"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
class Login {
    constructor() {
        this.fastify = (0, fastify_1.default)({ logger: true });
    }
}
exports.default = Login;
