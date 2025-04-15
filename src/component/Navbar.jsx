import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Project', type: 'route', path: '/project' },
    { name: 'Experience', type: 'route', path: '/experience' },
    { name: 'About', type: 'route', path: '/about' },
  ];
  
  const handleClick = (item) => {
    if (item.type === 'scroll') {
      const section = document.getElementById(item.targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (item.type === 'route') {
      navigate(item.path);
    }
  };
  
  return (
    <nav className="flex font-bebas text-lg md:text-2xl fixed top-0 w-full z-50 justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md ">
      <div
  className="md:text-2xl text-lg text-gray-900 dark:text-white cursor-pointer"
  onClick={() => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }}
>
  Home
</div>
      <ul className="flex space-x-6">
        {menuItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => handleClick(item)}
              className="text-gray-900 dark:text-white hover:underline focus:outline-none"
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-gray-900 dark:text-white text-lg md:text-2xl ml-4"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}
