import Layout from "./components/utils/Layout";
import PostHome from "./features/posts/PostHome";
import PostAdd from "./features/posts/PostAdd";
import PostSinglePage from "./features/posts/PostSinglePage";
import PostEdit from "./features/posts/PostEdit";
import { Routes, Route } from "react-router-dom";
import React from "react";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostHome />} />

          {/* Note: Grupping route posts */}
          <Route path="posts">
            <Route index element={<PostAdd />} />
            <Route path=":id" element={<PostSinglePage />} />
            <Route path=":id/edit" element={<PostEdit />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
