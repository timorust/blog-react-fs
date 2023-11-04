import { Request, Response } from "express";
import { prisma } from "../connection";
export async function ItemIdRouterHandler(req: Request, res: Response) {
  const { id } = req.params;
  if (id === undefined || Number.isNaN(parseInt(id)))
    return res.send({ message: "id is not defined" }).status(408);
  const data = await prisma.blog.findUnique({
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
}
