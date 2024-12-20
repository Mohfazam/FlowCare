import React, { useState, useEffect } from "react";
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
  Sun,
  LayoutDashboard,
  Home,
  GraduationCap,
  ShoppingBag,
  ActivitySquare,
  Stethoscope,
  Bot,
  Search,
  BookOpen,
  Utensils,
  Leaf,
  Clock,
  Filter,
  Bookmark,
  Share2,
  Award,
  Trophy,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Your Menstrual Cycle",
    excerpt:
      "Learn about the phases of your menstrual cycle and how they affect your body.",
    author: "Dr. Emily Johnson",
    date: "2024-03-15",
    readingTime: "5 min",
    icon: <Calendar className="h-12 w-12 text-pink-500" />,
    category: "Health",
  },
  {
    id: 2,
    title: "Nutrition Tips for a Healthy Period",
    excerpt:
      "Discover the best foods to eat during your menstrual cycle for optimal health.",
    author: "Nutritionist Sarah Lee",
    date: "2024-03-10",
    readingTime: "4 min",
    icon: <Utensils className="h-12 w-12 text-green-500" />,
    category: "Nutrition",
  },
  {
    id: 3,
    title: "Managing PMS Symptoms Naturally",
    excerpt:
      "Explore natural remedies and lifestyle changes to alleviate PMS symptoms.",
    author: "Holistic Health Coach Maria Garcia",
    date: "2024-03-05",
    readingTime: "6 min",
    icon: <Leaf className="h-12 w-12 text-purple-500" />,
    category: "Wellness",
  },
  {
    id: 4,
    title: "The History of Menstrual Products",
    excerpt:
      "A journey through time exploring the evolution of menstrual products.",
    author: "Historian Dr. Alex Thompson",
    date: "2024-02-28",
    readingTime: "7 min",
    icon: <Clock className="h-12 w-12 text-blue-500" />,
    category: "History",
  },
];

