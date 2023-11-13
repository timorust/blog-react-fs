import { Outlet } from "react-router-dom";
import React from "react";
export function LayoutStoryComponent() {
  return (
    <div>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        delectus, officiis sit ipsam cupiditate tempore!
      </h3>
      <Outlet />
      <h1>Layout Story!</h1>
    </div>
  );
}
