import { useNavigate } from "react-router-dom";
import ep from "../assets/ep.jpg";
import logo from "../assets/logoo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Redirect to login page on logout
  };

  return (
    <nav className="bg-white text-green-600 p-4 flex items-center justify-between shadow-md">
      {/* System Logo */}
      <div className="flex items-center">
        <img src={ep} alt="System Logo" className="h-10 w-auto mr-3" />
      </div>

      {/* School Name & Logo */}
      <div className="flex items-center">
        <img src={logo} alt="School Logo" className="h-12 w-auto mr-3" />
        <h1 className="text-lg font-semibold">
          Central Philippine State University - DJVV San Carlos Campus
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6">
        <button className="hover:underline" onClick={() => navigate("/dashboard")}>Home</button>
        <button className="hover:underline" onClick={() => navigate("/events")}>Events</button>
        <button className="hover:underline" onClick={() => navigate("/document")}>Documents</button>
        <button className="hover:underline" onClick={() => navigate("/calendar")}>Calendar</button>
        <button className="hover:underline text-red-300" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
