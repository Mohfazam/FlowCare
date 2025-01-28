import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { LayoutDashboard, HeartPulse, Home, GraduationCap, ShoppingBag, ActivitySquare, Stethoscope, Bot, ChevronRight, Calendar, Heart, Moon, Sun, Users, MessageSquare, Search, Filter, TrendingUp, Shield, Award, Bookmark, ThumbsUp, ThumbsDown, ArrowUp, MessageCircle, Lightbulb, WashingMachine as ThinkingFace } from "lucide-react"
import { Sidebar } from "./Sidebar"
import { motion, AnimatePresence } from "framer-motion"

// Enhanced predefined bot responses
const botResponses = {
  // Existing responses
  general: [
    "That's an interesting point! Have you considered...",
    "Thank you for sharing your experience. It might help to...",
    "I understand your concern. Here's some helpful information...",
    "Great question! Many community members have found success with...",
    "Let me share some resources that might help...",
  ],
  // New keyword-based responses
  keywords: {
    hello: (username) => `Hello ${username}, what can I help you with?`,
    "how are you": "I'm doing great! How can I assist you today?",
    bye: "Goodbye, have a great day!",
    "thank you": "You're welcome! Feel free to reach out anytime.",
    help: "Sure! What do you need help with? Feel free to ask."
  }
}

// Generate random avatar color
const getAvatarColor = (username) => {
  const colors = [
    'bg-pink-500', 'bg-purple-500', 'bg-blue-500', 'bg-green-500',
    'bg-yellow-500', 'bg-red-500', 'bg-indigo-500', 'bg-teal-500'
  ]
  const index = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
  return colors[index]
}

