import React, { useEffect, useState, useContext } from 'react';
import { TopicsContext }  from './TopicContext';

function Profile() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const { userInfo, setUserInfo } = useContext(TopicsContext);
  

  useEffect(() => {
    const storedEmail = localStorage.getItem('email') || '';
    setEmail(storedEmail);

    if (storedEmail) {
      const name = storedEmail.split('@')[0];
      setUsername(name);
    }
  }, []);

  return (
    <div className='w-full'>
      <div className='max-w-4xl w-4xl mx-auto py-6 px-2'>
        <h1>Welcome : {userInfo.name}</h1>
        <p>Email : {userInfo.email}</p>
      </div>
    </div>
  );
}

export default Profile;