const accordionData = [
  {
    id: 1,
    question: "What is a period?",
    answer: (
      <>
        Your period or <b>menstruation</b> (that’s the ‘sciencey’ name) is part
        of your <b>menstrual cycle</b>. This cycle is ultimately your body’s way
        of preparing itself for a possible pregnancy. During your menstrual
        cycle, there is an{" "}
        <b>increase and decrease in a number of different hormones</b> such as{" "}
        <b>oestrogen</b> and <b>progesterone</b>, which control different
        aspects of this cycle. You’ll be hearing a lot about these hormones, so
        sit tight. During your cycle:
        <ul>
          <li>
            <i className="fa-solid fa-circle text-[0.7rem]"></i> Your body
            releases an <b>egg from your ovaries</b> – we’re talking teeny tiny
            eggs here; you can’t see them with the naked eye, they’re that
            small!
          </li>
          <li>
            <i className="fa-solid fa-circle text-[0.7rem]"></i> In order for
            the egg to be released, it has to be <b>matured</b>, which is a job
            for our hormones.
          </li>
          <li>
            <i className="fa-solid fa-circle text-[0.7rem]"></i> These hormones
            are also responsible for{" "}
            <b>making the lining of your uterus thick</b>.
          </li>
        </ul>
        <b>Should one day an egg get fertilised by sperm</b>, it would land on
        the thick cosy lining, and that’s where a pregnancy would start.
        However, <b>if the egg doesn’t get fertilised</b>, your body no longer
        needs the lining, so (here come the hormones again!) your{" "}
        <b>hormones instruct your body to break the lining down</b> and remove
        it from the uterus via your vagina.
        <a href="">
          <i>
            <p className="underline text-pink-500 mt-8">
              <i className="fa-solid fa-arrow-right"></i> Learn about the phases
              of your menstrual cycle and how they affect your body.{" "}
            </p>
          </i>
        </a>
      </>
    ),
  },
  {
    id: 2,
    question: "How long does the menstrual cycle and period last?",
    answer:
      "Your menstrual cycle takes around 28 days to complete, but this is a good time to point out that EVERYONE is different! Just like your fingerprints are unique, so is your bloody brilliant body and how you experience periods. So, while we say 28 days it might be a little longer, it might be a little shorter, there really aren’t any set rules here. Of those 28 days, you could expect to bleed for anywhere between 3-8 days. Again, everyone is different, and your periods are likely to change. Your body can take some time to get into its own flow, so cut it a bit of slack - it’s learning what to do while you’re getting used to things too!",
  },
  {
    id: 3,
    question: "What are the signs that my period is coming?",
    answer:
      "If you’ve never had a period before, there are some signs which might indicate your period is coming and they’re all natural parts of growing up. If you’ve noticed your boobs are beginning to develop, and you’ve started to grow pubic hair, then you could expect to get your period about two years later. A more immediate sign for some people is if you notice discharge in your pants. Discharge is a white or yellowish fluid which usually shows up a few months before your first period. There are lots of other signs your period is coming and these can be both physical and emotional. We call these signs PMS (premenstrual syndrome). Not everyone gets PMS and we all experience it differently. It usually happens just before and during your period, and it’s basically the reason you might find yourself wanting to eat your body weight in chocolate or burst into tears at the smallest of things…lost sock, bad hair day, burnt toast…trust me, we all have those days! PMS brings with it all kinds of symptoms such as headaches, bloating, cramps, mood swings, feeling tired and having trouble concentrating. We’ve got a great blog all about PMS with top tips on how to help with these symptoms and many more, so go and take a look. It will finally explain some of those weird and wonderful feelings that you never knew were thanks to your bloody brilliant period!",
  },
  {
    id: 4,
    question: "Let’s get to the bloody truth. How much blood do we lose?",
    answer:
      "As we’ve already said, everyone is different, and what one person considers to be a light period (not much blood) might be heavy for someone else, so it’s really a case of getting to know your body in the early days. On average, women, girls and people who have periods lose between 3-9 teaspoons of fluid a month (it really isn’t that much when you put it that way!). But why did we just call it fluid? Well, while we commonly call it blood - and yes there is blood in there - there’s also other really impressive stuff in there too. About half of your period is blood, but the rest is made up of other things including tissue, nutrients and cervical mucus - pretty amazing when you think about it! It’s important that you monitor your flow - yes, go with it - but if you struggle it might be a sign that you need some help. A good indicator that your flow is very heavy, is if you have to change your period product every hour or two. If you find this is the case, you should speak to your doctor or nurse who will be able to help. On the other hand, some women, girls and people who have periods have a light flow (they don’t lose much fluid) and that’s totally normal too! Just be aware of your body and make sure you’re changing your period products often enough, for some products especially tampons it’s super important that you don’t leave them in too long. ",
  },
  {
    id: 5,
    question: "Why does the colour vary so much?",
    answer:
      "Like we just said, there’s lots of other things going on in there besides blood, that’s why it doesn’t always come out bright red like you might expect. But it’s not just what your period is made up of that determines the colour. The colour of your period can be a great tool for knowing what’s going on in your body. It can highlight signs of a poor diet, possible infections or other health conditions. In most cases a variety of shades is totally normal, with oxygen and hormones (there they are again) also playing a role in the shade of your flow (which is COMPLETELY NATURAL!).We’ve got a handy diagram and more information on the different colours of your period here.",
  },
  {
    id: 6,
    question: "Pain and WHAT IS NORMAL?!",
    answer: (
      <>
        <b>
          A not-so-fun part about getting your period is period pains, or
          menstrual cramps, as they’re also called.
        </b>{" "}
        <u>It’s worth pointing out that not everyone gets period cramps.</u>{" "}
        <b>
          Most women, girls, and people who have periods do, but if you don’t,
          then that’s absolutely nothing to worry about – just embrace the fact
          you can enjoy your bloody brilliant period cramp free.
        </b>{" "}
        <b>So, what is period pain?</b> Period pain is mainly caused by your{" "}
        <b>uterus contracting</b> (tensing up like the other muscles in your
        body) to help get rid of the lining which we spoke about earlier. You
        can get pains in your stomach, but it can also spread into your back and
        thighs.{" "}
        <b>
          We’ve got a whole heap more information on period pain and what you
          can do to help here.
        </b>{" "}
        <b>
          Hopefully by now you’ll be getting the idea that there’s all kinds of
          normal when it comes to your period:
        </b>{" "}
        your normal, your mates’ normal, your next-door neighbours’ normal!{" "}
        <b>
          What we’re trying to say is we’re all unique, but periods themselves
          are a normal part of life.
        </b>{" "}
        After all, half the population will have periods at some point in their
        lives, so we should all be able to support each other.{" "}
        <b>
          It’s important to have conversations about periods, as it’s something
          so many of us have in common!
        </b>{" "}
        Getting to know your body, your feelings, your health, and your flow is
        really important. If you notice changes in your normal, or if you find
        it difficult to cope with any aspect of your period, ask for support.{" "}
        <b>There’s no shame in asking for advice</b>, like our team of Bloody
        Brilliant experts - your local doctor or nurse has all the skills and
        experience needed to help you.{" "}
        <b>
          Only you know how you feel, so it’s important you get help if you need
          it!
        </b>
        <br /> <br />
        <a href="">
          <p className="underline text-pink-500">
            <i className="fa-solid fa-arrow-right"></i> Learn about the phases
            of your menstrual cycle and how they affect your body.{" "}
          </p>
        </a>
      </>
    ),
  },
];

