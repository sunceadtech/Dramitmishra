import React, { useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";

// Lazy load icons
const FaPlus = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaPlus }))
);
const FaMinus = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaMinus }))
);

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

function HomeContact() {
  return (
    <section className="bg-gray-50 py-16 px-4" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <ContactForm />
        <FAQAccordion />
      </div>
    </section>
  );
}

function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      access_key: "d178f430-9dc9-4bf5-871b-b104717253a8",
      subject: "dramitsharmaortho.com - New Appointment",
      from_name: "dramitsharmaortho.com",
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
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3
        id="contact-title"
        className="text-3xl font-bold text-purple-800 mb-6"
      >
        Book an Appointment
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <label htmlFor="name" className="sr-only">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={contact.name}
          onChange={handleChange}
          required
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-purple-500"
        />

        {/* Phone and Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={contact.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={contact.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Message */}
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={contact.message}
          onChange={handleChange}
          required
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-purple-500"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          aria-label="Submit appointment request"
          className="bg-purple-700 text-white font-semibold px-6 py-3 rounded hover:bg-purple-800 transition disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Make an Appointment"}
        </button>
      </form>
    </div>
  );
}

function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <h3 className="text-3xl font-bold text-purple-800 mb-6">
        Have any Questions?
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className="border border-purple-200 rounded overflow-hidden"
            >
              <button
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center px-4 py-3 bg-purple-100 text-purple-900 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <span>{faq.question}</span>
                <Suspense fallback={<span>...</span>}>
                  {isOpen ? <FaMinus /> : <FaPlus />}
                </Suspense>
              </button>
              <div
                id={`faq-${index}`}
                aria-hidden={!isOpen}
                className={`px-4 py-3 text-gray-700 bg-white border-t border-purple-200 transition-all duration-300 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeContact;
