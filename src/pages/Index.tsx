
import Hero from "@/components/Hero";
import About from "@/components/About";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
    </main>
  );
};

export default Index;
