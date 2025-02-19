import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MessageSquare } from "lucide-react";

const About = () => {
  const [profession, setProfession] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [skillPercentages, setSkillPercentages] = useState({
    Wordpress: 0,
    CSS: 0,
    HTML: 0,
    "After Effect": 0
  });
  const professions = ["Social Media Boosting", "Social Media Seller"];
  const period = 2000;
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [profession, delta, isDeleting]);

  useEffect(() => {
    setSkillPercentages({
      Wordpress: 0,
      CSS: 0,
      HTML: 0,
      "After Effect": 0
    });

    skills.forEach((skill, index) => {
      let startTime = Date.now();
      const duration = 4000;
      const startDelay = index * 300;

      setTimeout(() => {
        const timer = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          setSkillPercentages(prev => ({
            ...prev,
            [skill.name]: Math.round(progress * skill.percentage)
          }));

          if (progress >= 1) {
            clearInterval(timer);
          }
        }, 20);

        return () => clearInterval(timer);
      }, startDelay);
    });
  }, []);

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
          className="max-w-6xl mx-auto"
        >
          <div className="md:grid md:grid-cols-2 md:gap-16">
            <div className="mb-8 md:mb-0">
              <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100 border-8 border-white shadow-xl">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZGKkR6-BO2HXVSbR26NGbhf5_Fyr3q2pvw&usqp=CAU"
                  alt="Jayce Il"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">I'm Jayce Il and I'm a</h1>
                <div className="text-orange-500 text-2xl font-bold mb-6">
                  {profession}
                  <span className="animate-pulse">|</span>
                </div>
                <p className="text-gray-700">
                  Hi! My name is <span className="text-orange-500">Jayce Il</span>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {personalInfo.slice(0, 10).map((info, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="font-bold">{info.label}</span>
                    <span className="text-gray-600">{info.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={handleFacebookMessage}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Download CV
                </Button>
                <Button 
                  onClick={handleEmail}
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-6">Some About my Abilities</h2>
            <p className="text-gray-700 mb-12 max-w-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.
            </p>
            <div className="grid md:grid-cols-1 gap-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{skill.name}</span>
                      <span className="text-gray-600">- {skill.years} years of experience</span>
                    </div>
                    <span className="text-orange-500 font-bold">{skillPercentages[skill.name]}%</span>
                  </div>
                  <Progress 
                    value={skillPercentages[skill.name]} 
                    className="h-3 bg-gray-100"
                  />
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
