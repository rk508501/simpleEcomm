import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Store } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useCart } from "@/contexts/CartContext";

export const Header = () => {
  const location = useLocation();
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Store className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            ShopHub
          </span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            Products
          </Link>
          <Link
            to="/prices"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/prices"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            Prices
          </Link>

          <Link to="/cart">
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {itemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {itemCount}
                </Badge>
              )}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
