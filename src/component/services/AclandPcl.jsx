import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function AclandPcl() {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
        <img
        src="/images/service.webp"
          alt="ACL and PCL Reconstruction operation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="text-left md:text-center max-w-full md:max-w-4xl px-4 md:px-32">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl uppercase font-bold mb-3 sm:mb-4 leading-snug">
              ACL and PCL Reconstruction
            </h1>
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-white uppercase">
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
              <span className="text-white/80 text-sm sm:text-base font-bold">
                ACL and PCL Reconstruction
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-10 bg-white">
        <div className="max-w-7xl mx-auto lg:flex lg:gap-8 px-2 sm:px-4">
          {/* Left Content */}
          <div className="lg:w-3/4 w-full">
            <div className="rounded overflow-hidden shadow-md mb-0">
              <img
                src="https://www.dramitsharma.info/public/uploads/service-banner-18.jpg"
                alt="ACL and PCL Reconstruction"
                className="w-full object-cover"
              />
            </div>

            <div className="pt-6 space-y-6 text-gray-700 text-[15px]">
              <h2 className="text-3xl font-bold">ACL and PCL Reconstruction</h2>
              <p>
                Anterior Cruciate Ligament (ACL) and Posterior Cruciate Ligament
                (PCL) reconstructions are critical orthopedic surgeries
                performed to restore knee stability and function after ligament
                injuries.
              </p>

              <h3 className="text-2xl font-semibold">ACL Reconstruction</h3>
              <p className="font-semibold">
                Indications and Preoperative Considerations:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Instability or functional impairment</li>
                <li>
                  Preoperative evaluation with MRI and clinical examination
                </li>
              </ul>

              <p className="font-semibold">Surgical Techniques:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Arthroscopic minimally invasive surgery</li>
                <li>
                  Use of autografts (patellar, hamstring, quadriceps tendons) or
                  allografts
                </li>
                <li>
                  Tunnels drilled into femur and tibia for graft placement
                </li>
              </ul>

              <p className="font-semibold">Postoperative Rehabilitation:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Pain management and progressive weight-bearing</li>
                <li>Strengthening of quadriceps and hamstrings</li>
                <li>Return to sports in 6–12 months</li>
              </ul>

              <h3 className="text-2xl font-semibold">PCL Reconstruction</h3>
              <p className="font-semibold">
                Indications and Preoperative Considerations:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Chronic instability or functional impairment</li>
                <li>Pre-op imaging includes MRI, stress radiographs</li>
              </ul>

              <p className="font-semibold">Surgical Techniques:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Technically challenging due to PCL anatomy</li>
                <li>
                  Autografts (hamstring) or allografts (Achilles, tibialis
                  anterior)
                </li>
                <li>
                  Posterior approach may be required with careful tunnel
                  placement
                </li>
              </ul>

              <p className="font-semibold">Postoperative Rehabilitation:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>More conservative than ACL rehab</li>
                <li>Delayed weight-bearing with bracing</li>
                <li>Quadriceps strengthening emphasized</li>
              </ul>

              <h3 className="text-2xl font-semibold">
                Outcomes and Considerations
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>High success rates with proper rehab</li>
                <li>Risks: graft failure, stiffness, instability</li>
                <li>Patient education is crucial for long-term success</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded text-center mt-8">
                <h3 className="text-xl font-bold mb-2">
                  Need an Advice? Please Contact Us
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

export default AclandPcl;
