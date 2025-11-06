import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeClassName = "font-bold text-yellow-300 underline";

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold">JSONFeed</span>
        <div className="space-x-6">
          <NavLink 
            to="/" 
            // TS infiere el tipo de 'isActive' desde NavLink
            className={({ isActive }) => isActive ? activeClassName : 'hover:text-yellow-300'}
          >
            Home
          </NavLink>
          <NavLink 
            to="/entities" 
            className={({ isActive }) => isActive ? activeClassName : 'hover:text-yellow-300'}
          >
            Entidades
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;