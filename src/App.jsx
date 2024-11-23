import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigator from './Components/Navigator';
import Gallery from './Components/Gallery';
import Staff from "./Components/Staff";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/schoolWeb/" element={<Navigator />} />
        <Route path="/schoolWeb/gallery" element={<Gallery />} />
        <Route path="/schoolWeb/staff" element={<Staff />} />
      </Routes>
    </Router>
  
  );
}

export default App;
