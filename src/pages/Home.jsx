import Navbar from "../componenets/Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import globeImg from "../imgs/globe1.avif";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />

      <div
        className="relative flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)] px-4"
        style={{
          backgroundImage: `url(${globeImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Explore the World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white mt-4 text-base md:text-lg max-w-xl"
          >
            Discover countries, population, and regions easily
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/countries")}
            className="mt-6 bg-green-500 text-white px-6 md:px-8 py-3 rounded-lg shadow-lg"
          >
            Explore Countries
          </motion.button>

        </div>
      </div>
    </div>
  );
};

export default Home;