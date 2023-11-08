import React from "react";
import "./App.css";
// import { GetData } from "./components/getData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { AddForm } from "./components/add_form/addForm";
import { GetDataAndAddForm } from "./components/get_data_and_add_form";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>I Stand With Israel</h1>
      <GetDataAndAddForm />
      {/* <GetData />
      <AddForm /> */}
    </QueryClientProvider>
  );
}

export default App;
