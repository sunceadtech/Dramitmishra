import React from "react";
import { Link } from "react-router-dom";
import KneeComp from "./KneeComp";

function HomeBlogs() {
  const blogs = [
    {
      title: "Is Your Knee Pain Getting Worse? Here’s What to Know",
      date: "08-Aug-2024",
      image: "/images/blog1.webp",
      excerpt:
        "Knee pain shouldn't be ignored. Learn about common causes, early symptoms, and when it’s time to see an orthopedic specialist.",
      link: "/blog/knee-pain-worsening",
    },
    {
      title: "Top 5 Recovery Tips After Orthopedic Surgery",
      date: "18-Jul-2024",
      image: "/images/blog2.webp",
      excerpt:
        "Recover faster and safer with these expert tips—covering physiotherapy, nutrition, rest, and follow-up care after joint surgery.",
      link: "/blog/orthopedic-surgery-recovery",
    },
    {
      title: "Preventing Sports Injuries: A Guide for Active Adults",
      date: "01-Jun-2024",
      image: "/images/blog3.webp",
      excerpt:
        "Stay in the game longer! Discover how to protect your joints, strengthen muscles, and avoid common sports injuries at any age.",
      link: "/blog/preventing-sports-injuries",
    },
  ];

  return (
    <>
      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-12 px-4 hidden md:block">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">3K+</div>
            <p className="text-lg leading-tight">
              Successful
              <br />
              Joint Replacements
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <p className="text-lg leading-tight">
              Satisfied Operated
              <br />
              Patients
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">23+</div>
            <p className="text-lg leading-tight">
              Years
              <br />
              of Experience
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-gray-800 mb-10">
            Latest Orthopedic Blogs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={`Blog: ${blog.title}`}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 right-0 bg-purple-700 text-white px-3 py-1 text-sm">
                    {blog.date}
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-lg font-semibold text-purple-800 mb-2">
                    <Link
                      to={blog.link}
                      aria-label={`Read blog: ${blog.title}`}
                      className="hover:underline"
                    >
                      {blog.title}
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">{blog.excerpt}</p>
                  <Link
                    to={blog.link}
                    aria-label={`Continue reading: ${blog.title}`}
                    className="text-purple-600 hover:underline text-sm font-medium"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knee Component */}
      <KneeComp />
    </>
  );
}

export default HomeBlogs;
