import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import TestimonialCards from "./TestimonialCards";
function Testimonial() {
  return (
    <>
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* Background Image */}
        <img
          src="https://cdn.myrx.in/website/images/blogs/digital-transformation-in-medicine-the-future-of-doctor-patient-relationships.png"
          alt="Doctor Testimonial Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-6 md:px-20">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Testimonials
            </h1>
            <p className="text-white text-lg md:text-xl mb-6">
              Hear what our patients say about their orthopedic treatment
              journey with Dr. Amit Sharma.
            </p>
            <div className="flex items-center gap-2 text-sm text-white">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="font-semibold">Testimonials</span>
            </div>
          </div>
        </div>
      </div>
      <TestimonialCards />
    </>
  );
}

export default Testimonial;
