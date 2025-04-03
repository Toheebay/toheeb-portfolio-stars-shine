
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Star from "@/components/Star";

const Payment = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Redirecting to payment",
      description: "You will be redirected to our payment processor shortly.",
    });
  }, [toast]);

  const handlePayment = () => {
    window.location.href = 'https://flutterwave.com/pay/c15bnectv5sa';
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center relative px-4">
      {/* Payment container */}
      <div className="bg-lightNavy border border-lightestNavy rounded-lg p-8 max-w-lg w-full shadow-lg relative">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to Business Automation</h1>
        <p className="text-lightSlate text-center mb-8">
          To proceed with payment, click the button below:
        </p>
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
