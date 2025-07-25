import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";
import TestimonialCards from "./TestimonialCards";

function Testimonial() {
  return (
    <>
      <Helmet>
        <title>
          Patient Testimonials | Dr. Amit Sharma - Orthopedic Surgeon
        </title>
        <meta
          name="description"
          content="Read real patient testimonials about their orthopedic treatment experience with Dr. Amit Sharma. Discover stories of recovery from joint pain, fractures, and surgeries."
        />
        <meta
          name="keywords"
          content="orthopedic testimonials, patient reviews, Dr. Amit Sharma, orthopedic surgeon feedback, success stories, joint treatment, bone care, recovery stories"
        />
        <link
          rel="canonical"
          href="https://www.dramitsharmaortho.com/testimonial"
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] md:h-[600px] overflow-hidden"
        aria-label="Testimonials Banner"
      >
        <img
          src="/images/testimonial.webp"
          alt="Happy orthopedic patient testimonial"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>

        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-6 md:px-20 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Testimonials
            </h1>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Hear what our patients say about their orthopedic care journey
              with <strong>Dr. Amit Sharma</strong>. Real stories, real
              recoveries.
            </p>

            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm"
            >
              <Link
                to="/"
                className="hover:underline text-white"
                title="Go to Dr. Amit Sharma's Home Page"
              >
                Home – Dr. Amit Sharma
              </Link>
              <ChevronRight className="w-4 h-4 text-white" />
              <span className="font-semibold text-white" aria-current="page">
                Testimonials
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* Testimonial Cards Section */}
      <section
        aria-labelledby="testimonial-heading"
        className="bg-white text-gray-800 py-16"
      >
        <h2 id="testimonial-heading" className="sr-only">
          Real patient testimonials for orthopedic surgery and recovery
        </h2>
        <TestimonialCards />
      </section>
    </>
  );
}

export default Testimonial;
