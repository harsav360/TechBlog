import React from "react";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blogs from "./components/Blogs";
export default function App() {
  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
