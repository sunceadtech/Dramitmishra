import React from "react";
import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function SportsInjury() {
  return (
    <main>
      <Helmet>
        <title>Sports Injury Treatment | Dr. Amit Sharma</title>
        <meta
          name="description"
          content="Recover safely from sports injuries with Dr. Amit Sharma. Get expert diagnosis, ACL surgery, physiotherapy, and personalized recovery plans in Ghaziabad & Delhi NCR."
        />
        <meta
          name="keywords"
          content="sports injury treatment, ACL tear, orthopedic doctor, sports physiotherapy, ligament injury, shoulder dislocation, knee injury, Dr. Amit Sharma"
        />
        <link rel="canonical" href="https://dramitsharmaortho.com/service-detail/sports-injury" />
      </Helmet>

      {/* Hero Section */}
      <header className="relative w-full h-[500px] overflow-hidden" role="banner">
        <img
          src="/images/service.webp"
          alt="Banner showing sports injury care and treatment"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={500}
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-4 md:px-32 text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              Comprehensive Sports Injury Treatment
            </h1>
            <p className="text-white text-base md:text-lg mb-4 max-w-xl">
              Trusted by athletes for expert orthopedic care, injury prevention, and fast recovery across Ghaziabad and Delhi NCR.
            </p>
            <nav className="flex items-center justify-center md:justify-start gap-2 text-sm text-white" aria-label="Breadcrumb">
              <Link to="/" className="hover:underline font-bold">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/service" className="hover:underline font-bold">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="font-semibold">Sports Injury</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-10 bg-white" role="main">
        <div className="max-w-7xl mx-auto lg:flex lg:gap-8 px-4">
          {/* Left Section */}
          <div className="lg:w-3/4 w-full">
            <figure className="rounded overflow-hidden shadow-md mb-6">
              <img
                src="/images/sportsinjury.webp"
                alt="Patient undergoing physiotherapy for sports injury"
                className="w-full object-cover"
                width={1280}
                height={720}
                loading="lazy"
              />
            </figure>

            <article className="space-y-6 text-gray-700 text-[15px]" itemScope itemType="https://schema.org/MedicalWebPage">
              <header>
                <h2 className="text-3xl font-bold mb-4" itemProp="headline">
                  Sports Injury Treatment & Recovery
                </h2>
                <p className="mb-6" itemProp="description">
                  Sports injuries affect athletes and active individuals alike. Our goal is fast, safe, and complete recovery using modern diagnostics, physiotherapy, and advanced surgical care when needed.
                </p>
              </header>

              {/* Sections */}
              {[
                {
                  heading: "Common Types of Sports Injuries",
                  items: [
                    "ACL and PCL ligament tears",
                    "Meniscus tears",
                    "Shoulder dislocations and rotator cuff injuries",
                    "Ankle sprains and fractures",
                    "Tennis elbow and golfer’s elbow",
                    "Stress fractures",
                    "Muscle strains and contusions",
                  ],
                },
                {
                  heading: "Symptoms to Watch Out For",
                  items: [
                    "Sudden pain during activity",
                    "Swelling and bruising",
                    "Limited range of motion",
                    "Instability or weakness",
                    "Difficulty bearing weight",
                    "Popping or grinding sounds",
                  ],
                },
                {
                  heading: "Diagnosis",
                  items: [
                    "Clinical examination by orthopedic specialist",
                    "Imaging tests: X-ray, MRI, or ultrasound",
                    "Functional movement assessment",
                  ],
                },
                {
                  heading: "Treatment Options",
                  items: [
                    "RICE Protocol – Rest, Ice, Compression, Elevation",
                    "Physical therapy and rehabilitation",
                    "Bracing or immobilization",
                    "Arthroscopic surgery for ligament or meniscus repair",
                    "Minimally invasive joint procedures",
                  ],
                },
                {
                  heading: "Prevention Tips",
                  items: [
                    "Warm up before activities and stretch regularly",
                    "Use proper techniques and protective gear",
                    "Strengthen core and stabilizing muscles",
                    "Stay hydrated and maintain proper nutrition",
                    "Avoid overtraining and rest between sessions",
                  ],
                },
                {
                  heading: "Why Choose Dr. Amit Sharma?",
                  items: [
                    "Fellowship-trained in sports orthopedics",
                    "Latest diagnostic and rehab technologies",
                    "Personalized recovery programs",
                    "Trusted by athletes in Delhi NCR",
                  ],
                },
              ].map(({ heading, items }, i) => (
                <section key={i}>
                  <h3 className="text-2xl font-semibold mb-4">{heading}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}

              <div className="bg-blue-50 p-6 rounded text-center mt-10" role="complementary">
                <h3 className="text-xl font-bold mb-2">Need Help with a Sports Injury?</h3>
                <p className="text-sm mb-4">Schedule a consultation with Dr. Amit Sharma and get back in action sooner.</p>
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                  aria-label="Book an appointment for sports injury consultation"
                >
                  Book Appointment
                </Link>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/4 w-full mt-10 lg:mt-0 space-y-6" aria-label="Sidebar">
            <nav className="bg-purple-700 text-white p-4 rounded shadow-sm" aria-label="Service Navigation">
              <h4 className="text-2xl font-semibold mb-4 text-center">Our Services</h4>
              <ul className="text-sm font-bold divide-y divide-purple-500 text-center">
                {[
                  { name: "All Services", path: "/service" },
                  { name: "Knee Replacement", path: "/service-detail/knee-replacement" },
                  { name: "Hip Replacement", path: "/service-detail/hip-replacement" },
                  { name: "Arthroscopy", path: "/service-detail/arthroscopy" },
                  { name: "ACL and PCL Reconstruction", path: "/service-detail/acl-and-pcl-reconstruction" },
                  { name: "Sports Injury", path: "/service-detail/sports-injury" },
                  { name: "Arthritis", path: "/service-detail/arthritis" },
                  { name: "Osteoporosis", path: "/service-detail/osteoporosis" },
                  { name: "Minimally Invasive Trauma Surgery", path: "/service-detail/minimal-invasive-complex-trauma-surgery" },
                ].map(({ name, path }, i) => (
                  <li className="py-3" key={i}>
                    <Link to={path}>{name}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section className="bg-white text-gray-800 p-4 rounded shadow-sm border" aria-labelledby="opd-heading">
              <h6 id="opd-heading" className="text-lg font-semibold mb-3">OPD Timings</h6>
              <ul className="text-sm space-y-2" aria-label="OPD Details">
                <li className="flex justify-between">
                  <span>MON to SAT</span>
                  <span>9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>MON to SAT</span>
                  <span>5:00 PM - 7:00 PM</span>
                </li>
                <li className="text-center text-xs mt-2">
                  <strong>Yashoda Super Speciality Hospital</strong><br />
                  Kaushambi, Ghaziabad<br />
                  Call: <a href="tel:8750056560" className="text-blue-700 underline">8750056560</a>
                </li>
                <li className="flex justify-between mt-4">
                  <span>MON to SAT</span>
                  <span>7:00 PM - 9:00 PM</span>
                </li>
                <li className="text-center text-xs mt-2">
                  <strong>City Clinic, Krishna Nagar</strong><br />
                  Opp. Swarn Cinema, near Surya Hospital, Delhi<br />
                  Call: <a href="tel:8826629486" className="text-blue-700 underline">8826629486</a>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default SportsInjury;

