import React from "react";

function YoutubeContent() {
  const videoData = [
    {
      url: "https://www.youtube.com/embed/FkfYYFNest8",
      title: "Understanding Frozen Shoulder",
      desc: "What causes it and how it's treated.",
    },
    {
      url: "https://www.youtube.com/embed/yilQsIC8Ryk",
      title: "Treating Meniscus Tear",
      desc: "Arthroscopic solutions and care.",
    },
    {
      url: "https://www.youtube.com/embed/ZCuWvhuk6a4",
      title: "Knee Replacement Explained",
      desc: "Surgical precision & recovery tips.",
    },
    {
      url: "https://www.youtube.com/embed/PNFFcErJBDk",
      title: "ACL Injury Management",
      desc: "Diagnosis to rehabilitation roadmap.",
    },
    {
      url: "https://www.youtube.com/embed/K81JJcpskO4",
      title: "Avoiding Cricket Injuries",
      desc: "Sports safety tips by Dr. Sharma.",
    },
    {
      url: "https://www.youtube.com/embed/XGQWKovfi6Q",
      title: "Running Myths Busted",
      desc: "Separating fact from fiction.",
    },
  ];
  return (
    <>
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Doctor Speaks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore orthopedic insights, treatment options, and real patient
              journeys with Dr. Amit Sharma's expert video talks.
            </p>
          </div>

          {/* Scrollable Video Section */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 min-w-full px-2 sm:px-4">
              {videoData.map((video, index) => (
                <div
                  key={index}
                  className="min-w-[280px] sm:min-w-[320px] bg-white rounded-lg shadow-md border p-3"
                >
                  <div className="aspect-video w-full mb-3">
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-md"
                    ></iframe>
                  </div>
                  <h4 className="font-semibold text-center text-sm text-purple-800">
                    Dr. Amit Sharma
                  </h4>
                  <p className="text-center text-gray-600 text-sm">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*pain content  */}
        <section className="bg-gray-100 py-16 px-4 mt-8 md:mt-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="bg-purple-900 text-white rounded-lg px-8 py-8 md:py-16 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why is Joint Health Important?
              </h2>
              <p className="mb-6 text-base leading-relaxed text-purple-100">
                Healthy joints are essential for staying mobile, independent,
                and pain-free. Whether you're walking, running, or simply doing
                daily tasks, joint care plays a key role. Learn how to protect
                your joints with the right approach—ranging from expert
                orthopaedic care to lifestyle changes that make a long-term
                difference.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-sm space-y-2 text-purple-100">
                  <li>Advanced Orthopaedic Surgery</li>
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

            {/* Right Image */}
            <div className="w-full">
              <img
                src="./images/kneepain.jpg" // replace with your actual image path
                alt="Joint Health"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default YoutubeContent;
