import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Player from "./pages/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function AuthWatcher() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged in");
        navigate("/", { replace: true });
      } else {
        console.log("Logged out");
        navigate("/login", { replace: true });
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return null;
}
function RouterLayout() {
  return (
    <>
      <AuthWatcher />
      <Home />
    </>
  );
}
const router = createBrowserRouter([
  { path: "/", element: <RouterLayout /> },
  { path: "/login", element: <Login /> },
  { path: "/player/:id", element: <Player /> },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
