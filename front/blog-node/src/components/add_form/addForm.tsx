import React from "react";
import { useForm } from "react-hook-form";

interface IAddForm {
  title: string;
  content: string;
}
export function AddForm() {
  const { register, handleSubmit } = useForm<IAddForm>();

  async function onSubmit(data: IAddForm) {
    const response = await fetch("http://localhost:3300/blog/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const serverData = await response.json();
    console.log({ data, response, serverData });
  }
  return (
    <div>
      <h2>Add Form Work</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="title" {...register("title")} />
        <input type="text" placeholder="content" {...register("content")} />
        <button type="submit">Create Form</button>
      </form>
    </div>
  );
}
