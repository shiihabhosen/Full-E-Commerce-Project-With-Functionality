import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// React Router v6
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import { store } from "./store";

// Pages & Components
import LayOut from "./LayOut.jsx";
import LoginPage from "./Login/LoginPage.jsx";
import ShopNow from "./Pages/ShopNow.jsx";
import CreateAccount from "./Login/CreateAccount.jsx";
import Wishlist from "./ProductsPage/Wishlist.jsx";
import Card from "./Pages/Card.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import ByNowPage from "./ProductsPage/ByNowPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: LayOut,
    children: [
      { index: true, 
        Component: App },
      { path: "signup",
         Component: CreateAccount },
      { path: "login",
         Component: LoginPage },
      { path: "shop",
         Component: ShopNow },
      { path: "wishlist",
         Component: Wishlist },
      { path: "cart",
         Component: Card },
      { path: "about",
         Component: About },
      { path: "contact", 
        Component: Contact },
      { path: "bynow / : id",
        Component: ByNowPage }, // ✅ সব ভুল path এর জন্য ErrorPage
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 🟢 Redux Provider দিয়ে পুরো app wrap করলেন */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
