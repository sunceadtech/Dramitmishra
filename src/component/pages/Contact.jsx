import React from "react";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
function Contact() {
  return (
    <>
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src="https://www.shutterstock.com/image-photo/close-shot-african-american-male-600nw-1967582611.jpg"
          alt="Doctor Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-6 md:px-20">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-white text-lg md:text-xl mb-6">
              Specializing in advanced orthopedic care, joint replacements, and
              sports injuries. Trusted by thousands for compassionate healing.
            </p>
            <div className="flex items-center gap-2 text-sm text-white">
              <Link to="/" className="hover:text-purple-600">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="font-semibold">About The Doctor</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 px-4 md:px-10 max-w-screen-xl mx-auto mb-2  md:mb-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-700">Get in Touch</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Experiencing bone, joint, or sports-related issues? Book a
            consultation with Dr. Amit Sharma.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <div className="md:col-span-2">
            <form
              action="https://www.dramitsharma.info/Contactenquiry"
              method="post"
              className="space-y-4"
            >
              <input
                type="hidden"
                name="csrf_test_name"
                value="48bd6aafde02afc5d246e7755760783c"
              />

              <input
                type="text"
                name="visitor_name"
                placeholder="Name"
                required
                className="w-full h-14 px-4 text-black text-lg border border-gray-300 rounded-sm"
              />

              <input
                type="email"
                name="visitor_email"
                placeholder="Email"
                required
                className="w-full h-14 px-4 text-black text-lg border border-gray-300 rounded-sm"
              />

              <input
                type="tel"
                name="visitor_phone"
                pattern="[6789][0-9]{9}"
                maxLength="10"
                minLength="10"
                title="Please add a 10 digit phone number"
                placeholder="Phone"
                required
                className="w-full h-14 px-4 text-black text-lg border border-gray-300 rounded-sm"
              />

              <textarea
                name="visitor_comment"
                rows="5"
                placeholder="Message"
                className="w-full px-4 py-2 text-black text-lg border border-gray-300 rounded-sm resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
              >
                Submit Now
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-purple-500 text-white p-6 rounded-md">
            {/* Location 1 */}
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="text-black mt-1 w-6 h-6" />
              <p>
                Yashoda Super Speciality Hospital,
                <br />
                Kaushambi, Ghaziabad
              </p>
            </div>

            {/* Phone 1 */}
            <div className="flex items-center gap-4 mb-4">
              <Phone className="text-black w-6 h-6" />
              <span>+91-8750056560</span>
            </div>

            {/* Location 2 */}
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="text-black mt-1 w-6 h-6" />
              <p>
                City Clinic, Krishna Nagar (Opp. Swarn Cinema, near Surya
                Hospital), Delhi
              </p>
            </div>

            {/* Phone 2 */}
            <div className="flex items-center gap-4 mb-4">
              <Phone className="text-black w-6 h-6" />
              <span>+91-8826629486</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 mb-4">
              <Mail className="text-black w-6 h-6" />
              <span>amit9851@yahoo.com</span>
            </div>

            {/* Website */}
            <div className="flex items-center gap-4 mb-4">
              <Globe className="text-black w-6 h-6" />
              <span>www.dramitsharma.info</span>
            </div>

            {/* General Timing */}
            <div className="flex items-center gap-4">
              <Clock className="text-black w-6 h-6" />
              <span>Mon–Sat: 9 AM to 9 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/*map with height  */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-md overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1756.250915521395!2d77.282176!3d28.646582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce39fd108ca75%3A0xc1c7d43a024ec41c!2sCity%20Clinic%2C%20Krishna%20Nagar!5e0!3m2!1sen!2sin!4v1721209584002!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="City Clinic, Krishna Nagar Map"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
