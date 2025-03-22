import { useState } from "react";
import Navbar from "./Navbar";

const Calendar = ({ events = [] }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-1 flex flex-col items-center p-6">
        {/* Months Heading */}
        {!selectedMonth && <h2 className="text-3xl font-bold text-gray-800 mb-6">Months</h2>}

        {/* Month Selection Grid */}
        {!selectedMonth && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {months.map((month, index) => (
              <button
                key={index}
                onClick={() => setSelectedMonth(index)}
                className="p-4 text-xl font-semibold rounded-lg shadow bg-green-500 text-white hover:bg-green-600 transition"
              >
                {month}
              </button>
            ))}
          </div>
        )}

        {/* Calendar Display */}
        {selectedMonth !== null && (
          <div className="w-full max-w-6xl mt-6 bg-white p-6 rounded-lg shadow-lg">
            {/* Year Navigation */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setSelectedYear((prev) => prev - 1)}
                className="p-2 bg-gray-300 rounded hover:bg-gray-400 text-lg"
              >
                {"<"}
              </button>
              <h3 className="text-2xl font-semibold text-gray-700">
                {months[selectedMonth]} {selectedYear}
              </h3>
              <button
                onClick={() => setSelectedYear((prev) => prev + 1)}
                className="p-2 bg-gray-300 rounded hover:bg-gray-400 text-lg"
              >
                {">"}
              </button>
            </div>

            {/* Days of the Week */}
            <div className="grid grid-cols-7 gap-2 mb-2 font-semibold text-center">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 border-t pt-2">
              {/* Empty Cells for First Week Offset */}
              {Array.from({ length: getFirstDayOfMonth(selectedMonth, selectedYear) }).map((_, index) => (
                <div key={`empty-${index}`} className="h-24"></div>
              ))}

              {/* Days of the Month */}
              {Array.from({ length: getDaysInMonth(selectedMonth, selectedYear) }).map((_, dayIndex) => {
                const date = `${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}-${String(dayIndex + 1).padStart(2, "0")}`;
                const dayEvents = events.filter(event => event.date === date);

                return (
                  <div key={dayIndex} className="h-24 p-2 border rounded text-center bg-gray-50">
                    <span className="font-semibold">{dayIndex + 1}</span>
                    {dayEvents.length > 0 ? (
                      dayEvents.map((event, eventIndex) => (
                        <div key={eventIndex} className="bg-green-500 text-white text-xs rounded mt-1 p-1">
                          {event.name}
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-gray-400 mt-1">NO EVENT</p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Back to Months Button */}
            <button
              onClick={() => setSelectedMonth(null)}
              className="mt-6 p-3 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Back to Months
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Calendar;
