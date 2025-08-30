import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full flex justify-between items-center 
                 px-4 sm:px-6 py-3 sm:py-4 
                 bg-white/30 backdrop-blur-lg 
                 border-b border-pink-200/30
                 shadow-lg z-50 transition-all duration-500"
    >
      
      <h1
        className="text-xl sm:text-2xl font-extrabold 
                   bg-gradient-to-r from-pink-400 via-rose-400 to-orange-300 
                   bg-clip-text text-transparent drop-shadow-md"
      >
        🎁 SurpriseHub
      </h1>

      
      <div className="flex gap-4 sm:gap-6 items-center">
        <Link
          to="/"
          className="bg-gradient-to-r from-pink-400 via-rose-400 to-orange-300 
                     text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base 
                     font-medium shadow-md hover:shadow-xl transition-all duration-300 
                     hover:scale-105"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
