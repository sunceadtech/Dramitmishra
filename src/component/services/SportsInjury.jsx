import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function SportsInjury() {
  return (
    <main>
      {/* Hero Section */}
      <header
        className="relative w-full h-[500px] overflow-hidden"
        role="banner"
      >
        <img
          src="/images/service.webp"
          alt="Sports Injury Treatment Banner"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={500}
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-4 md:px-32 text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              Sports Injury
            </h1>
            <nav
              className="flex flex-wrap items-center justify-center md:justify-start gap-1 sm:gap-2 text-sm text-white uppercase"
              aria-label="Breadcrumb"
            >
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
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto lg:flex lg:gap-8 px-4">
          {/* Left Section */}
          <div className="lg:w-3/4 w-full">
            <figure className="rounded overflow-hidden shadow-md mb-6">
              <img
                src="/images/sportsinjury.webp"
                alt="Patient receiving treatment for sports injury"
                className="w-full object-cover"
                width={1280}
                height={720}
                loading="lazy"
              />
            </figure>

            <article
              className="space-y-6 text-gray-700 text-[15px]"
              itemScope
              itemType="https://schema.org/MedicalWebPage"
            >
              <header>
                <h2 className="text-3xl font-bold mb-4" itemProp="headline">
                  Sports Injury
                </h2>
                <p className="mb-6" itemProp="description">
                  Sports injuries are common in both amateur and professional
                  athletes. These injuries can affect bones, muscles, ligaments,
                  tendons, and joints. Prompt diagnosis and treatment are
                  essential to ensure complete recovery and prevent long-term
                  complications.
                </p>
              </header>

              <section>
                <h3 className="text-2xl font-semibold mb-4">
                  Common Types of Sports Injuries
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>ACL and PCL ligament tears</li>
                  <li>Meniscus tears</li>
                  <li>Shoulder dislocations and rotator cuff injuries</li>
                  <li>Ankle sprains and fractures</li>
                  <li>Tennis elbow and golfer’s elbow</li>
                  <li>Stress fractures</li>
                  <li>Muscle strains and contusions</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4">
                  Symptoms to Watch Out For
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Sudden pain during activity</li>
                  <li>Swelling and bruising</li>
                  <li>Limited range of motion</li>
                  <li>Instability or weakness</li>
                  <li>Difficulty bearing weight</li>
                  <li>Popping or grinding sounds</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4">Diagnosis</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Clinical examination by orthopedic specialist</li>
                  <li>Imaging tests: X-ray, MRI, or ultrasound</li>
                  <li>Functional movement assessment</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4">
                  Treatment Options
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>RICE Protocol – Rest, Ice, Compression, Elevation</li>
                  <li>Physical therapy and rehabilitation</li>
                  <li>Bracing or immobilization</li>
                  <li>Arthroscopic surgery for ligament or meniscus repair</li>
                  <li>Minimally invasive joint procedures</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4">Prevention Tips</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Warm up before activities and stretch regularly</li>
                  <li>Use proper techniques and protective gear</li>
                  <li>Strengthen core and stabilizing muscles</li>
                  <li>Stay hydrated and maintain proper nutrition</li>
                  <li>Avoid overtraining and rest between sessions</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Specialized sports injury treatment and surgery</li>
                  <li>Latest diagnostic and rehabilitation technology</li>
                  <li>Personalized recovery plans</li>
                  <li>Trusted by athletes across Delhi NCR</li>
                </ul>
              </section>
            </article>

            <div className="bg-blue-50 p-6 rounded text-center mt-10">
              <h3 className="text-xl font-bold mb-2">
                Need Sports Injury Advice? Contact Us Today
              </h3>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                aria-label="Book an appointment for sports injury consultation"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/4 w-full mt-10 lg:mt-0 space-y-6">
            <nav
              className="bg-purple-700 text-white p-4 rounded shadow-sm"
              aria-label="Service navigation"
            >
              <h4 className="text-2xl font-semibold mb-4 text-center">
                Our Services
              </h4>
              <ul className="text-sm font-bold divide-y divide-purple-500 text-center">
                <li className="py-3">
                  <Link to="/service">All Services</Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/knee-replacement">
                    Knee Replacement
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/hip-replacement">
                    Hip Replacement
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/arthroscopy">Arthroscopy</Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/acl-and-pcl-reconstruction">
                    ACL and PCL Reconstruction
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/sports-injury">Sports Injury</Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/arthritis">Arthritis</Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/osteoporosis">Osteoporosis</Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/minimal-invasive-complex-trauma-surgery">
                    Minimally Invasive Trauma Surgery
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="bg-white text-gray-800 p-4 rounded shadow-sm border">
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
                  <strong>Yashoda Super Speciality Hospital</strong>
                  <br />
                  Kaushambi, Ghaziabad <br />
                  Call:{" "}
                  <a href="tel:8750056560" className="text-blue-700 underline">
                    8750056560
                  </a>
                </li>
                <li className="flex justify-between mt-4">
                  <span>MON to SAT</span>
                  <span>7:00 PM - 9:00 PM</span>
                </li>
                <li className="text-center text-xs mt-2">
                  <strong>City Clinic, Krishna Nagar</strong>
                  <br />
                  Opp. Swarn Cinema, near Surya Hospital, Delhi <br />
                  Call:{" "}
                  <a href="tel:8826629486" className="text-blue-700 underline">
                    8826629486
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default SportsInjury;
