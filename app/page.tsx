import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-cream font-alegreya">
      <NavBar />
      <Intro />
      <Projects />
      <About />
      <Contact />
    </main>
  )
};
