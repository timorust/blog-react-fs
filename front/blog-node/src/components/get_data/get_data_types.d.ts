import { z } from "zod";
export interface IBlog {
  message: "Router Message";
  params: {
    id: string;
  };
  data: {
    id: number;
    title: string;
    content: string;
  };
  query: Record<string, unknown>; // This assumes that the 'query' property can have any properties
}
export const IBlogZod = z.object({
  message: z.string(),
  params: z.object({
    id: z.string(),
  }),
  data: z.object({
    id: z.number(),
    title: z.string(),
    content: z.string(),
  }),
  query: z.record(z.unknown()),
});

export type IBlogZodType = z.infer<typeof IBlogZod>;

export interface IBlogContent {
  id: number;
  title: string;
  content: string;
}
