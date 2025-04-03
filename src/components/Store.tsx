
import { useState } from 'react';
import { ShoppingCart, PlusCircle, MinusCircle, ShoppingBag, Tv, Laptop, Smartphone, Bike, Zap } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useToast } from '@/hooks/use-toast';
import Star from './Star';

// Product type definition
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

// Cart item type definition
interface CartItem extends Product {
  quantity: number;
}

const Store = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  // Sample products data
  const products: Product[] = [
    {
      id: 1,
      name: "50\" Smart TV",
      price: 499.99,
      image: "tv",
      category: "Television",
      description: "4K Ultra HD Smart TV with built-in streaming apps"
    },
    {
      id: 2,
      name: "Gaming Laptop",
      price: 899.99,
      image: "laptop",
      category: "Computers",
      description: "High-performance gaming laptop with dedicated graphics"
    },
    {
      id: 3,
      name: "Electric Blender",
      price: 79.99,
      image: "blender",
      category: "Kitchen Appliances",
      description: "Powerful blender for smoothies and food processing"
    },
    {
      id: 4,
      name: "Mountain Bicycle",
      price: 349.99,
      image: "bicycle",
      category: "Sports",
      description: "All-terrain mountain bike with 21 speeds"
    },
    {
      id: 5,
      name: "Refrigerator",
      price: 799.99,
      image: "fridge",
      category: "Appliances",
      description: "Energy-efficient refrigerator with freezer compartment"
    },
    {
      id: 6,
      name: "Power Bank 20000mAh",
      price: 49.99,
      image: "powerbank",
      category: "Electronics",
      description: "Fast-charging power bank with multiple ports"
    },
    {
      id: 7,
      name: "Stainless Steel Dish Set",
      price: 89.99,
      image: "dishes",
      category: "Kitchenware",
      description: "Premium stainless steel dish set, dishwasher safe"
    },
    {
      id: 8,
      name: "Smartphone",
      price: 599.99,
      image: "smartphone",
      category: "Electronics",
      description: "Latest model smartphone with advanced camera system"
    }
  ];

  // Add to cart function
  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  // Remove from cart function
  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map(item => 
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevItems.filter(item => item.id !== productId);
      }
    });
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Get product icon based on category
  const getProductIcon = (category: string) => {
    switch(category.toLowerCase()) {
      case 'television':
        return <Tv className="h-12 w-12 text-green" />;
      case 'computers':
        return <Laptop className="h-12 w-12 text-green" />;
      case 'sports':
        return <Bike className="h-12 w-12 text-green" />; // Changed from Bicycle to Bike
      case 'electronics':
        return <Smartphone className="h-12 w-12 text-green" />;
      case 'appliances':
        return <Zap className="h-12 w-12 text-green" />;
      default:
        return <ShoppingBag className="h-12 w-12 text-green" />;
    }
  };

  // Handle checkout
  const handleCheckout = () => {
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to payment page...",
    });
    
    // Here we would normally redirect to a payment processor
    // For demo purposes we'll just clear the cart after a delay
    setTimeout(() => {
      setCartItems([]);
      setShowCart(false);
      toast({
        title: "Purchase successful!",
        description: "Thank you for your purchase.",
      });
    }, 2000);
  };

  return (
    <section id="store" className="section bg-navy relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Electronics Store</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Browse our selection of high-quality electronics and home appliances at competitive prices.
          </p>
        </div>

        {/* Cart button */}
        <div className="fixed top-24 right-6 z-50">
          <Button 
            onClick={() => setShowCart(!showCart)} 
            className="relative p-3"
            variant="secondary"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItems.length > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-green text-navy">{cartItems.length}</Badge>
            )}
          </Button>
        </div>

        {/* Cart panel */}
        {showCart && (
          <div className="fixed top-40 right-6 w-80 bg-lightNavy rounded-lg shadow-lg z-50 border border-lightestNavy p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Your Cart</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowCart(false)}>Close</Button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-center py-4 text-slate">Your cart is empty</p>
            ) : (
              <>
                <div className="max-h-64 overflow-y-auto space-y-3 mb-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center p-2 rounded border border-lightestNavy">
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-slate">${item.price.toFixed(2)} x {item.quantity}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                          <MinusCircle className="h-4 w-4" />
                        </Button>
                        <span>{item.quantity}</span>
                        <Button variant="ghost" size="icon" onClick={() => addToCart(item)}>
                          <PlusCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-lightestNavy pt-3 mb-4">
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </>
            )}
          </div>
        )}

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <Card key={product.id} className="dashboard-card relative group">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  {getProductIcon(product.category)}
                </div>
                <CardTitle className="text-center">
                  {product.name}
                </CardTitle>
                <p className="text-center text-green font-bold text-xl">
                  ${product.price.toFixed(2)}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate text-center mb-3">
                  {product.description}
                </p>
                <Badge className="mx-auto block w-fit mb-2">
                  {product.category}
                </Badge>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={() => addToCart(product)}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
              <Star size={3} top="20%" right="10%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Star size={2} bottom="30%" left="10%" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
      </div>

      {/* Background stars */}
      <Star size={4} top="10%" left="5%" />
      <Star size={3} top="15%" right="8%" />
      <Star size={5} bottom="15%" left="12%" />
      <Star size={3} bottom="20%" right="10%" />
    </section>
  );
};

export default Store;
