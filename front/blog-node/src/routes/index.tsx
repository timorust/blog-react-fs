import React from "react";

import { Route, Routes } from "react-router-dom";
import { HomePage } from "./home";
import { AboutPage } from "./about";
import { MainProducts } from "./products/main";
import { ProductId } from "./products/[id]";
import { LayoutStoryComponent } from "./story/layout";

export function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<LayoutStoryComponent />}>
        <Route path=":id" element={<ProductId />} />
        <Route index element={<MainProducts />} />
      </Route>
    </Routes>
  );
}
