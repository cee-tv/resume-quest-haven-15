
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MessageSquare } from "lucide-react";

const About = () => {
  const [profession, setProfession] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const professions = ["Social Media Boosting", "Social Media Seller"];
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

  const personalInfo = [
    { label: "Birthday:", value: "01.07.1990" },
    { label: "Age:", value: "28" },
    { label: "City:", value: "New York, USA" },
    { label: "Interests:", value: "Soccer, UFC" },
    { label: "Study:", value: "Chicago University" },
    { label: "Degree:", value: "Master" },
    { label: "Website:", value: "www.mywebsite.com" },
    { label: "Mail:", value: "mymail@gmail.com" },
    { label: "Phone:", value: "+770221770505" },
    { label: "Facebook Pages:", value: "@mrjayceee" },
  ];

  const handleFacebookMessage = () => {
    window.open('https://m.me/100090600411704', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:mymail@gmail.com?subject=Inquiry for Jayce Il&body=Hello Jayce,';
  };

  const handleSMS = () => {
    window.location.href = 'sms:+770221770505';
  };

  const skills = [
    { name: "Wordpress", years: 5, percentage: 95 },
    { name: "CSS", years: 3, percentage: 85 },
    { name: "HTML", years: 4, percentage: 75 },
    { name: "After Effect", years: 6, percentage: 90 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-20"
        >
          <div className="text-center">
            <div className="flex items-center mb-4">
              <div className="w-1 bg-orange-500 h-12 mr-4"></div>
              <h1 className="text-5xl font-bold">ABOUT ME</h1>
            </div>
            
            <h2 className="text-lg text-gray-600 mb-8 text-left">Main informations about me</h2>

            <div className="w-48 h-48 mx-auto mb-8 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Jayce Il"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-xl font-bold mb-2 text-left">
              I'm Jayce Il and I'm a{" "}
              <span className="text-orange-500 inline-block min-w-[200px]">
                {profession}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Hi! My name is <span className="text-orange-500">Jayce Il</span>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left max-w-2xl mx-auto mb-8">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex flex-col">
                  <span className="font-bold">{info.label}</span>
                  <span className="text-gray-600">{info.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 justify-center mt-8">
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
            </div>
          </div>

          <div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center mb-8"
            >
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "48px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-1 bg-orange-500 mr-4"
              ></motion.div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-5xl font-bold"
              >
                Some About my Abilities
              </motion.h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-700 mb-12 text-center"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.
            </motion.p>

            <div className="space-y-6 max-w-3xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-900">
                      {skill.name} - {skill.years} years of experience
                    </span>
                    <span className="text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-gray-900 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
