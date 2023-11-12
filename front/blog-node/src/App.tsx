import React from "react";
import "./App.css";
// import { GetData } from "./components/getData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { AddForm } from "./components/add_form/addForm";
// import { GetDataAndAddForm } from "./components/get_data_and_add_form";
// import { BasicSelect } from "./components/material_ui/select";
// import { BasicTable } from "./components/material_ui/table";
import { BrowserRouter, Link } from "react-router-dom";
import { RouterComponent } from "./routes";

const queryClient = new QueryClient();
function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <h1>I Stand With Israel</h1>
        {/* <BasicSelect />
        <BasicTable />
        <GetDataAndAddForm /> */}
        {/* <GetData />
      <AddForm /> */}
        <div>
          <Link to={"/"}>Home</Link>
          <hr />
          <Link to={"/about"}>About</Link>
        </div>
        <RouterComponent />
        <br />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
