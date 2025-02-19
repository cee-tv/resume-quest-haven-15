
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_408p602',
        'template_fidin5j',     
        {
          name: formData.name,           
          email: formData.email,         
          subject: formData.subject,     
          message: formData.message,     
        },
        'uA_uylHshJmE72iKH'
      );

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Email error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
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
              <h1 className="text-2xl font-bold mb-2">CONTACT ME</h1>
              <h2 className="text-lg text-gray-600">Get in touch with me</h2>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px] border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-16 text-gray-600">
          <p>© Copyright 2025. All Rights are Reserved.</p>
        </div>
      </div>

      {/* Go to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-50"
        aria-label="Go to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default Contact;
