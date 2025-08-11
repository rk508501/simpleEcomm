import { Product } from '@/contexts/CartContext';
import headphonesImg from '@/assets/headphones.jpg';
import smartwatchImg from '@/assets/smartwatch.jpg';
import speakerImg from '@/assets/speaker.jpg';
import laptopImg from '@/assets/laptop.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: headphonesImg,
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality for the ultimate listening experience.'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249.99,
    image: smartwatchImg,
    description: 'Advanced fitness tracking smartwatch with heart rate monitoring, GPS, and long-lasting battery life.'
  },
  {
    id: '3',
    name: 'Portable Bluetooth Speaker',
    price: 89.99,
    image: speakerImg,
    description: 'Compact wireless speaker with powerful sound, waterproof design, and 24-hour battery life.'
  },
  {
    id: '4',
    name: 'MacBook Pro 16-inch',
    price: 2499.99,
    image: laptopImg,
    description: 'Professional laptop with M3 Pro chip, stunning Liquid Retina XDR display, and all-day battery life.'
  },
  {
    id: '5',
    name: 'Wireless Mouse Pro',
    price: 79.99,
    image: headphonesImg, // Reusing image for demo
    description: 'Ergonomic wireless mouse with precision tracking, customizable buttons, and fast charging.'
  },
  {
    id: '6',
    name: 'USB-C Hub Adapter',
    price: 49.99,
    image: speakerImg, // Reusing image for demo
    description: 'Multi-port USB-C hub with HDMI, USB 3.0, SD card reader, and fast charging pass-through.'
  }
];