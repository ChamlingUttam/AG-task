import { motion } from "framer-motion";

const CountryCard = ({ country }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow p-4"
    >
      <img
        src={country.flags.png}
        alt=""
        className="h-40 w-full object-cover rounded"
      />

      <h2 className="text-lg font-semibold mt-3">
        {country.name.common}
      </h2>

      <p className="text-sm text-gray-600">
        Population: {country.population.toLocaleString()}
      </p>

      <p className="text-sm text-gray-600">
        Region: {country.region}
      </p>
    </motion.div>
  );
};

export default CountryCard;