import { useState } from "react";
import Navbar from "./Navbar";

const Event = ({ addEvent, events }) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventCategory, setEventCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !eventDate || !eventTime) return;

    addEvent({
      name: eventName,
      date: eventDate,
      time: eventTime,
      description: eventDesc,
      category: eventCategory,
    });

    // Clear form fields
    setEventName("");
    setEventDate("");
    setEventTime("");
    setEventDesc("");
    setEventCategory("General");
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Add Event Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-500">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Add New Event</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="time"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Event Description (Optional)"
              value={eventDesc}
              onChange={(e) => setEventDesc(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <select
              value={eventCategory}
              onChange={(e) => setEventCategory(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            >
              <option value="General">General</option>
              <option value="Meeting">Meeting</option>
              <option value="Seminar">Seminar</option>
              <option value="Workshop">Workshop</option>
              <option value="Others">Others</option>
            </select>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition font-semibold shadow-md"
            >
              Add Event
            </button>
          </form>
        </div>

        {/* Upcoming Events Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-500">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Upcoming Events</h2>
          {events.length === 0 ? (
            <p className="text-gray-500 text-center">No events added yet.</p>
          ) : (
            <ul className="space-y-4">
              {events.map((event, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md border-l-4"
                  style={{
                    borderColor:
                      event.category === "Meeting"
                        ? "#4A90E2"
                        : event.category === "Seminar"
                        ? "#FF9800"
                        : event.category === "Workshop"
                        ? "#8BC34A"
                        : event.category === "Others"
                        ? "#E91E63"
                        : "#9E9E9E",
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>
                  <p className="text-gray-600">
                    📅 {event.date} | ⏰ {event.time}
                  </p>
                  {event.description && <p className="text-gray-500">{event.description}</p>}
                  <span className="text-sm font-semibold uppercase tracking-wide text-green-600">
                    {event.category}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default Event;
