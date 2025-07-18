import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { FaFilePdf } from "react-icons/fa";

function PaitentInfo() {
  const infoItems = [
    {
      title: "Natural Relief for Joint Pain",
      image: "/images/paitent8.webp",
      description:
        "Explore natural ways to manage joint discomfort, including gentle exercises, posture improvement, and anti-inflammatory foods that support joint health.",
      pdf: "https://www.orthobethesda.com/wp-content/uploads/2019/10/Arthritis-Relief-Tips.pdf",
    },
    {
      title: "Fracture Treatment & Healing Process",
      image: "/images/paitent2.webp",
      description:
        "Understand how fractures are diagnosed and treated, from casting and immobilization to surgical intervention and physiotherapy for recovery.",
    },
    {
      title: "Spine Health & Back Pain Relief",
      image: "/images/paitent3.webp",
      description:
        "Learn about common spinal issues, posture correction, and non-surgical treatments to relieve lower back and neck pain effectively.",
    },
    {
      title: "Post-Surgery Care & Recovery Tips",
      image: "/images/paitent4.webp",
      description:
        "Essential steps after orthopedic surgery — from wound care and mobility aids to safe home exercises that boost healing.",
    },
    {
      title: "Understanding Rheumatoid Arthritis",
      image: "/images/paitent5.webp",
      description:
        "Get insights into rheumatoid arthritis symptoms, diagnosis, and treatment options including medications and lifestyle support.",
    },
    {
      title: "Orthopedic Tips for Active Lifestyle",
      image: "/images/paitent7.webp",
      description:
        "Stay injury-free with orthopedic advice for athletes and fitness lovers — covering joint protection, gear use, and body mechanics.",
    },
  ];

  return (
    <>
      <header className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
        <img
          src="/images/paitentinfo.webp"
          alt="Orthopedic Patient Education Banner"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-6 md:px-20">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Patient Information
            </h1>

            {/* Hidden SEO Supporting Content */}
            <div className="sr-only">
              <h2>Conservative Treatment of Osteoarthritis</h2>
              <h3>Total Knee Replacement</h3>
              <h4>ACL Injury and Reconstruction</h4>
            </div>

            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-white"
            >
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
              <span className="font-semibold">Patient Information</span>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {infoItems.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col md:flex-row gap-6 border-b pb-10"
          >
            {/* Image */}
            <div className="w-full md:w-[320px]">
              <img
                src={item.image}
                alt={`${item.title} Illustration`}
                className="w-full h-full object-cover rounded-md"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <section className="flex-1 flex flex-col justify-center">
              <header className="flex items-center gap-3 mb-2">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  {item.title}
                </h2>
              </header>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </section>
          </article>
        ))}
      </main>
    </>
  );
}

export default PaitentInfo;
