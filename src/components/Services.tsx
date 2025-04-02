
import { useState } from 'react';
import { ChevronDown, Package } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';
import Star from './Star';

const SOFTWARE_SERVICES = [
  "SCHOOL MANAGEMENT ERP",
  "GST BILLING SOFTWARE",
  "Loan Management",
  "Pateint Management",
  "Lead Management Software (CRM)",
  "JOB PORTAL",
  "Human Resource HRM",
  "Institute Managenet",
  "Online Exam",
  "Library Management",
  "Saloon Booking",
  "News Portal",
  "Tours and Travels",
  "Courier Managenent",
  "Restaurent POS",
  "Election Portal",
  "Hospital Management",
  "Hotel Management",
  "Classified",
  "Online Exam",
  "Pharma Billing",
  "Event Management",
  "College Management",
  "Music Portal",
  "Car Booking",
  "Coaching Management",
  "Crowdfunding",
  "Amc",
  "Food Booking",
  "Institute Management",
  "Adv Hospital",
  "Ngo Management",
  "Car Pooling",
  "Transport Management",
  "Apartment Managenent",
  "Multivendor Ecommerce",
  "Matrimonial Portal",
  "Visting Card Script",
  "Movie Ticket Booking",
  "Banking Management",
  "Online Live Class",
  "Practo Clone",
  "Visitors Management",
  "Netflix Clone"
];

const Services = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section id="services" className="section relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Software Solutions</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            All software packages available for $249 for lifetime access with no hidden costs. 
            Customizable to meet your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="dashboard-card relative overflow-hidden group">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center">
                <Package className="mr-2 h-5 w-5 text-green" />
                Software Package
              </CardTitle>
              <CardDescription>
                Complete software suite with 45+ applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div 
                  className="bg-lightNavy border border-lightestNavy rounded-md p-3 cursor-pointer flex justify-between items-center"
                  onClick={toggleDropdown}
                >
                  <span>All Software Solutions</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", isDropdownOpen && "rotate-180")} />
                </div>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 max-h-48 overflow-y-auto bg-lightNavy border border-lightestNavy rounded-md z-20 shadow-lg">
                    {SOFTWARE_SERVICES.map((service, index) => (
                      <div key={index} className="service-dropdown-item">
                        {service}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Lifetime access to all software</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Free installation & setup</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Customization available</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>No hidden costs</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="mb-4 text-center w-full">
                <span className="text-2xl font-bold text-green">$249</span>
                <span className="text-lightSlate ml-1">lifetime</span>
              </div>
              <Button className="w-full" asChild>
                <a href="#booking">Book Appointment</a>
              </Button>
            </CardFooter>
            
            {/* Star decorations */}
            <Star size={3} top="10%" right="10%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Star size={4} bottom="15%" left="10%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </Card>

          <Card className="dashboard-card relative overflow-hidden group">
            <CardHeader>
              <CardTitle className="text-xl font-bold">eCommerce Development</CardTitle>
              <CardDescription>WordPress & WooCommerce Solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Custom WordPress eCommerce sites</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>WooCommerce setup & customization</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Payment gateway integration</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Inventory management systems</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>SEO optimization for stores</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <a href="#booking">Request Quote</a>
              </Button>
            </CardFooter>
            
            {/* Star decorations */}
            <Star size={3} top="30%" right="20%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Star size={4} bottom="25%" left="15%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </Card>

          <Card className="dashboard-card relative overflow-hidden group">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Digital Marketing</CardTitle>
              <CardDescription>Ads & Marketing Services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Facebook Ads Management</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Google Ads Campaigns</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Social Media Marketing</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Analytics & Performance Tracking</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Conversion Rate Optimization</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <a href="#booking">Request Quote</a>
              </Button>
            </CardFooter>
            
            {/* Star decorations */}
            <Star size={3} top="20%" left="20%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Star size={4} bottom="20%" right="15%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
