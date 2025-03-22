import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import logo from "../assets/logo.jpg"; // Adjust path if needed
import bg from "../assets/bg (2).jpg"; // Adjust path if needed

function Auth() {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.username && formData.email && formData.password.length >= 6) {
      setIsRegistered(true);
      setErrorMessage("");
      setIsLogin(true);
    } else {
      setErrorMessage("Registration failed. Ensure all fields are filled and password is at least 6 characters.");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!isRegistered) {
      setErrorMessage("You must register first before logging in.");
      return;
    }
    alert("Login successful!");
    navigate("/dashboard"); // Redirect to dashboard after login
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isLogin ? handleLogin(e) : handleRegister(e);
  };

  const switchMode = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
    setErrorMessage("");
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col items-center justify-center bg-white p-10">
        <div className="w-96">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className="h-12 w-auto rounded-full" />
          </div>
          <h2 className="text-center text-green-700 text-2xl font-bold mb-8">
            {isLogin ? "LOGIN" : "REGISTER"}
          </h2>

          {errorMessage && (
            <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded whitespace-pre-line">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your Username"
                className="w-full px-4 py-2 border rounded-full"
                required
              />
            </div>

            {!isLogin && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 border rounded-full"
                  required
                />
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border rounded-full"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-white font-bold py-3 px-4 rounded-full ${
                isLoading ? "bg-green-300" : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {isLoading ? "Processing..." : isLogin ? "LOG IN" : "SIGN UP"}
            </button>

            <div className="text-center mt-4 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <a href="#" onClick={switchMode} className="text-green-700 ml-1">
                {isLogin ? "Register" : "Log in"}
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="w-1/2">
        <img src={bg} alt="CPSU E-XTENSION PLANNER" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Auth;
