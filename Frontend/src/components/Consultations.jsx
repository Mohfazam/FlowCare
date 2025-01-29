import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, MapPin, Search, Star, Clock, DollarSign, ChevronDown, Sun, Moon } from "lucide-react";
import { Sidebar } from "./Sidebar";
import Footer from "./Footer"; // Import the Footer component

const specializations = [
  "Gynecology",
  "Obstetrics",
  "Reproductive Endocrinology",
  "Urogynecology",
  "Gynecologic Oncology",
];

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Gynecology",
    rating: 4.8,
    reviewCount: 124,
    availableDate: "2024-03-15",
    price: 150,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Dr. Emily Chen",
    specialization: "Obstetrics",
    rating: 4.9,
    reviewCount: 98,
    availableDate: "2024-03-16",
    price: 180,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Dr. Michael Brown",
    specialization: "Reproductive Endocrinology",
    rating: 4.7,
    reviewCount: 86,
    availableDate: "2024-03-17",
    price: 200,
    image: "/placeholder.svg?height=100&width=100",
  },
];

export function Consultations() {
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  return (
    <div className={`flex h-screen ${darkMode ? "dark" : ""}`}>
      <Sidebar darkMode={darkMode} />

      <main className="flex-1 p-8 overflow-auto bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out">
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-8">
            <motion.h1
              className="text-4xl font-bold text-center text-pink-600 dark:text-pink-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Expert Consultations
            </motion.h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <motion.div
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Find a Specialist</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Search for women's health experts in your area</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    id="location"
                    type="text"
                    placeholder="Enter your location"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div className="flex-1 relative">
                <label
                  htmlFor="specialization"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Specialization
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full text-left pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white dark:bg-gray-700 dark:text-white"
                  >
                    {selectedSpecialization || "Select specialization"}
                    <ChevronDown
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  </button>
                  {isDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg"
                    >
                      {specializations.map((spec) => (
                        <li
                          key={spec}
                          onClick={() => {
                            setSelectedSpecialization(spec);
                            setIsDropdownOpen(false);
                          }}
                          className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer dark:text-white"
                        >
                          {spec}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              </div>
            </div>
            <button className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors duration-300">
              Search Doctors
            </button>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold dark:text-white">{doctor.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{doctor.specialization}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <div>
                      <Star className="inline-block text-yellow-400" size={18} /> {doctor.rating} ({doctor.reviewCount}{" "}
                      reviews)
                    </div>
                    <div>
                      <CalendarIcon className="inline-block text-gray-400" size={18} /> Available:{" "}
                      {doctor.availableDate}
                    </div>
                    <div>
                      <DollarSign className="inline-block text-green-400" size={18} /> Price: ${doctor.price}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Footer /> {/* Render the Footer component */}
      </main>
    </div>
  );
}