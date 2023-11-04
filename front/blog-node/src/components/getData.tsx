import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { BlogInterface } from "./get_data/get_data_types";

export function GetData() {
  const [count, setCount] = useState(0);

  const getDataFromServer = useQuery({
    queryKey: ["getData", count],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3300/blog/item/${count}`);
      const data = await response.json();
      console.log(count);
      return data as BlogInterface;
    },
  });

  if (getDataFromServer.isLoading || getDataFromServer.data === undefined)
    return <div>Loading...</div>;
  return (
    <div>
      <h2>a deadly hourglass {count}</h2>
      <hr />
      <h3>{getDataFromServer?.data?.data?.title ?? "no title"}</h3>
      <p>{getDataFromServer?.data?.data?.content ?? "no content"}</p>
      <div>{getDataFromServer?.data?.data?.id ?? "no ID"}</div>
      <hr />
      <button onClick={() => setCount(count + 1)}>upp</button>
      <button onClick={() => setCount(count - 1)}>down</button>
    </div>
  );
}
