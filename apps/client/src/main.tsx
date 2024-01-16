import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// import { UserDataProvider } from "./components/providers/UserDataProvider.tsx";
import { ProductsProvider } from "./components/providers/ProductsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider>
      {/* <UserDataProvider> */}
      <App />
      {/* </UserDataProvider> */}
    </ProductsProvider>
  </React.StrictMode>
);
