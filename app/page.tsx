import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col">
      
      <Intro />
      <Projects />
      <About />
      <Contact />
    </main>
  )
};
