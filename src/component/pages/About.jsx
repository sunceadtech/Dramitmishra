import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import HomeCrawsel from "../home/HomeCrawsel";
import KneeComp from "../home/KneeComp";
import { Helmet } from "react-helmet";
function About() {
  return (
    <>
      <Helmet>
        <title>
          About Dr. Amit Sharma | Orthopedic & Joint Replacement Surgeon
        </title>
        <meta
          name="description"
          content="Learn about Dr. Amit Sharma, a highly experienced orthopedic and joint replacement surgeon based in Ghaziabad and Delhi. Trusted for advanced bone and joint care."
        />
        <meta
          name="keywords"
          content="Dr. Amit Sharma, orthopedic surgeon, joint replacement specialist, bone doctor Delhi, and Ghaziabad orthopedic"
        />
        <link rel="canonical" href="https://dramitsharmaortho.com/about" />
      </Helmet>
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] overflow-hidden"
        aria-label="Introduction to Dr. Amit Sharma"
      >
        <img
          src="/images/main.webp"
          alt="Dr. Amit Sharma - Orthopedic Surgeon in Delhi NCR"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          width="1920"
          height="500"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-6 md:px-20">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Meet Dr. Amit Sharma
            </h1>
            <p className="text-white text-lg md:text-xl mb-6">
              Your trusted orthopedic specialist for joint replacement, sports
              injuries, and trauma care in Delhi NCR.
            </p>
            <nav
              className="flex items-center gap-2 text-sm text-white"
              aria-label="Breadcrumb navigation"
            >
              <Link
                to="/"
                className="hover:underline"
                aria-label="Navigate to Home"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
              <span className="font-semibold" aria-current="page">
                About Dr. Amit Sharma
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="bg-slate-50" aria-labelledby="doctor-profile-heading">
        <div className="text-gray-700 px-4 md:px-14 py-12 space-y-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3">
              <img
                src="/images/doctor2.webp"
                alt="Professional portrait of Dr. Amit Sharma"
                className="w-full rounded shadow-md"
                loading="lazy"
                width="400"
                height="400"
              />
            </div>
            <div className="md:w-2/3 space-y-6">
              <h2
                id="doctor-profile-heading"
                className="text-3xl font-bold text-purple-700"
              >
                Dr. Amit Sharma - Orthopedic & Joint Replacement Surgeon
              </h2>
              <p className="text-base leading-relaxed text-gray-700">
                With <strong>23+ years of orthopedic experience</strong>, Dr.
                Amit Sharma is a board-certified, internationally trained
                orthopedic surgeon in Delhi NCR. His clinical expertise includes{" "}
                <strong>
                  knee and hip replacement, arthroscopy, sports injury treatment
                </strong>
                , and minimally invasive fracture surgery.
                <br />
                <br />
                He has served as the Head of Orthopedics at Dr. Hedgewar
                Hospital for over 8 years and completed senior residencies at
                LNJP (MAMC) and Sant Parmanand Hospitals. He’s a triathlon and
                marathon enthusiast, deeply understanding sports rehab and
                performance.
                <br />
                <br />
                <span className="text-purple-700 font-semibold">
                  Motto:
                </span>{" "}
                “Movement is medicine — restore it right.”
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <ul className="list-disc list-inside text-gray-700">
                  <li>Joint Replacement (Knee & Hip)</li>
                  <li>Advanced Arthroscopic Procedures</li>
                </ul>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Sports Injury Rehabilitation</li>
                  <li>Minimally Invasive Trauma Surgery</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fellowship and Clinics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Fellowships */}
            <div className="border-2 border-purple-400 p-5 rounded-md">
              <h3 className="font-semibold mb-3 text-purple-600 text-lg">
                International Fellowships & Certifications
              </h3>
              <ul className="space-y-2 list-image-[url('/images/arrow1.png')] pl-5 text-sm">
                <li>
                  Arthroscopy & Sports Medicine – <strong>Sydney</strong>
                </li>
                <li>
                  Advanced Trauma Surgery – <strong>Seoul</strong>
                </li>
                <li>
                  Exercise Medicine – <strong>South Wales, UK</strong>
                </li>
              </ul>
            </div>

            {/* Yashoda Hospital */}
            <div className="border-2 border-blue-500 p-5 rounded-md">
              <h3 className="font-semibold mb-3 text-blue-600 text-lg">
                Yashoda Super Speciality Hospital – Kaushambi
              </h3>
              <ul className="space-y-2 list-image-[url('/images/arrow1.png')] pl-5 text-sm">
                <li>Consultation Days: Monday to Saturday</li>
                <li>Morning: 09:00 AM – 02:00 PM</li>
                <li>Evening: 05:00 PM – 07:00 PM</li>
                <li>
                  <strong>Call: </strong>
                  <a
                    href="tel:+918750056560"
                    aria-label="Call Yashoda Hospital"
                  >
                    +91 87500 56560
                  </a>
                </li>
              </ul>
            </div>

            {/* City Clinic */}
            <div className="border-2 border-purple-400 p-5 rounded-md">
              <h3 className="font-semibold mb-3 text-purple-600 text-lg">
                City Clinic – Krishna Nagar
              </h3>
              <ul className="space-y-2 list-image-[url('/images/arrow1.png')] pl-5 text-sm">
                <li>Consultation: Monday to Saturday</li>
                <li>Timings: 07:00 PM – 09:00 PM</li>
                <li>Opp. Swarn Cinema, near Surya Hospital, Delhi</li>
                <li>
                  <strong>Call: </strong>
                  <a href="tel:+918826629486" aria-label="Call City Clinic">
                    +91 88266 29486
                  </a>
                </li>
                <li>
                  <strong>Email: </strong>
                  <a
                    href="mailto:amit9851@yahoo.com"
                    className="underline text-blue-600"
                    aria-label="Email Dr. Amit Sharma"
                  >
                    amit9851@yahoo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link
              to="/service"
              className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition"
              aria-label="View all orthopedic treatments by Dr. Amit Sharma"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <HomeCrawsel />
      <KneeComp />

      {/* Bottom CTA */}
      <section
        className="bg-purple-700 py-6 mt-12"
        aria-label="Appointment Call to Action"
      >
        <div className="w-full text-white px-4 md:px-10 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
          <p className="text-center md:text-left text-sm md:text-lg font-medium">
            Experiencing joint pain, fractures, or ligament issues? Trust Dr.
            Amit Sharma for personalized, world-class orthopedic care.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-700 font-semibold px-5 py-2 rounded-full hover:bg-purple-100 transition"
            aria-label="Book an appointment with orthopedic expert Dr. Amit Sharma"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;
