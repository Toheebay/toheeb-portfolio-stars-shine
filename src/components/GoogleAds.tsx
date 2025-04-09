
import { Search, BarChart4, Lock, Share2, Link, Layers } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import Star from './Star';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from './ui/form';
import { useForm } from 'react-hook-form';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const GoogleAds = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adLinkUrl, setAdLinkUrl] = useState('');
  const [sharedLinks, setSharedLinks] = useState<{id: number, url: string, name: string, date: string}[]>([
    { id: 1, url: 'https://ads.google.com/campaign/123456', name: 'Search Campaign', date: '2025-04-07' },
    { id: 2, url: 'https://ads.google.com/campaign/789012', name: 'Display Campaign', date: '2025-04-09' },
  ]);
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: 'Brand Awareness', status: 'Active', budget: '$800', type: 'Search' },
    { id: 2, name: 'Product Promotion', status: 'Paused', budget: '$500', type: 'Display' },
    { id: 3, name: 'Remarketing', status: 'Active', budget: '$350', type: 'Remarketing' },
    { id: 4, name: 'Video Promotion', status: 'Pending', budget: '$650', type: 'Video' },
  ]);

  // Admin credentials
  const adminUsername = "Adebayo";
  const adminPassword = "Cyylinder1@";

  // Login form
  const loginForm = useForm({
    defaultValues: {
      username: '',
      password: '',
    }
  });

  const onLogin = (data: { username: string; password: string }) => {
    if (data.username === adminUsername && data.password === adminPassword) {
      setIsAdmin(true);
      toast({
        title: "Login successful",
        description: "Welcome to the Google Ads management panel",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Incorrect username or password",
        variant: "destructive",
      });
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => 
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleStatus = (id: number) => {
    setCampaigns(campaigns.map(campaign => {
      if (campaign.id === id) {
        const newStatus = campaign.status === 'Active' ? 'Paused' : 
                          campaign.status === 'Paused' ? 'Active' : campaign.status;
        return { ...campaign, status: newStatus };
      }
      return campaign;
    }));
  };

  const shareAdLink = () => {
    if (adLinkUrl.trim() === '') {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }

    const newLink = {
      id: sharedLinks.length + 1,
      url: adLinkUrl,
      name: `Campaign ${sharedLinks.length + 1}`,
      date: new Date().toISOString().split('T')[0]
    };

    setSharedLinks([...sharedLinks, newLink]);
    setAdLinkUrl('');
    toast({
      title: "Link shared",
      description: "Ad link has been successfully shared",
    });
  };

  const deleteLink = (id: number) => {
    setSharedLinks(sharedLinks.filter(link => link.id !== id));
    toast({
      title: "Link deleted",
      description: "Ad link has been removed",
    });
  };

  // Google Ads primary colors
  const primaryColor = "#4285F4"; // Google blue
  const secondaryColor = "#34A853"; // Google green
  const accentColor = "#EA4335"; // Google red
  const yellowColor = "#FBBC05"; // Google yellow

  return (
    <section id="google-ads" className="py-16 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: primaryColor}}>Google Ads Management</h2>
          <p className="text-lg text-navy max-w-2xl mx-auto">
            Drive qualified traffic, increase conversions, and maximize your ROI with our strategic Google Ads campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { color: primaryColor, title: "Search Ads", icon: Search, description: "Target customers actively searching for your products or services" },
            { color: secondaryColor, title: "Display Ads", icon: Layers, description: "Reach potential customers with engaging visual ads across the web" },
            { color: accentColor, title: "Video Ads", icon: BarChart4, description: "Engage your audience with compelling video content on YouTube" },
            { color: yellowColor, title: "Shopping Ads", icon: BarChart4, description: "Showcase your products directly in Google search results" }
          ].map((item, index) => (
            <Card key={index} className="group animate-float shadow-lg" style={{borderColor: `${item.color}30`}}>
              <CardContent className="pt-6">
                <item.icon style={{color: item.color}} className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{color: item.color}}>{item.title}</h3>
                <p className="text-sm text-navy">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Account Management Section with Admin Authentication */}
        <div className="p-8 rounded-lg border relative overflow-hidden mb-12" 
          style={{backgroundColor: `${primaryColor}10`, borderColor: `${primaryColor}20`}}>
          <h3 className="text-2xl font-bold mb-6" style={{color: primaryColor}}>Google Ads Management</h3>
          
          {!isAdmin ? (
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 mr-2" style={{color: primaryColor}} />
                <h4 className="text-xl font-bold" style={{color: primaryColor}}>Admin Login</h4>
              </div>
              <p className="text-sm text-navy text-center mb-6">
                Please login with admin credentials to manage Google ad campaigns
              </p>
              
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
                  <FormField
                    control={loginForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter admin username" {...field} 
                            style={{borderColor: `${primaryColor}30`}} 
                            className="focus:border-blue-500" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Enter admin password" {...field} 
                            style={{borderColor: `${primaryColor}30`}} 
                            className="focus:border-blue-500" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-center">
                    <button 
                      type="submit" 
                      className="text-white px-6 py-2 rounded-md transition-colors"
                      style={{backgroundColor: primaryColor}}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </Form>
            </div>
          ) : (
            <>
              <Tabs defaultValue="campaigns" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
                  <TabsTrigger value="adlinks">Ad Links</TabsTrigger>
                </TabsList>
                
                <TabsContent value="campaigns">
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <Search className="w-5 h-5 text-gray-500" />
                    </div>
                    <Input
                      type="search"
                      className="pl-10 bg-white"
                      style={{borderColor: `${primaryColor}20`}}
                      placeholder="Search campaign name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="bg-white rounded-lg overflow-hidden border" style={{borderColor: `${primaryColor}20`}}>
                    <Table>
                      <TableHeader style={{backgroundColor: `${primaryColor}05`}}>
                        <TableRow>
                          <TableHead>Campaign</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Budget</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredCampaigns.length > 0 ? (
                          filteredCampaigns.map(campaign => (
                            <TableRow key={campaign.id}>
                              <TableCell className="font-medium">{campaign.name}</TableCell>
                              <TableCell>{campaign.type}</TableCell>
                              <TableCell>
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  campaign.status === 'Active' ? 'bg-green-100 text-green-800' : 
                                  campaign.status === 'Paused' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {campaign.status}
                                </span>
                              </TableCell>
                              <TableCell>{campaign.budget}</TableCell>
                              <TableCell>
                                <button 
                                  onClick={() => toggleStatus(campaign.id)} 
                                  className="text-xs text-white px-2 py-1 rounded"
                                  style={{backgroundColor: primaryColor}}
                                >
                                  {campaign.status === 'Active' ? 'Pause' : campaign.status === 'Paused' ? 'Activate' : 'Manage'}
                                </button>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-4">No campaigns found</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                
                <TabsContent value="adlinks">
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h4 className="text-lg font-semibold mb-3" style={{color: primaryColor}}>Share New Ad Link</h4>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Input 
                          value={adLinkUrl} 
                          onChange={(e) => setAdLinkUrl(e.target.value)} 
                          placeholder="Enter Google ads link URL" 
                          style={{borderColor: `${primaryColor}20`}}
                        />
                      </div>
                      <Button 
                        onClick={shareAdLink} 
                        className="text-white"
                        style={{backgroundColor: primaryColor}}
                      >
                        <Share2 className="mr-2 h-4 w-4" /> Share
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg overflow-hidden border" style={{borderColor: `${primaryColor}20`}}>
                    <Table>
                      <TableHeader style={{backgroundColor: `${primaryColor}05`}}>
                        <TableRow>
                          <TableHead>Campaign</TableHead>
                          <TableHead>Link</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sharedLinks.length > 0 ? (
                          sharedLinks.map(link => (
                            <TableRow key={link.id}>
                              <TableCell className="font-medium">{link.name}</TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <Link className="h-4 w-4 mr-1" style={{color: primaryColor}} />
                                  <a 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="hover:underline truncate max-w-[200px]"
                                    style={{color: primaryColor}}
                                  >
                                    {link.url}
                                  </a>
                                </div>
                              </TableCell>
                              <TableCell>{link.date}</TableCell>
                              <TableCell>
                                <button 
                                  onClick={() => deleteLink(link.id)} 
                                  className="text-xs text-white px-2 py-1 rounded"
                                  style={{backgroundColor: primaryColor}}
                                >
                                  Delete
                                </button>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center py-4">No ad links shared yet</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => setIsAdmin(false)} 
                  className="text-sm bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-1 rounded-md"
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>

        <div className="p-8 rounded-lg border relative overflow-hidden" 
          style={{backgroundColor: `${primaryColor}10`, borderColor: `${primaryColor}20`}}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{color: primaryColor}}>Professional Google Ads Management</h3>
              <p className="text-navy mb-6">
                We create and manage high-performing Google ad campaigns that drive traffic, conversions, and revenue growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {color: primaryColor, text: "Search Campaigns"},
                  {color: secondaryColor, text: "Display Campaigns"},
                  {color: accentColor, text: "Video Campaigns"},
                  {color: yellowColor, text: "Shopping Campaigns"},
                  {color: primaryColor, text: "Keyword Research"},
                  {color: secondaryColor, text: "Landing Page Optimization"},
                  {color: accentColor, text: "Conversion Tracking"},
                  {color: yellowColor, text: "Analytics & Reporting"}
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 rounded-full mr-2" style={{backgroundColor: item.color}}></div>
                    <span className="text-navy">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="p-6 rounded-full bg-white border-2 shadow-lg" 
                style={{
                  borderColor: `${primaryColor}30`, 
                  boxShadow: `0 0 15px -2px ${primaryColor}`
                }}>
                <div className="grid grid-cols-2 gap-2">
                  <div className="w-16 h-16 rounded-full" style={{backgroundColor: primaryColor}}></div>
                  <div className="w-16 h-16 rounded-full" style={{backgroundColor: accentColor}}></div>
                  <div className="w-16 h-16 rounded-full" style={{backgroundColor: yellowColor}}></div>
                  <div className="w-16 h-16 rounded-full" style={{backgroundColor: secondaryColor}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleAds;
