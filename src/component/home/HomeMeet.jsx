import React from "react";

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
            alt="Dr. Amit Sharma - Orthopedic and Joint Replacement Surgeon"
            className="rounded-lg shadow-md w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="sr-only">
            Dr. Amit Sharma, specialist in orthopedic surgery and sports
            injuries
          </figcaption>
        </figure>

        {/* Text Section */}
        <article>
          <h2
            id="meet-doctor-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
          >
            Meet <span className="text-purple-700">Dr. Amit Sharma</span>
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed text-[15.5px]">
            With over 23 years of surgical expertise, Dr. Amit Sharma is a
            renowned orthopedic specialist focused on joint replacement,
            arthroscopy, trauma surgery, and sports injuries. His dedication to
            endurance sports like marathons and triathlons brings unique
            understanding to patient recovery.
          </p>

          <p className="text-gray-600 mb-6 text-[15.5px]">
            His treatment philosophy combines surgical precision with
            athlete-level empathy—empowering patients to heal, move, and thrive
            without pain.
          </p>

          <a
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded transition duration-300"
            aria-label="Read more about Dr. Amit Sharma"
          >
            Learn More About Dr. Sharma
          </a>
        </article>
      </div>
    </section>
  );
}

export default HomeMeet;
