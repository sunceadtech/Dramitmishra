import React from "react";
import { Link } from "react-router-dom";

function HomeMeet() {
  return (
    <section
      className="bg-white py-16 px-4"
      aria-labelledby="meet-doctor-heading"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <figure className="w-full">
          <img
            src="/images/drsharma.webp"
            alt="Dr. Amit Sharma, Top Orthopedic Surgeon in Delhi – Expert in Joint Replacement & Sports Injuries"
            width="600"
            height="400"
            className="rounded-lg shadow-md w-full h-auto object-cover"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
          <figcaption className="sr-only">
            Dr. Amit Sharma – Orthopedic surgery and sports injury specialist
          </figcaption>
        </figure>

        {/* Text Section */}
        <article>
          <h2
            id="meet-doctor-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
          >
            Meet{" "}
            <span className="text-purple-700">
              Dr. Amit Sharma – Orthopedic Surgeon in Delhi NCR
            </span>
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-[15.5px]">
            With over 23 years of surgical experience, Dr. Amit Sharma is a
            renowned orthopedic specialist in Delhi, known for his expertise in
            joint replacement, arthroscopy, trauma surgery, and sports injuries.
            His personal commitment to endurance sports like marathons and
            triathlons deeply informs his patient-centric care.
          </p>

          <p className="text-gray-700 mb-6 text-[15.5px]">
            Dr. Sharma blends surgical precision with an athlete’s mindset,
            empowering patients to recover faster, move confidently, and live a
            pain-free life.
          </p>

          <Link
            to="/about"
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            aria-label="Get To Know about Dr. Amit Sharma, orthopedic specialist in Delhi"
          >
            Grt To Know About Dr. Sharma
          </Link>
        </article>
      </div>
    </section>
  );
}

export default HomeMeet;


