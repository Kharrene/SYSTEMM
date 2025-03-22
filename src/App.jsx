import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Event from "./components/Event";
import Documents from "./components/Documents";
import Calendar from "./components/Calendar";


function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Event addEvent={addEvent} events={events} />} />
        <Route path="/document" element={<Documents />} />
        <Route path="/calendar" element={<Calendar events={events} />} />
      </Routes>
    </Router>
  );
}

export default App;
