import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./features/home/Home";
import { Browse } from "./features/browse/Browse";
import { Watch } from "./features/watch/Watch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
