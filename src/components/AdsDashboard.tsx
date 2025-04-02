
import { BarChart, Target, TrendingUp, Globe, Megaphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Star from './Star';

const AdsDashboard = () => {
  return (
    <section id="ads" className="section relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Advertising Services</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Strategic ad campaigns that drive traffic, conversions, and growth across multiple platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="dashboard-card h-full relative group">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Megaphone className="mr-2 h-5 w-5 text-green" />
                Facebook Ads Management
              </CardTitle>
              <CardDescription>Targeted social media advertising</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Custom audience targeting</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Ad creative design & copywriting</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Conversion tracking implementation</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>A/B testing & optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Monthly performance reporting</span>
                </div>
              </div>
            </CardContent>
            
            {/* Animated stars */}
            <Star size={3} top="15%" right="10%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Star size={4} bottom="20%" left="15%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </Card>

          <Card className="dashboard-card h-full relative group">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5 text-green" />
                Google Ads Management
              </CardTitle>
              <CardDescription>Search & display advertising</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Keyword research & selection</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Ad group & campaign structuring</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Negative keyword implementation</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Ad extensions optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green mr-2"></div>
                  <span>Bid management & budget allocation</span>
                </div>
              </div>
            </CardContent>
            
            {/* Animated stars */}
            <Star size={3} top="25%" left="10%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Star size={4} bottom="15%" right="15%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="dashboard-card text-center relative group animate-float">
            <CardContent className="pt-6">
              <BarChart className="h-10 w-10 text-green mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Data-Driven Results</h3>
              <p className="text-sm text-slate">Making decisions backed by analytics and performance metrics</p>
              
              {/* Animated stars */}
              <Star size={3} top="15%" right="15%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>

          <Card className="dashboard-card text-center relative group animate-float">
            <CardContent className="pt-6">
              <Target className="h-10 w-10 text-green mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Targeted Campaigns</h3>
              <p className="text-sm text-slate">Reaching the right audience at the right time with precision</p>
              
              {/* Animated stars */}
              <Star size={3} top="25%" left="15%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>

          <Card className="dashboard-card text-center relative group animate-float">
            <CardContent className="pt-6">
              <TrendingUp className="h-10 w-10 text-green mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Growth Strategy</h3>
              <p className="text-sm text-slate">Scaling campaigns strategically to maximize ROI</p>
              
              {/* Animated stars */}
              <Star size={3} bottom="25%" right="15%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Background stars */}
      <Star size={5} top="15%" left="8%" />
      <Star size={3} top="30%" right="10%" />
      <Star size={4} bottom="20%" left="15%" />
      <Star size={3} bottom="10%" right="12%" />
    </section>
  );
};

export default AdsDashboard;
