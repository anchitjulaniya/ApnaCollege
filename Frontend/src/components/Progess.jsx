import React, { useContext } from 'react';
import { TopicsContext } from './TopicContext';

function Progess() {
  const { topics } = useContext(TopicsContext);
  const allSubtopics = topics.filter(t => t.subTopics).flatMap(t => t.subTopics);

  const getPercent = (level) => {
    const total = allSubtopics.filter(sub => sub.level === level).length;
    const done = allSubtopics.filter(sub => sub.level === level && sub.status === 'Done').length;
    return total === 0 ? 0 : Math.round((done / total) * 100);
  };

  return (
    <div className='w-full'>
      <div className='max-w-4xl mx-auto py-6 px-2'>
        <h1 className='text-xl font-semibold text-black'>Progress Reports</h1>
        <p>Easy: {getPercent('EASY')}%</p>
        <p>Medium: {getPercent('MEDIUM')}%</p>
        <p>Hard: {getPercent('HARD')}%</p>
      </div>
    </div>
  );
}

export default Progess;
