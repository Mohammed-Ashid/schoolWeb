import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigator from './Components/Navigator';
import Gallery from './Components/Gallery';
import Staff from "./Components/Staff";
import './App.css';

function App() {
  return (
    <Router basename="/schoolWeb">
      <Routes>
        <Route path="/" element={<Navigator />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </Router>
  );
}

export default App;
