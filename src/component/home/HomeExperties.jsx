import React from "react";

function HomeExperties() {
  return (
    <section className="text-center py-10 bg-gray-100 mb-2 md:mb-8 mt-12 md:mt-0">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Comprehensive Ortho-Surgical Services
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto px-4">
        From minimally invasive arthroscopy to total joint replacement, we offer
        advanced orthopedic treatments tailored to restore function, relieve
        pain, and improve your mobility.
      </p>

      <div className="py-10 overflow-x-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-screen-lg mx-auto px-4">
          {[
            {
              label: "Knee Replacement",
              image: "https://cdn-icons-png.flaticon.com/512/5977/5977532.png",
              href: "/service/service-detail/knee-replacement",
            },
            {
              label: "Hip Replacement",
              image: "https://cdn-icons-png.flaticon.com/512/5977/5977510.png",
              href: "/service/service-detail/hip-replacement",
            },
            {
              label: "Arthroscopy",
              image: "https://cdn-icons-png.flaticon.com/512/6173/6173873.png",
              href: "/service/service-detail/arthroscopy",
            },
            {
              label: "ACL & PCL Repair",
              image:
                "https://cdn-icons-png.flaticon.com/512/10609/10609875.png",
              href: "/service/service-detail/acl-and-pcl-reconstruction",
            },
            {
              label: "Sports Injuries",
              image:
                "https://cdn-icons-png.flaticon.com/512/11757/11757472.png",
              href: "/service/service-detail/sports-injury",
            },
            {
              label: "Fracture Care",
              image:
                "https://cdn-icons-png.flaticon.com/512/10975/10975720.png",
              href: "/service/service-detail/fracture-management",
            },
          ].map((item, index) => (
            <div key={index} className="text-center cursor-pointer group">
              <img
                src={item.image}
                alt={item.label}
                className="mx-auto mb-2 w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <p className="font-semibold text-sm">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-900 no-underline"
                >
                  {item.label}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeExperties;
