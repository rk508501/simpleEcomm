import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent mb-6">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Shop our curated collection of premium tech products and accessories designed to enhance your digital lifestyle.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;