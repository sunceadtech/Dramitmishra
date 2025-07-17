import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function Services() {
  const blogs = [
    {
      title: "Knee Replacement",

      image:
        "https://www.dramitsharma.info/public/uploads/service-banner-15.jpg",
      excerpt:
        "Knee pain shouldn't be ignored. Learn about common causes, early symptoms, and when it’s time to see an orthopedic specialist.",
      link: "/service-detail/knee-replacement",
    },
    {
      title: "Arthroscopy",

      image: "https://www.dramitsharma.info/public/uploads/news-15.jpg",
      excerpt:
        "Stay in the game longer! Discover how to protect your joints, strengthen muscles, and avoid common sports injuries at any age.",
      link: "/service-detail/arthroscopy",
    },
    {
      title: "ACL & PCL Reconstruction",

      image:
        "https://www.dramitsharma.info/public/uploads/service-banner-18.jpg",
      excerpt:
        "Regular health screenings can detect issues early and save lives. Learn which ones matter most for your age and health goals.",
      link: "/service-detail/acl-and-pcl-reconstruction",
    },
    {
      title: "Hip Replacement",

      image:
        "https://www.dramitsharma.info/public/uploads/service-banner-16.jpg",
      excerpt:
        "Recover faster and safer with these expert tips—covering physiotherapy, nutrition, rest, and follow-up care after joint surgery.",
      link: "/service-detail/hip-replacement",
    },
    {
      title: "Minimally Invasive Surgeries in Orthopedic Trauma Care",

      image: "https://www.dramitsharma.info/public/uploads/service-22.png",
      excerpt:
        "Advanced surgical techniques for orthopedic trauma that reduce recovery time and improve patient outcomes.",
      link: "/service-detail/minimal-invasive-complex-trauma-surgery",
    },
    {
      title: "Sports Injury",

      image:
        "https://www.dramitsharma.info/public/uploads/service-banner-19.jpg",
      excerpt:
        "The rise of part-time medical professionals is reshaping patient care, work-life balance, and accessibility in healthcare.",
      link: "/service-detail/sports-injury",
    },
    {
      title: "Arthritis",

      image: "https://www.dramitsharma.info/public/uploads/service-20.png",
      excerpt:
        "Follow the inspiring recovery of a patient who overcame chronic joint pain through expert orthopedic care and rehabilitation.",
      link: "/service-detail/arthritis",
    },
    {
      title: "Osteoporosis",
      image: "https://www.dramitsharma.info/public/uploads/service-21.png",
      excerpt:
        "Learn how early detection and proper treatment can help manage osteoporosis and prevent fractures.",
      link: "/service-detail/osteoporosis",
    },
  ];

  return (
    <>
      <div className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
        <img
          src="https://www.dramitsharma.info/drassets/img/ourexpertdetailbanner.jpg"
          alt="Arthritis Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-4 md:px-32 text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              OUR EXPERTIES
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
                Our Experties
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*blog section parts */}

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3 text-center leading-snug tracking-tight uppercase">
            Your Journey to Pain-Free Movement Starts Here
          </h3>
          <p className="text-slate-600 text-base sm:text-lg mb-3 md:mb-8 px-6 max-w-3xl mx-auto text-center leading-relaxed">
            Experience world-class orthopedic care tailored to your condition.
            We combine precise diagnosis, expert treatment, and compassionate
            recovery support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 transition duration-500 ease-in-out"></div>
                </div>

                <div className="p-4">
                  <h5 className="text-lg font-semibold text-purple-800 mb-2">
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {blog.title}
                    </a>
                  </h5>
                  <p className="text-sm text-gray-600 mb-3">{blog.excerpt}</p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline text-sm font-medium"
                  >
                    read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
