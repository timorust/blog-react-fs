import React from "react";
import { useParams } from "react-router-dom";

export function ProductId() {
  const params = useParams();

  return <h1>Product ID {JSON.stringify(params)}</h1>;
}
