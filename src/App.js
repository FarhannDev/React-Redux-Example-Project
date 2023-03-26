import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/utils/Loading";
import {
  LazyLayout,
  LazyPageNotFound,
  LazyHomepage,
  LazyPostPage,
  LazyPostSinglePage,
  LazyPostAdd,
  LazyPostEdit,
  LazyPostAuthor,
  LazyUserPage,
} from "./utils/loaders";

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading title="Sedang memuat..." />}>
        <Routes>
          <Route path="/" element={<LazyLayout />}>
            <Route index element={<LazyHomepage />} />

            {/* Note:Posts Route */}
            <Route exact path="/posts" element={<LazyPostPage />} />
            <Route exact path="/posts/create" element={<LazyPostAdd />} />
            <Route exact path="/posts/:id" element={<LazyPostSinglePage />} />
            <Route exact path="/posts/:id/edit" element={<LazyPostEdit />} />
            <Route
              exact
              path="/posts/author/:userId"
              element={<LazyPostAuthor />}
            />

            {/* Note:Users Route */}
            <Route exact path="/users" element={<LazyUserPage />} />

            {/* Note:PageNotFound 404  */}
            <Route path="*" element={<LazyPageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
