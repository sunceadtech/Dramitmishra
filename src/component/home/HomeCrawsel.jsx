import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FaQuoteLeft } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    name: "Mahender Rajput",
    image: "/images/paitent1.webp",
    text: "As a bodybuilder, my tendon injury was worrying. Dr. Amit reassured me and post-surgery, I was back in form. Truly grateful for his expert care.",
  },
  {
    name: "Rahul Kumar",
    image: "/images/testimonial1.webp",
    text: "Walking was difficult until I met Dr. Amit. After surgery, I can move freely. He’s extremely kind and professional.",
  },
  {
    name: "Pushplata Garg",
    image: "/images/testimonial9.webp",
    text: "I was hesitant about surgery, but Dr. Amit's confidence gave me courage. I feel young again!",
  },
  {
    name: "Mrs. Karan",
    image: "/images/testimonial10.webp",
    text: "After thorough research, we chose Dr. Amit Sharma. My left knee replacement has been successful and pain-free.",
  },
  {
    name: "Priya Sharma",
    image: "/images/blog6.webp",
    text: "At 72, I had bilateral knee surgery. Dr. Amit’s motivation and care helped me recover better than I expected.",
  },
  {
    name: "Sita Bai",
    image: "/images/testimonial4.webp",
    text: "At 72, I underwent knee surgery on both legs. Thanks to Dr. Amit’s expert care and encouragement, I regained mobility faster than I imagined.",
  },
];

function HomeCrawsel() {
  return (
    <section
      className="bg-gray-100 py-16 px-4 max-w-8xl"
      aria-labelledby="testimonial-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2
          id="testimonial-heading"
          className="text-3xl font-bold text-gray-800 mb-2"
        >
          What Our Patients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          Real stories from patients who found relief and recovery through Dr.
          Amit Sharma’s expert orthopedic care.
        </p>
      </div>

      <div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          stopOnHover
          swipeable
          emulateTouch
          useKeyboardArrows
          className="mx-auto w-full md:w-[70vw]"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                aria-label="Previous testimonial"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md bg-purple-100 z-10"
              >
                <ChevronLeft className="text-purple-800 w-6 h-6" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                aria-label="Next testimonial"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md bg-purple-100 z-10"
              >
                <ChevronRight className="text-purple-800 w-6 h-6" />
              </button>
            )
          }
        >
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center space-y-4"
            >
              <FaQuoteLeft
                className="text-purple-400 text-2xl mb-2"
                aria-hidden="true"
              />
              <blockquote className="text-gray-700 text-base leading-relaxed max-w-md">
                “{testimonial.text}”
              </blockquote>
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={`Photo of ${testimonial.name}`}
                  loading="lazy"
                  decoding="async"
                  width="128"
                  height="128"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <figcaption className="text-lg font-semibold text-purple-800 py-4 md:py-8">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default HomeCrawsel;
