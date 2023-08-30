import { Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Options from "./components/Options";
import Processing from "./components/Processing";
import Itinerary from "./components/Itinerary";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="banner" element={<Banner />} />
        <Route path="options" element={<Options />} />
        <Route path="processing" element={<Processing />} />
        <Route path="itinerary" element={<Itinerary />} />
      </Routes>
    </div>
  );
}

export default App;
