import {
  LazyLoadersLayout,
  LazyLoadersPageNotFound,
  LazyLoadersHomepage,
  LazyLoadersPostPage,
  LazyLoadersPostDetailPage,
  LazyLoadersPostAdd,
  LazyLoadersPostEdit,
  LazyLoadersPostAuthorPage,
  LazyLoadersUserPage,
} from "../../utils/loaders";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LazyLoadersLayout />}>
      <Route index element={<LazyLoadersHomepage />} />
      <Route exact path="/posts" element={<LazyLoadersPostPage />} />
      <Route exact path="/posts/add" element={<LazyLoadersPostAdd />} />
      <Route exact path="/posts/:id?/edit" element={<LazyLoadersPostEdit />} />
      <Route exact path="/posts/:id?" element={<LazyLoadersPostDetailPage />} />
      <Route
        exact
        path="/posts/author/:userId?"
        element={<LazyLoadersPostAuthorPage />}
      />
      <Route exact path="/users" element={<LazyLoadersUserPage />} />
      <Route path="*" element={<LazyLoadersPageNotFound />} />
    </Route>
  )
);
