import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  MessageSquare,
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
  Droplet,
  Utensils,
  Menu,
  X,
  Check,
  Star,
  Users,
  ArrowRight,
  UserCircle,
  UsersRound,
} from "lucide-react";
import { Sidebar } from "./Sidebar"
import { Footer } from "./Footer";


export function Landing() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [sidebarVisible, setSidebarVisible] = useState(true);

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



  return (
    <div className={`flex h-screen ${darkMode ? "dark" : ""}`}>
     <Sidebar darkMode={darkMode} />

    

      {/* Main Content */}
      <main
        className={`flex-1 p-6 overflow-auto bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${
          sidebarVisible ? "ml-0" : "ml-0"
        }`}
      >
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400">
              Welcome to FlowCare
            </h2>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              ) : (
                <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </div>

          {/* Hero Section */}
          <Card>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 pr-8">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  FlowCare: Where Support Meets Empowerment for Every Cycle.
                </h1>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  Empowering women through personalized health tracking and
                  education.
                </p>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  Explore, learn, and connect with a community that cares about
                  your well-being.
                </p>
                <button
                  onClick={() => navigate("/Signup")}
                  className="bg-pink-600 dark:bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-700 dark:hover:bg-pink-600 transition-colors"
                >
                  Join Us!
                </button>
              </div>
            </div>
          </Card>

          {/* Features Overview */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Comprehensive Health Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureOverview
                icon={
                  <LayoutDashboard className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                }
                title="Personalized Child Dashboard"
                description="A space for children to manage their cycles, log symptoms, and access resources designed for their journey."
              />
              <FeatureOverview
                icon={
                  <GraduationCap className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                }
                title="Education Hub"
                description="Learn menstrual health through interactive blogs, modules, and rewards—stigma-free and fun!"
              />
              <FeatureOverview
                icon={
                  <ShoppingBag className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                }
                title="Curated Shop"
                description="Discover eco-friendly products and redeem learning points for sustainable choices."
              />
              <FeatureOverview
                icon={
                  <ActivitySquare className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                }
                title="Health Tracker"
                description="Log cycles, symptoms, and moods to understand patterns and gain actionable health insights."
              />
              <FeatureOverview
                icon={
                  <Stethoscope className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                }
                title="Expert Consultations"
                description="Access trusted health professionals for personalized advice and timely support."
              />
              <FeatureOverview
                icon={
                  <Bot className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                }
                title="Personaliszed AI-Powered Assistant"
                description="Get personalized insights, symptom analysis, and timely reminders tailored to your unique menstrual health needs."
              />
              <FeatureOverview
                icon={
                  <UsersRound className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                }
                title="Parent Dashboard"
                description="Stay informed with cycle updates, mood tracking, and AI alerts—supporting your child without compromising their privacy."
              />

              <FeatureOverview
                icon={
                  <HeartPulse className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                }
                title="Health Lens"
                description="An AI-powered tool to analyze symptoms, offer community insights, and provide actionable health advice."
              />

              <FeatureOverview
                icon={
                  <MessageSquare className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                }
                title="Forums"
                description="A safe, anonymous space for peer support, discussions, and expert Q&A on menstrual health and related topics."
              />
            </div>
          </Card>

          {/* Key Benefits Section */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Key Benefits of Using FlowCare
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BenefitItem
                title="Personalized Insights"
                description="FlowCare offers a shared platform with dual dashboards, ensuring parents stay informed without invading their child's privacy, fostering trust and security."
              />
              <BenefitItem
                title="Holistic Approach"
                description="Unlike traditional platforms, FlowCare addresses the unique needs of young menstruators with personalized tools for tracking cycles and early detection of menstrual issues."
              />
              <BenefitItem
                title="Expert-Backed Content"
                description="The Education Hub provides gamified, engaging content that empowers children to learn about menstruation in a fun, stigma-free environment, promoting period positivity."
              />
              <BenefitItem
                title="Community Support"
                description="FlowCare encourages open dialogue between parents and children about menstruation, helping build a supportive, trusting relationship and enhancing emotional well-being."
              />
            </div>
          </Card>

          {/* Our Mission Section */}
          <Card>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Our Mission
            </h3>
            <p className="text-lg mb-4 text-gray-800 dark:text-gray-300">
            FlowCare’s mission is to promote period positivity, reduce stigma, and empower families with education and support. We focus on early detection of health issues and provide access to affordable hygiene products.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-300">
            Our main focus is on global expansion, with plans to integrate advanced AI for personalized health insights and strengthen partnerships with schools, NGOs, and healthcare organizations to maximize impact.
            </p>
          </Card>

          {/* How It Works Section */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              How FlowCare Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StepCard
                number={1}
                title="Sign Up"
                description="Create your account and set up your profile with basic health information."
              />
              <StepCard
                number={2}
                title="Track Your Health"
                description="Log your symptoms, cycle, and wellness data regularly for personalized insights."
              />
              <StepCard
                number={3}
                title="Get Insights"
                description="Receive tailored recommendations and connect with experts for better health management."
              />
            </div>
          </Card>

          {/* Testimonials */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              What Our Users Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TestimonialCard
                quote="FlowCare has completely changed how I manage my health. It's like having a personal health assistant!"
                author="Sarah J."
              />
              <TestimonialCard
                quote="The community here is so supportive. I've learned so much and feel empowered to take control of my well-being."
                author="Emily R."
              />
            </div>
          </Card>

          {/* Latest Blog Posts */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Latest from Our Blog
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <BlogPostCard
                title="Understanding Your Menstrual Cycle"
                excerpt="Learn about the four phases of the menstrual cycle and how they affect your body and mood."
                date="May 15, 2023"
              />
              <BlogPostCard
                title="Nutrition Tips for Hormonal Balance"
                excerpt="Discover the foods that can help regulate your hormones and improve your overall health."
                date="May 10, 2023"
              />
              <BlogPostCard
                title="Stress Management Techniques"
                excerpt="Explore effective ways to manage stress and its impact on your menstrual health."
                date="May 5, 2023"
              />
            </div>
          </Card>

          {/* Success Stories */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SuccessStoryCard
                name="Jessica M."
                story="After struggling with irregular cycles for years, FlowCare helped me understand my body better. Within 3 months, I could predict my cycle accurately!"
                improvement="Cycle Regularity"
              />
              <SuccessStoryCard
                name="Olivia T."
                story="The nutritional guidance on FlowCare transformed my diet. My energy levels have improved, and I've noticed a significant reduction in PMS symptoms."
                improvement="Overall Well-being"
              />
            </div>
          </Card>

          {/* Expert Insights */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Expert Insights
            </h3>
            <div className="space-y-6">
              <ExpertInsightCard
                expert="Dr. Amanda Lee, OB/GYN"
                insight="Regular tracking of menstrual cycles can lead to early detection of various health issues. FlowCare's comprehensive tracking features make this process easy and insightful for users."
              />
              <ExpertInsightCard
                expert="Samantha Wong, Nutritionist"
                insight="The personalized nutritional recommendations provided by FlowCare are based on solid scientific research. They can significantly improve hormonal balance and overall health."
              />
            </div>
          </Card>

          {/* Community Highlights */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Community Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CommunityHighlightCard
                title="Monthly Wellness Challenges"
                description="Join our community-wide challenges focused on different aspects of women's health each month."
              />
              <CommunityHighlightCard
                title="Support Groups"
                description="Connect with women facing similar health challenges in our moderated support groups."
              />
              <CommunityHighlightCard
                title="Expert Q&A Sessions"
                description="Participate in live Q&A sessions with health experts and get your questions answered."
              />
            </div>
          </Card>

          {/* FAQ Section */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <FAQItem
                question="Is my data safe and private?"
                answer="Yes, we take your privacy seriously. All your data is encrypted and we never share your personal information with third parties."
              />
              <FAQItem
                question="Can I use FlowCare if I have irregular cycles?"
                answer="FlowCare is designed to accommodate all types of cycles, including irregular ones. Our AI adapts to your unique patterns over time."
              />
              <FAQItem
                question="How often should I log my symptoms?"
                answer="For the best results, we recommend logging your symptoms daily. However, even logging a few times a week can provide valuable insights."
              />
              <FAQItem
                question="How does FlowCare protect my privacy?"
                answer="We use state-of-the-art encryption and follow strict data protection protocols. Your personal information is never sold or shared with third parties without your explicit consent."
              />
              <FAQItem
                question="Can I use FlowCare if I'm not menstruating?"
                answer="FlowCare offers features for all aspects of women's health, including general wellness tracking, nutritional guidance, and mental health support."
              />
              <FAQItem
                question="Are the health articles on FlowCare written by professionals?"
                answer="Yes, all our educational content is created or reviewed by qualified healthcare professionals to ensure accuracy and relevance."
              />
            </div>
          </Card>

          {/* App Features Showcase */}
          {/* <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              App Features Showcase
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AppFeatureCard
                title="Cycle Prediction"
                description="Our AI-powered algorithm learns from your data to provide accurate cycle predictions."
                icon={
                  <Calendar className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                }
              />
              <AppFeatureCard
                title="Symptom Tracking"
                description="Log and monitor various symptoms to gain insights into your health patterns."
                icon={
                  <ActivitySquare className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                }
              />
              <AppFeatureCard
                title="Nutrition Guide"
                description="Get personalized nutrition advice based on your cycle phase and health goals."
                icon={
                  <Utensils className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                }
              />
              <AppFeatureCard
                title="Mood Tracking"
                description="Track your emotional well-being and identify patterns related to your cycle."
                icon={
                  <Heart className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                }
              />
            </div>
          </Card> */}

          {/* Partnerships */}
          {/* <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Our Trusted Partners
            </h3>
            <p className="text-lg mb-6 text-gray-800 dark:text-gray-300">
              We collaborate with leading healthcare providers, research
              institutions, and wellness brands to bring you the best in women's
              health care.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <PartnerLogo name="HealthTech Inc." />
              <PartnerLogo name="WomenWell Research" />
              <PartnerLogo name="NutriBalance" />
              <PartnerLogo name="MindfulHer" />
            </div>
          </Card> */}

          {/* Parent Dashboard Access */}
          <Card className="my-8">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-6 relative overflow-hidden group">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Parent Dashboard
                    </h3>
                    <p className="text-gray-200">
                      Access comprehensive insights for your child's health
                    </p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-full">
                    <UserCircle className="h-8 w-8 text-white" />
                  </div>
                </div>

                <p className="text-white/80">
                  Our Parent Dashboard provides a centralized view of your
                  child's health metrics, allowing you to track growth, monitor
                  symptoms, and stay informed about their well-being.
                </p>

                <button
                  onClick={() => navigate("/parents")}
                  className="w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-medium
                             hover:bg-gray-100 transition-all duration-300
                             flex items-center justify-center space-x-2 group"
                >
                  <span>Access Parent Dashboard</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            </div>
          </Card>

          {/* CTA */}
          <Card>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Ready to Take Control of Your Health?
              </h3>
              <p className="mb-6 text-gray-800 dark:text-gray-300">
                Join FlowCare today and start your journey to better health and
                wellness.
              </p>
              <button
                onClick={() => navigate("/Signup")}
                className="bg-pink-600 dark:bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 dark:hover:bg-pink-600 transition-colors"
              >
                Sign Up Now
              </button>
            </div>
          </Card>

          {/* Team Members Card */}
          <Card className="my-8">
            <div className="bg-gray-900 rounded-xl p-6 relative overflow-hidden group">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
              </div>

              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[length:200%_100%] animate-gradient"></div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Team EmpowerHer
                    </h3>
                    <p className="text-gray-400">
                      Building for HackForge - January 25, 2025
                    </p>
                  </div>
                  <div className="bg-green-500/20 px-3 py-1 rounded-full flex items-center">
                    <span className="text-green-400 text-sm font-medium">
                      Active Project
                    </span>
                  </div>
                </div>

                {/* Team Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-400 text-sm">Team Size</p>
                        <p className="text-3xl font-bold text-white">04</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                        <Users className="h-5 w-5 text-pink-400" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-400 text-sm">Project Status</p>
                        <p className="text-lg font-semibold text-white">
                          In Development
                        </p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <ActivitySquare className="h-5 w-5 text-purple-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Focus Areas */}
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-gray-300 font-medium mb-3">
                    Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-sm">
                      Women's Health
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                      AI Integration
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                      Healthcare Tech
                    </span>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                      Community Building
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => navigate("/team")}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-4 rounded-lg font-medium
                           hover:from-pink-500 hover:to-purple-500 transition-all duration-300
                           flex items-center justify-center space-x-2 group relative overflow-hidden"
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>

                  <div className="relative flex items-center space-x-2">
                    <span className="text-l text-gray-700 dark:text-gray-200">
                      Meet Our Team
                    </span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                {/* Bottom Stats */}
                <div className="pt-4 mt-4 border-t border-gray-800 grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">
                      Started: Jan 2025
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 justify-end">
                    <Heart className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">
                      Made with passion
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <Footer darkMode={darkMode} />
      </main>
    </div>
  );
}

const SidebarLink = ({ icon, label, onClick, active = false }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 w-full px-2 py-2 rounded-lg transition-colors ${
        active
          ? "bg-pink-200 dark:bg-pink-900 text-pink-800 dark:text-pink-200"
          : "text-gray-900 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] ${className}`}
    >
      {children}
    </div>
  );
};

const FeatureOverview = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const BenefitItem = ({ title, description }) => {
  return (
    <div className="border-l-4 border-pink-500 pl-4">
      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h4>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

const StepCard = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">
          {number}
        </span>
      </div>
      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h4>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="bg-pink-50 dark:bg-pink-900 p-4 rounded-lg">
      <p className="italic mb-2 text-gray-800 dark:text-gray-300">"{quote}"</p>
      <p className="font-semibold text-right text-gray-900 dark:text-gray-100">
        - {author}
      </p>
    </div>
  );
};

const BlogPostCard = ({ title, excerpt, date }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h4>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{excerpt}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{date}</p>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          {question}
        </span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-700 dark:text-gray-300">{answer}</p>
      )}
    </div>
  );
};

const SuccessStoryCard = ({ name, story, improvement }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
      <h4 className="text-lg font-semibold mb-2 text-gray-300 dark:text-gray-300">
        {name}
      </h4>
      <p className="text-gray-600 dark:text-gray-200 mb-4">"{story}"</p>
      <div className="flex items-center">
        <Check className="text-green-500 mr-2" />
        <span className="text-green-600 dark:text-green-400 font-medium">
          {improvement}
        </span>
      </div>
    </div>
  );
};

const ExpertInsightCard = ({ expert, insight }) => {
  return (
    <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
      <p className="text-gray-800 dark:text-gray-300 mb-4">"{insight}"</p>
      <p className="font-semibold text-right text-gray-900 dark:text-gray-100">
        - {expert}
      </p>
    </div>
  );
};

const CommunityHighlightCard = ({ title, description }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h4>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

const AppFeatureCard = ({ title, description, icon }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 bg-pink-100 dark:bg-pink-900 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const PartnerLogo = ({ name }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 h-20 rounded-lg flex items-center justify-center">
      <span className="text-gray-100 dark:text-gray-400 font-medium">
        {name}
      </span>
    </div>
  );
};

const style = document.createElement("style");
style.textContent = `
  @keyframes pulse {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
  }
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-gradient {
    animation: gradient 8s linear infinite;
  }
`;
document.head.appendChild(style);
