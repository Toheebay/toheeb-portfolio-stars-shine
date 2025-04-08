
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import EcommerceDashboard from "@/components/EcommerceDashboard";
import AdsDashboard from "@/components/AdsDashboard";
import FacebookAds from "@/components/FacebookAds";
import About from "@/components/About";
import BookingForm from "@/components/BookingForm";
import Store from "@/components/Store";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <EcommerceDashboard />
      <FacebookAds />
      <AdsDashboard />
      <Store />
      <About />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
