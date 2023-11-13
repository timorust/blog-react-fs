import { computed, useSignal } from "@preact/signals-react";
import React from "react";

export function SignalsIntroClass() {
  const count = useSignal(0);
  const doubleNumber = computed(() => count.value * 2);
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
      <hr />
      <p>doubleNumber {doubleNumber.value}</p>
    </main>
  );
}
