import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home";
import { ClerkProvider } from "@clerk/clerk-react";
import Profile from "./profile";
import AddListing from "./add-listing";
import { Toaster } from "./components/ui/sonner";
import SearchByCategory from "./search/[category]";
import SearchByOptions from "./search";
import ListingDetail from "./listing-details/[id]";
import New from "./pages/new/New";
import Preowned from "./pages/preowned/Preowned";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "new",
    element: <New />,
  },
  {
    path: "preowned",
    element: <Preowned />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/add-listing",
    element: <AddListing />,
  },
  {
    path: "/search/:category",
    element: <SearchByCategory />,
  },
  {
    path: "/search",
    element: <SearchByOptions />,
  },
  {
    path: "/listing-details/:id",
    element: <ListingDetail />,
  },
]);

// For Accesing the key of clerk from.env
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  </StrictMode>
);
