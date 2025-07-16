import React from "react";
import { FaPlayCircle } from "react-icons/fa";
function TestimonialCards() {
  const testimonials = [
    {
      name: "Rahul Verma",
      image:
        "https://knot9prod.s3.amazonaws.com/thumbnails/228021/hover_228021020.jpg",
      title: "Hip Replacement Surgery",
      description:
        "I struggled with chronic hip pain for over a year. After my surgery, I can finally walk without discomfort. Dr. Amit Sharma and his team were amazing throughout the journey.",
      video: "https://www.youtube.com/watch?v=FOIu2Dt1Wvw",
    },
    {
      name: "Sita Devi",
      image:
        "https://st4.depositphotos.com/1007965/38116/i/1600/depositphotos_381161752-stock-photo-sundarpur-india-2013-unidentified-indian.jpg",
      title: "Knee Replacement",
      description:
        "I had been suffering from joint stiffness for many years. After consulting Dr. Amit Sharma, I underwent knee replacement surgery and the pain is completely gone. I feel energetic again!",
      video: "https://www.youtube.com/shorts/SsTBvblBpzA",
    },
    {
      name: "Ajay Kumar",
      image:
        "https://t4.ftcdn.net/jpg/05/04/16/13/360_F_504161356_T8SwiAc8VbouDMy8dsNQkR69cIKbTC70.jpg",
      title: "Spinal Disc Treatment",
      description:
        "Dr. Amit’s diagnosis and treatment plan for my spinal disc issue was spot on. I am able to move freely again and continue my office work without back pain.",
    },
    {
      name: "Priya Thakur",
      image:
        "https://images.pond5.com/young-female-patient-doing-thumbs-footage-209169140_iconl.jpeg",
      title: "ACL Reconstruction",
      description:
        "After a sports injury, I was nervous about surgery. But Dr. Amit made me feel confident. I’m back to running and playing badminton again—pain-free.",
    },
    {
      name: "John Michael",
      image:
        "https://getwellgo.com/uploads/getwellgo%20patients%20to%20%20nigiria.jpg",
      title: "Orthopedic Consultation",
      description:
        "As an international patient from Nigeria, I received excellent care and support. The staff made the whole process smooth, and the results were beyond my expectations.",
    },
    {
      name: "Rekha Sharma",
      image:
        "https://media.istockphoto.com/id/1394763799/photo/doctor-with-nurse-examining-patient-lying-on-hospital-bed.jpg?s=612x612&w=0&k=20&c=jAlwS5pwd1OenBCoITWMkTeqQaGMhoS7tJpgIe5GHLU=",
      title: "Shoulder Fracture Surgery",
      description:
        "I had a complicated shoulder fracture, but Dr. Amit’s surgical precision gave me my mobility back. Recovery was quick and the follow-up care was fantastic.",
    },
    {
      name: "Ramesh Tiwari",
      image:
        "https://cdn.daily-sun.com/public/news_images/2020/06/03/DS-iNDIAN-MAN.jpg",
      title: "Elbow Surgery",
      description:
        "I couldn't lift my arm due to elbow stiffness. After surgery, I gained full range of motion. Grateful to Dr. Amit for his professionalism and skill.",
    },
    {
      name: "Manju Kumari",
      image:
        "https://c8.alamy.com/comp/C2BKGY/medical-staff-treat-a-patient-in-an-intensive-care-unit-icu-at-yashodhara-C2BKGY.jpg",
      title: "Complex Fracture Repair",
      description:
        "After a serious road accident, I was admitted in critical condition. The fracture was treated so well, and now I am walking confidently. Thank you, doctor!",
    },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 pb-6 border-b border-gray-300"
            >
              {/* Image with video overlay */}
              <div className="relative w-[160px] h-[160px] flex-shrink-0">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover rounded"
                />
                {t.video && (
                  <a
                    href={t.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-4xl hover:text-purple-400 rounded"
                  >
                    <FaPlayCircle />
                  </a>
                )}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {t.name}
                </h3>
                <p className="text-purple-600 font-bold mb-2">{t.title}</p>
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  {t.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TestimonialCards;
