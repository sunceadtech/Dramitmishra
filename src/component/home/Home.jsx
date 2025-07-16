import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";

function Home() {
  const slides = [
    {
      image:
        "https://www.dramitsharma.info/drassets/img/homelatestbanner22.jpg",
      title: "Expert Care for Every Step You Take",
      description:
        "We are dedicated to restoring your mobility and enhancing your quality of life with personalised treatment plans and advanced surgical techniques.",
    },
    {
      image:
        "https://www.dramitsharma.info/drassets/img/homelatestbanner25.jpg",
      title: "Mastering Surgical Excellence for Optimal Outcomes",
      description:
        "With unparalleled expertise and cutting-edge techniques, we provide top-tier orthopaedic surgical care.",
    },
  ];

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
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
            >
              <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 flex items-center justify-end p-6 xl:p-12 bg-gradient-to-l from-white/80 to-white/0">
                <div className="max-w-xl bg-white/90 p-6 rounded-lg shadow-lg">
                  <h1 className="text-3xl xl:text-4xl font-bold text-purple-900 mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-gray-700 mb-6 text-base xl:text-lg">
                    {slide.description}
                  </p>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">
                    Book an Appointment
                  </h3>
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
                    <div>
                      <h3 className="text-2xl font-bold text-purple-900">
                        3K+
                      </h3>
                      <p className="text-sm text-gray-600">
                        Joint Replacements
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-900">
                        10K+
                      </h3>
                      <p className="text-sm text-gray-600">Operated Patients</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-900">
                        23+
                      </h3>
                      <p className="text-sm text-gray-600">
                        Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div className="block lg:hidden bg-white min-h-screen">
              <div
                className="w-full h-[250px] sm:h-[300px] bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              <div className="p-4 space-y-4 pb-16">
                <h1 className="text-xl font-bold text-purple-900">
                  {slide.title}
                </h1>
                <p className="text-gray-700 text-sm">{slide.description}</p>

                <h3 className="text-lg font-semibold text-purple-800">
                  Book an Appointment
                </h3>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Link
                    to="/contact"
                    className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition text-sm text-center"
                  >
                    Yashoda Super Speciality Hospital, Kaushambi
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-white border border-purple-700 text-purple-700 px-4 py-2  rounded-md hover:bg-purple-100 transition text-sm text-center"
                  >
                    City Clinic, Krishna Nagar
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center pt-2">
                  <div>
                    <h3 className="text-xl font-bold text-purple-900">3K+</h3>
                    <p className="text-xs text-gray-600">Joint Replacements</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900">10K+</h3>
                    <p className="text-xs text-gray-600">Operated Patients</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900">23+</h3>
                    <p className="text-xs text-gray-600">Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Home;
