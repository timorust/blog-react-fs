import React from "react";
import { useParams } from "react-router-dom";
import { z } from "zod";

export function ProductId() {
  const params = useParams();
  const checkIsNumberZod = z.string().refine((value) => {
    return !isNaN(Number(value));
  });

  const res = checkIsNumberZod.safeParse(params.id);
  if (!res.success) return <h1>error params {String(res.error)}</h1>;
  const id = parseInt(res.data);

  return <h1>Product ID {id}</h1>;
}
