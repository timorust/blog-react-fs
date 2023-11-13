import { signal } from "@preact/signals-react";
import { ITodo } from "./todoTypeSignal";

export const todoArr = signal<ITodo[]>([
  { text: "x" },
  { text: "y" },
  { text: "z" },
]);
