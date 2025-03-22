import Navbar from "./Navbar"; 
import back from "../assets/backg.jpg";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Navbar /> {/* Include Navbar */}

      <main className="flex-1 flex flex-col items-center bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full h-[450px] overflow-hidden">
          <img src={back} alt="E-Xtension Planner Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold">E-Xtension Planner</h1>
          </div>
        </div>

        {/* Features Section */}
        <section className="max-w-7xl w-full px-6 py-12">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-10">System Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Events Section */}
            <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-green-700">📅 Events</h3>
              <div className="mt-4 w-full h-24 bg-green-200 flex items-center justify-center rounded-md">
                <p className="text-green-700 font-semibold">Event Timeline</p>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-700">📂 Documents</h3>
              <div className="mt-4 w-full h-24 bg-blue-200 flex items-center justify-center rounded-md">
                <p className="text-blue-700 font-semibold">Document Storage</p>
              </div>
            </div>

            {/* Calendar Section */}
            <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-yellow-700">🗓 Calendar</h3>
              <div className="mt-4 w-full h-24 bg-yellow-200 flex items-center justify-center rounded-md">
                <p className="text-yellow-700 font-semibold">Mini Calendar</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
