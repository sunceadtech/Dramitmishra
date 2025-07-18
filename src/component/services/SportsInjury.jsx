import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function SportsInjury() {
  return (
    <>
      <div className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
        <img
          src="/images/service.webp"
          alt="Sports Injury"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-4 md:px-32 text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              Sports Injury
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
                Sports Injury
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
                src="/images/sportsinjury.webp"
                alt="Sports Injury Treatment"
                className="w-full object-cover"
              />
            </div>

            <div className="pt-2 space-y-6 text-gray-700 text-[15px]">
              <section className="py-10 bg-white">
                <div className="container mx-auto px-4 text-gray-700">
                  <h2 className="text-3xl font-bold mb-4">Sports Injury</h2>
                  <p className="mb-6">
                    Sports injuries are common in both amateur and professional
                    athletes. These injuries can affect bones, muscles,
                    ligaments, tendons, and joints. Prompt diagnosis and
                    treatment are essential to ensure complete recovery and
                    prevent long-term complications.
                  </p>

                  <h3 className="text-2xl font-semibold mb-4">
                    Common Types of Sports Injuries
                  </h3>
                  <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>✔️ ACL and PCL ligament tears</li>
                    <li>✔️ Meniscus tears</li>
                    <li>✔️ Shoulder dislocations and rotator cuff injuries</li>
                    <li>✔️ Ankle sprains and fractures</li>
                    <li>✔️ Tennis elbow and golfer’s elbow</li>
                    <li>✔️ Stress fractures</li>
                    <li>✔️ Muscle strains and contusions</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4">
                    Symptoms to Watch Out For
                  </h3>
                  <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>✔️ Sudden pain during activity</li>
                    <li>✔️ Swelling and bruising</li>
                    <li>✔️ Limited range of motion</li>
                    <li>✔️ Instability or weakness</li>
                    <li>✔️ Difficulty bearing weight</li>
                    <li>✔️ Popping or grinding sounds</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4">Diagnosis</h3>
                  <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>✔️ Clinical examination by orthopedic specialist</li>
                    <li>✔️ Imaging tests: X-ray, MRI, or ultrasound</li>
                    <li>✔️ Functional movement assessment</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4">
                    Treatment Options
                  </h3>
                  <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>
                      ✔️ RICE Protocol – Rest, Ice, Compression, Elevation
                    </li>
                    <li>✔️ Physical therapy and rehabilitation</li>
                    <li>✔️ Bracing or immobilization</li>
                    <li>
                      ✔️ Arthroscopic surgery for ligament or meniscus repair
                    </li>
                    <li>✔️ Minimally invasive joint procedures</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4">
                    Prevention Tips
                  </h3>
                  <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>✔️ Warm up before activities and stretch regularly</li>
                    <li>✔️ Use proper techniques and protective gear</li>
                    <li>✔️ Strengthen core and stabilizing muscles</li>
                    <li>✔️ Stay hydrated and maintain proper nutrition</li>
                    <li>✔️ Avoid overtraining and rest between sessions</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4">
                    Why Choose Us?
                  </h3>
                  <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>✔️ Specialized sports injury treatment and surgery</li>
                    <li>✔️ Latest diagnostic and rehabilitation technology</li>
                    <li>✔️ Personalized recovery plans</li>
                    <li>✔️ Trusted by athletes across Delhi NCR</li>
                  </ul>
                </div>
              </section>

              <hr className="my-6" />
              <div className="bg-blue-50 p-6 rounded text-center">
                <h3 className="text-xl font-bold mb-2">
                  Need Sports Injury Advice? Contact Us Today
                </h3>
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Book Appointment
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

export default SportsInjury;
