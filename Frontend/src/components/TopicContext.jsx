// TopicContext.jsx
import React, { createContext, useState } from 'react';

export const TopicsContext = createContext();

export function TopicsProvider({ children }) {
  const [topics, setTopics] = useState([
    {
      name: "Algorithms",
      status: "Pending",
      subTopics: [
        {
          name: "Sorting Algorithms",
          leetcode: "#",
          youtube: "#",
          article: "#",
          level: "EASY",
          status: "Done",
        },
        {
          name: "Searching Algorithms",
          leetcode: "#",
          youtube: "#",
          article: "#",
          level: "EASY",
          status: "Pending",
        },
        {
          name: "Dynamic Programming",
          leetcode: "#",
          youtube: "#",
          article: "#",
          level: "MEDIUM",
          status: "Pending",
        },
        {
          name: "Greedy Algorithms",
          leetcode: "#",
          youtube: "#",
          article: "#",
          level: "MEDIUM",
          status: "Pending",
        },
        {
          name: "Divide and Conquer",
          leetcode: "#",
          youtube: "#",
          article: "#",
          level: "MEDIUM",
          status: "Done",
        },
        {
          name: "Backtracking",
          leetcode: "#",
          youtube: "#",
          article: "#",
          level: "HARD",
          status: "Pending",
        },
      ],
    },
    { name: "Data Structures", status: "Pending" },
    { name: "Databases", status: "Pending" },
    { name: "Machine Learning", status: "Pending" },
    { name: "Operating Systems", status: "Pending" },
    { name: "Networks", status: "Pending" },
  ]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  return (
    <TopicsContext.Provider value={{ topics, setTopics, userInfo, setUserInfo }}>
      {children}
    </TopicsContext.Provider>
  );
}
