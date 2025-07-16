import React from 'react'

function HomeMeet() {
  return (
    <>
  <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="/images/drsharma.jpeg" // replace with your actual local image path
            alt="Dr. Amit Sharma"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
        {/* Text Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Meet <span className="text-purple-700">Dr. Amit Sharma</span>
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed text-[15.5px]">
            Dr. Amit Sharma is a highly accomplished orthopedic surgeon with over
            23 years of experience in joint replacements, arthroscopy,
            minimally invasive trauma surgery, and sports injuries. His passion
            for endurance sports like marathons, triathlons, and swimming gives
            him unique insight into athlete recovery and injury care.
          </p>

          <p className="text-gray-600 mb-6 text-[15.5px]">
            His medical approach is a fusion of expert knowledge and athletic
            empathy, helping patients regain mobility and live pain-free with
            personalized care.
          </p>

          <a
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            Know More
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeMeet