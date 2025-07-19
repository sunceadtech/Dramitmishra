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
      title: "Minimally Invasive Trauma Surgery",
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
      title: "Arthritis Treatment",
      image: "/images/arthritist.webp",
      excerpt:
        "Manage chronic arthritis effectively with modern treatment options and expert guidance for joint care.",
      link: "/service-detail/arthritis",
    },
    {
      title: "Osteoporosis Management",
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
          alt="Expert Orthopedic Services Banner"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={500}
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-4xl px-6 md:px-32 text-center md:text-left">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Our Expertise in Orthopedic Care
            </h1>
            <nav
              className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-white text-sm"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:underline font-semibold">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="font-semibold">Our Expertise</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Services Section */}
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
                className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl group"
                itemScope
                itemType="https://schema.org/MedicalWebPage"
              >
                <figure className="relative">
                  <img
                    src={blog.image}
                    alt={`${blog.title} - Orthopedic Service`}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    width={400}
                    height={208}
                    loading="lazy"
                    itemProp="image"
                  />
                </figure>
                <div className="p-5">
                  <h3
                    className="text-xl font-bold text-purple-800 mb-2"
                    itemProp="name"
                  >
                    <Link to={blog.link} className="hover:underline">
                      {blog.title}
                    </Link>
                  </h3>
                  <p
                    className="text-sm text-gray-700 mb-3"
                    itemProp="description"
                  >
                    {blog.excerpt}
                  </p>
                  <Link
                    to={blog.link}
                    className="text-purple-700 hover:underline font-medium text-sm"
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
