const products = [
  {
    sku: "HD1001",
    name: "Wireless Headphones",
    price: "$99.99",
    specs: "Bluetooth 5.0, 20h battery, Noise Cancelling",
  },
  {
    sku: "LP2002",
    name: "Laptop Pro 14",
    price: "$1299.00",
    specs: 'Intel i7, 16GB RAM, 512GB SSD, 14" Display',
  },
  {
    sku: "SW3003",
    name: "Smartwatch X",
    price: "$199.99",
    specs: "Heart Rate, GPS, Waterproof, 7d battery",
  },
  {
    sku: "SP4004",
    name: "Bluetooth Speaker",
    price: "$49.99",
    specs: "10W Output, Waterproof, 12h battery",
  },
  {
    sku: "PH5005",
    name: "Phone Max",
    price: "$899.00",
    specs: '6.7" OLED, 128GB, Triple Camera',
  },
  {
    sku: "TB6006",
    name: "Tablet Air",
    price: "$499.00",
    specs: '10.5" Display, 64GB, WiFi+LTE',
  },
  {
    sku: "CM7007",
    name: "Camera Pro",
    price: "$599.00",
    specs: "24MP, 4K Video, WiFi",
  },
  {
    sku: "MS8008",
    name: "Monitor UltraWide",
    price: "$349.00",
    specs: '34" IPS, 144Hz, HDR',
  },
  {
    sku: "KB9009",
    name: "Mechanical Keyboard",
    price: "$89.99",
    specs: "RGB, Blue Switches, USB-C",
  },
  {
    sku: "MC1010",
    name: "Mouse Wireless",
    price: "$39.99",
    specs: "16000 DPI, Rechargeable, Silent Clicks",
  },
];

export default function Prices() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Product Prices</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">SKU</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Specifications</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.sku}>
              <td className="border px-4 py-2">{p.sku}</td>
              <td className="border px-4 py-2">{p.name}</td>
              <td className="border px-4 py-2">{p.price}</td>
              <td className="border px-4 py-2">{p.specs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
