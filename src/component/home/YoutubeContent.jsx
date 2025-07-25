import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function YoutubeContent() {
  const videoData = [
    {
      url: "https://www.youtube.com/embed/FkfYYFNest8",
      title: "Understanding Frozen Shoulder",
      desc: "What causes frozen shoulder and how it's treated by orthopedic specialists.",
    },
    {
      url: "https://www.youtube.com/embed/yilQsIC8Ryk",
      title: "Treating Meniscus Tear",
      desc: "Minimally invasive arthroscopic solutions and aftercare tips.",
    },
    {
      url: "https://www.youtube.com/embed/ZCuWvhuk6a4",
      title: "Knee Replacement Explained",
      desc: "What to expect before, during, and after knee replacement surgery.",
    },
    {
      url: "https://www.youtube.com/embed/PNFFcErJBDk",
      title: "ACL Injury Management",
      desc: "From diagnosis to rehabilitation – how ACL injuries are treated.",
    },
    {
      url: "https://www.youtube.com/embed/K81JJcpskO4",
      title: "Avoiding Cricket Injuries",
      desc: "Sports safety tips from Dr. Amit Sharma to avoid injuries on the field.",
    },
    {
      url: "https://www.youtube.com/embed/XGQWKovfi6Q",
      title: "Running Myths Busted",
      desc: "Debunking common running myths with orthopedic insights.",
    },
  ];

  return (
    <>
      {/* Doctor Speaks Section */}
      <section
        className="bg-gray-100 py-16 px-4"
        aria-labelledby="doctor-speaks-heading"
      >
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-10">
            <h2
              id="doctor-speaks-heading"
              className="text-3xl font-bold text-gray-800 mb-2"
            >
              Doctor Speaks – Orthopedic Video Library
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Watch expert insights from Dr. Amit Sharma on joint health,
              sports injuries, and advanced orthopedic treatments.
            </p>
          </header>

          <div
            className="overflow-x-auto scrollbar-hide"
            role="region"
            aria-label="Orthopedic videos by Dr. Amit Sharma"
          >
            <div className="flex space-x-6 min-w-full px-2 sm:px-4">
              {videoData.map((video, index) => (
                <article
                  key={index}
                  className="min-w-[280px] sm:min-w-[320px] bg-white rounded-lg shadow-md border p-3"
                  aria-labelledby={`video-title-${index}`}
                >
                  <div className="aspect-video w-full mb-3 rounded-md overflow-hidden">
                    <LazyLoadComponent>
                      <iframe
                        src={video.url}
                        title={`Dr. Amit Sharma - ${video.title}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                      ></iframe>
                    </LazyLoadComponent>
                  </div>
                  <h3
                    id={`video-title-${index}`}
                    className="font-semibold text-center text-sm text-purple-800"
                  >
                    {video.title}
                  </h3>
                  <p className="text-center text-gray-600 text-sm">
                    {video.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Joint Health Section */}
      <section
        className="bg-gray-100 py-16 px-4 mt-8 md:mt-16"
        aria-labelledby="joint-health-heading"
      >
        <div className="max-w-7xl mx-auto p-0 md:p-8 grid md:grid-cols-2 gap-12 items-start">
          {/* Left Text Block */}
          <div className="bg-purple-900 text-white rounded-lg px-8 py-8 md:py-16 shadow-lg">
            <h2
              id="joint-health-heading"
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Why Is Joint Health Important?
            </h2>
            <p className="mb-6 text-base leading-relaxed text-purple-100">
              Healthy joints are essential for staying mobile, independent, and
              pain-free. Whether you're walking, running, or doing daily tasks,
              joint care is vital. Learn how to protect your joints with expert
              orthopedic care and healthy habits.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <ul className="list-disc list-inside text-sm space-y-2 text-purple-100">
                <li>Advanced Orthopedic Surgery</li>
                <li>Sports Injury Treatment</li>
                <li>Customized Physiotherapy</li>
              </ul>
              <ul className="list-disc list-inside text-sm space-y-2 text-purple-100">
                <li>Nutrition & Joint Wellness</li>
                <li>Pain & Inflammation Relief</li>
                <li>Preventive Joint Care</li>
              </ul>
            </div>
          </div>

          {/* Right Image Block */}
          <div className="w-full">
            <img
              src="/images/kneepain2.webp"
              alt="Medical illustration showing joint pain and orthopedic diagnosis"
              className="rounded-xl shadow-lg w-full object-cover"
              width="600"
              height="400"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default YoutubeContent;


