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
exports.ItemIdRouterHandler = void 0;
const connection_1 = require("../connection");
function ItemIdRouterHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (id === undefined || Number.isNaN(parseInt(id)))
            return res.send({ message: "id is not defined" }).status(408);
        const data = yield connection_1.prisma.blog.findUnique({
            where: {
                id: Number(id),
            },
        });
        res.send({
            message: "ItemIdRouterHandler work!",
            params: req.params,
            data,
            query: req.query,
        });
    });
}
exports.ItemIdRouterHandler = ItemIdRouterHandler;
