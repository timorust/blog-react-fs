import { useSignal } from "@preact/signals-react";
import React from "react";

export function SignalsIntroClass() {
  const count = useSignal(0);
  return (
    <main>
      <h1>Signals Intro Class</h1>
      <button
        onClick={() => {
          count.value--;
        }}
      >
        -
      </button>
      <p>{count.value}</p>
      <button
        onClick={() => {
          count.value++;
        }}
      >
        +
      </button>
    </main>
  );
}
