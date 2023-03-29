import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  LazyLayout,
  LazyHomepage,
  LazyPostPage,
  LazyPostSinglePage,
  LazyPostAdd,
  LazyPostEdit,
  LazyPostAuthor,
  LazyUserPage,
} from "../../utils/loaders";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LazyLayout />}>
      <Route index element={<LazyHomepage />} />
      <Route exact path="/posts" element={<LazyPostPage />} />
      <Route exact path="/posts/create" element={<LazyPostAdd />} />
      <Route exact path="/posts/:id?" element={<LazyPostSinglePage />} />
      <Route exact path="/posts/:id?/edit" element={<LazyPostEdit />} />
      <Route exact path="/posts/author/:userId" element={<LazyPostAuthor />} />
      <Route exact path="/users" element={<LazyUserPage />} />
    </Route>
  )
);
