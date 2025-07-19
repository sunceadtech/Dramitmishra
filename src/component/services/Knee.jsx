import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function Knee() {
  return (
    <>
      <div className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
        <img
          src="/images/service.webp"
          alt="Knee Replacement Banner"
          width="1920"
          height="500"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-4 md:px-32 text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              KNEE REPLACEMENT
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
                Knee Replacement
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 bg-white">
        <div className="max-w-7xl mx-auto lg:flex lg:gap-8 px-2 sm:px-4">
          <div className="lg:w-3/4 w-full">
            <div className="rounded overflow-hidden shadow-md mb-0">
              <img
                src="/images/knee.webp"
                alt="Knee Replacement Procedure Image"
                width="1200"
                height="675"
                className="w-full object-cover"
              />
            </div>
            <div className="pt-2 space-y-6 text-gray-700 text-[15px]">
              <section className="py-10 bg-white">
                <div className="container mx-auto px-4 text-gray-700">
                  <h2 className="text-3xl font-bold mb-4">
                    Knee Replacement Surgery
                  </h2>
                  <p className="mb-6">
                    Knee replacement surgery (knee arthroplasty) is performed to
                    relieve pain and restore function in patients suffering from
                    chronic knee arthritis or severe joint damage. It involves
                    replacing damaged knee parts with artificial components made
                    of metal and plastic.
                  </p>
                  <p className="mb-6">
                    The two main types are:{" "}
                    <strong>Total Knee Replacement (TKR)</strong> and{" "}
                    <strong>Partial Knee Replacement (PKR)</strong>, depending
                    on the severity and location of the damage.
                  </p>

                  <h3 className="text-2xl font-semibold mb-4">
                    Common Conditions Treated
                  </h3>
                  <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>
                      ✔️ Osteoarthritis – cartilage wear causing pain and
                      stiffness
                    </li>
                    <li>
                      ✔️ Rheumatoid Arthritis – autoimmune inflammation in the
                      knee
                    </li>
                    <li>
                      ✔️ Post-Traumatic Arthritis – arthritis after major injury
                    </li>
                    <li>
                      ✔️ Severe Knee Deformity – long-term misalignment or
                      deterioration
                    </li>
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4">
                    Partial Knee Replacement (PKR)
                  </h3>
                  <p className="mb-4">
                    PKR is suitable for patients with damage confined to a
                    single knee compartment. It preserves healthy bone and
                    ligaments.
                  </p>
                  <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>
                      ✔️ Damage limited to one compartment (medial, lateral, or
                      patellofemoral)
                    </li>
                    <li>✔️ Stable and healthy ligaments, especially the ACL</li>
                    <li>✔️ Adequate bone strength to support implants</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4">
                    Surgical Process
                  </h3>
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">Pre-Surgery</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>✔️ Detailed evaluation (X-rays, MRI, blood tests)</li>
                      <li>✔️ Planning based on severity and anatomy</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">
                      During Surgery
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>✔️ General or spinal anesthesia</li>
                      <li>
                        ✔️ For TKR: Damaged surfaces of femur, tibia, and
                        possibly patella are replaced
                      </li>
                      <li>
                        ✔️ For PKR: Only the affected compartment is resurfaced
                      </li>
                      <li>
                        ✔️ Implants secured with bone cement or press-fit
                        techniques
                      </li>
                      <li>✔️ Incision closed with stitches or staples</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">Recovery</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        ✔️ Hospital stay: TKR patients stay longer than PKR
                      </li>
                      <li>✔️ Physical therapy begins early post-surgery</li>
                      <li>✔️ Pain managed with medication</li>
                      <li>✔️ Avoid high-impact activities</li>
                      <li>✔️ Regular follow-ups for proper recovery</li>
                    </ul>
                  </div>
                </div>
              </section>
              <hr className="my-6" />
              <div className="bg-blue-50 p-6 rounded text-center">
                <h3 className="text-xl font-bold mb-2">
                  Need an Advice? Please Contact Us
                </h3>
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  aria-label="Book Appointment with Dr. Amit Sharma"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

          <aside className="lg:w-1/4 w-full mt-10 lg:mt-0 space-y-6 mb-6">
            <div className="bg-purple-700 text-white p-4 min-h-[400px] md:min-h-[550px] rounded shadow-sm">
              <h4 className="text-lg font-semibold text-slate-100 mb-4 md:text-3xl text-center">
                Our Services
              </h4>
              <ul className="text-sm md:text-md font-bold divide-y divide-purple-500 text-center">
                <li className="py-3">
                  <Link
                    to="/service"
                    className="hover:underline inline-block w-full"
                    aria-label="View All Services"
                  >
                    All Services
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/knee-replacement"
                    className="hover:underline inline-block w-full"
                    aria-label="Knee Replacement Service"
                  >
                    Knee Replacement
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/hip-replacement"
                    className="hover:underline inline-block w-full"
                    aria-label="Hip Replacement Service"
                  >
                    Hip Replacement
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/arthroscopy"
                    className="hover:underline inline-block w-full"
                    aria-label="Arthroscopy Service"
                  >
                    Arthroscopy
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/acl-and-pcl-reconstruction"
                    className="hover:underline inline-block w-full"
                    aria-label="ACL and PCL Reconstruction Service"
                  >
                    ACL and PCL Reconstruction
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/sports-injury"
                    className="hover:underline inline-block w-full"
                    aria-label="Sports Injury Service"
                  >
                    Sports Injury
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/arthritis"
                    className="hover:underline inline-block w-full"
                    aria-label="Arthritis Treatment Service"
                  >
                    Arthritis
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/osteoporosis"
                    className="hover:underline inline-block w-full"
                    aria-label="Osteoporosis Service"
                  >
                    Osteoporosis
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/service-detail/minimal-invasive-complex-trauma-surgery"
                    className="hover:underline inline-block w-full"
                    aria-label="Minimally Invasive Complex Trauma Surgery"
                  >
                    Minimally Invasive Trauma Surgery
                  </Link>
                </li>
              </ul>
            </div>
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

export default Knee;
