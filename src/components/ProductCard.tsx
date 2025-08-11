import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Product, useCart } from '@/contexts/CartContext';
import { Plus, Check } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem, state } = useCart();
  const { toast } = useToast();
  const [isAdding, setIsAdding] = useState(false);
  
  const isInCart = state.items.some(item => item.id === product.id);

  const handleAddToCart = async () => {
    setIsAdding(true);
    await new Promise(resolve => setTimeout(resolve, 300)); // Nice animation delay
    
    addItem(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
    
    setIsAdding(false);
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
            ${product.price.toFixed(2)}
          </Badge>
          
          {isInCart && (
            <Badge variant="outline" className="text-success border-success">
              <Check className="h-3 w-3 mr-1" />
              In Cart
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          disabled={isAdding}
          className="w-full transition-all duration-300 hover:shadow-[var(--shadow-hover)]"
          size="sm"
        >
          {isAdding ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
              Adding...
            </div>
          ) : (
            <>
              <Plus className="h-4 w-4 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};