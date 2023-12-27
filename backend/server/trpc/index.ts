import { prisma } from "../connection";
import { publicProcedure, router } from "./trpc";
// import { createHTTPServer } from "@trpc/server/adapters/standalone";
export const appRouter = router({
  list: publicProcedure.query(async () => {
    return ["t", "i", "m", "o", "r"];
  }),
  blogCreate: publicProcedure.mutation(async () => {
    const newBlog = await prisma.blog.create({
      data: {
        title: "req.body.title",
        content: "req.body.content",
      },
    });
    return newBlog;
  }),
});

export type AppRouter = typeof appRouter;
