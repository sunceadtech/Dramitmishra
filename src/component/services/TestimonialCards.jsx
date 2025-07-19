import React from "react";
import { FaPlayCircle } from "react-icons/fa";

function TestimonialCards() {
  const testimonials = [
    {
      name: "Rahul Verma",
      image: "/images/testimonial1.webp",
      title: "Hip Replacement Surgery",
      description:
        "I struggled with chronic hip pain for over a year. After my surgery, I can finally walk without discomfort. Dr. Amit Sharma and his team were amazing throughout the journey.",
      video: "https://www.youtube.com/watch?v=FOIu2Dt1Wvw",
    },
    {
      name: "Sita Devi",
      image: "/images/testimonial2.webp",
      title: "Knee Replacement",
      description:
        "I had been suffering from joint stiffness for many years. After consulting Dr. Amit Sharma, I underwent knee replacement surgery and the pain is completely gone. I feel energetic again!",
      video: "https://www.youtube.com/shorts/SsTBvblBpzA",
    },
    {
      name: "Anjali Verma",
      image: "/images/testimonial4.webp",
      title: "Spinal Disc Treatment",
      description:
        "Dr. Amit’s diagnosis and treatment plan for my spinal disc issue was spot on. I am able to move freely again and continue my office work without back pain.",
    },
    {
      name: "Priya Thakur",
      image: "/images/testimonial6.webp",
      title: "ACL Reconstruction",
      description:
        "After a sports injury, I was nervous about surgery. But Dr. Amit made me feel confident. I’m back to running and playing badminton again—pain-free.",
    },
    {
      name: "Mr. Ramcena",
      image: "/images/testimonial7.webp",
      title: "Orthopedic Consultation",
      description:
        "As an international patient from Nigeria, I received excellent care and support. The staff made the whole process smooth, and the results were beyond my expectations.",
    },
    {
      name: "Rekha Sharma",
      image: "/images/testimonial11.webp",
      title: "Shoulder Fracture Surgery",
      description:
        "I had a complicated shoulder fracture, but Dr. Amit’s surgical precision gave me my mobility back. Recovery was quick and the follow-up care was fantastic.",
    },
    {
      name: "Priya Tiwari",
      image: "/images/testimonial9.webp",
      title: "Elbow Surgery",
      description:
        "I couldn't lift my arm due to elbow stiffness. After surgery, I gained full range of motion. Grateful to Dr. Amit for his professionalism and skill.",
    },
    {
      name: "Manju Kumari",
      image: "/images/testimonial10.webp",
      title: "Complex Fracture Repair",
      description:
        "After a serious road accident, I was admitted in critical condition. The fracture was treated so well, and now I am walking confidently. Thank you, doctor!",
    },
  ];

  return (
    <section
      className="max-w-6xl mx-auto px-4 py-12"
      aria-label="Patient testimonials"
    >
      <div className="space-y-8">
        {testimonials.map((t, index) => (
          <article
            key={index}
            className="flex flex-col md:flex-row gap-6 pb-6 border-b border-gray-300"
            role="group"
            aria-labelledby={`testimonial-${index}-name`}
          >
            {/* Patient Image and Optional Video */}
            <div className="relative w-[160px] h-[160px] flex-shrink-0">
              <img
                src={t.image}
                alt={`Photo of ${t.name}`}
                className="w-full h-full object-cover rounded"
                loading="lazy"
                width="160"
                height="160"
              />
              {t.video && (
                <a
                  href={t.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${
                    t.name
                  }'s video about their ${t.title.toLowerCase()}`}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-4xl hover:text-purple-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <FaPlayCircle aria-hidden="true" />
                  <span className="sr-only">
                    Watch {t.name}'s video testimonial on {t.title}
                  </span>
                </a>
              )}
            </div>

            {/* Text Details */}
            <div>
              <h3
                id={`testimonial-${index}-name`}
                className="text-xl font-semibold text-gray-900"
              >
                {t.name}
              </h3>
              <p className="text-purple-600 font-bold mb-2">{t.title}</p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                {t.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TestimonialCards;
