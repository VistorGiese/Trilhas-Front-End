import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Animal } from "./pages/Animal";
import { Rooms } from "./pages/Rooms";
import { RoomDetails } from "./pages/RoomDetails";
import { BookingSuccess } from "./pages/BookingSuccess";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/animal/:name" element={<Animal />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/success" element={<BookingSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
