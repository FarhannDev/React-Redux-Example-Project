import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { fetchUsers } from "./helpers/usersHelper";
import { fetchPosts } from "./helpers/postHelper";

import App from "./App";
// Styling import
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Redux create store
store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
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
