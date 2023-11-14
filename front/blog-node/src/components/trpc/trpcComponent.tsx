import { useQuery } from "@tanstack/react-query";
import React from "react";
import { trpcClient } from "../../trpc";

export function TrpcComponent() {
  const trpcResponse = useQuery({
    queryKey: ["trpcComponent"],
    queryFn: () => trpcClient.list.query(),
  });
  if (trpcResponse.isLoading || trpcResponse.data === undefined)
    return <div>Loading or undefined</div>;
  return (
    <div>
      TRPC Work!
      {trpcResponse.data.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}
