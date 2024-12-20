import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
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
  MapPin,
  User,
  Calendar,
  Phone,
  ArrowRight,
  Star,
} from "lucide-react";

const cities = [
  "Hyderabad",
  "Mumbai",
  "Delhi",
  "Gurgaon",
  "Noida",
  "Chandigarh",
];
const specializations = [
  "Obstetrics",
  "Gynecology",
  "Urogynecology",
  "Reproductive Medicine",
];

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Obstetrics & Gynecology",
    hospital: "Care Hospitals",
    rating: 4.8,
    experience: "15 years",
    consultationFee: "$100",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Dr. Emily Chen",
    specialization: "Reproductive Medicine",
    hospital: "Fertility Center",
    rating: 4.9,
    experience: "12 years",
    consultationFee: "$120",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    id: 3,
    name: "Dr. Michael Brown",
    specialization: "Urogynecology",
    hospital: "Women's Health Clinic",
    rating: 4.7,
    experience: "18 years",
    consultationFee: "$110",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 4,
    name: "Dr. Lisa Taylor",
    specialization: "Gynecologic Oncology",
    hospital: "Cancer Care Institute",
    rating: 4.9,
    experience: "20 years",
    consultationFee: "$150",
    image: "https://randomuser.me/api/portraits/women/91.jpg",
  },
  {
    id: 5,
    name: "Dr. David Wilson",
    specialization: "Reproductive Endocrinology",
    hospital: "Fertility Solutions",
    rating: 4.8,
    experience: "14 years",
    consultationFee: "$130",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
];

export function Consultations() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
            active
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
        <div className="w-[80%] px-12 bg-pink-50 rounded-lg mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-pink-600 dark:text-pink-400 mt-11">
              Expert Consultation
            </h1>
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
          </div>

          {/* Appointment Booking Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-pink-600 dark:text-pink-400 mb-4">
              Book an Appointment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 appearance-none"
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <MapPin
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
              <div className="relative">
                <select
                  value={selectedSpecialization}
                  onChange={(e) => setSelectedSpecialization(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 appearance-none"
                >
                  <option value="">Select Specialization</option>
                  {specializations.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
                <User
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
          </div>

          {/* Doctor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {doctor.specialization}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {doctor.hospital}
                    </p>
                    <div className="flex items-center mt-1">
                      <Star className="text-yellow-400" size={16} />
                      <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                        {doctor.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span>
                      <Calendar size={16} className="inline mr-1" />{" "}
                      {doctor.experience}
                    </span>
                    <span>
                      <Phone size={16} className="inline mr-1" />{" "}
                      {doctor.consultationFee}
                    </span>
                  </div>
                  <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors">
                    Book Appointment
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

