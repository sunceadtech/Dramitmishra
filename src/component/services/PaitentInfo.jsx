import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { FaFilePdf } from "react-icons/fa";

function PaitentInfo() {
  const infoItems = [
    {
      title: "Managing Osteoarthritis Naturally",
      image:
        "https://media.istockphoto.com/id/1435081750/photo/indian-doctor-therapist-in-white-coat-consulting-supporting-patient-in-modern-clinic-hospital.jpg?s=612x612&w=0&k=20&c=P_jI5mQVHxmnlvECj6nB9RbPpGXS2gz2TzMQRZu4YVY=",
      description:
        "Learn about lifestyle changes, exercise routines, and diet modifications that can help reduce pain and improve mobility for those suffering from osteoarthritis.",
      pdf: "#",
    },
    {
      title: "Total Knee Replacement Guide",
      image:
        "https://media.istockphoto.com/id/1302923059/photo/doctor-and-patient-are-discussing-at-clinic-showing-report-in-computer-stock-photo.jpg?s=612x612&w=0&k=20&c=4239jp7gH4-9aAtZISSzfWZdkZq7L50s8UE3gnKNGBk=",
      description:
        "Understand how knee replacement surgery works, when it's needed, and what to expect before and after the procedure to ensure a smooth recovery.",
      pdf: "#",
    },
    {
      title: "ACL Injury & Treatment Options",
      image:
        "https://www.news-medical.net/images/news/ImageForNews_788261_17242393034809858.jpg",
      description:
        "Discover the causes, symptoms, and surgical/non-surgical options for ACL tears. Gain insights into rehabilitation exercises and long-term joint health.",
      pdf: "#",
    },
  ];

  return (
    <>
      <div className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <img
          src="https://www.dramitsharma.info/drassets/img/banner-img2.jpg"
          alt="Patient Information"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-6 md:px-20">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Patient Information
            </h1>

            {/* Optional Hidden SEO Subheadings */}
            <div className="sr-only">
              <h2>Conservative Treatment of Osteoarthritis</h2>
              <h3>Total Knee Replacement</h3>
              <h4>ACL Injury and Reconstruction</h4>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="font-semibold">Patient Information</span>
            </div>
          </div>
        </div>
      </div>
      {/*cards display */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        {infoItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-6 border-b pb-8"
          >
            {/* Image */}
            <div className="w-full md:w-[320px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg md:text-xl font-semibold text-gray-800">
                  {item.title}
                </span>
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800"
                  title="Download PDF"
                >
                  <FaFilePdf className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PaitentInfo;
