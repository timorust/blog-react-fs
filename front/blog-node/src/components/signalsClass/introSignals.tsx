import React, { useState } from "react";
import { todoArr } from "./stateTodo";

export function IntroSignals() {
  const [todoText, setTodoText] = useState("");
  return (
    <div>
      <div>
        {todoText}
        <br />
        <input type="text" onChange={(e) => setTodoText(e.target.value)} />
        <button
          onClick={() => {
            todoArr.value = [...todoArr.value, { text: todoText }];
          }}
        >
          add todo
        </button>
      </div>
      signals
      {todoArr.value.map((todo, index) => (
        <p key={index}>{todo.text}</p>
      ))}
    </div>
  );
}
