import React, { useState } from "react";
import { MapPin, Phone, Mail, Globe, Clock, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const payload = {
      access_key: "d178f430-9dc9-4bf5-871b-b104717253a8",
      subject: "dramitsharmaortho.com - New Appointment",
      from_name: "dramitsharmaortho.com",
      ...formData,
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
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Form submission failed. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Contact Dr. Amit Sharma | Book Orthopedic Consultation</title>
        <meta
          name="description"
          content="Book an appointment with Dr. Amit Sharma, orthopedic expert in Ghaziabad & Delhi. Call now or fill out the online form."
        />
        <meta
          name="keywords"
          content="orthopedic consultation, Dr. Amit Sharma, joint pain, Ghaziabad doctor, Delhi clinic"
        />
        <link rel="canonical" href="https://dramitsharmaortho.com/contact" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] overflow-hidden"
        aria-label="Contact banner"
      >
        <img
          src="/images/contact.webp"
          alt="Orthopedic contact background"
          width="1920"
          height="500"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-6 md:px-20">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-white text-lg md:text-xl mb-6">
              Specializing in orthopedic care, joint replacements, and sports injuries.
            </p>
            <nav
              aria-label="breadcrumb"
              className="flex items-center gap-2 text-sm text-white"
            >
              <Link to="/" className="hover:text-purple-600" aria-label="Go to homepage">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
              <span className="font-semibold" aria-current="page">
                Contact
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <main className="bg-white py-12 px-4 md:px-10 max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-700">Get in Touch</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Experiencing bone, joint, or sports-related issues? Book a consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <section className="md:col-span-2" aria-labelledby="contact-form">
            <form onSubmit={handleSubmit} role="form" className="space-y-4" aria-label="Contact form">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full h-14 px-4 text-black text-lg border border-gray-300 rounded-sm"
              />

              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-14 px-4 text-black text-lg border border-gray-300 rounded-sm"
              />

              <label htmlFor="phone" className="sr-only">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                pattern="[6789][0-9]{9}"
                maxLength="10"
                minLength="10"
                required
                autoComplete="tel"
                title="Please enter a valid 10-digit phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full h-14 px-4 text-black text-lg border border-gray-300 rounded-sm"
              />

              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 text-black text-lg border border-gray-300 rounded-sm resize-none"
              ></textarea>

              {error && (
                <div role="alert" className="text-red-600 font-medium">
                  {error}
                </div>
              )}
              <div role="status" aria-live="polite" className="sr-only">
                {isSubmitting ? "Submitting your message..." : ""}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
                aria-label="Submit form"
              >
                {isSubmitting ? "Submitting..." : "Submit Now"}
              </button>
            </form>
          </section>

          {/* Contact Info */}
          <aside className="bg-purple-500 text-white p-6 rounded-md" aria-label="Contact Information">
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="text-black mt-1 w-6 h-6" aria-hidden="true" />
              <address>
                Yashoda Super Speciality Hospital,<br />
                Kaushambi, Ghaziabad
              </address>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Phone className="text-black w-6 h-6" aria-hidden="true" />
              <a href="tel:+918750056560" className="underline">+91-8750056560</a>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="text-black mt-1 w-6 h-6" aria-hidden="true" />
              <address>
                City Clinic, Krishna Nagar (Opp. Swarn Cinema), Delhi
              </address>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Phone className="text-black w-6 h-6" aria-hidden="true" />
              <a href="tel:+918826629486" className="underline">+91-8826629486</a>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Mail className="text-black w-6 h-6" aria-hidden="true" />
              <a href="mailto:amit9851@yahoo.com" className="underline">amit9851@yahoo.com</a>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Globe className="text-black w-6 h-6" aria-hidden="true" />
              <a href="https://www.dramitsharma.info" target="_blank" rel="noopener noreferrer" className="underline">
                www.dramitsharma.info
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="text-black w-6 h-6" aria-hidden="true" />
              <span>Mon–Sat: 9 AM to 9 PM</span>
            </div>
          </aside>
        </div>
      </main>

      {/* Google Map */}
      <section className="relative w-full h-[400px] md:h-[500px] rounded-md overflow-hidden" aria-label="Google Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1756.250915521395!2d77.282176!3d28.646582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce39fd108ca75%3A0xc1c7d43a024ec41c!2sCity%20Clinic%2C%20Krishna%20Nagar!5e0!3m2!1sen!2sin!4v1721209584002!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="City Clinic, Krishna Nagar Map"
        ></iframe>
      </section>
    </>
  );
}

export default Contact;

