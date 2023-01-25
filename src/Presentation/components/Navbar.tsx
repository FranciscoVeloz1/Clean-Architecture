import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-3 rounded mb-4">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="text-3xl font-bold">
          Home
        </Link>

        <ul className="flex gap-4">
          <li>
            <Link to="/add" className="text-lg hover:text-gray-300">
              Add
            </Link>
          </li>

          <li>
            <Link to="/docs" className="text-lg hover:text-gray-300">
              Docs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
