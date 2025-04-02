
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "eCommerce", href: "#ecommerce" },
    { label: "Ads Services", href: "#ads" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-navy/90 backdrop-blur-md border-b border-lightestNavy">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-green text-2xl font-bold">Toheeb</span>
            <span className="text-lightestSlate text-2xl font-bold">Adebayo</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-lightSlate hover:text-green transition-colors duration-300 text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button className="hidden md:flex" asChild>
            <a href="#booking">Book Appointment</a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-lightSlate hover:text-green"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-navy/95 z-40 backdrop-blur-sm transition-all duration-300 transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-lightSlate hover:text-green transition-colors duration-300 text-xl font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button onClick={() => setIsMenuOpen(false)} asChild>
            <a href="#booking">Book Appointment</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
