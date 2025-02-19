
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center mb-4">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "120px" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-2 bg-orange-500 mr-6"
            ></motion.div>
            <div className="text-left">
              <h1 className="text-4xl font-bold mb-2">CONTACT ME</h1>
              <h2 className="text-lg text-gray-600">Get in touch with me</h2>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-gray-600">josephbundok@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Location</h3>
                <p className="text-gray-600">New York City, USA</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 justify-center items-center"
          >
            <Button
              onClick={handleFacebookMessage}
              className="bg-orange-500 w-14 h-14 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 hover:bg-blue-600 hover:shadow-lg active:shadow-inner flex items-center justify-center p-0"
              title="Message on Facebook"
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </Button>
            
            <Button
              onClick={handleEmail}
              className="bg-orange-500 w-14 h-14 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 hover:bg-red-500 hover:shadow-lg active:shadow-inner flex items-center justify-center p-0"
              title="Email Me"
            >
              <Mail className="w-6 h-6 text-white" />
            </Button>
            
            <Button
              onClick={handleSMS}
              className="bg-orange-500 w-14 h-14 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 hover:bg-green-500 hover:shadow-lg active:shadow-inner flex items-center justify-center p-0"
              title="Send SMS"
            >
              <MessageSquare className="w-6 h-6 text-white" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
