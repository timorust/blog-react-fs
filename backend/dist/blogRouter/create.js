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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRouterHandler = void 0;
const connection_1 = require("../connection");
function CreateRouterHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newBlog = yield connection_1.prisma.blog.create({
            data: {
                title: req.body.title,
                content: req.body.content,
            },
        });
        console.log("newBlog", newBlog);
        res.send({
            message: "Create Router Handler",
            body: req.body,
            newBlog,
        });
    });
}
exports.CreateRouterHandler = CreateRouterHandler;
