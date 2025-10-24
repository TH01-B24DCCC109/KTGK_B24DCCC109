import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2>📝 Blog Manager</h2>
      <div>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Trang chủ</NavLink>
        <NavLink to="/create" className={({ isActive }) => (isActive ? 'active' : '')}>Viết bài</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
 
export {};
