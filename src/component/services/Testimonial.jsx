import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import TestimonialCards from "./TestimonialCards";

// Add canonical link via plain HTML
document.title = "Patient Testimonials - Dr. Amit Sharma | Orthopedic Surgeon";
const canonical = document.querySelector("link[rel='canonical']");
if (!canonical) {
  const link = document.createElement("link");
  link.setAttribute("rel", "canonical");
  link.setAttribute("href", "https://www.dramitsharmaortho.com/testimonials");
  document.head.appendChild(link);
} else {
  canonical.setAttribute("href", "https://www.dramitsharmaortho.com/testimonials");
}

function Testimonial() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] md:h-[600px] overflow-hidden"
        aria-label="Testimonials banner"
      >
        {/* Background Image */}
        <img
          src="/images/testimonial.webp"
          alt="Smiling patient after orthopedic treatment"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width="1920"
          height="1080"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-6 md:px-20 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Testimonials
            </h1>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Hear what our patients say about their orthopedic care journey
              with <strong>Dr. Amit Sharma</strong>. Real people, real recoveries.
            </p>

            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm"
            >
              <Link
                to="/"
                className="hover:underline text-white"
                title="Back to Home"
              >
                Home - Dr. Amit Sharma Orthopedic
              </Link>
              <ChevronRight className="w-4 h-4 text-white" />
              <span
                className="font-semibold text-white"
                aria-current="page"
              >
                Testimonials
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* Testimonial Cards */}
      <section
        aria-labelledby="testimonial-heading"
        className="bg-white text-gray-800 py-16"
      >
        <h2 id="testimonial-heading" className="sr-only">
          Patient Testimonials Section
        </h2>
        <TestimonialCards />
      </section>
    </>
  );
}

export default Testimonial;
