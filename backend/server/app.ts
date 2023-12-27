import express from "express";
import cors from "cors";
import { blogRouter } from "./blogRouter";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc";

const app = express();
app.use(express.json()); // add this so the data is as json
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200, //
  })
);
app.use("/blog", blogRouter);

// app.get("/", (request, response) => {
//   response.send({
//     x: "hey ma",
//   });
// });

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    // createContext,
  })
);

app.listen(3300, () => {
  console.log("I am listening!");
});
