import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function AclandPcl() {
  return (
    <>
      <Helmet>
        <title>
          ACL and PCL Reconstruction Surgery in Ghaziabad & Delhi | Dr. Amit
          Sharma
        </title>
        <meta
          name="description"
          content="Get expert ACL and PCL reconstruction surgery by Dr. Amit Sharma in Ghaziabad and Delhi. Advanced treatment for knee ligament injuries with faster recovery."
        />
        <meta
          name="keywords"
          content="ACL surgery, PCL reconstruction, knee ligament surgery, orthopedic surgeon Ghaziabad, Dr. Amit Sharma, knee injury treatment, sports injury specialist Delhi"
        />
        <link
          rel="canonical"
          href="https://dramitsharmaortho.com/service-detail/acl-and-pcl-reconstruction"
        />
      </Helmet>

      {/* Banner Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src="/images/service.webp"
          alt="ACL and PCL Reconstruction operation"
          className="absolute inset-0 w-full h-full object-cover"
          width="1920"
          height="500"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="text-left md:text-center max-w-full md:max-w-4xl px-4 md:px-32">
            <h1 className="text-white text-3xl md:text-4xl uppercase font-bold mb-4 leading-snug">
              ACL and PCL Reconstruction
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-sm text-white uppercase">
              <Link
                to="/"
                className="hover:underline font-bold text-white/90"
                aria-label="Go to homepage"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                to="/service"
                className="hover:underline font-bold text-white/90"
                aria-label="View all services"
              >
                Services
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white/80 font-bold">
                ACL and PCL Reconstruction
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-10 bg-white">
        <div className="max-w-7xl mx-auto lg:flex lg:gap-8 px-4">
          {/* Left Content */}
          <div className="lg:w-3/4 w-full">
            <div className="rounded overflow-hidden shadow-md mb-6">
              <img
                src="https://www.dramitsharma.info/public/uploads/service-banner-18.jpg"
                alt="ACL and PCL Reconstruction"
                className="w-full object-cover"
                width="1200"
                height="600"
                loading="lazy"
              />
            </div>

            <div className="space-y-6 text-gray-700 text-[15px]">
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
                <li>Use of autografts or allografts</li>
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
                <li>Autografts or allografts (Achilles, tibialis anterior)</li>
                <li>Posterior approach may be required</li>
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
                <li>Patient education is crucial</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded text-center mt-8">
                <h3 className="text-xl font-bold mb-2">
                  Need an Advice? Please Contact Us
                </h3>
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  aria-label="Book appointment"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/4 w-full mt-10 lg:mt-0 space-y-6 mb-6">
            <div className="bg-purple-700 text-white p-4 rounded shadow-sm">
              <h4 className="text-2xl font-semibold text-center mb-4">
                Our Services
              </h4>
              <ul className="text-sm font-bold divide-y divide-purple-500 text-center">
                {[
                  { path: "/service", label: "All Services" },
                  {
                    path: "/service-detail/knee-replacement",
                    label: "Knee Replacement",
                  },
                  {
                    path: "/service-detail/hip-replacement",
                    label: "Hip Replacement",
                  },
                  { path: "/service-detail/arthroscopy", label: "Arthroscopy" },
                  {
                    path: "/service-detail/acl-and-pcl-reconstruction",
                    label: "ACL and PCL Reconstruction",
                  },
                  {
                    path: "/service-detail/sports-injury",
                    label: "Sports Injury",
                  },
                  { path: "/service-detail/arthritis", label: "Arthritis" },
                  {
                    path: "/service-detail/osteoporosis",
                    label: "Osteoporosis",
                  },
                  {
                    path: "/service-detail/minimal-invasive-complex-trauma-surgery",
                    label: "Minimally Invasive Trauma Surgery",
                  },
                ].map((item, i) => (
                  <li key={i} className="py-3">
                    <Link
                      to={item.path}
                      className="hover:underline inline-block w-full"
                      aria-label={item.label}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

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
