
import { Search, Facebook, Lock, Share2, Link } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import Star from './Star';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from './ui/form';
import { useForm } from 'react-hook-form';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const FacebookAds = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adLinkUrl, setAdLinkUrl] = useState('');
  const [sharedLinks, setSharedLinks] = useState<{id: number, url: string, name: string, date: string}[]>([
    { id: 1, url: 'https://facebook.com/ads/123456', name: 'Summer Campaign', date: '2025-04-05' },
    { id: 2, url: 'https://facebook.com/ads/789012', name: 'Product Launch', date: '2025-04-08' },
  ]);
  const [accounts, setAccounts] = useState([
    { id: 1, username: 'business_promo1', status: 'Active', budget: '$500', performance: 'Good' },
    { id: 2, username: 'marketingexpert', status: 'Paused', budget: '$250', performance: 'Average' },
    { id: 3, username: 'socialshop', status: 'Active', budget: '$750', performance: 'Excellent' },
    { id: 4, username: 'digitaladvertiser', status: 'Pending', budget: '$350', performance: 'N/A' },
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
        description: "Welcome to the Facebook Ads management panel",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Incorrect username or password",
        variant: "destructive",
      });
    }
  };

  const filteredAccounts = accounts.filter(account => 
    account.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleStatus = (id: number) => {
    setAccounts(accounts.map(account => {
      if (account.id === id) {
        const newStatus = account.status === 'Active' ? 'Paused' : 
                          account.status === 'Paused' ? 'Active' : account.status;
        return { ...account, status: newStatus };
      }
      return account;
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

        {/* Facebook Account Management Section with Admin Authentication */}
        <div className="bg-red/10 p-8 rounded-lg border border-red/20 relative overflow-hidden mb-12">
          <h3 className="text-2xl font-bold mb-6 text-red">Facebook Account Management</h3>
          
          {!isAdmin ? (
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-red mr-2" />
                <h4 className="text-xl font-bold text-red">Admin Login</h4>
              </div>
              <p className="text-sm text-navy text-center mb-6">
                Please login with admin credentials to manage Facebook ad accounts
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
                          <Input placeholder="Enter admin username" {...field} />
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
                          <Input type="password" placeholder="Enter admin password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-center">
                    <button 
                      type="submit" 
                      className="bg-red hover:bg-red/80 text-white px-6 py-2 rounded-md transition-colors"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </Form>
            </div>
          ) : (
            <>
              <Tabs defaultValue="accounts" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="accounts">Accounts</TabsTrigger>
                  <TabsTrigger value="adlinks">Ad Links</TabsTrigger>
                </TabsList>
                
                <TabsContent value="accounts">
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <Search className="w-5 h-5 text-gray-500" />
                    </div>
                    <Input
                      type="search"
                      className="pl-10 bg-white border-red/20 focus:border-red"
                      placeholder="Search Facebook username..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="bg-white rounded-lg overflow-hidden border border-red/20">
                    <Table>
                      <TableHeader className="bg-red/5">
                        <TableRow>
                          <TableHead>Username</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Budget</TableHead>
                          <TableHead>Performance</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredAccounts.length > 0 ? (
                          filteredAccounts.map(account => (
                            <TableRow key={account.id}>
                              <TableCell className="font-medium">{account.username}</TableCell>
                              <TableCell>
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  account.status === 'Active' ? 'bg-green-100 text-green-800' : 
                                  account.status === 'Paused' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {account.status}
                                </span>
                              </TableCell>
                              <TableCell>{account.budget}</TableCell>
                              <TableCell>{account.performance}</TableCell>
                              <TableCell>
                                <button 
                                  onClick={() => toggleStatus(account.id)} 
                                  className="text-xs bg-red hover:bg-red/80 text-white px-2 py-1 rounded"
                                >
                                  {account.status === 'Active' ? 'Pause' : account.status === 'Paused' ? 'Activate' : 'Manage'}
                                </button>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-4">No accounts found</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                
                <TabsContent value="adlinks">
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-red">Share New Ad Link</h4>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Input 
                          value={adLinkUrl} 
                          onChange={(e) => setAdLinkUrl(e.target.value)} 
                          placeholder="Enter Facebook ad link URL" 
                          className="border-red/20 focus:border-red"
                        />
                      </div>
                      <Button 
                        onClick={shareAdLink} 
                        className="bg-red hover:bg-red/80 text-white"
                      >
                        <Share2 className="mr-2 h-4 w-4" /> Share
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg overflow-hidden border border-red/20">
                    <Table>
                      <TableHeader className="bg-red/5">
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
                                  <Link className="h-4 w-4 mr-1 text-red" />
                                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-red hover:underline truncate max-w-[200px]">
                                    {link.url}
                                  </a>
                                </div>
                              </TableCell>
                              <TableCell>{link.date}</TableCell>
                              <TableCell>
                                <button 
                                  onClick={() => deleteLink(link.id)} 
                                  className="text-xs bg-red hover:bg-red/80 text-white px-2 py-1 rounded"
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
