import React, { useEffect } from "react";
import Home from "./pages/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("✅ Logged in");
        navigate("/");
      } else {
        console.log("🚪 Logged out");
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);
  return (
    <div className="w-full ">
      <Home />
    </div>
  );
};

export default App;
