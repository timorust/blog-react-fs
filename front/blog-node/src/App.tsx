import React from "react";
import "./App.css";
import { GetData } from "./components/getData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AddForm } from "./components/add_form/addForm";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>I Stand With Israel</h1>
      <GetData />
      <AddForm />
    </QueryClientProvider>
  );
}

export default App;
