import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function SurgeryCheck() {
  const services = [
    { name: "All Services", path: "/service" },
    { name: "Knee Replacement", path: "/service-detail/knee-replacement" },
    { name: "Hip Replacement", path: "/service-detail/hip-replacement" },
    { name: "Arthroscopy", path: "/service-detail/arthroscopy" },
    { name: "ACL & PCL Reconstruction", path: "/service-detail/acl-and-pcl-reconstruction" },
    { name: "Sports Injury", path: "/service-detail/sports-injury" },
    { name: "Arthritis", path: "/service-detail/arthritis" },
    { name: "Osteoporosis", path: "/service-detail/osteoporosis" },
    {
      name: "Minimally Invasive Trauma Surgery",
      path: "/service-detail/minimal-invasive-complex-trauma-surgery",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src="https://www.dramitsharma.info/drassets/img/ourexpertdetailbanner.jpg"
          alt="Doctor Consultation Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-4 md:px-32 text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug uppercase">
              Do You Need Surgery?
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 text-sm text-white uppercase">
              <Link to="/" className="hover:underline font-bold text-white/90">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                to="/service"
                className="hover:underline font-bold text-white/90"
              >
                Do You Need Surgery?
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="px-4 py-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-3/4 order-2 lg:order-1">
            <div className="aspect-video w-full h-[700px]">
              <iframe
                src="https://www.dramitsharma.info/drtoby/do-you-need-surgery.html"
                title="Do You Need Surgery Video"
                className="w-full h-full border-0 rounded shadow-lg"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 order-1 lg:order-2 animate-slide-in-right">
            <div className="bg-gray-100 p-5 rounded shadow-md transition-all duration-500 ease-in-out">
              <h4 className="text-xl font-semibold mb-4 text-purple-700">
                Explore Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-gray-800 hover:text-purple-600 transition font-medium"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default SurgeryCheck;


