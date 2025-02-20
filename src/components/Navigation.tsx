
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, MessageCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Contact", href: "#contact" }
  ];

  const handleFacebookMessage = () => {
    window.open('https://m.me/100090600411704', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:example@gmail.com?subject=Inquiry for Jayce Lumbria&body=Hello Jayce,';
  };

  const handleSMS = () => {
    window.location.href = 'sms:+639463847244';
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="ml-auto w-[200px] h-full bg-white shadow-lg flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Logo at top */}
              <div className="pt-16 pb-6 px-4 flex justify-center items-center">
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bBBunvDBHMj7THszHcCEtaTodjREHS2R-QitBabPqEmhYG6D5ZJAwmPk&s=10"
                  alt="Logo"
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
              </div>
              
              <div className="px-4 flex-grow">
                <ul className="space-y-6">
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <a
                        href={item.href}
                        className="text-xl font-display text-gray-900 hover:text-gray-600 transition-colors block py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                      {item.title === "Contact" && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex justify-center gap-2 mt-4"
                        >
                          <Button
                            onClick={handleFacebookMessage}
                            className="bg-orange-500 hover:bg-blue-600 transition-colors"
                            size="icon"
                            title="Message on Facebook"
                          >
                            <MessageCircle className="w-5 h-5" />
                          </Button>
                          
                          <Button
                            onClick={handleEmail}
                            className="bg-orange-500 hover:bg-red-500 transition-colors"
                            size="icon"
                            title="Email Me"
                          >
                            <Mail className="w-5 h-5" />
                          </Button>
                          
                          <Button
                            onClick={handleSMS}
                            className="bg-orange-500 hover:bg-green-500 transition-colors"
                            size="icon"
                            title="Send SMS"
                          >
                            <MessageSquare className="w-5 h-5" />
                          </Button>
                        </motion.div>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
