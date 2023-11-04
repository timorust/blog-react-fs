import { Router } from "express";
import { ListRouterHandler } from "./list";
import { ItemIdRouterHandler } from "./itemId";
import { CreateRouterHandler } from "./create";

export const blogRouter = Router();

blogRouter.get("/list", ListRouterHandler);

blogRouter.get("/item/:id", ItemIdRouterHandler);

blogRouter.post("/add", CreateRouterHandler);
