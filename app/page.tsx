import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import QuickProfile from "@/components/QuickProfile";
import Interests from "@/components/Interests";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <QuickProfile />
      <Interests />
      <CurrentlyLearning />
      <SocialLinks />
      <Footer />
    </main>
  );
}
