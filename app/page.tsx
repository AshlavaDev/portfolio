import Intro from "@/components/Intro";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-cream">
      <NavBar />
      <Intro />
    </main>
  )
};
