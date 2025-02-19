
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1 and its key features.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Project 2",
    description: "A brief description of project 2 and its key features.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Project 3",
    description: "A brief description of project 3 and its key features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React Native", "Firebase", "Redux"],
  },
];

const Portfolio = () => {
  return (
    <motion.section 
      id="portfolio" 
      className="py-20 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
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
              <h1 className="text-2xl font-bold mb-2">PORTFOLIO</h1>
              <h2 className="text-lg text-gray-600">Check out our latest creative works</h2>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
