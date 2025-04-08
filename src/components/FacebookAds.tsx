
import { Facebook } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Star from './Star';

const FacebookAds = () => {
  return (
    <section id="facebook-ads" className="py-16 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red">Facebook Ads Management</h2>
          <p className="text-lg text-navy max-w-2xl mx-auto">
            Strategic Facebook ad campaigns designed to maximize your ROI and business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="red-card relative group animate-float shadow-lg border-red/50">
            <CardContent className="pt-6">
              <Facebook className="h-10 w-10 text-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-red">Targeted Audience</h3>
              <p className="text-sm text-navy">Reach the right customers with precision targeting based on demographics, interests, and behaviors</p>
              
              <Star size={3} top="15%" right="15%" color="red" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>

          <Card className="red-card relative group animate-float shadow-lg border-red/50">
            <CardContent className="pt-6">
              <Facebook className="h-10 w-10 text-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-red">Conversion Optimization</h3>
              <p className="text-sm text-navy">Maximize click-through rates and conversions with optimized ad creatives and campaigns</p>
              
              <Star size={3} top="25%" left="15%" color="red" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>

          <Card className="red-card relative group animate-float shadow-lg border-red/50">
            <CardContent className="pt-6">
              <Facebook className="h-10 w-10 text-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-red">Performance Analytics</h3>
              <p className="text-sm text-navy">Detailed reporting and analytics on campaign performance, ROI tracking, and audience insights</p>
              
              <Star size={3} bottom="25%" right="15%" color="red" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>
        </div>

        <div className="bg-red/10 p-8 rounded-lg border border-red/20 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-red">Professional Facebook Ads Management</h3>
              <p className="text-navy mb-6">
                We create and manage high-performing Facebook ad campaigns that drive traffic, conversions, and brand awareness.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red mr-2"></div>
                  <span className="text-navy">Custom audience creation and targeting</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red mr-2"></div>
                  <span className="text-navy">Ad creative design and copywriting</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red mr-2"></div>
                  <span className="text-navy">Budget optimization and bid management</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red mr-2"></div>
                  <span className="text-navy">A/B testing and performance optimization</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red mr-2"></div>
                  <span className="text-navy">Detailed performance reporting</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <div className="red-glow p-8 rounded-full bg-white border-2 border-red/30">
                <Facebook className="h-32 w-32 text-red" />
              </div>
            </div>
          </div>
          
          {/* Background stars */}
          <Star size={4} top="10%" left="5%" color="red" />
          <Star size={3} top="20%" right="10%" color="red" />
          <Star size={5} bottom="15%" left="10%" color="red" />
          <Star size={3} bottom="20%" right="15%" color="red" />
        </div>
      </div>
    </section>
  );
};

export default FacebookAds;
