import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`mt-12 pt-8 border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Section */}
        <div>
          <h4 className={`font-semibold ${darkMode ? "text-gray-100" : "text-gray-900"} mb-4`}>
            Company
          </h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => navigate("/symptomsanalyzer")}
                className={`${darkMode ? "text-gray-400 hover:text-pink-400" : "text-gray-700 hover:text-pink-600"}`}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/parents")}
                className={`${darkMode ? "text-gray-400 hover:text-pink-400" : "text-gray-700 hover:text-pink-600"}`}
              >
                Careers
              </button>
            </li>
            <li>
              <a
                href="#"
                className={`${darkMode ? "text-gray-400 hover:text-pink-400" : "text-gray-700 hover:text-pink-600"}`}
              >
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className={`font-semibold ${darkMode ? "text-gray-100" : "text-gray-900"} mb-4`}>
            Resources
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className={`${darkMode ? "text-gray-400 hover:text-pink-400" : "text-gray-700 hover:text-pink-600"}`}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${darkMode ? "text-gray-400 hover:text-pink-400" : "text-gray-700 hover:text-pink-600"}`}
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${darkMode ? "text-gray-400 hover:text-pink-400" : "text-gray-700 hover:text-pink-600"}`}
              >
                Community
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className={`font-semibold ${darkMode ? "text-gray-100" : "text-gray-900"} mb-4`}>
            Legal
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className={`${darkMode ? "text-gray-400 hover:text-pink-400" : "text-gray-700 hover:text-pink-600"}`}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${darkMode ? "text-gray-400 hover:text-pink-400" : "text-gray-700 hover:text-pink-600"}`}
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${darkMode ? "text-gray-400 hover:text-pink-400" : "text-gray-700 hover:text-pink-600"}`}
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h4 className={`font-semibold ${darkMode ? "text-gray-100" : "text-gray-900"} mb-4`}>
            Connect
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className={`${darkMode ? "text-gray-400 hover:text-pink-400" : "text-gray-700 hover:text-pink-600"}`}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${darkMode ? "text-gray-400 hover:text-pink-400" : "text-gray-700 hover:text-pink-600"}`}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${darkMode ? "text-gray-400 hover:text-pink-400" : "text-gray-700 hover:text-pink-600"}`}
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className={`mt-8 pt-8 border-t ${darkMode ? "border-gray-700" : "border-gray-200"} text-center`}>
        <p className={`${darkMode ? "text-gray-400" : "text-gray-700"}`}>TEAM: EmpowerHer</p>
        <p className={`${darkMode ? "text-gray-400" : "text-gray-700"}`}>
          &copy; 2024 FlowCare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;