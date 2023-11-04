"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const blogRouter_1 = require("./blogRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json()); // add this so the data is as json
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200, //
}));
app.use("/blog", blogRouter_1.blogRouter);
app.get("/", (request, response) => {
    response.send({
        x: "hey ma",
    });
});
app.listen(3300, () => {
    console.log("I am listening!");
});
