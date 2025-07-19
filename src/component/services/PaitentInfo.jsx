import React from "react";
import { FaFilePdf } from "react-icons/fa6";

const info = [
  {
    title: "Knee Replacement",
    image: "/images/knee.webp",
    description:
      "Learn how total knee replacement can relieve chronic pain and improve mobility through modern orthopedic techniques.",
    pdf: "https://en.wikipedia.org/wiki/Knee_replacement",
  },
  {
    title: "Hip Replacement",
    image: "/images/hip.webp",
    description:
      "Understand hip replacement surgery, its recovery process, and how it restores freedom of movement.",
    pdf: "https://en.wikipedia.org/wiki/Hip_replacement",
  },
  {
    title: "ACL Reconstruction",
    image: "/images/aclpcl.webp",
    description:
      "Find out how ACL reconstruction helps athletes and active individuals return to full function after injury.",
    pdf: "https://en.wikipedia.org/wiki/Anterior_cruciate_ligament_reconstruction",
  },
  {
    title: "Shoulder Arthroscopy",
    image: "/images/paitent4.webp",
    description:
      "Explore how minimally invasive shoulder arthroscopy treats rotator cuff tears and joint pain effectively.",
    pdf: "https://en.wikipedia.org/wiki/Shoulder_problem",
  },
];

const PaitentInfo = () => {
  return (
    <main className="w-full bg-white">
      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        <img
          src="/images/paitentinfo.webp"
          alt="Patient Information Banner - Orthopedic Services"
          width={1920}
          height={500}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Orthopedic Patient Education Resources
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Learn About Common Orthopedic Treatments
          </h2>
          <p className="mt-2 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Explore our trusted resources and download informative PDFs to
            understand your condition and treatment options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {info.map((item, idx) => (
            <article
              key={idx}
              className="flex flex-col md:flex-row gap-6 border-b pb-10"
              aria-labelledby={`info-title-${idx}`}
            >
              {/* Image */}
              <div className="w-full md:w-[320px] shrink-0">
                <img
                  src={item.image}
                  alt={`${item.title} illustration`}
                  width={320}
                  height={240}
                  className="w-full h-full object-cover rounded-md"
                  loading="lazy"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-center">
                <h3
                  id={`info-title-${idx}`}
                  className="text-xl font-semibold text-gray-800 mb-2"
                >
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {item.description}
                </p>
                {item.pdf && (
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mt-3 inline-flex items-center gap-2"
                  >
                    <FaFilePdf className="w-4 h-4" />
                    Download PDF about {item.title}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PaitentInfo;
