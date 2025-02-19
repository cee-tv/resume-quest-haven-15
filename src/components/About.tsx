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
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "120px" }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-2 bg-orange-500 mr-6"
              ></motion.div>
              <div className="text-left">
                <h1 className="text-6xl font-bold mb-2">ABOUT ME</h1>
                <h2 className="text-lg text-gray-600">Main informations about me</h2>
              </div>
            </div>

            <div className="w-144 h-144 mx-auto mb-8 overflow-hidden border-4 border-orange-500">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZGKkR6-BO2HXVSbR26NGbhf5_Fyr3q2pvw&usqp=CAU"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
