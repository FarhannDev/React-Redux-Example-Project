import { lazy } from "react";

export const LazyLayout = lazy(() => import("../components/utils/Layout"));
export const LazyPageNotFound = lazy(() =>
  import("../components/utils/PageNotFound")
);

export const LazyHomepage = lazy(() => import("../features/Homepage"));
export const LazyPostPage = lazy(() => import("../features/posts/PostHome"));
export const LazyPostAdd = lazy(() => import("../features/posts/PostAdd"));
export const LazyPostEdit = lazy(() => import("../features/posts/PostEdit"));
export const LazyPostSinglePage = lazy(() =>
  import("../features/posts/PostSinglePage")
);

export const LazyPostFeed = lazy(() => import("../features/posts/PostFeed"));
export const LazyPostSearch = lazy(() =>
  import("../features/posts/SearchPost")
);
export const LazyPostSearchResults = lazy(() =>
  import("../features/posts/SearchResult")
);
export const LazyPostAuthor = lazy(() =>
  import("../features/author/AuthorPage")
);
export const LazyPostAuthorFeed = lazy(() =>
  import("../features/author/AuthorPost")
);
export const LazyPostAuthorSearch = lazy(() =>
  import("../features/author/AuthorSearchPost")
);
export const LazyPostAuthorSearchResults = lazy(() =>
  import("../features/author/AuthorSearchResultPost")
);

export const LazyUserPage = lazy(() => import("../features/users/UsersList"));
