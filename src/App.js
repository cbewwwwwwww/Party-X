import Home from './pages/home/home'
import About from './pages/about/about'
import Policies from './pages/policies/policies'
import Events from './pages/events/events'
import JoinUs from './pages/joinUs/joinUs'
import ContactUs from './pages/contactUs/contactUs'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/events" element={<Events />} />
            <Route path="/joinUs" element={<JoinUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
         </Routes>
    </div>
  );
}

export default App;
