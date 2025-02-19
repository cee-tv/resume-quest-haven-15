
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
    window.location.href = 'mailto:josephbundok@gmail.com?subject=Inquiry for Jayce Il&body=Hello Jayce,';
  };

  const handleSMS = () => {
    window.location.href = 'sms:+770221770505';
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
              className="ml-auto w-[300px] h-full bg-white shadow-lg flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="py-20 px-6 flex-grow">
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
                        className="text-2xl font-display text-gray-900 hover:text-gray-600 transition-colors block py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Buttons */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex flex-col gap-4">
                  <Button
                    onClick={handleFacebookMessage}
                    className="w-full bg-orange-500 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                    title="Message on Facebook"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Message on Facebook</span>
                  </Button>
                  
                  <Button
                    onClick={handleEmail}
                    className="w-full bg-orange-500 hover:bg-red-500 transition-colors flex items-center justify-center gap-2"
                    title="Email Me"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Me</span>
                  </Button>
                  
                  <Button
                    onClick={handleSMS}
                    className="w-full bg-orange-500 hover:bg-green-500 transition-colors flex items-center justify-center gap-2"
                    title="Send SMS"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Send SMS</span>
                  </Button>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
