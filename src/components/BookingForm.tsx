
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Calendar, Clock, MessageSquare, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Star from './Star';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
    paymentMethod: 'creditCard',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    
    // Show success message
    toast({
      title: "Appointment Scheduled",
      description: "We'll confirm your booking via email shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: '',
      paymentMethod: 'creditCard',
    });
  };

  return (
    <section id="booking" className="section relative">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book an Appointment</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Schedule a consultation to discuss your software needs and how we can help your business succeed.
          </p>
        </div>

        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle>Request Consultation</CardTitle>
            <CardDescription>
              Fill out the form below to schedule your appointment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-lightestNavy border border-lightestNavy rounded-md focus:outline-none focus:ring-2 focus:ring-green/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-lightestNavy border border-lightestNavy rounded-md focus:outline-none focus:ring-2 focus:ring-green/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-lightestNavy border border-lightestNavy rounded-md focus:outline-none focus:ring-2 focus:ring-green/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-lightestNavy border border-lightestNavy rounded-md focus:outline-none focus:ring-2 focus:ring-green/50"
                  >
                    <option value="">Select a service</option>
                    <option value="software">Software Package ($249)</option>
                    <option value="ecommerce">eCommerce Development</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium flex items-center">
                    <Calendar className="h-4 w-4 mr-1" /> Preferred Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-lightestNavy border border-lightestNavy rounded-md focus:outline-none focus:ring-2 focus:ring-green/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> Preferred Time
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-lightestNavy border border-lightestNavy rounded-md focus:outline-none focus:ring-2 focus:ring-green/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" /> Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-lightestNavy border border-lightestNavy rounded-md focus:outline-none focus:ring-2 focus:ring-green/50"
                ></textarea>
              </div>
              
              {/* Payment method selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <CreditCard className="h-4 w-4 mr-1" /> Payment Method
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-center space-x-2 p-3 border border-lightestNavy rounded-md bg-lightestNavy/50">
                    <input
                      type="radio"
                      id="creditCard"
                      name="paymentMethod"
                      value="creditCard"
                      checked={formData.paymentMethod === 'creditCard'}
                      onChange={handleChange}
                      className="h-4 w-4 text-green"
                    />
                    <label htmlFor="creditCard" className="cursor-pointer">Credit Card</label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-3 border border-lightestNavy rounded-md bg-lightestNavy/50">
                    <input
                      type="radio"
                      id="bankTransfer"
                      name="paymentMethod"
                      value="bankTransfer"
                      checked={formData.paymentMethod === 'bankTransfer'}
                      onChange={handleChange}
                      className="h-4 w-4 text-green"
                    />
                    <label htmlFor="bankTransfer" className="cursor-pointer">Bank Transfer</label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-3 border border-lightestNavy rounded-md bg-lightestNavy/50">
                    <input
                      type="radio"
                      id="paypal"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleChange}
                      className="h-4 w-4 text-green"
                    />
                    <label htmlFor="paypal" className="cursor-pointer">PayPal</label>
                  </div>
                </div>
              </div>
              
              {formData.paymentMethod === 'bankTransfer' && (
                <div className="p-4 bg-lightestNavy rounded-md">
                  <h4 className="font-medium mb-2">Bank Transfer Information</h4>
                  <p className="text-sm text-slate mb-1">Bank: Zenith Bank (Nigeria)</p>
                  <p className="text-sm text-slate mb-1">Account Name: Adebayo Toheeb</p>
                  <p className="text-sm text-slate mb-1">Account Number: 2428731638</p>
                  <p className="text-sm text-slate">Please include your name as reference</p>
                </div>
              )}
              
              <Button type="submit" className="w-full md:w-auto">
                Schedule & Pay for Appointment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      
      {/* Background stars */}
      <Star size={4} top="10%" left="5%" />
      <Star size={3} top="15%" right="8%" />
      <Star size={5} bottom="10%" left="10%" />
      <Star size={3} bottom="15%" right="10%" />
    </section>
  );
};

export default BookingForm;
