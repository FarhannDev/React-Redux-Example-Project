import { store } from "./app/store";
import { fetchUsers } from "./features/api/customUsersApi";
import { fetchPosts } from "./features/api/customPostsApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "/node_modules/animate.css/animate.css";
import "./styles/global.css";

// Redux create store
store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

ReactDOMClient.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
