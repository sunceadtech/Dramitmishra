import React from "react";
import { Link } from "react-router-dom";

function KneeComp() {
  return (
    <section
      className="relative bg-black/90 text-white overflow-hidden"
      aria-label="Knee Pain Awareness Section"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-28 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Text Block */}
        <div className="w-full md:w-1/2 z-10">
          <header>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unsure About Knee Pain?
            </h2>
          </header>
          <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-100">
            Constant knee pain affecting your mobility? Take our simple test to
            check your{" "}
            <span className="text-yellow-300 font-semibold">
              knee condition
            </span>{" "}
            and see if surgery might be the right option for you.
          </p>
          <Link
            to="/service-detail/knee-replacement"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md shadow hover:bg-yellow-300 transition"
            aria-label="Check Your Knee Health – Learn More"
          >
            Check Your Knee Health
          </Link>
        </div>

        {/* Image Block */}
        <div className="w-full md:max-w-[600px] mt-10 md:mt-0 flex justify-end md:ml-32 px-0 md:px-10">
          <picture>
            <source srcSet="/images/kneepan3.webp" type="image/webp" />
            <img
              src="/images/kneepan3.webp"
              alt="Dr. Amit Sharma's knee health assessment illustration"
              className="w-full max-w-md md:max-w-full h-52 md:h-[350px] object-contain rounded-md"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default KneeComp;
