import { store } from "./app/store/index";
import { fetchUsers } from "./app/services/usersApi";
import { fetchPosts } from "./app/services/postsApi";
import { router } from "./app/router/index";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import Loading from "./components/utils/Loading";

import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "/node_modules/animate.css/animate.css";
import "./styles/global.css";

// Redux create store
store.dispatch(fetchPosts());
store.dispatch(fetchUsers());
ReactDOMClient.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback={<Loading title="Loading..." />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </Provider>
  </React.StrictMode>
);
