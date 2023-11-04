import { Request, Response } from "express";
import { prisma } from "../connection";

export async function CreateRouterHandler(req: Request, res: Response) {
  const newBlog = await prisma.blog.create({
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
}
