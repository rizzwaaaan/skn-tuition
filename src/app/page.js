import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About"; // <--- Import this
import Courses from "@/components/Courses";
import Blog from "@/components/Blog";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Workshops from "@/components/Workshops";
import Footer from "@/components/Footer";
import Enroll from "@/components/Enroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Blog />
      <Features />
      <Enroll />
      <Testimonial /> 
      <Workshops />
      <Footer />
    </main>
  );
}