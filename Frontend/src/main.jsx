import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Profile from "./components/Profile.jsx";
import Topics from "./components/Topics.jsx";
import Progress from "./components/Progess.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import React from "react";
import AuthWrapper from "./utils/AuthWrapper.jsx";
import { TopicsProvider } from './components/TopicContext.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <AuthWrapper />,
        children: [
          { index: true, element: <Profile />  },
          { path: 'profile', element: <Profile /> },
          { path: 'topics', element: <Topics /> },
          { path: 'progress', element: <Progress /> },
        ],
      },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <TopicsProvider>
  <RouterProvider router={router} />
  </TopicsProvider>
);
