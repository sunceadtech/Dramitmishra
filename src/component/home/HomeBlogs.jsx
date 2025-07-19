import React from "react";
import { Link } from "react-router-dom";
import KneeComp from "./KneeComp";

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

function HomeBlogs() {
  return (
    <>
      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-12 px-4 hidden md:block">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <StatItem value="3K+" label="Successful Joint Replacements" />
          <StatItem value="10K+" label="Satisfied Operated Patients" />
          <StatItem value="23+" label="Years of Experience" />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-gray-800 mb-10">
            Latest Orthopedic Blogs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.01]"
              >
                <div className="relative w-full h-52">
                  <img
                    src={blog.image}
                    alt={`Cover for: ${blog.title}`}
                    width="400"
                    height="208"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <time className="absolute bottom-0 right-0 bg-purple-700 text-white px-3 py-1 text-xs md:text-sm">
                    {blog.date}
                  </time>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-purple-800 mb-2">
                    <Link
                      to={blog.link}
                      aria-label={`Read full article: ${blog.title}`}
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <KneeComp />
    </>
  );
}

function StatItem({ value, label }) {
  return (
    <div>
      <div className="text-4xl font-bold mb-1">{value}</div>
      <p className="text-base leading-tight">{label}</p>
    </div>
  );
}

export default HomeBlogs;
