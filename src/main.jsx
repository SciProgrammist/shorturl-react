import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./contexts/authContext";

import "./middlewares/axios"
import Router from "./Router"

import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="login" element={<Login />} / >
      <Route path="list" element={<ListShorts />} />
      <Route path="create" element={<Create />} />
      <Router path="*" element={<p>Oh oh, there is nothing in here! 404</p>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
