
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import {About} from "./Components/About";
import {Home} from "./Components/Home";

function App() {
  return (
    <div className="App">
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
