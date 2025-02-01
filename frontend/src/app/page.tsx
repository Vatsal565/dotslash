import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-level-1">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
