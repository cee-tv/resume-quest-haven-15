import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ParticleBackground = () => {
  const particles = Array.from({ length: 50 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlePositions = useRef<{ x: number; y: number; vx: number; vy: number; alpha: number }[]>([]);
  const frameCount = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Initialize particles with alpha value for blinking
    particlePositions.current = particles.map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2, // Increased velocity
      vy: (Math.random() - 0.5) * 2, // Increased velocity
      alpha: Math.random()
    }));

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount.current++;
      
      // Update and draw particles
      particlePositions.current.forEach((particle, i) => {
        // Update position with faster movement
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Update particle alpha for blinking effect
        particle.alpha += Math.sin(frameCount.current * 0.1) * 0.02;
        particle.alpha = Math.max(0.3, Math.min(1, particle.alpha));

        // Draw particle with blinking effect - changed radius from 6 to 3
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
        ctx.fill();

        // Draw lines to nearby particles with dynamic opacity
        particlePositions.current.forEach((otherParticle, j) => {
          if (i === j) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const lineAlpha = (1 - distance / 200) * 
                            Math.min(particle.alpha, otherParticle.alpha) * 
                            (0.8 + Math.sin(frameCount.current * 0.05) * 0.2);
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'overlay' }}
    />
  );
};

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
      <div className="absolute inset-0">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLAX4lMpz2ywWkvREZvPN007kyzZn1BfZXEv0rsfJWb2aYy52tqrUxSzY&s=10"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <ParticleBackground />
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
            className="w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-white/20 overflow-hidden mb-8 shadow-xl"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bBBunvDBHMj7THszHcCEtaTodjREHS2R-QitBabPqEmhYG6D5ZJAwmPk&s=10"
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
            className="text-xl md:text-2xl text-white/90 mb-8"
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
            className="cursor-pointer mt-4"
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
