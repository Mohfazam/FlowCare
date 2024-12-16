"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  addDays,
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Frown,
  Smile,
  Angry,
  Coffee,
  Zap,
  Moon,
  ChevronDown,
  ChevronUp,
  Heart,
} from "lucide-react";

const moodOptions = [
  { name: "Happy", icon: Smile },
  { name: "Sad", icon: Frown },
  { name: "Calm", icon: Coffee },
  { name: "Angry", icon: Angry },
  { name: "Tired", icon: Moon },
  { name: "Energized", icon: Zap },
];

const moodSeverityOptions = [
  { name: "Low", value: "low" },
  { name: "Medium", value: "medium" },
  { name: "High", value: "high" },
];

const symptomOptions = [
  "Lower Abdomen Cramps",
  "Back Pain",
  "Bloating",
  "Fatigue",
  "Headaches",
  "Nausea",
  "Sleep Disruption",
  "Digestive Issues",
];

const symptomSeverityOptions = ["None", "Mild", "Moderate", "Severe"];

const sleepQualityOptions = ["Poor", "Fair", "Good", "Excellent"];

export function PeriodTracker() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    cycleDuration: "",
    lastPeriodStart: "",
    lastPeriodDuration: "",
    moodTypes: [],
    moodSeverity: "",
    moodDate: format(new Date(), "yyyy-MM-dd"),
    symptoms: [],
    symptomSeverities: {},
    symptomDate: format(new Date(), "yyyy-MM-dd"),
    sleepDuration: "",
    sleepQuality: "",
  });

  const [profileImage, setProfileImage] = useState(
    "https://img.freepik.com/premium-photo/beautiful-woman-wearing-white-hijab-elegant-hijab_608068-34215.jpg"
  );
  const [nextPeriodPrediction, setNextPeriodPrediction] = useState("");
  const [expandedSections, setExpandedSections] = useState({
    cycleInfo: true,
    moodTracking: true,
    symptomTracking: true,
    sleepTracking: true,
    healthTips: true,
  });
  const [showHealthTips, setShowHealthTips] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMoodTypeChange = (moodName) => {
    setData((prev) => ({
      ...prev,
      moodTypes: prev.moodTypes.includes(moodName)
        ? prev.moodTypes.filter((mood) => mood !== moodName)
        : [...prev.moodTypes, moodName],
    }));
  };

  const handleSymptomChange = (symptom) => {
    setData((prev) => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter((s) => s !== symptom)
        : [...prev.symptoms, symptom],
    }));
  };

  const handleSymptomSeverityChange = (symptom, severity) => {
    setData((prev) => ({
      ...prev,
      symptomSeverities: { ...prev.symptomSeverities, [symptom]: severity },
    }));
  };

  const predictNextPeriod = () => {
    if (data.lastPeriodStart && data.cycleDuration) {
      const nextPeriodDate = addDays(
        new Date(data.lastPeriodStart),
        parseInt(data.cycleDuration)
      );
      setNextPeriodPrediction(format(nextPeriodDate, "yyyy-MM-dd"));
    }
  };

  const renderCalendar = () => {
    if (!nextPeriodPrediction) return null;

    const monthStart = startOfMonth(nextPeriodPrediction);
    const monthEnd = endOfMonth(nextPeriodPrediction);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

    const periodStartDate = new Date(nextPeriodPrediction);
    const periodEndDate = addDays(
      periodStartDate,
      parseInt(data.lastPeriodDuration, 10) - 1
    );

    return (
      <div className="mt-4 bg-white p-4 rounded-md shadow-md">
        <h3 className="text-lg font-semibold mb-2">
          {format(nextPeriodPrediction, "MMMM yyyy")}
        </h3>
        <div className="grid grid-cols-7 gap-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-medium text-gray-500">
              {day}
            </div>
          ))}
          {daysInMonth.map((date) => (
            <div
              key={date.toISOString()}
              className={`text-center p-2 rounded ${
                isWithinInterval(date, {
                  start: periodStartDate,
                  end: periodEndDate,
                })
                  ? "bg-pink-100"
                  : ""
              }`}
            >
              {format(date, "d")}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleSubmit = () => {
    const submissionData = {
      ...data,
      nextPeriodPrediction,
    };
    console.log("Submission Data:", submissionData);
    setShowHealthTips(true);
    alert("Data submitted successfully!");
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderSection = (title, content, section) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleSection(section)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {expandedSections[section] ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </div>
      {expandedSections[section] && <div className="mt-4">{content}</div>}
    </div>
  );

  const generateHealthTips = useMemo(() => {
    const tips = [];

    // Cycle duration tips
    if (data.cycleDuration) {
      const cycleDuration = parseInt(data.cycleDuration);
      if (cycleDuration < 21) {
        tips.push(
          "Your cycle is shorter than average. Consider consulting with a healthcare professional to ensure everything is normal."
        );
      } else if (cycleDuration > 35) {
        tips.push(
          "Your cycle is longer than average. This can be normal, but you may want to discuss it with your doctor."
        );
      } else {
        tips.push(
          "Your cycle length is within the normal range. Keep tracking to notice any changes."
        );
      }
    }

    // Period duration tips
    if (data.lastPeriodDuration) {
      const periodDuration = parseInt(data.lastPeriodDuration);
      if (periodDuration > 7) {
        tips.push(
          "Your period duration is longer than average. If this is consistent, consider discussing it with your healthcare provider."
        );
      } else if (periodDuration < 3) {
        tips.push(
          "Your period duration is shorter than average. This can be normal, but keep an eye on it and consult your doctor if you're concerned."
        );
      }
    }

    // Mood-based tips
    if (data.moodTypes.includes("Sad") || data.moodTypes.includes("Angry")) {
      tips.push(
        "Mood swings can be common during your cycle. Try relaxation techniques or gentle exercise to help manage your emotions."
      );
    }
    if (data.moodTypes.includes("Tired")) {
      tips.push(
        "Fatigue is common during menstruation. Ensure you're getting enough rest and consider iron-rich foods to combat tiredness."
      );
    }

    // Symptom-based tips
    if (data.symptoms.includes("Lower Abdomen Cramps")) {
      tips.push(
        "For menstrual cramps, try using a heating pad or taking a warm bath to alleviate discomfort."
      );
    }
    if (data.symptoms.includes("Bloating")) {
      tips.push(
        "To reduce bloating, try to avoid salty foods and increase your water intake."
      );
    }
    if (data.symptoms.includes("Headaches")) {
      tips.push(
        "Headaches can be common during your cycle. Stay hydrated and consider over-the-counter pain relievers if needed."
      );
    }
    if (data.symptoms.includes("Sleep Disruption")) {
      tips.push(
        "To improve sleep during your cycle, try to maintain a consistent sleep schedule and create a relaxing bedtime routine."
      );
    }

    // Sleep-based tips
    if (data.sleepDuration) {
      const sleepDuration = parseFloat(data.sleepDuration);
      if (sleepDuration < 7) {
        tips.push(
          "You might not be getting enough sleep. Aim for 7-9 hours of sleep per night for optimal health and well-being."
        );
      } else if (sleepDuration > 9) {
        tips.push(
          "You're getting more sleep than average. While this can be normal, excessive sleep might indicate other health issues. Consider discussing with your doctor if this persists."
        );
      } else {
        tips.push(
          "Your sleep duration is within the recommended range. Keep maintaining this healthy sleep pattern!"
        );
      }
    }

    if (data.sleepQuality === "Poor" || data.sleepQuality === "Fair") {
      tips.push(
        "To improve sleep quality, try establishing a consistent bedtime routine, avoiding screens before bed, and creating a comfortable sleep environment."
      );
    }

    // General tips
    tips.push(
      "Stay hydrated by drinking plenty of water throughout your cycle."
    );
    tips.push(
      "Regular exercise can help alleviate many menstrual symptoms and improve overall well-being."
    );
    tips.push(
      "A balanced diet rich in fruits, vegetables, and whole grains can help support your body during your cycle."
    );

    return tips;
  }, [data]);

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <!------------------------SIDEBAR SECTION-----------------------------------> */}
      <div id="sidebar-container">
        <div class="flex h-screen w-16 flex-col justify-between border-e bg-pink-100">
          <div class="flex h-screen w-16 flex-col justify-between border-e bg-pink-100">
            <div>
              <div className="py-4 px-2">
                <div className="group relative inline-block">
                  {/* Profile Picture */}
                  <div
                    id="profilePicture"
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${profileImage})` }}
                  ></div>

                  {/* Tooltip Container */}
                  <div className="invisible opacity-0 ml-20 group-hover:visible group-hover:opacity-100 absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 transform rounded bg-gray-900 p-2 text-white transition-all duration-300">
                    <div className="flex flex-col gap-2 whitespace-nowrap">
                      <button
                        className="block px-4 py-1 text-sm bg-pink-500 rounded hover:bg-pink-600"
                        onClick={() =>
                          changeImage(
                            "https://img.freepik.com/premium-photo/beautiful-woman-wearing-white-hijab-elegant-hijab_608068-34215.jpg"
                          )
                        }
                      >
                        User 1
                      </button>
                      <button
                        className="block px-4 py-1 text-sm bg-pink-500 rounded hover:bg-pink-600"
                        onClick={() =>
                          changeImage(
                            "https://media.istockphoto.com/photos/beautiful-young-muslim-woman-wearing-a-hijab-on-her-head-picture-id618035002?k=6&m=618035002&s=612x612&w=0&h=_1m2fRBf_DbVeFOZN-VwC2cW9QnV7tYerZwZo44lLjo="
                          )
                        }
                      >
                        User 2
                      </button>
                      <button
                        className="block px-4 py-1 text-sm bg-pink-500 rounded hover:bg-pink-600"
                        onClick={() =>
                          changeImage(
                            "https://i.pinimg.com/originals/ab/6d/70/ab6d70b2b5ac104f4459487d3a94bec7.jpg"
                          )
                        }
                      >
                        User 3
                      </button>
                    </div>

                    {/* Arrow */}
                    <div className="absolute left-1/2 top-0 -mt-2 h-0 w-0 -translate-x-1/2 transform border-8 border-transparent border-b-gray-900"></div>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-100">
                <div class="px-2">
                  <div class="py-4">
                    <a
                      href="#"
                      onClick={() => navigate("/")}
                      class="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-pink-700"
                    >
                      <img src="images/house-icon.svg" alt="" />

                      <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                        Home
                      </span>
                    </a>
                  </div>

                  <ul class="space-y-1 border-t border-gray-100 pt-4">
                    <li>
                      <a
                        href="#"
                        onClick={() => navigate("/blogs")}
                        class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="images/blogs-icon.svg" alt="" />

                        <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                          Education
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => navigate("/Ecom")}
                        class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="images/shopping-cart.svg" alt="" />

                        <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                          Shop
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => navigate("/tracker")}
                        class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="images/health-logo.svg" alt="" />

                        <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 font-sans rounded bg-gray-900 px-4 py-1.5 text-xl font-medium text-white group-hover:visible">
                          Track Your Health Cycle
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => navigate("/consultations")}
                        class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src="images/user-logo.svg" alt="" />

                        <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                          Expert Consultation
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => navigate("/ChatBot")}
                        class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img
                          src="https://m.media-amazon.com/images/I/51nSQGduJWL._AC_SL1500_.jpg"
                          alt=""
                        />

                        <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-2xl font-sans font-medium text-white group-hover:visible">
                          Chat with AI
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
              <form action="#">
                <button
                  onClick={() => navigate("/ChatBot")}
                  type="submit"
                  class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>

                  <span class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Logout
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center mt-10 max-w-4xl mx-auto">
        <div class="p-4 max-w-sm">
          <div class="flex rounded-lg h-full bg-pink-100 text-black p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class=" text-lg font-medium">View as a Child</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                href="#"
                class="mt-3 text-black hover:text-blue-600 inline-flex items-center"
              >
                View
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="p-4 max-w-sm">
          <div class="flex rounded-lg h-full bg-pink-100  p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class="text-black text-lg font-medium">View as Parent</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <p class="leading-relaxed text-base text-black">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                href="#"
                class="mt-3 text-black hover:text-blue-600 inline-flex items-center"
              >
                View
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <span class="relative flex justify-center mt-11 mb-11">
        <div class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span class="relative z-10 bg-white px-6 text-4xl ">
          <h1>Period Tracker</h1>
        </span>
      </span>

      {/*----------------------AI ChatBot --------------------------------*/}
      <div className="relative cursor-pointer">
        {/* Tooltip */}
        {showTooltip && (
          <div className="fixed mt-[20%] right-24 bg-pink-700 text-white p-2 rounded-md shadow-md">
            Chat with AI
          </div>
        )}

        {/* Chatbot button */}
        <div className="ai-chatbot fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-lg overflow-hidden">
          <img
            src="https://m.media-amazon.com/images/I/51nSQGduJWL._AC_SL1500_.jpg"
            alt="AI Chatbot"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto bg-pink-50 rounded-lg shadow-lg p-8 space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2"></h2>
          <p className="text-gray-600">
            Track your cycle, moods, symptoms, and sleep
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Start date of your last period
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="lastPeriodStart"
                  value={data.lastPeriodStart}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Last Period Duration (days)
              </label>
              <input
                type="number"
                name="lastPeriodDuration"
                value={data.lastPeriodDuration}
                onChange={handleInputChange}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Average Cycle Duration (days)
            </label>
            <input
              type="number"
              name="cycleDuration"
              value={data.cycleDuration}
              onChange={handleInputChange}
              min="21"
              max="35"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
            />
          </div>
          <button
            onClick={predictNextPeriod}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 shadow-md"
          >
            Predict Next Period
          </button>
          {nextPeriodPrediction && (
            <div>
              <p className="text-center font-medium text-gray-700 bg-pink-100 p-3 rounded-md">
                Predicted next period:{" "}
                {format(nextPeriodPrediction, "MMMM d, yyyy")}
              </p>
              {renderCalendar()}
            </div>
          )}
          <div className="flex content-center items-center gap-2 bg-white px-3 rounded-md py-1">
            <i className="fa-solid fa-square text-pink-100"></i>{" "}
            <h3>Predicted Next Period</h3>
          </div>
        </div>

        {renderSection(
          "Mood Tracking",
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Select Mood(s)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {moodOptions.map((mood) => (
                  <button
                    key={mood.name}
                    onClick={() => handleMoodTypeChange(mood.name)}
                    className={`flex items-center justify-center px-4 py-2 border rounded-md transition duration-300 ${
                      data.moodTypes.includes(mood.name)
                        ? "bg-pink-200 text-gray-800 border-pink-300"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-pink-50"
                    }`}
                  >
                    <mood.icon className="mr-2 h-4 w-4" />
                    {mood.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Mood Severity
              </label>
              <div className="flex flex-wrap gap-4">
                {moodSeverityOptions.map((option) => (
                  <label
                    key={option.value}
                    className="inline-flex items-center"
                  >
                    <input
                      type="radio"
                      value={option.value}
                      checked={data.moodSeverity === option.value}
                      onChange={() =>
                        setData((prev) => ({
                          ...prev,
                          moodSeverity: option.value,
                        }))
                      }
                      className="form-radio text-pink-500"
                    />
                    <span className="ml-2 text-gray-700">{option.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Date of Mood Log
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="moodDate"
                  value={data.moodDate}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>,
          "moodTracking"
        )}

        {renderSection(
          "Symptom Tracking",
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Select Symptoms
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {symptomOptions.map((symptom) => (
                  <label key={symptom} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={data.symptoms.includes(symptom)}
                      onChange={() => handleSymptomChange(symptom)}
                      className="form-checkbox text-pink-500"
                    />
                    <span className="ml-2 text-gray-700">{symptom}</span>
                  </label>
                ))}
              </div>
            </div>

            {data.symptoms.map((symptom) => (
              <div key={symptom} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {symptom} Severity
                </label>
                <select
                  value={data.symptomSeverities[symptom] || ""}
                  onChange={(e) =>
                    handleSymptomSeverityChange(symptom, e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                >
                  <option value="">Select Severity</option>
                  {symptomSeverityOptions.map((severity) => (
                    <option key={severity} value={severity}>
                      {severity}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Date of Symptoms
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="symptomDate"
                  value={data.symptomDate}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>,

          "symptomTracking"
        )}

        {renderSection(
          "Sleep Tracking",
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Sleep Duration (hours)
              </label>
              <input
                type="number"
                name="sleepDuration"
                value={data.sleepDuration}
                onChange={handleInputChange}
                min="0"
                max="24"
                step="0.5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Sleep Quality
              </label>
              <select
                name="sleepQuality"
                value={data.sleepQuality}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
              >
                <option value="">Select Sleep Quality</option>
                {sleepQualityOptions.map((quality) => (
                  <option key={quality} value={quality}>
                    {quality}
                  </option>
                ))}
              </select>
            </div>
          </div>,
          "sleepTracking"
        )}

        {showHealthTips &&
          renderSection(
            "Health Tips",
            <div className="space-y-4">
              {generateHealthTips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white p-4 rounded-md shadow-sm"
                >
                  <Heart className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>,
            "healthTips"
          )}

        <button
          onClick={handleSubmit}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-4 rounded-md text-lg transition duration-300 shadow-md"
        >
          Submit Tracking Data
        </button>
      </div>
    </>
  );
}
