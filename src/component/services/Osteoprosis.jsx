import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function Osteoprosis() {
  return (
    <>
      <div className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
        <img
         src="/images/service.webp"
          alt="Osteoporosis operation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-4 md:px-32 text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              Osteoporosis
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-1 sm:gap-2 text-sm text-white uppercase">
              <Link to="/" className="hover:underline font-bold text-white/90">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                to="/service"
                className="hover:underline font-bold text-white/90"
              >
                Services
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white/80 font-bold text-base">
                Osteoporosis
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-10 bg-white">
        <div className="max-w-7xl mx-auto lg:flex lg:gap-8 px-2 sm:px-4">
          {/* Left Section */}
          <div className="lg:w-3/4 w-full">
            <div className="rounded overflow-hidden shadow-md mb-0">
              <img
                src="/images/osteo.webp"
                alt="Osteoporosis"
                className="w-full object-cover"
              />
            </div>

            <div className="pt-6 space-y-6 text-gray-700 text-[15px]">
              <h2 className="text-3xl font-bold">
                Understanding Osteoporosis: Prevention and Management
              </h2>
              <p>
                Osteoporosis is a condition where bones become weak and brittle,
                increasing the risk of fractures. It often develops silently
                over years and is most common among older adults, especially
                postmenopausal women. Early detection and effective management
                can prevent complications and enhance bone health.
              </p>

              <h3 className="text-2xl font-semibold">
                Causes and Risk Factors
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Age-related bone loss, particularly after menopause.</li>
                <li>Low calcium or vitamin D intake.</li>
                <li>Family history of osteoporosis or fractures.</li>
                <li>
                  Sedentary lifestyle and lack of weight-bearing exercise.
                </li>
                <li>
                  Smoking, excessive alcohol use, and certain medications.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold">Signs and Symptoms</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Back pain caused by fractured or collapsed vertebrae.</li>
                <li>Loss of height over time.</li>
                <li>Stooped posture or easily occurring bone fractures.</li>
              </ul>

              <h3 className="text-2xl font-semibold">Diagnosis</h3>
              <p>
                Osteoporosis is diagnosed using bone density tests like DEXA
                (dual-energy X-ray absorptiometry), which measure bone mass and
                assess fracture risk.
              </p>

              <h3 className="text-2xl font-semibold">
                Treatment and Management
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Medications:</strong> Bisphosphonates, hormone-related
                  therapy, and other medications that slow bone loss or
                  stimulate bone formation.
                </li>
                <li>
                  <strong>Nutrition:</strong> A balanced diet rich in calcium
                  and vitamin D is vital to maintain bone strength.
                </li>
                <li>
                  <strong>Exercise:</strong> Weight-bearing and resistance
                  exercises help maintain bone density and muscle strength.
                </li>
                <li>
                  <strong>Lifestyle Changes:</strong> Quit smoking, limit
                  alcohol, and take safety measures to prevent falls.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold">Prevention Tips</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Begin bone-healthy habits early in life.</li>
                <li>
                  Ensure daily calcium and vitamin D intake through food or
                  supplements.
                </li>
                <li>
                  Engage in regular physical activity like walking, dancing, or
                  lifting weights.
                </li>
                <li>
                  Limit caffeine and salt, which can reduce calcium absorption.
                </li>
              </ul>

              <hr className="my-6" />
              <div className="bg-blue-50 p-6 rounded text-center">
                <h3 className="text-xl font-bold mb-2">
                  Concerned About Bone Health? Schedule a Consultation
                </h3>
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/4 w-full mt-10 lg:mt-0 space-y-6 mb-6">
            {/* Services Box */}
            <div className="bg-purple-700 text-white p-4 min-h-[400px] md:min-h-[550px] rounded shadow-sm">
              <h4 className="text-lg font-semibold text-slate-100 mb-4 md:text-3xl text-center">
                Our Services
              </h4>
              <ul className="text-sm md:text-md font-bold divide-y divide-purple-500 text-center">
                <li className="py-3">
                  <Link
                    to="/service"
                    className="hover:underline inline-block w-full"
                  >
                    All Services
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/knee-replacement"
                    className="hover:underline inline-block w-full"
                  >
                    Knee Replacement
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/hip-replacement"
                    className="hover:underline inline-block w-full"
                  >
                    Hip Replacement
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/arthroscopy"
                    className="hover:underline inline-block w-full"
                  >
                    Arthroscopy
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/acl-and-pcl-reconstruction"
                    className="hover:underline inline-block w-full"
                  >
                    ACL and PCL Reconstruction
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/sports-injury"
                    className="hover:underline inline-block w-full"
                  >
                    Sports Injury
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/arthritis"
                    className="hover:underline inline-block w-full"
                  >
                    Arthritis
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/osteoporosis"
                    className="hover:underline inline-block w-full"
                  >
                    Osteoporosis
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/minimal-invasive-complex-trauma-surgery"
                    className="hover:underline inline-block w-full"
                  >
                    Minimally Invasive Trauma Surgery
                  </Link>
                </li>
              </ul>
            </div>

            {/* OPD Timings Box */}
            <div className="bg-white text-gray-800 min-h-[350px] p-4 rounded shadow-sm border">
              <h6 className="text-lg font-semibold mb-3">OPD TIMINGS</h6>
              <ul className="text-sm space-y-2">
                <li className="flex justify-between">
                  <span>MON to SAT</span>
                  <span>9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>MON to SAT</span>
                  <span>5:00 PM - 7:00 PM</span>
                </li>
                <li className="text-center text-xs mt-2">
                  <p className="font-medium">
                    Yashoda Super Speciality Hospital
                  </p>
                  Kaushambi, Ghaziabad <br />
                  Call @ 8750056560
                </li>
                <li className="flex justify-between mt-4">
                  <span>MON to SAT</span>
                  <span>7:00 PM - 9:00 PM</span>
                </li>
                <li className="text-center text-xs mt-2">
                  <p className="font-medium">City Clinic, Krishna Nagar</p>
                  (Opp. Swarn Cinema, near Surya Hospital), Delhi <br />
                  Call @ 8826629486
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Osteoprosis;
