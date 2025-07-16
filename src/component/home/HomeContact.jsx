import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
function HomeContact() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 const faqs = [
  {
    question: "When should I consult a specialist for joint pain?",
    answer:
      "If your joint pain lasts more than a few weeks, worsens with movement, or limits daily activities, it’s time to consult an orthopedic specialist.",
  },
  {
    question: "Is knee replacement the only solution for arthritis?",
    answer:
      "Not always. Early arthritis can often be managed with medications, physiotherapy, and lifestyle changes. Surgery is recommended only for advanced cases.",
  },
  {
    question: "What are the benefits of minimally invasive orthopedic surgery?",
    answer:
      "Minimally invasive procedures result in smaller incisions, faster recovery, less pain, and reduced hospital stays compared to traditional surgery.",
  },
  {
    question: "Do you offer treatments for sports injuries?",
    answer:
      "Yes, we treat a wide range of sports injuries including ligament tears, tendonitis, and joint dislocations through advanced techniques like arthroscopy.",
  },
  {
    question: "Can osteoporosis be prevented or managed?",
    answer:
      "Yes, with a combination of regular weight-bearing exercise, calcium & vitamin D, and bone density monitoring, osteoporosis can be effectively managed.",
  },
];

  return (
    <>
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Appointment Form */}
          <div>
            <h3 className="text-3xl font-bold text-purple-800 mb-6">
              Book an Appointment
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <button
                type="submit"
                className="bg-purple-700 text-white font-semibold px-6 py-3 rounded hover:bg-purple-800 transition"
              >
                Make an Appointment
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-3xl font-bold text-purple-800 mb-6">
              Have any Questions?
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-purple-200 rounded overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-4 py-3 bg-purple-100 text-purple-900 font-medium focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className="text-sm">
                      {activeIndex === index ? <FaMinus  className="cursor-pointer"/> : <FaPlus className="cursor-pointer"/>}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="px-4 py-3 text-gray-700 bg-white border-t border-purple-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeContact;
