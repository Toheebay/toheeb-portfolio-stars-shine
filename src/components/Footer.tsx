
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Star from './Star';

const Footer = () => {
  return (
    <footer id="contact" className="bg-lightNavy py-12 relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-lightestSlate">Adebayo Toheeb</h3>
            <p className="text-slate mb-4">
              Professional software developer specializing in complete software solutions and digital marketing services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate hover:text-green transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate hover:text-green transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate hover:text-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@adebayotoheeb.com" className="text-slate hover:text-green transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-lightestSlate">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate hover:text-green transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-slate hover:text-green transition-colors">Services</a>
              </li>
              <li>
                <a href="#ecommerce" className="text-slate hover:text-green transition-colors">eCommerce</a>
              </li>
              <li>
                <a href="#ads" className="text-slate hover:text-green transition-colors">Ads Services</a>
              </li>
              <li>
                <a href="#about" className="text-slate hover:text-green transition-colors">About</a>
              </li>
              <li>
                <a href="#booking" className="text-slate hover:text-green transition-colors">Book Appointment</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-lightestSlate">Contact Information</h3>
            <p className="text-slate mb-2">Email: contact@adebayotoheeb.com</p>
            <p className="text-slate mb-2">Phone: +1 (123) 456-7890</p>
            <p className="text-slate">Office Hours: 9AM - 6PM, Monday - Friday</p>
          </div>
        </div>
        
        <div className="border-t border-lightestNavy pt-6 text-center">
          <p className="text-slate">
            &copy; {new Date().getFullYear()} Adebayo Toheeb. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Background stars */}
      <Star size={3} top="20%" left="10%" />
      <Star size={4} top="15%" right="15%" />
      <Star size={3} bottom="30%" left="20%" />
      <Star size={4} bottom="25%" right="10%" />
    </footer>
  );
};

export default Footer;
