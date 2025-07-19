import React from "react";
import { Link } from "react-router-dom";

function KneeComp() {
  return (
    <section
      className="relative bg-black text-white overflow-hidden"
      aria-labelledby="knee-health-heading"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" aria-hidden="true" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-28 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Text Block */}
        <div className="w-full md:w-1/2">
          <header>
            <h2
              id="knee-health-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Unsure About Knee Pain?
            </h2>
          </header>
          <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-200">
            Constant knee pain affecting your mobility? Take our simple test to
            check your{" "}
            <span className="text-yellow-300 font-semibold">
              knee condition
            </span>{" "}
            and see if surgery might be the right option for you.
          </p>
          <Link
            to="/service-detail/knee-replacement"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md shadow hover:bg-yellow-300 transition-colors duration-300"
            aria-label="Check your knee health and learn more about treatment options"
          >
            Check Your Knee Health
          </Link>
        </div>

        {/* Image Block */}
        <div className="w-full md:w-auto mt-10 md:mt-0 flex justify-end md:ml-32 px-0 md:px-10">
          <picture>
            <source srcSet="/images/kneepan3.webp" type="image/webp" />
            <img
              src="/images/kneepan3.webp"
              alt="Dr. Amit Sharma's knee pain assessment"
              className="w-full h-auto max-w-sm md:max-w-md object-contain rounded-md"
              width="350"
              height="350"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default KneeComp;

