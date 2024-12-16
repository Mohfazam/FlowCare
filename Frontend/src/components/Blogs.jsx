import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Blogs() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(
    "https://img.freepik.com/premium-photo/beautiful-woman-wearing-white-hijab-elegant-hijab_608068-34215.jpg"
  );

  const [activeItem, setActiveItem] = useState(null);
  const [readSections, setReadSections] = useState([false, false, false]); // Tracks read status for each section

  const toggleAccordion = (id) => {
    setActiveItem((prev) => (prev === id ? null : id));
  };

  const handleRead = (index) => {
    const updatedReadSections = [...readSections];
    updatedReadSections[index] = true; // Mark the section as read
    setReadSections(updatedReadSections);
  };

  const accordionData = [
    {
      id: 1,
      question: "What is a period?",
      answer:
        " Your period or menstruation (that’s the ‘sciencey’ name) is part of your menstrual cycle. This cycle is ultimately your body’s way of preparing itself for a possible pregnancy.",
    },
    {
      id: 2,
      question: "What are the signs that my period is coming?",
      answer:
        "For large products, we deliver your product via a third party logistics company offering you the 'room of choice' scheduled delivery service. For small products, we offer free parcel delivery.",
    },
    {
      id: 3,
      question: "Let’s get to the bloody truth. How much blood do we lose?",
      answer:
        "Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for a full refund.",
    },
    {
      id: 4,
      question: "Let’s get to the bloody truth. How much blood do we lose?",
      answer:
        "Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for a full refund.",
    },
  ];
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>FlowCare</title>
      <link rel="stylesheet" href="../styles/style.css" />
      <link rel="stylesheet" href="../styles/tailwind.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
        integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
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
      {/*----------------------BREADCRUMB SECTION---------------------------------*/}
      <nav aria-label="Breadcrumb" className="flex mt-4 ml-24">
        <ol className="flex overflow-hidden rounded-lg border border-gray-200 bg-slate-100 text-gray-600">
          <li className="flex items-center">
            <a
              href="#"
              className="flex h-10 items-center gap-1.5 px-4 transition hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-black ms-1.5 text-xs font-sans font-medium">
                Home
              </span>
            </a>
          </li>
          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
            <a
              href="#"
              className="flex h-10 items-center text-black bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
            >
              Blogs
            </a>
          </li>
        </ol>
      </nav>
      {/*----------------------SEACRH BAR SECTION---------------------------------*/}
      <div className="bg-transparent flex justify-center items-center px-20 mt-12">
        <div className="space-y-10">
          <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="bg-gray-100 outline-none"
                type="text"
                placeholder="Article name or keyword..."
              />
            </div>
            <div className="flex py-3 px-4 rounded-lg font-semibold cursor-pointer">
              <span className="font-sans text-black bg-white">
                All categories
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="bg-pink-600 py-3 px-5 font-sans text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span className="font-sans text-white">Search</span>
            </div>
          </div>
        </div>
      </div>

      {/*----------------------BLOGS SECTION--------------------------
      <div className="grid grid-cols-2 gap-8 px-16 mt-14 ml-[10%]">
        <a
          href="#"
          className="relative block bg-gray-50 w-3/4 overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                Importance of self-care
              </h3>
              <p className="mt-1 text-xs font-medium text-gray-600">
                By Nouman
              </p>
            </div>
            <div className="hidden sm:block sm:shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="size-16 rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-pretty text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
              illum provident a, ipsa maiores deleniti consectetur nobis et
              eaque.
            </p>
          </div>
          <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Published</dt>
              <dd className="text-xs text-gray-500">31st Dec, 2024</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">
                Reading time
              </dt>
              <dd className="text-xs text-gray-500">3 minute</dd>
            </div>
          </dl>
        </a>
        <a
          href="#"
          className="relative block bg-gray-50 w-3/4 overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                Importance of self-care
              </h3>
              <p className="mt-1 text-xs font-medium text-gray-600">
                By Nouman
              </p>
            </div>
            <div className="hidden sm:block sm:shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="size-16 rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-pretty text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
              illum provident a, ipsa maiores deleniti consectetur nobis et
              eaque.
            </p>
          </div>
          <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Published</dt>
              <dd className="text-xs text-gray-500">31st Dec, 2024</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">
                Reading time
              </dt>
              <dd className="text-xs text-gray-500">3 minute</dd>
            </div>
          </dl>
        </a>
        <a
          href="#"
          className="relative block w-3/4 bg-gray-50 overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                Importance of self-care
              </h3>
              <p className="mt-1 text-xs font-medium text-gray-600">
                By Nouman
              </p>
            </div>
            <div className="hidden sm:block sm:shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="size-16 rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-pretty text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
              illum provident a, ipsa maiores deleniti consectetur nobis et
              eaque.
            </p>
          </div>
          <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Published</dt>
              <dd className="text-xs text-gray-500">31st Dec, 2024</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">
                Reading time
              </dt>
              <dd className="text-xs text-gray-500">3 minute</dd>
            </div>
          </dl>
        </a>
        <a
          href="#"
          className="relative block w-3/4 bg-gray-50 overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                Importance of self-care
              </h3>
              <p className="mt-1 text-xs font-medium text-gray-600">
                By Nouman
              </p>
            </div>
            <div className="hidden sm:block sm:shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="size-16 rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-pretty text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
              illum provident a, ipsa maiores deleniti consectetur nobis et
              eaque.
            </p>
          </div>
          <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Published</dt>
              <dd className="text-xs text-gray-500">31st Dec, 2024</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">
                Reading time
              </dt>
              <dd className="text-xs text-gray-500">3 minute</dd>
            </div>
          </dl>
        </a>
      </div>
      -------*/}
      <div className="w-[70%] ml-[15%] mt-16 px-6 py-7 rounded-lg">
        <h1 className="text-7xl">Period 101</h1>
        <div className="bg-pink-200 w-1/4  rounded-md px-6 py-2 mt-14 -mb-16">
          <p>
            <i className="fa-solid fa-heart"> </i> Approved by{" "}
            <a href="" className="underline">
              Industry Experts
            </a>
          </p>
        </div>
      </div>

      <div className="w-[70%] flex flex-col content-center items-center text-center px-7 py-10 ml-[15%] bg-pink-200 rounded-xl mt-24">
        <h1 className="text-2xl text-pink-700  font-semibold mb-4">
          You can read the modules to earn rewards and unlock exciting new
          features.
        </h1>
        <div className="flex gap-4 flex-row">
          {readSections.map((isRead, index) => (
            <i
              key={index}
              className="fa-solid fa-trophy text-[2rem]"
              style={{ color: isRead ? "#FFD43B" : "#fff " }}
            ></i>
          ))}
        </div>
      </div>

      <div className=" w-[70%] ml-[15%] mt-16  px-6 py-7 rounded-lg">
        <h1 className="text-3xl font-bold text-pink-500">
          Welcome to Period 101, your one-stop guide for everything
          period-related! Whether you want to know what to expect from your
          first period, or you’re well into the swing of things but still have
          some questions, don’t worry… we’re here to help!
        </h1>

        <p className="text-xl mt-5">
          In this blog we’ll cover all kinds of things! From what you period
          actually is (the sciencey bit), to how your period can affect your
          body, mood and feelings, and of course the question on everyone’s
          lips…. WHAT IS NORMAL?!
        </p>
      </div>

      <div>
        <div className="accordion accordion-shadow mt-12 ml-[15%] w-5/5 mr-[15%]">
          {accordionData.map(({ id, question, answer }, index) => (
            <div
              key={id}
              className={`accordion-item bg-pink-50 transition-transform ease-in duration-300 mb-4 ${
                activeItem === id ? "accordion-item-active" : ""
              }`}
              id={id}
            >
              <button
                className="accordion-toggle inline-flex items-center justify-between gap-x-7 px-5 py-4 text-start w-full"
                aria-controls={`${id}-collapse`}
                aria-expanded={activeItem === id}
                onClick={() => toggleAccordion(id)}
              >
                <div className="inline-flex items-center gap-x-4">
                  <i className="fa-solid fa-star" style={{ color: "pink" }}></i>

                  <span
                    className={`icon-[tabler--plus] ${
                      activeItem === id ? "hidden" : "block"
                    } text-base-content size-4.5 shrink-0`}
                  ></span>
                  <span
                    className={`icon-[tabler--minus] ${
                      activeItem === id ? "block" : "hidden"
                    } text-base-content size-4.5 shrink-0`}
                  ></span>
                  <h1 className="text-2xl text-pink-700 font-semibold text-base-content">
                    {question}
                  </h1>
                </div>
                <i
                  className={`fa-solid ${
                    activeItem === id ? "fa-minus" : "fa-plus"
                  } text-lg text-base-content`}
                ></i>
              </button>
              <div
                id={`${id}-collapse`}
                className={`accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                  activeItem === id ? "" : "hidden"
                }`}
                aria-labelledby={id}
                role="region"
              >
                <div className="px-5 pb-4">
                  <p className="text-base-content/80 font-normal">{answer}</p>
                  {/* Radio Input */}
                  <div className="mt-4">
                    <label className="flex items-center gap-2 text-base-content">
                      <input
                        type="radio"
                        name={`read-${id}`}
                        className="radio"
                        onClick={() => handleRead(index)}
                        disabled={readSections[index]} // Prevents re-clicking
                      />
                      I have read
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
      </div>

      {/*----------------------Pages SECTION---------------------------
      <div className="w-[70%] ml-[15%] mt-4 px-6 py-7 rounded-lg flex items-center">
        <div className="w-[50%] pr-6">
          <h1 className="text-3xl font-bold text-pink-500">
            Let’s get to the bloody truth. How much blood do we lose?
          </h1>
          <p className="text-xl mt-5">
            As we’ve already said, everyone is different, and what one person
            considers to be a light period (not much blood) might be heavy for
            someone else, so it’s really a case of getting to know your body in
            the early days. On average, women, girls, and people who have
            periods lose between 3-9 teaspoons of fluid a month (it really isn’t
            that much when you put it that way!). But why did we just call it
            fluid? Well, while we commonly call it blood - and yes there is
            blood in there - there’s also other really impressive stuff in there
            too. About half of your period is blood, but the rest is made up of
            other things including tissue, nutrients and cervical mucus - pretty
            amazing when
            <b>
              {" "}
              you think about it! It’s important that you monitor your flow -
              yes, go with it - but if you struggle it might be a sign that you
              need some help. A good indicator that your flow is very heavy, is
              if you have to change your period product every hour or two. If
              you find this is the case
            </b>
            , you should speak to your doctor or nurse who will be able to help.
            On the other hand, some women, girls, and people who have periods
            have a light flow (they don’t lose much fluid) and that’s totally
            normal too! Just be aware of your body and make sure you’re changing
            your period products often enough, for some products especially
            tampons it’s super important that you don’t leave them in too long.
            To find out more info on period products click here.
          </p>
        </div>
        <div className="w-[50%]">
          <img
            src="https://bloodybrilliant.wales/images/jcogs_img/cache/period-101-content-03_-_28de80_-_827094e59f9173bfae4c1e7a9446513a3715515a.webp"
            alt=""
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      ------*/}

      {/*----------------------Pages SECTION---------------------------------*/}
      <ol className="flex justify-center gap-1 text-xs font-medium mt-12">
        <li>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            1
          </a>
        </li>
        <li className="block size-8 rounded border-pink-600 bg-pink-600 text-center leading-8 text-white">
          2
        </li>
        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ol>
      {/*----------------------FOOTER---------------------------------*/}
      <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-pink-400 text-white">
        <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
          <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
            Ready to get your productivity back?
            <br />
            Start your free trial today.
          </h2>
          <a
            className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-pink-800 rounded-full shadow-xl border border-transparent hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-pink-500"
            href="#"
          >
            Get started
          </a>
          <div className="mt-14 xl:mt-20">
            <nav className="flex flex-wrap justify-center text-lg font-medium">
              <div className="px-5 py-2">
                <a href="#">Contact</a>
              </div>
              <div className="px-5 py-2">
                <a href="#">Pricing</a>
              </div>
              <div className="px-5 py-2">
                <a href="#">Privacy</a>
              </div>
              <div className="px-5 py-2">
                <a href="#">Terms</a>
              </div>
              <div className="px-5 py-2">
                <a href="#">Twitter</a>
              </div>
            </nav>
            <p className="mt-7 text-base">© 2023 XYZ, LLC</p>
          </div>
        </div>
      </footer>
    </>
  );
}
