import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries" element={<Countries />} />
    </Routes>
  );
}

export default App;