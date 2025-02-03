import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  LayoutDashboard,
  HeartPulse,
  Home,
  GraduationCap,
  ShoppingBag,
  ActivitySquare,
  Stethoscope,
  Bot,
  ChevronRight,
  Calendar,
  Heart,
  Moon,
  Sun,
  Users,
  MessageSquare,
  Search,
  Filter,
  TrendingUp,
  Shield,
  Award,
} from "lucide-react"
import { Sidebar } from "./Sidebar"
import { Footer } from "./Footer";

export function Forum() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true")
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [activeTab, setActiveTab] = useState("forums")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showAnonymous, setShowAnonymous] = useState(false)
  const [showExpertsOnly, setShowExpertsOnly] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem("darkMode", newMode.toString())
      return newMode
    })
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const forums = [
    {
      id: 1,
      name: "Women's Health",
      members: 1200,
      posts: 5600,
      expertBadges: ["Gynecologist", "Nutritionist"],
      isPrivate: false,
      topics: ["Menstrual Health", "Hormonal Balance", "Preventive Care"],
      engagementRate: 85,
    },
    {
      id: 2,
      name: "Fitness & Nutrition",
      members: 980,
      posts: 4200,
      expertBadges: ["Nutritionist", "Personal Trainer"],
      isPrivate: false,
      topics: ["Healthy Eating", "Workout Plans", "Weight Management"],
      engagementRate: 78,
    },
    {
      id: 3,
      name: "Mental Wellness",
      members: 850,
      posts: 3800,
      expertBadges: ["Therapist", "Psychologist"],
      isPrivate: true,
      topics: ["Anxiety", "Depression", "Stress Management"],
      engagementRate: 92,
    },
    {
      id: 4,
      name: "Reproductive Health",
      members: 720,
      posts: 3100,
      expertBadges: ["Fertility Specialist", "Obstetrician"],
      isPrivate: false,
      topics: ["Fertility", "Pregnancy", "Postpartum Care"],
      engagementRate: 88,
    },
  ]

  const recentPosts = [
    {
      id: 1,
      title: "My PCOS Journey",
      author: "Jane Doe",
      authorReputation: 450,
      badges: ["Verified Patient", "Top Contributor"],
      likes: 45,
      comments: 12,
      isAnonymous: false,
      contentWarnings: ["Medical Details"],
      category: "Experience Sharing",
    },
    {
      id: 2,
      title: "Best Foods for Hormonal Balance",
      author: "Nutrition Expert",
      authorReputation: 780,
      badges: ["Certified Nutritionist", "Expert"],
      likes: 38,
      comments: 9,
      isAnonymous: false,
      contentWarnings: [],
      category: "Expert Advice",
    },
    {
      id: 3,
      title: "Coping with Endometriosis",
      author: "Emily Smith",
      authorReputation: 320,
      badges: ["Verified Patient"],
      likes: 52,
      comments: 17,
      isAnonymous: false,
      contentWarnings: ["Sensitive Content"],
      category: "Support Needed",
    },
    {
      id: 4,
      title: "Anonymous: Struggling with Infertility",
      author: "Anonymous",
      authorReputation: 0,
      badges: [],
      likes: 28,
      comments: 14,
      isAnonymous: true,
      contentWarnings: ["Sensitive Content"],
      category: "Support Needed",
    },
  ]

  const trendingTopics = [
    "Menstrual Cup Usage",
    "Hormone Balancing Foods",
    "Endometriosis Awareness",
    "Fertility Tracking Apps",
    "Menopause Symptoms",
  ]

  const filteredForums = forums.filter((forum) => forum.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const filteredPosts = recentPosts.filter((post) => {
    const categoryMatch = selectedCategory === "all" || post.category.toLowerCase() === selectedCategory.toLowerCase()
    const anonymousMatch = showAnonymous || !post.isAnonymous
    const expertMatch = !showExpertsOnly || post.badges.some((badge) => badge.toLowerCase().includes("expert"))
    return categoryMatch && anonymousMatch && expertMatch
  })

  return (
    <div className={`flex h-screen ${darkMode ? "dark" : ""}`}>
      <Sidebar darkMode={darkMode} />

      {/* Main Content */}
      <main
        className={`flex-1 p-6 overflow-auto bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${sidebarVisible ? "ml-0" : "ml-0"}`}
      >
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400">Community Forums</h2>
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {darkMode ? (
                <Sun className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              ) : (
                <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActiveTab("forums")}
                className={`px-4 py-2 rounded-full ${activeTab === "forums" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"} dark:bg-gray-800 dark:text-gray-100`}
              >
                Forums
              </button>
              <button
                onClick={() => setActiveTab("posts")}
                className={`px-4 py-2 rounded-full ${activeTab === "posts" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"} dark:bg-gray-800 dark:text-gray-100`}
              >
                Recent Posts
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                />
                <input
                  type="text"
                  placeholder="Search forums..."
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                <Filter size={20} />
              </button>
            </div>
          </div>

          {/* Additional Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              <option value="all">All Categories</option>
              <option value="experience sharing">Experience Sharing</option>
              <option value="expert advice">Expert Advice</option>
              <option value="support needed">Support Needed</option>
            </select>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showExpertsOnly}
                onChange={(e) => setShowExpertsOnly(e.target.checked)}
                className="rounded text-pink-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Show Expert Posts Only</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showAnonymous}
                onChange={(e) => setShowAnonymous(e.target.checked)}
                className="rounded text-pink-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Include Anonymous Posts</span>
            </label>
          </div>

          {/* Forums List */}
          {activeTab === "forums" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredForums.map((forum) => (
                <div key={forum.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{forum.name}</h3>
                    {forum.isPrivate && <Shield size={16} className="text-pink-600 dark:text-pink-400" />}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {forum.expertBadges.map((badge, index) => (
                      <span
                        key={index}
                        className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full dark:bg-pink-900 dark:text-pink-200"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center">
                      <Users size={16} className="mr-1" /> {forum.members} members
                    </span>
                    <span className="flex items-center">
                      <MessageSquare size={16} className="mr-1" /> {forum.posts} posts
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Community Engagement</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-pink-600 h-2.5 rounded-full dark:bg-pink-500"
                        style={{ width: `${forum.engagementRate}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Recent Posts */}
          {activeTab === "posts" && (
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  {post.contentWarnings.length > 0 && (
                    <div className="mb-2">
                      {post.contentWarnings.map((warning, index) => (
                        <span
                          key={index}
                          className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full mr-2 dark:bg-yellow-900 dark:text-yellow-200"
                        >
                          {warning}
                        </span>
                      ))}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{post.title}</h3>
                  <div className="flex items-center mb-2">
                    <p className="text-gray-600 dark:text-gray-400">
                      {post.isAnonymous ? "Anonymous" : `By ${post.author}`}
                    </p>
                    {!post.isAnonymous && (
                      <>
                        <span className="mx-2 text-gray-400 dark:text-gray-600">•</span>
                        <span className="text-pink-600 dark:text-pink-400">{post.authorReputation} rep</span>
                      </>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    {post.category}
                  </span>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-4">
                    <span className="flex items-center">
                      <Heart size={16} className="mr-1" /> {post.likes} likes
                    </span>
                    <span className="flex items-center">
                      <MessageSquare size={16} className="mr-1" /> {post.comments} comments
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Trending Topics */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Trending Topics</h3>
            <ul className="space-y-2">
              {trendingTopics.map((topic, index) => (
                <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                  <TrendingUp size={16} className="mr-2 text-pink-600 dark:text-pink-400" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer darkMode={darkMode} />
      </main>
    </div>
  )
}

export default Forum

