import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FaQuoteLeft } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomeCrawsel() {
  const testimonials = [
    {
      name: "Mahender Rajput",
      image:
        "https://www.careerstaff.com/wp-content/uploads/2023/01/benefits-of-patient-centered-care-for-healthcare-employers.jpg",
      text: "As a bodybuilder, my tendon injury was worrying. Dr. Amit reassured me and post-surgery, I was back in form. Truly grateful for his expert care.",
    },
    {
      name: "Ramvati",
      image:
        "https://www.theweek.in/content/dam/week/magazine/the-week/cover-story/nov-29-2015/image/94Patientwelfareofficers.jpg",
      text: "Walking was difficult until I met Dr. Amit. After surgery, I can move freely. He’s extremely kind and professional.",
    },
    {
      name: "Pushplata Garg",
      image: "https://www.jnuhealthcare.com/images/emergency_service_pic.jpg",
      text: "I was hesitant about surgery, but Dr. Amit's confidence gave me courage. I feel young again!",
    },
    {
      name: "Mrs. Karan",
      image:
        "https://kotharimedical.com/wp-content/uploads/2024/01/Untitled-design-3.webp",
      text: "After thorough research, we chose Dr. Amit Sharma. My left knee replacement has been successful and pain-free.",
    },
    {
      name: "Mr. Madan",
      image:
        "https://cdn.prod.website-files.com/5babc11099f97ea5dbcf24d5/66f3142a68e1fe6804b21d00_patient-rights.jpg",
      text: "At 72, I had bilateral knee surgery. Dr. Amit’s motivation and care helped me recover better than I expected.",
    },
    {
      name: "Mr. raman",
      image:
        "https://www.indiaspend.com/h-upload/old_images/1500x900_343012-niyaz-wani1440.jpg",
      text: "Coming from South Sudan for treatment was worth it. My shoulder recovered quickly, thanks to Dr. Amit’s precise treatment.",
    },
  ];

  return (
    <>
      <section className="bg-gray-100 py-16 px-4 max-w-8xl">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            What Our Patients Say
          </h2>
          <p className="text-gray-600">
            Real stories from patients who found relief and recovery through Dr.
            Amit Sharma’s care.
          </p>
        </div>

        <div>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={6000}
            className="mx-auto  w-full md:w-[70vw]"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br w-full  from-purple-50 to-purple-100 p-6  rounded-xl shadow-md flex flex-col items-center text-center space-y-4"
              >
                <FaQuoteLeft className="text-purple-400 text-2xl mb-2" />
                <p className="text-gray-700 text-base leading-relaxed max-w-md">
                  “{testimonial.text}”
                </p>
                <div className="w-32 h-32 rounded-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </div>
                <h5 className="text-lg font-semibold text-purple-800 py-4 md:py-8">
                  {testimonial.name}
                </h5>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      {/*client reviews  */}
 
    </>
  );
}

export default HomeCrawsel;
