import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={`flex justify-between items-center p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <div className="text-xl font-bold">Mugabo</div>
      <ul className="flex space-x-6">
        <li><a href="#app" className="hover:underline">Home</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#experience" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
      <button onClick={toggleTheme} className="p-2 rounded-full">
        {theme === 'dark' ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-gray-700" />}
      </button>
    </nav>
  );
};

export default Navbar;