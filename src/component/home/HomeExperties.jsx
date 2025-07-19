import React from "react";

function HomeExperties() {
  const services = [
    {
      label: "Knee Replacement",
      image: "/images/icon1.webp",
      href: "/service/service-detail/knee-replacement",
    },
    {
      label: "Hip Replacement",
      image: "/images/icon2.webp",
      href: "/service/service-detail/hip-replacement",
    },
    {
      label: "Arthroscopy",
      image: "/images/icon3.webp",
      href: "/service/service-detail/arthroscopy",
    },
    {
      label: "ACL & PCL Repair",
      image: "/images/icon4.webp",
      href: "/service/service-detail/acl-and-pcl-reconstruction",
    },
    {
      label: "Sports Injuries",
      image: "/images/icon5.webp",
      href: "/service/service-detail/sports-injury",
    },
    {
      label: "Fracture Care",
      image: "/images/icon6.webp",
      href: "/service/service-detail/fracture-management",
    },
  ];

  return (
    <section
      className="text-center py-10 bg-gray-100 mt-12 md:mt-0"
      aria-label="Orthopedic Surgical Services"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Comprehensive Ortho-Surgical Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          From minimally invasive arthroscopy to total joint replacement, we
          offer advanced orthopedic treatments tailored to restore function,
          relieve pain, and improve your mobility.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {services.map((item, index) => (
            <div key={index} className="group focus:outline-none">
              <a
                href={item.href}
                aria-label={`Learn more about ${item.label}`}
                className="flex flex-col items-center group-hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={`${item.label} icon`}
                  width="64"
                  height="64"
                  decoding="async"
                  fetchpriority={index === 0 ? "high" : "auto"} // LCP image fix
                  className="mb-2 w-16 h-16 object-contain"
                />
                <span className="font-semibold text-sm text-purple-700 group-hover:text-purple-900">
                  {item.label}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeExperties;
