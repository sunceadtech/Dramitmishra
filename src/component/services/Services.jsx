import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function Services() {
  const blogs = [
    {
      title: "Knee Replacement",
      image: "/images/kneepain.webp",
      excerpt:
        "Knee pain shouldn't be ignored. Learn about common causes, early symptoms, and when it’s time to see an orthopedic specialist.",
      link: "/service-detail/knee-replacement",
    },
    {
      title: "Arthroscopy",
      image: "/images/astro.webp",
      excerpt:
        "Stay in the game longer! Discover how to protect your joints, strengthen muscles, and avoid common sports injuries at any age.",
      link: "/service-detail/arthroscopy",
    },
    {
      title: "ACL & PCL Reconstruction",
      image: "/images/aclpcl.webp",
      excerpt:
        "Understand how ACL and PCL reconstruction helps restore stability and mobility after sports or traumatic injuries.",
      link: "/service-detail/acl-and-pcl-reconstruction",
    },
    {
      title: "Hip Replacement",
      image: "/images/hip.webp",
      excerpt:
        "Recover faster and safer with expert tips covering physiotherapy, nutrition, rest, and follow-up care after joint surgery.",
      link: "/service-detail/hip-replacement",
    },
    {
      title: "Minimally Invasive Surgeries in Orthopedic Trauma Care",
      image: "/images/minimal.webp",
      excerpt:
        "Advanced surgical techniques for orthopedic trauma that reduce recovery time and improve patient outcomes.",
      link: "/service-detail/minimal-invasive-complex-trauma-surgery",
    },
    {
      title: "Sports Injury",
      image: "/images/sportsinjury.webp",
      excerpt:
        "Explore how to prevent, treat, and recover from common sports injuries with personalized orthopedic care.",
      link: "/service-detail/sports-injury",
    },
    {
      title: "Arthritis",
      image: "/images/arthritist.webp",
      excerpt:
        "Manage chronic arthritis effectively with modern treatment options and expert guidance for joint care.",
      link: "/service-detail/arthritis",
    },
    {
      title: "Osteoporosis",
      image: "/images/osteo.webp",
      excerpt:
        "Learn how early detection and proper treatment can help manage osteoporosis and prevent fractures.",
      link: "/service-detail/osteoporosis",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <header
        className="relative w-full h-[500px] overflow-hidden"
        role="banner"
      >
        <img
          src="/images/service.webp"
          alt="Orthopedic Services Banner"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-4 md:px-32 text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              Our Expertise
            </h1>
            <nav
              className="flex flex-wrap justify-center md:justify-start items-center gap-1 sm:gap-2 text-sm text-white uppercase"
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
                Our Expertise
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Services Grid Section */}
      <section className="py-16 bg-gray-50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-4 leading-snug uppercase"
          >
            Your Journey to Pain-Free Movement Starts Here
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mb-10 max-w-3xl mx-auto text-center leading-relaxed">
            Experience world-class orthopedic care tailored to your condition.
            We combine precise diagnosis, expert treatment, and compassionate
            recovery support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden group transition duration-300 ease-in-out hover:shadow-lg"
                itemScope
                itemType="https://schema.org/MedicalWebPage"
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={`Illustration of ${blog.title}`}
                    className="w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className="text-lg font-semibold text-purple-800 mb-2"
                    itemProp="name"
                  >
                    <Link to={blog.link} className="hover:underline">
                      {blog.title}
                    </Link>
                  </h3>
                  <p
                    className="text-sm text-gray-600 mb-3"
                    itemProp="description"
                  >
                    {blog.excerpt}
                  </p>
                  <Link
                    to={blog.link}
                    className="text-purple-600 hover:underline text-sm font-medium"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    Read more about {blog.title}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
