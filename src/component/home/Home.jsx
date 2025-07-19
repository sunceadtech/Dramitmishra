import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/images/heroimage.webp",
    title: "Expert Care for Every Step You Take",
    description:
      "We are dedicated to restoring your mobility and enhancing your quality of life with personalised treatment plans and advanced surgical techniques.",
  },
  {
    image: "/images/herobanner.webp",
    title: "Mastering Surgical Excellence for Optimal Outcomes",
    description:
      "With unparalleled expertise and cutting-edge techniques, we provide top-tier orthopaedic surgical care.",
  },
];

function Home() {
  return (
    <section
      className="relative w-full h-[90vh] overflow-hidden"
      aria-label="Home Hero Section"
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Desktop View */}
            <div
              className="hidden lg:block relative w-full h-[90vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-label={`Slide ${index + 1}`}
              role="img"
            >
              <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 flex items-center justify-end p-6 xl:p-12 bg-gradient-to-l from-white/80 to-white/0">
                <div className="max-w-xl bg-white/90 p-6 rounded-lg shadow-lg">
                  <h1 className="text-3xl xl:text-4xl font-bold text-purple-900 mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-gray-700 mb-6 text-base xl:text-lg">
                    {slide.description}
                  </p>
                  <h2 className="text-xl font-semibold text-purple-800 mb-4">
                    Book an Appointment
                  </h2>
                  <div className="flex flex-col xl:flex-row gap-4 mb-6">
                    <Link
                      to="/contact"
                      className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition text-sm text-center"
                    >
                      Yashoda Super Speciality Hospital, Kaushambi
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-white border border-purple-700 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-100 transition text-sm text-center"
                    >
                      City Clinic, Krishna Nagar
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <Stat number="3K+" label="Joint Replacements" />
                    <Stat number="10K+" label="Operated Patients" />
                    <Stat number="23+" label="Years of Experience" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div className="block lg:hidden bg-white min-h-screen">
              <img
                src={slide.image}
                alt={slide.title}
                loading={index === 0 ? "eager" : "lazy"}
                fetchpriority={index === 0 ? "high" : "low"}
                decoding="async"
                className="w-full h-[250px] sm:h-[300px] object-cover"
              />
              <div className="p-4 space-y-4 pb-16">
                <h1 className="text-xl font-bold text-purple-900">
                  {slide.title}
                </h1>
                <p className="text-gray-700 text-sm">{slide.description}</p>
                <h2 className="text-lg font-semibold text-purple-800">
                  Book an Appointment
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Link
                    to="/contact"
                    className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition text-sm text-center"
                  >
                    Yashoda Hospital, Kaushambi
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-white border border-purple-700 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-100 transition text-sm text-center"
                  >
                    City Clinic, Krishna Nagar
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center pt-2">
                  <Stat number="3K+" label="Joint Replacements" small />
                  <Stat number="10K+" label="Operated Patients" small />
                  <Stat number="23+" label="Years of Experience" small />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Stat({ number, label, small = false }) {
  return (
    <div>
      <h3 className={`font-bold text-purple-900 ${small ? "text-xl" : "text-2xl"}`}>{number}</h3>
      <p className={`text-gray-600 ${small ? "text-xs" : "text-sm"}`}>{label}</p>
    </div>
  );
}

export default Home;