// Get user initials
const getUserInitials = (username) => {
  return username
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function Forum() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true")
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [activeTab, setActiveTab] = useState("forums")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showAnonymous, setShowAnonymous] = useState(false)
  const [showExpertsOnly, setShowExpertsOnly] = useState(false)
  
  // Enhanced chat state
  const chatEndRef = useRef(null)
  const [chatMessages, setChatMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chatMessages')
    return savedMessages ? JSON.parse(savedMessages) : [
      { id: 1, user: "HealthAdvisor", message: "Welcome to the live chat! Feel free to ask questions.", timestamp: new Date().toISOString() },
      { id: 2, user: "Jane", message: "Has anyone tried the new fitness program?", timestamp: new Date().toISOString() }
    ]
  })
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [typingTimeout, setTypingTimeout] = useState(null)
  const [bookmarkedThreads, setBookmarkedThreads] = useState(() => 
    JSON.parse(localStorage.getItem("bookmarkedThreads") || "[]")
  )
  const [followedDiscussions, setFollowedDiscussions] = useState(() =>
    JSON.parse(localStorage.getItem("followedDiscussions") || "[]")
  )
  const [showQuickReply, setShowQuickReply] = useState(false)
  const [postReactions, setPostReactions] = useState({})

  // Persist chat messages
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages))
  }, [chatMessages])

  // Smooth scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatMessages])

  // Typing indicator handler
  const handleTyping = () => {
    setIsTyping(true)
    if (typingTimeout) {
      clearTimeout(typingTimeout)
    }
    const timeout = setTimeout(() => {
      setIsTyping(false)
    }, 2000)
    setTypingTimeout(timeout)
  }

  // Enhanced bot response simulation
  const simulateBotResponse = (userMessage) => {
    setTimeout(() => {
      let botResponse;
      
      // Check for keyword matches (case insensitive)
      const lowercaseMessage = userMessage.toLowerCase().trim();
      for (const [keyword, response] of Object.entries(botResponses.keywords)) {
        if (lowercaseMessage === keyword) {
          botResponse = typeof response === 'function' 
            ? response(chatMessages[chatMessages.length - 1]?.user || 'User')
            : response;
          break;
        }
      }

      // If no keyword match, use general response
      if (!botResponse) {
        botResponse = botResponses.general[Math.floor(Math.random() * botResponses.general.length)];
      }

      setChatMessages(prev => [...prev, {
        id: Date.now(),
        user: "HealthBot",
        message: botResponse,
        timestamp: new Date().toISOString(),
        isBot: true
      }]);
    }, 1500);
  }

  // Enhanced message sending
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg = {
      id: Date.now(),
      user: "User" + Math.floor(Math.random() * 1000),
      message: newMessage,
      timestamp: new Date().toISOString()
    };

    setChatMessages(prev => [...prev, newMsg]);
    simulateBotResponse(newMessage);
    setNewMessage("");
  }

  // Message component
  const MessageComponent = ({ message }) => (
    <div className={`p-3 rounded-lg ${message.isBot ? 'bg-pink-50 dark:bg-pink-900/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
      <div className="flex items-center gap-2">
        <div className={`w-8 h-8 rounded-full ${getAvatarColor(message.user)} flex items-center justify-center text-white font-medium`}>
          {getUserInitials(message.user)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between">
            <span className="font-semibold text-pink-600 dark:text-pink-400">
              {message.user}
            </span>
            <span className="text-xs text-gray-500">
              {new Date(message.timestamp).toLocaleTimeString()}
            </span>
          </div>
          <p className="mt-1 text-gray-800 dark:text-gray-200 break-words">{message.message}</p>
        </div>
      </div>
    </div>
  )

  // Persist bookmarks and followed discussions
  useEffect(() => {
    localStorage.setItem("bookmarkedThreads", JSON.stringify(bookmarkedThreads))
  }, [bookmarkedThreads])

  useEffect(() => {
    localStorage.setItem("followedDiscussions", JSON.stringify(followedDiscussions))
  }, [followedDiscussions])

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

  const toggleBookmark = (threadId) => {
    setBookmarkedThreads(prev => 
      prev.includes(threadId)
        ? prev.filter(id => id !== threadId)
        : [...prev, threadId]
    )
  }

  const toggleFollow = (threadId) => {
    setFollowedDiscussions(prev =>
      prev.includes(threadId)
        ? prev.filter(id => id !== threadId)
        : [...prev, threadId]
    )
  }

  const handleReaction = (postId, reactionType) => {
    setPostReactions(prev => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        [reactionType]: (prev[postId]?.[reactionType] || 0) + 1
      }
    }))
  }

  // Quick Reply button scroll handler
  const scrollToReply = () => {
    const replySection = document.getElementById("reply-section")
    replySection?.scrollIntoView({ behavior: "smooth" })
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

      <main className={`flex-1 p-6 overflow-auto bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${sidebarVisible ? "ml-0" : "ml-0"}`}>
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400">Community Forums</h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActiveTab("chat")}
                className={`px-4 py-2 rounded-full ${activeTab === "chat" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"} dark:bg-gray-800 dark:text-gray-100`}
              >
                Live Chat
              </button>
              <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                {darkMode ? (
                  <Sun className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                )}
              </button>
            </div>
          </div>

          {/* Live Chat Section */}
          {activeTab === "chat" && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <div className="h-96 overflow-y-auto mb-4 space-y-4">
                {chatMessages.map((msg) => (
                  <MessageComponent key={msg.id} message={msg} />
                ))}
                {isTyping && (
                  <div className="text-sm text-gray-500 italic">
                    Someone is typing...
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => {
                    setNewMessage(e.target.value)
                    handleTyping()
                  }}
                  placeholder="Type your message..."
                  className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors whitespace-nowrap"
                >
                  Send
                </button>
              </form>
            </div>
          )}

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
                <div
                  key={post.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
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
                  
                  {/* Reactions Bar */}
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() => handleReaction(post.id, 'love')}
                      className="flex items-center gap-1 text-pink-600 dark:text-pink-400"
                    >
                      <Heart size={16} />
                      <span>{postReactions[post.id]?.love || post.likes}</span>
                    </button>
                    <button
                      onClick={() => handleReaction(post.id, 'insightful')}
                      className="flex items-center gap-1 text-blue-600 dark:text-blue-400"
                    >
                      <Lightbulb size={16} />
                      <span>{postReactions[post.id]?.insightful || 0}</span>
                    </button>
                    <button
                      onClick={() => handleReaction(post.id, 'curious')}
                      className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400"
                    >
                      <ThinkingFace size={16} />
                      <span>{postReactions[post.id]?.curious || 0}</span>
                    </button>
                  </div>

                  {/* Bookmark and Follow */}
                  <div className="flex justify-between items-center mt-4">
                    <span className="flex items-center">
                      <MessageSquare size={16} className="mr-1" /> {post.comments} comments
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleBookmark(post.id)}
                        className={`p-2 rounded-full ${
                          bookmarkedThreads.includes(post.id)
                            ? "bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-400"
                            : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                        }`}
                      >
                        <Bookmark size={16} />
                      </button>
                      <button
                        onClick={() => toggleFollow(post.id)}
                        className={`p-2 rounded-full ${
                          followedDiscussions.includes(post.id)
                            ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                            : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                        }`}
                      >
                        <Users size={16} />
                      </button>
                    </div>
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

          {/* Floating Quick Reply Button */}
          <AnimatePresence>
            {showQuickReply && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={scrollToReply}
                className="fixed bottom-8 right-8 p-4 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition-colors"
              >
                <MessageCircle size={24} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Reply Section */}
          <div id="reply-section" className="mt-8">
            {/* Your reply form goes here */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Forum