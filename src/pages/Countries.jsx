import Navbar from "../componenets/Navbar";
import CountryCard from "../componenets/CountryCard";
import Loader from "../componenets/Loader";
import { useEffect } from "react";
import { useCountryStore } from "../store/useCountryStore";

const Countries = () => {
  const {
    filtered,
    loading,
    error,
    fetchCountries,
    setSearch,
  } = useCountryStore();

  useEffect(() => {
    fetchCountries();
  }, []);

  if (loading) return <Loader />;
  if (error)
    return <p className="text-center mt-20">Error loading data</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="px-4 md:px-20 mt-10">
        <input
          type="text"
          placeholder="Search country..."
          className="w-full md:w-96 p-3 border rounded"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-20 mt-10">
        {filtered.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;