import React from "react";
import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function HipReplacement() {
  return (
    <>
      <Helmet>
        <title>Hip Replacement Surgery | Dr. Amit Sharma - Orthopedic Specialist</title>
        <meta
          name="description"
          content="Consult Dr. Amit Sharma for hip replacement surgery. Restore mobility, relieve chronic hip pain, and regain a better quality of life with advanced joint care."
        />
        <meta
          name="keywords"
          content="Hip Replacement Surgery, Hip Arthroplasty, Dr. Amit Sharma, Orthopedic Doctor Delhi NCR, Joint Pain Relief, Hip Surgeon, Hip Pain Treatment"
        />
        <link rel="canonical" href="https://dramitsharmaortho.com/service-detail/hip-replacement" />
      </Helmet>

      {/* Hero Section */}
      <header className="relative w-full h-[500px] overflow-hidden">
        <img
          src="/images/service.webp"
          alt="Hip Replacement Banner"
          className="absolute inset-0 w-full h-full object-cover"
          width="1920"
          height="500"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-4 md:px-32 text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              HIP REPLACEMENT
            </h1>
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap justify-center md:justify-start items-center gap-1 sm:gap-2 text-sm text-white uppercase"
            >
              <Link to="/" className="hover:underline font-bold text-white/90">Home</Link>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
              <Link to="/service" className="hover:underline font-bold text-white/90">Services</Link>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
              <span className="text-white/80 font-bold text-base" aria-current="page">
                Hip Replacement
              </span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="py-10 bg-white">
        <div className="max-w-7xl mx-auto lg:flex lg:gap-8 px-2 sm:px-4">
          {/* Content */}
          <article className="lg:w-3/4 w-full" itemScope itemType="https://schema.org/MedicalProcedure">
            <figure className="rounded overflow-hidden shadow-md mb-6">
              <img
                src="/images/hip.webp"
                alt="Illustration of hip replacement procedure"
                className="w-full object-cover"
                width="1200"
                height="675"
                loading="lazy"
              />
            </figure>

            <section className="space-y-6 text-gray-700 text-[15px]">
              <h2 className="text-3xl font-bold">Hip Replacement Surgery</h2>
              <p>
                Hip replacement surgery (hip arthroplasty) is a procedure to relieve hip pain and restore mobility in
                patients with severe arthritis or joint damage. It involves replacing the damaged joint surfaces with
                prosthetic components made of metal, ceramic, or plastic.
              </p>

              <h3 className="text-2xl font-semibold">Common Indications</h3>
              <ul className="list-disc list-inside space-y-2" role="list">
                <li>✔️ Osteoarthritis – wear and tear of the hip cartilage</li>
                <li>✔️ Rheumatoid Arthritis – chronic inflammation of the hip joint</li>
                <li>✔️ Post-Traumatic Arthritis – joint damage from previous injury</li>
                <li>✔️ Avascular Necrosis – loss of blood supply to the femoral head</li>
                <li>✔️ Severe Hip Fractures or deformities</li>
              </ul>

              <h3 className="text-2xl font-semibold">Surgical Process</h3>
              <div>
                <h4 className="text-xl font-semibold">Pre-Surgery</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>✔️ Evaluation with X-rays, MRI, and blood tests</li>
                  <li>✔️ Surgical planning and prosthetic selection</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold">During Surgery</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>✔️ General or spinal anesthesia is administered</li>
                  <li>✔️ Femoral head removed and replaced with metal stem</li>
                  <li>✔️ Acetabulum cleaned and fitted with prosthesis</li>
                  <li>✔️ Ball-and-socket joint constructed with implants</li>
                  <li>✔️ Incision closed, and recovery initiated</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold">Recovery</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>✔️ Hospital stay and observation</li>
                  <li>✔️ Early physical therapy starts mobility</li>
                  <li>✔️ Pain medications prescribed</li>
                  <li>✔️ Strenuous activity restricted</li>
                  <li>✔️ Regular follow-ups recommended</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold">Benefits</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>✔️ Relief from chronic hip pain</li>
                <li>✔️ Enhanced joint function</li>
                <li>✔️ Increased range of motion</li>
                <li>✔️ Better daily activity performance</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded text-center mt-10">
                <h3 className="text-xl font-bold mb-2">
                  Need an Expert Opinion?
                </h3>
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  aria-label="Book appointment with Dr. Amit Sharma"
                >
                  Book Appointment with Dr. Amit Sharma
                </Link>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/4 w-full mt-10 lg:mt-0 space-y-6 mb-6" aria-label="Sidebar with services and OPD timings">
            <section className="bg-purple-700 text-white p-4 rounded shadow-sm">
              <h2 className="text-lg md:text-2xl font-semibold text-center mb-4">Our Services</h2>
              <ul className="text-sm md:text-base font-bold divide-y divide-purple-500 text-center">
                <li className="py-3">
                  <Link to="/service" className="hover:underline inline-block w-full">
                    View All Orthopedic Services
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/knee-replacement" className="hover:underline inline-block w-full">
                    Knee Replacement Surgery
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/hip-replacement" className="hover:underline inline-block w-full">
                    Hip Joint Replacement
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/arthroscopy" className="hover:underline inline-block w-full">
                    Joint Arthroscopy Procedures
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/acl-and-pcl-reconstruction" className="hover:underline inline-block w-full">
                    ACL / PCL Ligament Reconstruction
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/sports-injury" className="hover:underline inline-block w-full">
                    Sports Injury Management
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/arthritis" className="hover:underline inline-block w-full">
                    Arthritis Care
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/osteoporosis" className="hover:underline inline-block w-full">
                    Osteoporosis Treatment
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/minimal-invasive-complex-trauma-surgery" className="hover:underline inline-block w-full">
                    Minimally Invasive Trauma Surgery
                  </Link>
                </li>
              </ul>
            </section>

            <section className="bg-white text-gray-800 p-4 rounded shadow-sm border">
              <h3 className="text-lg font-semibold mb-3">OPD TIMINGS</h3>
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
                  <p className="font-medium">Yashoda Super Speciality Hospital</p>
                  Kaushambi, Ghaziabad <br />
                  Call: <a href="tel:+918750056560" className="text-blue-600 underline">8750056560</a>
                </li>
                <li className="flex justify-between mt-4">
                  <span>MON to SAT</span>
                  <span>7:00 PM - 9:00 PM</span>
                </li>
                <li className="text-center text-xs mt-2">
                  <p className="font-medium">City Clinic, Krishna Nagar</p>
                  (Opp. Swarn Cinema, near Surya Hospital), Delhi <br />
                  Call: <a href="tel:+918826629486" className="text-blue-600 underline">8826629486</a>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}

export default HipReplacement;
