import { publicProcedure, router } from "./trpc";
// import { createHTTPServer } from "@trpc/server/adapters/standalone";
export const appRouter = router({
  list: publicProcedure.query(async () => {
    return ["t", "i", "m", "o", "r"];
  }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
// console.log("trpc router");
// const server = createHTTPServer({
//   router: appRouter,
// });

// server.listen(3500);
