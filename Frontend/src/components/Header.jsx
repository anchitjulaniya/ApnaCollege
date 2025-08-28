import React from 'react'
import { NavLink, useNavigate } from 'react-router'


function Header() {
    const navigate = useNavigate();

const handleLogout = () => {
  
  localStorage.removeItem('authToken');
  localStorage.removeItem('token');

  navigate('/login');
};


  return (
    <div className='bg-blue-600 flex justify-center items-center'>
      <div className='h-[60px] max-w-4xl w-4xl flex items-center justify-between text-white'>
        <div className='text-2xl font-bold'>Dashboard</div>
        <div className='flex items-center gap-4'>
          <NavLink 
            className={({ isActive }) => isActive ? 'font-bold' : ''}
            to='/'
          >
            <span>Profile</span>
          </NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? 'font-bold' : ''}
            to='/topics'
          >
            <span>Topics</span>
          </NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? 'font-bold' : ''}
            to='/progress'
          >
            <span>Progress</span>
          </NavLink>
          <button onClick={handleLogout} className='rounded-lg border border-red-500 px-4 py-2 text-red-500 cursor-pointer'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Header
