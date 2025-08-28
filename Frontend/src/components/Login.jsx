import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { link } from "../utils/link";
import { TopicsContext } from "./TopicContext";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {userInfo, setUserInfo} = useContext(TopicsContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
      e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await fetch(`${link}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // console.log(data);
        localStorage.setItem('authToken', data.token);

        setUserInfo({name: email.split('@')[0], email: email});

        alert("Login successful!");

        navigate(`/profile`);

      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }

  };

  return (
    <div className="flex justify-center items-center md:px-20 h-screen w-screen">
      <div className="sm:p-6 sm:border-8 sm:border-red-500 ">
        <div className="border border-black w-[300px] h-md min-h-[300px] rounded-md bg-white py-5 px-4 ">
          <h1 className="text-center font-semibold text-2xl">Login</h1>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="border border-black outline-none py-1 px-2 w-full rounded-lg"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <br />
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input
                className="border border-black outline-none py-1 px-2 w-full rounded-lg"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <br />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md w-full mt-4 cursor-pointer"
            >
              Login
            </button>
          </form>

          <br />
        <span className="flex justify-center">
             <button className="text-blue-700 cursor-pointer" onClick={()=>navigate('/signup')}>SignUp</button>
        </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
