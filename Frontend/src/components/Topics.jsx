import React, { useContext, useState } from "react";
import { TopicsContext } from "./TopicContext";

function Topics() {
  const [openIdx, setOpenIdx] = useState(0);
  const { topics, setTopics } = useContext(TopicsContext);

  const handleToggle = idx => setOpenIdx(idx === openIdx ? -1 : idx);

  // Update the subtopic's status in global state/context
  const handleCheckbox = (topicIdx, subIdx) => {
    setTopics(prevTopics => prevTopics.map((topic, tIdx) => {
      if (tIdx !== topicIdx) return topic;
      return {
        ...topic,
        subTopics: topic.subTopics.map((sub, sIdx) => {
          if (sIdx !== subIdx) return sub;
          // Toggle status between 'Done' and 'Pending'
          return {
            ...sub,
            status: sub.status === 'Done' ? 'Pending' : 'Done'
          };
        })
      };
    }));
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-blue-700">Topics</h2>
      <p className="text-center text-gray-700 mb-6 text-sm md:text-base">
        Explore these exciting topics!
      </p>
      {topics.map((topic, idx) => (
        <div key={topic.name} className="mb-2">
          <button
            className="w-full flex items-center justify-between px-3 md:px-6 py-2 md:py-3 rounded-t-lg bg-cyan-400 focus:outline-none transition-all"
            onClick={() => handleToggle(idx)}
          >
            <span className="font-semibold text-white text-sm md:text-base">{topic.name}</span>
            <span className="ml-2 py-1 px-2 md:px-3 rounded-full text-xs bg-red-500 text-white">
              {topic.status}
            </span>
          </button>
          {topic.subTopics && openIdx === idx && (
            <div className="bg-cyan-100 px-1 py-2 md:px-6 md:py-4 rounded-b-lg overflow-x-auto">
              <h3 className="text-base md:text-xl font-semibold mb-2">Sub Topics</h3>
              <table className="min-w-full text-left table-auto text-xs md:text-sm">
                <thead>
                  <tr className="text-gray-600">
                    <th>Name</th>
                    <th>LeetCode</th>
                    <th>YouTube</th>
                    <th>Article</th>
                    <th>Level</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {topic.subTopics.map((sub, subIdx) => (
                    <tr key={sub.name} className="border-b last:border-none">
                      <td className="flex items-center px-1 py-1 md:px-2 md:py-2 whitespace-nowrap">
                        <input
                          type="checkbox"
                          className="mr-2 accent-blue-500 scale-90 md:scale-100"
                          checked={sub.status === "Done"}
                          onChange={() => handleCheckbox(idx, subIdx)}
                        />
                        {sub.name}
                      </td>
                      <td><a href={sub.leetcode} className="text-blue-600 hover:underline">Practise</a></td>
                      <td><a href={sub.youtube} className="text-blue-600 hover:underline">Watch</a></td>
                      <td><a href={sub.article} className="text-blue-600 hover:underline">Read</a></td>
                      <td>{sub.level}</td>
                      <td>
                        <span className={`px-2 py-1 rounded text-xs ${
                          sub.status === "Done"
                            ? "bg-green-200 text-green-700"
                            : "bg-yellow-200 text-yellow-700"
                        }`}>
                          {sub.status === "Done" ? "Done" : "Pending"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Scroll hint for mobile */}
              <div className="block md:hidden text-xs text-gray-500 text-right mt-1">← Scroll →</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Topics;
