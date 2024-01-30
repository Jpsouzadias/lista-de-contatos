import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Page/Home.js";
import Contact from "./Page/Contact.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;