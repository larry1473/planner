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
exports.loginRoutePlugin = void 0;
const LoginService_1 = __importDefault(require("../services/LoginService"));
class LoginRoute {
    constructor(fastify) {
        this.fastify = fastify;
        this.loginService = new LoginService_1.default(this.fastify);
    }
    routes() {
        this.fastify.post('/login', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const msg = yield this.loginService.login(body);
            console.log("Route messages ", msg);
            res.status(200).send(msg);
        }));
    }
}
exports.default = LoginRoute;
const loginRoutePlugin = (fastify, options, done) => __awaiter(void 0, void 0, void 0, function* () {
    const loginRoutes = new LoginRoute(fastify);
    loginRoutes.routes();
    done();
});
exports.loginRoutePlugin = loginRoutePlugin;
