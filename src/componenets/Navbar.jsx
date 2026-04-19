import { Link } from "react-router-dom";
import globeImg from "../imgs/globe.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 md:px-20 h-20 bg-white/70 backdrop-blur-md shadow-md">
      
      <div className="flex items-center gap-2">
        <img
          src={globeImg}
          alt="logo"
          className="h-15 w-15 object-cover rounded-full shadow hover:scale-105 transition"
        />
        <h1 className="text-xl md:text-2xl font-bold text-indigo-600">
          Around the world
        </h1>
      </div>

      <Link
        to="/"
        className="bg-indigo-500 text-white px-4 md:px-6 py-2 rounded hover:bg-indigo-600 transition"
      >
        Home
      </Link>
    </div>
  );
};

export default Navbar;