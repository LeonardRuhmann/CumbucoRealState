import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LanguageProvider } from "./context/LanguageContext";
import { MenuHamburguerContextProvider } from "./context/MenuContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MenuHamburguerContextProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </MenuHamburguerContextProvider>
  </React.StrictMode>
);
