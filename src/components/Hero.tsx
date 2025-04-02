
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Star from './Star';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-28 pb-16 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-green mb-4 font-mono">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-lightestSlate">
            Adebayo Toheeb.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate">
            I build exceptional software solutions.
          </h2>
          <p className="max-w-2xl text-lg mb-8">
            I'm a specialized software developer offering a suite of 45+ professional software solutions 
            for just $249 lifetime access, with no hidden costs. From School Management ERP to 
            eCommerce and Ads Management, I deliver tailored solutions that drive success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="#services">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#booking">Book Appointment</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated stars background */}
      <Star size={4} top="15%" left="10%" delay={0} />
      <Star size={3} top="25%" left="25%" delay={1} />
      <Star size={5} top="18%" right="15%" delay={2} />
      <Star size={3} top="40%" right="25%" delay={0} />
      <Star size={4} top="65%" left="8%" delay={2} />
      <Star size={5} top="75%" left="35%" delay={1} />
      <Star size={3} top="60%" right="18%" delay={0} />
      <Star size={4} top="85%" right="28%" delay={2} />
      <Star size={3} bottom="10%" left="15%" delay={1} />
      <Star size={5} bottom="15%" right="12%" delay={0} />
    </section>
  );
};

export default Hero;
