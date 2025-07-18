import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function Arthritis() {
  return (
    <>
      <div className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
        <img
        src="/images/service.webp"
          alt="Arthritis operation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-4 md:px-32 text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              Arthritis
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
                Arthritis
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
                src="/images/arthritist.webp"
                alt="Arthritis"
                className="w-full object-cover"
              />
            </div>

            <div className="pt-6 space-y-6 text-gray-700 text-[15px]">
              <h2 className="text-3xl font-bold">
                Understanding Arthritis: Treatments and Management
              </h2>
              <p>
                Arthritis is a group of conditions that cause pain, swelling,
                and stiffness in the joints. It affects millions globally and
                comes in several forms, the most common being osteoarthritis,
                rheumatoid arthritis, and gout. While there’s no cure, effective
                treatments and management strategies can greatly improve quality
                of life and mobility.
              </p>

              <h3 className="text-2xl font-semibold">Types of Arthritis</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Osteoarthritis (OA):</strong> Caused by wear and tear
                  over time, OA typically affects weight-bearing joints like the
                  knees, hips, and spine.
                </li>
                <li>
                  <strong>Rheumatoid Arthritis (RA):</strong> An autoimmune
                  disease where the immune system attacks joint linings,
                  resulting in inflammation, pain, and joint damage.
                </li>
                <li>
                  <strong>Gout:</strong> Triggered by uric acid crystal buildup,
                  often in the big toe, leading to sudden, intense joint pain.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold">Treatment Approaches</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Medications:</strong> Pain relievers (e.g.
                  acetaminophen, NSAIDs), DMARDs for autoimmune arthritis, and
                  corticosteroid injections during flare-ups.
                </li>
                <li>
                  <strong>Physical Therapy:</strong> Targeted exercises to
                  maintain joint function, strengthen muscles, and enhance
                  flexibility.
                </li>
                <li>
                  <strong>Surgical Interventions:</strong> Joint replacement or
                  fusion may be necessary in severe cases where function is
                  severely impaired.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold">
                Lifestyle Modifications
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Weight Management:</strong> Helps reduce pressure on
                  joints, especially in the knees and hips.
                </li>
                <li>
                  <strong>Joint Protection:</strong> Using braces or assistive
                  tools can decrease stress on joints during movement.
                </li>
                <li>
                  <strong>Diet:</strong> Anti-inflammatory foods rich in
                  omega-3s, calcium, vitamin D, and antioxidants support joint
                  health.
                </li>
                <li>
                  <strong>Exercise:</strong> Regular low-impact activities such
                  as swimming, walking, or cycling are beneficial.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold">Management Strategies</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Education & Self-Care:</strong> Learning about the
                  disease and personalizing daily habits improves long-term
                  outcomes.
                </li>
                <li>
                  <strong>Routine Monitoring:</strong> Regular check-ups to
                  adjust medications and track progress.
                </li>
                <li>
                  <strong>Emotional Support:</strong> Counseling, support
                  groups, and mental health services help cope with chronic
                  conditions.
                </li>
              </ul>

              <hr className="my-6" />
              <div className="bg-blue-50 p-6 rounded text-center">
                <h3 className="text-xl font-bold mb-2">
                  Need Arthritis Treatment? Book an Appointment Now
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

export default Arthritis;
