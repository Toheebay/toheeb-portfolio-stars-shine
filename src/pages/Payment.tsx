
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Star from "@/components/Star";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Payment = () => {
  const { toast } = useToast();
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");

  useEffect(() => {
    toast({
      title: "Redirecting to payment",
      description: "You will be redirected to our payment processor shortly.",
    });
  }, [toast]);

  const handlePayment = () => {
    // Different payment links for different currencies
    const paymentLinks = {
      NGN: 'https://flutterwave.com/pay/c15bnectv5sa',
      USD: 'https://flutterwave.com/pay/c15bnectv5sa' // Use the same link or replace with USD-specific link
    };
    
    window.location.href = paymentLinks[currency];
  };

  // Calculate prices based on currency
  const getPrice = () => {
    return currency === "NGN" ? "₦35,000" : "$50";
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center relative px-4">
      {/* Payment container */}
      <div className="bg-lightNavy border border-lightestNavy rounded-lg p-8 max-w-lg w-full shadow-lg relative">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to Business Automation</h1>
        
        <div className="mb-8">
          <p className="text-lightSlate text-center mb-4">
            Select your preferred currency:
          </p>
          <div className="flex justify-center mb-6">
            <Select
              value={currency}
              onValueChange={(value) => setCurrency(value as "NGN" | "USD")}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NGN">Nigerian Naira (₦)</SelectItem>
                <SelectItem value="USD">US Dollar ($)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-lightSlate mb-2">Total Amount:</p>
            <p className="text-2xl font-bold text-green">{getPrice()}</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={handlePayment}
            className="btn-red px-8 py-3 rounded-md text-lg font-medium"
          >
            Pay Now
          </button>
        </div>
      </div>

      {/* Background stars */}
      <Star size={4} top="10%" left="5%" color="red" />
      <Star size={3} top="20%" right="10%" />
      <Star size={5} bottom="15%" left="10%" color="red" />
      <Star size={3} bottom="20%" right="15%" />
    </div>
  );
};

export default Payment;
