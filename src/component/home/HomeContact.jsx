import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomeContact() {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
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
      question:
        "What are the benefits of minimally invasive orthopedic surgery?",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      access_key: "d178f430-9dc9-4bf5-871b-b104717253a8",
      ...contact,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        navigate("/thankyou");
        setContact({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="bg-gray-50 py-16 px-4"
      aria-labelledby="appointment-form-title"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h3
            id="appointment-form-title"
            className="text-3xl font-bold text-purple-800 mb-6"
          >
            Book an Appointment
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
                value={contact.name}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={contact.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="w-full">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={contact.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Your Message"
                value={contact.message}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              aria-label="Make an appointment"
              disabled={isSubmitting}
              className="bg-purple-700 text-white cursor-pointer font-semibold px-6 py-3 rounded hover:bg-purple-800 transition disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Make an Appointment"}
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-3xl font-bold text-purple-800 mb-6">
            Have any Questions?
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className="border border-purple-200 rounded overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isActive}
                    aria-controls={`faq-${index}`}
                    className="w-full flex justify-between items-center px-4 py-3 bg-purple-100 text-purple-900 font-medium focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className="text-sm">
                      {isActive ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  {isActive && (
                    <div
                      id={`faq-${index}`}
                      className="px-4 py-3 text-gray-700 bg-white border-t border-purple-200"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContact;
