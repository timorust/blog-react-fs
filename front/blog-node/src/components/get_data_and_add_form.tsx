import React, { useState } from "react";

import { useMutation, useQuery } from "@tanstack/react-query";
import { IBlog, IBlogContent, IBlogZod } from "./get_data/get_data_types";
import { useForm } from "react-hook-form";

interface IAddForm {
  title: string;
  content: string;
}
export function GetDataAndAddForm() {
  const [count, setCount] = useState(0);
  const getDataFromServer = useQuery({
    queryKey: ["getData", count],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3300/blog/item/${count}`);
      const data = await response.json();
      console.log(count);
      const blogZod = IBlogZod.safeParse(data);
      if (blogZod.success) return blogZod.data;
      return data as IBlog;
    },
  });

  const { register, handleSubmit } = useForm<IAddForm>();
  const blogAddMutation = useMutation({
    mutationFn: async (data: IAddForm) => {
      const response = await fetch("http://localhost:3300/blog/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return (await response.json()) as IBlogContent;
    },
    onSuccess(data, variables, context) {
      console.log({ data, variables, context });
      if (data.id === count) getDataFromServer.refetch();
      setCount(data.id);
      // getDataFromServer.refetch();
    },
  });

  async function onSubmit(data: IAddForm) {
    blogAddMutation.mutate(data);
  }

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
      <div>
        <h2>Add Form Work</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="title" {...register("title")} />
          <input type="text" placeholder="content" {...register("content")} />
          <button type="submit">Create Form</button>
        </form>
      </div>
      {blogAddMutation.isPending ? "pending" : null}
    </div>
  );
}
