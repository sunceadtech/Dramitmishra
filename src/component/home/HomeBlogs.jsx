import React from "react";
import KneeComp from "./KneeComp";
function HomeBlogs() {
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
  ];

  return (
    <>
          <div className="bg-blue-600 text-white py-12 px-4 hidden md:block">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">3K+</div>
              <div>
                <h4 className="text-lg">Successful</h4>
                <h4 className="text-lg">Joint Replacements</h4>
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div>
                <h4 className="text-lg">Satisfied Operated</h4>
                <h4 className="text-lg">Patients</h4>
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">23+</div>
              <div>
                <h4 className="text-lg">Years</h4>
                <h4 className="text-lg">of</h4>
                <h4 className="text-lg">Experience</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  <h6 className="text-lg font-semibold text-purple-800 mb-2">
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {blog.title}
                    </a>
                  </h6>
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
    <KneeComp/>
    </>
  );
}

export default HomeBlogs;
