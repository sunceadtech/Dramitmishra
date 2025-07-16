import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import HomeCrawsel from "../home/HomeCrawsel";
import KneeComp from "../home/KneeComp";
function About() {
  return (
    <>
      <div className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <img
          src="https://usamrukenya.org/portraitgray.jpg"
          alt="Doctor Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Light Overlay */}
       <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-6 md:px-20">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Meet Dr. Amit Sharma
            </h1>
            <p className="text-white text-lg md:text-xl mb-6">
              Specializing in advanced orthopedic care, joint replacements, and
              sports injuries. Trusted by thousands for compassionate healing.
            </p>
            <div className="flex items-center gap-2 text-sm text-white">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="font-semibold">About The Doctor</span>
            </div>
          </div>
        </div>
      </div>
      {/*about pages hai  */}
      <div className="bg-slate-50">
        <div className="text-gray-700 px-4 md:px-14 py-10 space-y-12 max-w-7xl mx-auto">
          {/* About Section */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* Doctor Image */}
            <div className="md:w-1/3">
              <img
                src="/images/doctor2.png"
                alt="Dr. Amit Sharma"
                className="w-full rounded shadow-md"
              />
            </div>

            {/* Doctor Info */}
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-3xl font-bold text-purple-700">
                Dr. Amit Sharma
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                Dr. Amit Sharma is an{" "}
                <strong>internationally trained orthopedic surgeon</strong> with
                over 23 years of experience. He specializes in joint
                replacement, arthroscopy, sports injuries, and minimally
                invasive trauma surgeries.
                <br />
                <br />
                His unique approach integrates cutting-edge surgical techniques
                with a deep understanding of athlete recovery, thanks to his
                background as a marathon and triathlon enthusiast.
                <br />
                <br />
                He completed his senior residency at LNJP Hospital (MAMC) and
                Sant Parmanand Hospital, followed by a tenure as{" "}
                <strong>
                  Head of Orthopedics at Dr. Hedgewar Hospital
                </strong>{" "}
                for 8 years.
                <br />
                <br />
                His professional training includes{" "}
                <strong>global fellowships</strong> and certifications in
                orthopedic advancements.
                <br />
                <br />
                <span className="font-semibold text-purple-600">
                  His belief:
                </span>{" "}
                "Movement is medicine — restore it right."
              </p>

              {/* Specializations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ul className="list-disc list-inside text-gray-700">
                  <li>Joint Replacement</li>
                  <li>Arthroscopy</li>
                </ul>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Sports Injuries</li>
                  <li>Minimally Invasive Trauma Surgery</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Training Card */}
            <div className="border-2 border-purple-400 p-4 rounded-md">
              <h4 className="font-semibold mb-3 text-purple-600">
                Global Fellowships & Training
              </h4>
              <ul className="space-y-2 list-image-[url('/images/arrow1.png')] pl-5">
                <li>
                  Arthroscopy & Sports Medicine – <b>Sydney</b>
                </li>
                <li>
                  Trauma Surgery Techniques – <b>Seoul</b>
                </li>
                <li>
                  Exercise Medicine Certification – <b>South Wales, UK</b>
                </li>
              </ul>
            </div>

            {/* Yashoda Hospital Card */}
            <div className="border-2 border-blue-500 p-4 rounded-md">
              <h4 className="font-semibold mb-3 text-blue-600">
                Yashoda Hospital – Kaushambi
              </h4>
              <ul className="space-y-2 list-image-[url('/images/arrow1.png')] pl-5">
                <li>Monday to Saturday</li>
                <li>
                  <b>09:00 AM – 02:00 PM</b>
                </li>
                <li>
                  <b>05:00 PM – 07:00 PM</b>
                </li>
                <li>
                  Yashoda Super Speciality Hospital, Kaushambi, Ghaziabad <br />
                  <b>Call @ 8750056560</b>
                </li>
              </ul>
            </div>

            {/* City Clinic Card */}
            <div className="border-2 border-purple-400 p-4 rounded-md">
              <h4 className="font-semibold mb-3 text-purple-600">
                City Clinic – Krishna Nagar
              </h4>
              <ul className="space-y-2 list-image-[url('/images/arrow1.png')] pl-5">
                <li>Monday to Saturday</li>
                <li>
                  <b>07:00 PM – 09:00 PM</b>
                </li>
                <li>
                  Krishna Nagar (Opp. Swarn Cinema, near Surya Hospital), Delhi
                  <br />
                  <b>Call @ 8826629486</b>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:amit9851@yahoo.com"
                    className="underline text-blue-600"
                  >
                    amit9851@yahoo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* View Services Button */}
          <div className="text-center pt-2">
            <Link
              to="/blog"
              className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
      <HomeCrawsel />
      <KneeComp />
      {/*about last div hai chota */}
      <div className="bg-purple-600 py-2 md:py-6">
      <div className="w-full bg-purple-600 text-white px-4 md:px-10 py-4 md:py-6 flex flex-col md:flex-row justify-around items-center gap-4 md:gap-0 max-w-7xl mx-auto">
        {/* Left Content */}
        <p className="text-center md:text-left text-sm md:text-lg font-medium">
          Dealing with joint pain, fractures, or a sports injury? Get expert
          orthopedic care from Dr. Amit Sharma.
        </p>

        {/* Right CTA */}
        <Link
          to="/contact"
          className="bg-white text-purple-700 font-semibold px-5 py-2 rounded-full shadow hover:bg-purple-100 transition duration-200"
        >
          Book Appointment
        </Link>
      </div>
      </div>
    </>
  );
}

export default About;
