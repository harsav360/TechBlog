import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blogs from "./components/Blogs";
import { AppContext } from "./context/AppContext";
import "./App.css";
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
