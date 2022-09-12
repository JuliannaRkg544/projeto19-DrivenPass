var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as authRepository from "../repository/authRepository.js";
dotenv.config();
function signupUser(email, password) {
    return __awaiter(this, void 0, void 0, function () {
        var emails, encryptedPassword, userdata;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, authRepository.findUserByEmail(email)];
                case 1:
                    emails = _a.sent();
                    if (emails.length > 0) {
                        console.log(emails);
                        throw { type: "conflict", message: "email already in use" };
                    }
                    return [4 /*yield*/, bcrypt.hash(password, 10)];
                case 2:
                    encryptedPassword = _a.sent();
                    userdata = {
                        email: email,
                        password: encryptedPassword
                    };
                    return [4 /*yield*/, authRepository.insertUser(userdata)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function signinUser(email, password) {
    return __awaiter(this, void 0, void 0, function () {
        var secretkey, user, token, userLoged;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    secretkey = process.env.JWT_SECRET;
                    return [4 /*yield*/, authRepository.findUserByEmail(email)];
                case 1:
                    user = _a.sent();
                    if (!email || !password) {
                        throw { type: "unprocessable_entity", message: "invalid information" };
                    }
                    if (user.length === 0) {
                        throw { type: "not_found", message: "user not found" };
                    }
                    return [4 /*yield*/, bcrypt.compare(password, user[0].password)];
                case 2:
                    if (!(_a.sent())) {
                        throw { type: "unauthorized", message: "invalid password" };
                    }
                    token = jwt.sign(String(user[0].id), String(secretkey));
                    userLoged = { token: token, email: email };
                    return [2 /*return*/, userLoged];
            }
        });
    });
}
export { signinUser, signupUser };
