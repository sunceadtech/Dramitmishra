import React, { useState } from "react";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
              Specializing in advanced orthopedic care, joint replacements, and
              sports injuries. Trusted by thousands for compassionate healing.
            </p>
            <nav
              aria-label="breadcrumb"
              className="flex items-center gap-2 text-sm text-white"
            >
              <Link
                to="/"
                className="hover:text-purple-600"
                aria-label="Go to homepage"
              >
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

      <main className="bg-white py-12 px-4 md:px-10 max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-700">Get in Touch</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Experiencing bone, joint, or sports-related issues? Book a
            consultation with Dr. Amit Sharma.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <section className="md:col-span-2" aria-labelledby="contact-form">
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-label="Contact form"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full h-14 px-4 text-black text-lg border border-gray-300 rounded-sm"
                aria-label="Your Name"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-14 px-4 text-black text-lg border border-gray-300 rounded-sm"
                aria-label="Your Email"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                pattern="[6789][0-9]{9}"
                maxLength="10"
                minLength="10"
                title="Please enter a valid 10-digit phone number"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full h-14 px-4 text-black text-lg border border-gray-300 rounded-sm"
                aria-label="Your Phone Number"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 text-black text-lg border border-gray-300 rounded-sm resize-none"
                aria-label="Your Message"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 cursor-pointer text-white py-3 rounded hover:bg-purple-700 transition"
                aria-label="Submit form"
              >
                {isSubmitting ? "Submitting..." : "Submit Now"}
              </button>
            </form>
          </section>

          <aside
            className="bg-purple-500 text-white p-6 rounded-md"
            aria-label="Contact Information"
          >
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="text-black mt-1 w-6 h-6" aria-hidden="true" />
              <address>
                Yashoda Super Speciality Hospital,
                <br />
                Kaushambi, Ghaziabad
              </address>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Phone className="text-black w-6 h-6" aria-hidden="true" />
              <a
                href="tel:+918750056560"
                className="underline"
                aria-label="Call +91-8750056560"
              >
                +91-8750056560
              </a>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="text-black mt-1 w-6 h-6" aria-hidden="true" />
              <address>
                City Clinic, Krishna Nagar (Opp. Swarn Cinema, near Surya
                Hospital), Delhi
              </address>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Phone className="text-black w-6 h-6" aria-hidden="true" />
              <a
                href="tel:+918826629486"
                className="underline"
                aria-label="Call +91-8826629486"
              >
                +91-8826629486
              </a>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Mail className="text-black w-6 h-6" aria-hidden="true" />
              <a
                href="mailto:amit9851@yahoo.com"
                className="underline"
                aria-label="Email amit9851@yahoo.com"
              >
                amit9851@yahoo.com
              </a>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Globe className="text-black w-6 h-6" aria-hidden="true" />
              <a
                href="https://www.dramitsharma.info"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                aria-label="Visit www.dramitsharma.info"
              >
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

      <section
        className="relative w-full h-[400px] md:h-[500px] rounded-md overflow-hidden"
        aria-label="Google Map"
      >
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
