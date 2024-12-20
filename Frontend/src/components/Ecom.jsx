import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Home,
  BookOpen,
  ShoppingBag,
  Activity,
  Stethoscope,
  MessageCircle,
  Sun,
  Moon,
  ChevronDown,
  Search,
  Filter,
  Heart,
  Star,
  Package,
  Droplet,
  Zap,
  Leaf,
  Coffee,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Organic Cotton Pads",
    brand: "EcoFlow",
    price: 8.99,
    oldPrice: 10.99,
    icon: <Package className="h-12 w-12 text-pink-500" />,
    rating: 4.5,
    category: "Pads",
  },
  {
    id: 2,
    name: "Menstrual Cup",
    brand: "LunaCup",
    price: 29.99,
    oldPrice: 34.99,
    icon: <Droplet className="h-12 w-12 text-blue-500" />,
    rating: 4.8,
    category: "Menstrual Cups",
  },
  {
    id: 3,
    name: "Period Pain Relief Patches",
    brand: "ComfortEase",
    price: 15.99,
    oldPrice: 19.99,
    icon: <Zap className="h-12 w-12 text-yellow-500" />,
    rating: 4.2,
    category: "Pain Relief",
  },
  {
    id: 4,
    name: "Reusable Cloth Pads",
    brand: "GreenCycle",
    price: 24.99,
    oldPrice: 29.99,
    icon: <Leaf className="h-12 w-12 text-green-500" />,
    rating: 4.6,
    category: "Pads",
  },
  {
    id: 5,
    name: "Organic Tampons",
    brand: "PureFlow",
    price: 7.99,
    oldPrice: 9.99,
    icon: <Package className="h-12 w-12 text-purple-500" />,
    rating: 4.4,
    category: "Tampons",
  },
  {
    id: 6,
    name: "Period Tracking Bracelet",
    brand: "CycleSync",
    price: 49.99,
    oldPrice: 59.99,
    icon: <Activity className="h-12 w-12 text-indigo-500" />,
    rating: 4.1,
    category: "Accessories",
  },
];

const categories = [
  "All",
  "Pads",
  "Tampons",
  "Menstrual Cups",
  "Pain Relief",
  "Accessories",
  "Hygiene",
];

export function Ecom() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState("featured");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "All" || product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === "priceLowToHigh") return a.price - b.price;
      if (sortBy === "priceHighToLow") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // Default (featured) sorting
    });

  const SidebarLink = ({ icon, label, onClick, active = false }) => (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition-colors ${
        active
          ? "bg-pink-200 dark:bg-pink-900 text-pink-800 dark:text-pink-200"
          : "text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <div className={`flex h-screen ${darkMode ? "dark" : ""}`}>
      {/* Sidebar */}
      <aside className="bg-pink-50 dark:bg-gray-800 w-64 min-h-screen p-4">
        <nav className="mt-8 space-y-4">
          <h1 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-8">
            FlowCare
          </h1>
          <SidebarLink
            icon={<Home size={20} />}
            label="Home"
            onClick={() => navigate("/")}
          />
          <SidebarLink
            icon={<BookOpen size={20} />}
            label="Education"
            onClick={() => navigate("/blogs")}
          />
          <SidebarLink
            icon={<ShoppingBag size={20} />}
            label="Shop"
            onClick={() => navigate("/Ecom")}
            active
          />
          <SidebarLink
            icon={<Activity size={20} />}
            label="Track Your Health"
            onClick={() => navigate("/tracker")}
          />
          <SidebarLink
            icon={<Stethoscope size={20} />}
            label="Expert Consultation"
            onClick={() => navigate("/consultations")}
          />
          <SidebarLink
            icon={<MessageCircle size={20} />}
            label="AI Chatbot"
            onClick={() => navigate("/ChatBot")}
          />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto bg-white dark:bg-gray-900">
        <div className="w-[80%] px-14 rounded-lg mx-auto space-y-8 bg-pink-50">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl mt-11 font-bold text-pink-600 dark:text-pink-400">
              Shop
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              <button className="relative p-2 rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300">
                <ShoppingCart className="h-6 w-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-gray-700 dark:text-white"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-gray-700 dark:text-white"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-gray-700 dark:text-white"
            >
              <option value="featured">Featured</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors">
              <Filter className="h-5 w-5" />
              <span className="hidden md:inline">Filter</span>
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-4 flex justify-center">{product.icon}</div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {product.brand}
                  </p>
                  <div className="mt-2 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      {product.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-pink-600 dark:text-pink-400">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="ml-2 text-sm line-through text-gray-500">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`p-2 rounded-full ${
                        favorites.includes(product.id)
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    >
                      <Heart
                        className="h-6 w-6"
                        fill={
                          favorites.includes(product.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="px-3 py-2 rounded-l-md border border-gray-300 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Previous
              </a>
              <a
                href="#"
                className="px-3 py-2 border-t border-b border-gray-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                1
              </a>
              <a
                href="#"
                className="px-3 py-2 border-t border-b border-gray-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                2
              </a>
              <a
                href="#"
                className="px-3 py-2 border-t border-b border-gray-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                3
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-r-md border border-gray-300 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Next
              </a>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}
