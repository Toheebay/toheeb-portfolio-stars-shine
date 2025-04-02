
import { ShoppingCart, Users, CreditCard, ArrowUpRight, Layers } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Star from './Star';

const EcommerceDashboard = () => {
  return (
    <section id="ecommerce" className="section bg-lightNavy/50 relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">eCommerce Expertise</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Specializing in WordPress development with a focus on creating high-converting, 
            user-friendly eCommerce solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="dashboard-card relative group">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <ShoppingCart className="mr-2 h-5 w-5 text-green" />
                Store Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate">Complete WooCommerce setup with inventory and order management systems.</p>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-4 w-4 text-green" />
              </div>
            </CardContent>
            <Star size={3} top="15%" right="10%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>

          <Card className="dashboard-card relative group">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <CreditCard className="mr-2 h-5 w-5 text-green" />
                Payment Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate">Integration of multiple payment gateways for global transactions.</p>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-4 w-4 text-green" />
              </div>
            </CardContent>
            <Star size={3} top="65%" left="10%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>

          <Card className="dashboard-card relative group">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Users className="mr-2 h-5 w-5 text-green" />
                Customer Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate">UX-optimized designs with personalized shopping experiences.</p>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-4 w-4 text-green" />
              </div>
            </CardContent>
            <Star size={3} top="35%" right="15%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>

          <Card className="dashboard-card relative group">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Layers className="mr-2 h-5 w-5 text-green" />
                Multi-vendor Setup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate">Marketplace solutions with vendor management and commission systems.</p>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-4 w-4 text-green" />
              </div>
            </CardContent>
            <Star size={3} top="50%" left="20%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        </div>

        <div className="mt-12 bg-lightNavy p-6 rounded-lg border border-lightestNavy">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-green text-4xl font-bold mb-2">100+</div>
              <p className="text-lightSlate">eCommerce Stores Built</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-green text-4xl font-bold mb-2">45%</div>
              <p className="text-lightSlate">Average Conversion Increase</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-green text-4xl font-bold mb-2">24/7</div>
              <p className="text-lightSlate">Support & Maintenance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background stars */}
      <Star size={4} top="10%" left="5%" />
      <Star size={3} top="20%" right="8%" />
      <Star size={5} bottom="15%" left="12%" />
      <Star size={3} bottom="25%" right="15%" />
    </section>
  );
};

export default EcommerceDashboard;
