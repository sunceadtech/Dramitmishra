import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function Blog() {
  const blogs = [
    {
      title: "Is Your Knee Pain Getting Worse? Here’s What to Know",
      date: "08-Aug-2024",
      image: "https://www.dramitsharma.info/public/uploads/news-17.png",
      excerpt:
        "Knee pain shouldn't be ignored. Learn about common causes, early symptoms, and when it’s time to see an orthopedic specialist.",
      link: "https://www.dramitsharma.info/news/view/joint-ventures-how-to-keep-your-bones-strong-and-flexible",
    },
    {
      title: "Top 5 Recovery Tips After Orthopedic Surgery",
      date: "18-Jul-2024",
      image: "https://www.dramitsharma.info/public/uploads/news-16.jpg",
      excerpt:
        "Recover faster and safer with these expert tips—covering physiotherapy, nutrition, rest, and follow-up care after joint surgery.",
      link: "https://www.dramitsharma.info/news/view/what-to-do-and-what-not-to-do-after-you-sprain-your-ankle",
    },
    {
      title: "Preventing Sports Injuries: A Guide for Active Adults",
      date: "01-Jun-2024",
      image: "https://www.dramitsharma.info/public/uploads/news-15.jpg",
      excerpt:
        "Stay in the game longer! Discover how to protect your joints, strengthen muscles, and avoid common sports injuries at any age.",
      link: "https://www.dramitsharma.info/news/view/osteoporosis-in-men-a-neglected-underreported-problem",
    },
    {
      title: "Are Health Screenings Really That Important?",
      date: "27-May-2024",
      image:
        "https://www.adventhealth.com/sites/default/files/styles/fc_4x3_sm/public/media/24-phd-08288-primary_care-september_blogs-why_are_health_screenings_important-2000_x_1333_b.jpg.webp?h=e8305a61&itok=r9dk7RVE",
      excerpt:
        "Regular health screenings can detect issues early and save lives. Learn which ones matter most for your age and health goals.",
      link: "#",
    },
    {
      title: "How Part-Time Physicians Are Changing Healthcare",
      date: "09-May-2024",
      image:
        "https://www.sermo.com/wp-content/uploads/2023/08/part-time-physicians-blog-img.jpeg",
      excerpt:
        "The rise of part-time medical professionals is reshaping patient care, work-life balance, and accessibility in healthcare.",
      link: "#",
    },
    {
      title: "Orthopedic Success Story: A Journey to Pain-Free Living",
      date: "15-Apr-2024",
      image:
        "https://www.drbhupendra.com/wp-content/uploads/2023/09/IMG-20230905-WA0000-560x345.jpg",
      excerpt:
        "Follow the inspiring recovery of a patient who overcame chronic joint pain through expert orthopedic care and rehabilitation.",
      link: "#",
    },
  ];

  return (
    <>
      <div className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <img
          src="./images/blog.jpg"
          alt="Blog Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Banner Content */}
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-6 md:px-20">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Explore Our Blog
            </h1>
            <p className="text-white text-lg md:text-xl mb-6">
              Stay informed with expert insights, recovery tips, and the latest
              updates in orthopedic care and sports injury treatment.
            </p>
            <div className="flex items-center gap-2 text-sm text-white">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="font-semibold">Blogs</span>
            </div>
          </div>
        </div>
      </div>
      {/*blogs details*/}
      {/* <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-gray-800 mb-10">Blogs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-purple-700 text-white px-3 py-1 text-sm">
                    {blog.date}
                  </div>
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
      </section> */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-gray-800 mb-10">Blogs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-purple-700 text-white px-3 py-1 text-sm">
                    {blog.date}
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="text-lg font-semibold text-slate-800 mb-2">
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    > {blog.title}</a>
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

export default Blog;