export function Blogs() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [activeItem, setActiveItem] = useState(null);
  const [readSections, setReadSections] = useState([false, false, false]);
  const [completedBlogs, setCompletedBlogs] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [savedPosts, setSavedPosts] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  const toggleAccordion = (id) => {
    setActiveItem((prev) => (prev === id ? null : id));
  };

  const handleAnswerClick = (correct) => {
    setAnswered(true);
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextClick = () => {
    if (isCorrect) {
      if (currentQuestionIndex === quizQuestions.length - 1) {
        setShowScore(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswered(false);
      }
    } else {
      setAnswered(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswered(false);
    setIsCorrect(false);
    setScore(0);
    setShowScore(false);
  };

  const handleRead = (index) => {
    const updatedReadSections = [...readSections];
    updatedReadSections[index] = true;
    setReadSections(updatedReadSections);
    setCompletedBlogs((prev) => prev + 1);
  };

  const handleSavePost = (postId) => {
    setSavedPosts((prev) => {
      if (prev.includes(postId)) {
        return prev.filter((id) => id !== postId);
      } else {
        return [...prev, postId];
      }
    });
  };

  const handleShare = (postId) => {
    // Implement sharing functionality here
    console.log(`Sharing post ${postId}`);
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

  const quizQuestions = [
    {
      question: "What is the scientific name for a period?",
      answers: [
        { text: "Menstruation", correct: true },
        { text: "Ovulation", correct: false },
        { text: "Fertilization", correct: false },
        { text: "Implantation", correct: false },
      ],
      description:
        "Menstruation, often referred to as a period, is the scientific term for the monthly shedding of the uterine lining.",
    },
    {
      question: "What is the primary purpose of the menstrual cycle?",
      answers: [
        { text: "To cause discomfort", correct: false },
        { text: "To prepare for pregnancy", correct: true },
        { text: "To regulate body temperature", correct: false },
        { text: "To boost immune system", correct: false },
      ],
      description:
        "The menstrual cycle is the body's way of preparing for a possible pregnancy each month.",
    },
    {
      question: "How long does a typical menstrual cycle take to complete?",
      answers: [
        { text: "30 days", correct: false },
        { text: "28 days", correct: true },
        { text: "25 days", correct: false },
        { text: "20 days", correct: false },
      ],
      description:
        "A typical menstrual cycle takes around 28 days to complete, but it's important to note that everyone's cycle is unique. The length may vary and can be slightly shorter or longer.",
    },

    {
      question:
        "How many days can someone expect to bleed during their period?",
      answers: [
        { text: "10 - 15 days", correct: false },
        { text: "3 - 8 days", correct: true },
        { text: "5 - 12 days", correct: false },
        { text: "1 - 2 days", correct: false },
      ],
      description:
        "During a menstrual cycle, the bleeding phase can last anywhere between 3 to 8 days. This duration varies from person to person and may change over time as the body adjusts.",
    },
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className={`flex h-screen ${darkMode ? "dark" : ""}`}>
      {/* Sidebar */}
      <aside className="bg-pink-50 dark:bg-gray-800 w-64 min-h-screen p-4">
        <nav className="mt-8 space-y-4">
          <h1 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-8">
            FlowCare
          </h1>
          <SidebarLink
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            onClick={() => navigate("/dashboard")}
          />
          <SidebarLink
            icon={<Home size={20} />}
            label="Home"
            onClick={() => navigate("/")}
          />
          <SidebarLink
            icon={<GraduationCap size={20} />}
            label="Education"
            onClick={() => navigate("/blogs")}
            active
          />
          <SidebarLink
            icon={<ShoppingBag size={20} />}
            label="Shop"
            onClick={() => navigate("/Ecom")}
          />
          <SidebarLink
            icon={<ActivitySquare size={20} />}
            label="Track Your Health"
            onClick={() => navigate("/tracker")}
          />
          <SidebarLink
            icon={<Stethoscope size={20} />}
            label="Expert Consultation"
            onClick={() => navigate("/consultations")}
          />
          <SidebarLink
            icon={<Bot size={20} />}
            label="AI Chatbot"
            onClick={() => navigate("/ChatBot")}
          />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto bg-white dark:bg-gray-900">
        <div className="w-[80%] rounded-lg px-16 mx-auto space-y-8 bg-pink-50">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold mt-16 text-pink-600 dark:text-pink-400">
              Education Hub
            </h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Featured Article */}
          <div className="bg-pink-100 dark:bg-pink-900 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-pink-700 dark:text-pink-300 mb-2">
              Featured Article
            </h2>
            <div className="flex items-center space-x-4">
              <Award className="h-16 w-16 text-pink-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Embracing Your Cycle: A Guide to Menstrual Wellness
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Discover how to work with your menstrual cycle for optimal
                  health and well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex space-x-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-gray-700 dark:text-white"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-gray-700 dark:text-white"
            >
              <option value="All">All Categories</option>
              <option value="Health">Health</option>
              <option value="Nutrition">Nutrition</option>
              <option value="Wellness">Wellness</option>
              <option value="History">History</option>
            </select>
          </div>

          {/* Trophy System */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md">
            <h2 className="text-2xl font-semibold text-pink-700 dark:text-pink-300 mb-4">
              Your Learning Progress
            </h2>
            <div className="flex justify-center gap-4">
              {[...Array(5)].map((_, index) => (
                <Trophy
                  key={index}
                  className={`h-8 w-8 ${
                    index < completedBlogs
                      ? "text-yellow-500"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                  fill={index < completedBlogs ? "currentColor" : "none"}
                />
              ))}
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {completedBlogs} out of 5 articles completed
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    {post.icon}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleSavePost(post.id)}
                        className={`p-2 rounded-full ${
                          savedPosts.includes(post.id)
                            ? "bg-pink-100 text-pink-500"
                            : "bg-gray-100 text-gray-500"
                        } hover:bg-pink-200`}
                      >
                        <Bookmark className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleShare(post.id)}
                        className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-pink-200"
                      >
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.author}</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Period 101 Section */}
          <div className="container mx-auto px-4 py-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md mb-8">
              <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">
                Period 101
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Welcome to Period 101, your comprehensive guide to understanding
                menstruation. Whether you're experiencing your first period or
                looking to deepen your knowledge, we're here to help you
                navigate this important aspect of your health.
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6 dark:bg-gray-700">
                <div
                  className="bg-pink-600 h-2.5 rounded-full dark:bg-pink-500"
                  style={{
                    width: `${
                      (readSections.filter(Boolean).length / 6) * 100
                    }%`,
                  }}
                ></div>
              </div>

              {/* Accordion */}
              <div className="space-y-4">
                {accordionData.map(({ id, question, answer }, index) => (
                  <div
                    key={id}
                    className="border border-pink-200 dark:border-pink-800 rounded-lg"
                  >
                    <button
                      className="flex justify-between items-center w-full p-4 text-left"
                      onClick={() => toggleAccordion(id)}
                    >
                      <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                        {question}
                      </span>
                      {activeItem === id ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {activeItem === id && (
                      <div className="p-4 bg-pink-50 dark:bg-gray-700">
                        <p className="text-gray-700 dark:text-gray-300">
                          {answer}
                        </p>
                        <div className="mt-4">
                          <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                            <input
                              type="checkbox"
                              checked={readSections[index]}
                              onChange={() => handleRead(index)}
                              className="form-checkbox text-pink-500"
                            />
                            <span className="text-pink-500">
                              I've read this section
                            </span>
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quiz Section */}
            <div className="flex items-center justify-center rounded-lg mb-36  p-4">
              <div className="w-full  mt-12 mb-12 bg-white rounded-lg shadow-md">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-center mb-6">
                    Play Quiz and Boost your learning !!
                  </h2>
                  <div>
                    {showScore ? (
                      <div className="text-center">
                        <h2 className="text-xl mb-4">
                          Your Score: {score} out of {quizQuestions.length}
                        </h2>
                        <button
                          onClick={restartQuiz}
                          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Play Again
                        </button>
                      </div>
                    ) : (
                      <>
                        <h2 className="text-xl mb-4">
                          {currentQuestionIndex + 1}.{" "}
                          {quizQuestions[currentQuestionIndex].question}
                        </h2>
                        <div className="space-y-2">
                          {quizQuestions[currentQuestionIndex].answers.map(
                            (answer, index) => (
                              <button
                                key={index}
                                className={`w-full text-left p-2 rounded ${
                                  answered && answer.correct
                                    ? "bg-green-200 text-white"
                                    : answered && !answer.correct
                                    ? "bg-red-400 text-white"
                                    : "bg-gray-100 hover:bg-gray-300"
                                }`}
                                onClick={() =>
                                  handleAnswerClick(answer.correct)
                                }
                                disabled={answered}
                              >
                                {answer.text}
                              </button>
                            )
                          )}
                        </div>
                        {answered && (
                          <div
                            className={`mt-4 p-4 rounded ${
                              isCorrect ? "bg-green-100" : "bg-red-100"
                            }`}
                          >
                            <div className="flex items-center">
                              {isCorrect ? (
                                <CheckCircle2 className="mr-2 text-green-500" />
                              ) : (
                                <XCircle className="mr-2 text-red-500" />
                              )}
                              <h3 className="font-bold">
                                {isCorrect
                                  ? "Correct!"
                                  : "Incorrect. Try again!"}
                              </h3>
                            </div>
                            <p className="mt-2">
                              {isCorrect &&
                                quizQuestions[currentQuestionIndex].description}
                            </p>
                          </div>
                        )}
                        {answered && (
                          <div className="mt-4 text-center">
                            <button
                              onClick={handleNextClick}
                              className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                            >
                              {isCorrect
                                ? currentQuestionIndex ===
                                  quizQuestions.length - 1
                                  ? "Finish"
                                  : "Next"
                                : "Retry"}
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
