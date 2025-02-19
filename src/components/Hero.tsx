
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [profession, setProfession] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const professions = ["Seller", "Booster"];
  const period = 2000;
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [profession, delta, isDeleting]);

  const tick = () => {
    let i = loopNum % professions.length;
    let fullText = professions[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, profession.length - 1)
      : fullText.substring(0, profession.length + 1);

    setProfession(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-900/80 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white/20 overflow-hidden mb-8 shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-4"
          >
            <span className="text-white">ALAN</span>{" "}
            <span className="text-orange-500">MICHAELIS</span>
          </motion.h1>

          {/* Profession with Typing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-16"
          >
            I'm a{" "}
            <span className="font-semibold text-orange-500 inline-block min-w-[80px] text-left">
              {profession}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Arrow Down */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={scrollToNextSection}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronDown className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
