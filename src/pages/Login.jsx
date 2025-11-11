import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { login, signup } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const authentication = async (e) => {
    e.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
      // navigate("/");
    } else {
      await signup(name, email, password);
    }
  };
  return (
    <div
      className="w-screen min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(./background_banner.jpg)`,
      }}
    >
      <img src={Logo} alt="" width={200} className="pl-20  pt-10" />
      <div className="login-form bg-[rgba(0,0,0,0.75)] max-w-105 m-auto p-16 mt-20 w-full">
        <h1 className="text-2xl font-bold mb-8">{signState}</h1>
        <form className="flex flex-col">
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#333] w-full text-white h-12 rounded px-3 py-5 my-3"
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#333] w-full text-white h-12 rounded px-4 py-5 my-3"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#333] w-full text-white h-12 rounded px-4 py-5 my-3"
          />
          <button
            onClick={authentication}
            type="submit"
            className="bg-red-600 px-4 py-4 my-2 rounded"
          >
            {signState}
          </button>
          <div className="flex justify-between text-gray-400">
            <div className="flex gap-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <h2>Need Help?</h2>
          </div>
          <div className="form-switch mt-10">
            {signState === "Sign Up" ? (
              <p className="text-gray-500">
                Already have an account{" "}
                <span
                  className="underline"
                  onClick={() => setSignState("Sign In")}
                >
                  Sign In Now
                </span>
              </p>
            ) : (
              <p className="text-gray-500">
                New to Netflix?{" "}
                <span
                  className="underline text-white"
                  onClick={() => setSignState("Sign Up")}
                >
                  Sign Up Now
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
