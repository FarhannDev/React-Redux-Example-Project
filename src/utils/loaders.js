import { lazy } from "react";

export const LazyLoadersLayout = lazy(() =>
  import("../modules/components/Layout")
);

export const LazyLoadersPageNotFound = lazy(() =>
  import("../modules/components/PageNotFound")
);

export const LazyLoadersHomepage = lazy(() =>
  import("../modules/homepage/Homepage")
);

export const LazyLoadersPostPage = lazy(() =>
  import("../modules/posts/PostPage")
);

export const LazyLoadersPostDetailPage = lazy(() =>
  import("../modules/posts/PostDetailPage")
);

export const LazyLoadersPostAdd = lazy(() =>
  import("../modules/posts/PostAdd")
);

export const LazyLoadersPostEdit = lazy(() =>
  import("../modules/posts/PostEdit")
);

export const LazyLoadersPostAuthorPage = lazy(() =>
  import("../modules/author/AuthorPage")
);

export const LazyLoadersUserPage = lazy(() =>
  import("../modules/user/UserPage")
);
