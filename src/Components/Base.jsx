import React from "react";
import Bodycard from "./Bodycard";
import Navbar from "./Navbar";

export default function Base() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Bodycard></Bodycard>
    </div>
  );
}
