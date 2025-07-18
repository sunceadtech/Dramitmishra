import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
function MinimalInvaise() {
  return (
    <>
      <div className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
        <img
          src="/images/service.webp"
          alt="Minimally Invasive Surgery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="w-full px-4 sm:px-8 lg:px-24 xl:px-32 max-w-7xl mx-auto text-center md:text-left">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
              Minimally Invasive Surgeries in Orthopedic Trauma Care
            </h1>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-1 sm:gap-2 text-xs sm:text-sm text-white uppercase">
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
              <span className="text-white/80 font-bold text-sm sm:text-base">
                Minimally Invasive Surgeries
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
                src="/images/minimal.webp"
                alt="Minimally Invasive Surgery in Orthopedics"
                className="w-full object-cover"
              />
            </div>

            <div className="pt-6 space-y-6 text-gray-700 text-[15px]">
              <h2 className="text-3xl font-bold">
                Advancements in Minimally Invasive Orthopedic Trauma Surgery
              </h2>
              <p>
                Minimally invasive surgery (MIS) has transformed orthopedic
                trauma care by allowing complex procedures to be performed
                through small incisions with reduced tissue disruption. This
                leads to faster recovery, less pain, shorter hospital stays, and
                improved cosmetic results compared to traditional open
                surgeries.
              </p>

              <h3 className="text-2xl font-semibold">Key Benefits</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Smaller incisions and minimal muscle damage.</li>
                <li>Faster post-operative recovery and early mobilization.</li>
                <li>Reduced risk of infection and blood loss.</li>
                <li>Less post-operative pain and scarring.</li>
              </ul>

              <h3 className="text-2xl font-semibold">
                Common Procedures Performed Using MIS Techniques
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Intramedullary nailing for fractures of long bones (femur,
                  tibia).
                </li>
                <li>Plating of fractures using percutaneous methods.</li>
                <li>Arthroscopic-assisted fracture fixation.</li>
                <li>Minimally invasive joint preservation surgeries.</li>
              </ul>

              <h3 className="text-2xl font-semibold">
                Ideal Candidates for MIS
              </h3>
              <p>
                Patients with traumatic injuries that allow stable fixation
                using advanced techniques and instrumentation. MIS is especially
                beneficial for elderly patients or those with underlying
                conditions that make open surgery riskier.
              </p>

              <h3 className="text-2xl font-semibold">
                Postoperative Care and Recovery
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Early physiotherapy to regain mobility and function.</li>
                <li>Pain management with minimal use of opioids.</li>
                <li>Regular follow-ups for implant monitoring and healing.</li>
              </ul>

              <hr className="my-6" />
              <div className="bg-blue-50 p-6 rounded text-center">
                <h3 className="text-xl font-bold mb-2">
                  Considering Advanced Trauma Surgery? Book an Appointment Today
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

export default MinimalInvaise;
