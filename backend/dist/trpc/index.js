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
exports.appRouter = void 0;
const trpc_1 = require("./trpc");
// import { createHTTPServer } from "@trpc/server/adapters/standalone";
exports.appRouter = (0, trpc_1.router)({
    list: trpc_1.publicProcedure.query(() => __awaiter(void 0, void 0, void 0, function* () {
        return ["t", "i", "m", "o", "r"];
    })),
});
// console.log("trpc router");
// const server = createHTTPServer({
//   router: appRouter,
// });
// server.listen(3500);
