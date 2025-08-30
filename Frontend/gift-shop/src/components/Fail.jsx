
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Fail() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/004/299/830/original/shopping-online-on-phone-with-podium-paper-art-modern-pink-background-gifts-box-illustration-free-vector.jpg')",
      }}
    >
      {/* Outer Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative bg-white/40 backdrop-blur-xl border border-red-200/40 
                   shadow-2xl p-10 rounded-2xl w-80 md:w-96 overflow-hidden text-center"
      >
       
        <div
          className="absolute inset-0 rounded-2xl border-2 border-transparent 
                     bg-gradient-to-r from-red-300 via-pink-300 to-orange-200 
                     opacity-80 animate-pulse"
        ></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Heading */}
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold mb-4 
                       bg-gradient-to-r from-red-500 via-rose-500 to-orange-400 
                       bg-clip-text text-transparent"
          >
            Oops! The Gift Wrap Didn’t Open ❌🎀
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-700 font-medium mb-6"
          >
            Your username or password didn’t match.  
            Try again to unlock your surprise 🎁
          </motion.p>

          {/* Back Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 text-white 
                       py-2 px-6 rounded-lg shadow-md hover:shadow-xl transition-all"
            onClick={() => navigate("/")}
          >
            Back to Login 🔑
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
