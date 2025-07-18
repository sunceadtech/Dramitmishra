import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const hoverLink =
    "relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-purple-400 after:transition-all after:duration-300 after:ease-in-out";

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 relative text-sm leading-relaxed">
      {/* Floating WhatsApp CTA */}
      <a
        href="https://api.whatsapp.com/send?phone=+918826629486&text=Hello,I%20want%20to%20book%20an%20Appointment"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600"
        aria-label="Chat on WhatsApp with Dr. Amit Sharma"
      >
        <FaWhatsapp size={24} />
      </a>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <img
              src="https://www.dramitsharma.info/drassets/img/footer.png"
              alt="Dr. Amit Sharma Logo - Orthopedic Surgeon"
              className="mb-4 w-40"
              loading="lazy"
              width="160"
              height="auto"
            />
            <p className="text-gray-300">
              Dr. Amit Sharma is a senior orthopedic surgeon in Delhi NCR with
              23+ years of experience. Specialized in joint replacement, sports
              injuries & trauma surgeries.
            </p>
            <Link
              to="/about"
              className={`${hoverLink} text-purple-400 mt-2 inline-block`}
              aria-label="About Dr. Amit Sharma"
            >
              Read More
            </Link>

            <div className="flex gap-4 mt-4" aria-label="Social media links">
              <a
                href="https://www.facebook.com/profile?id=61560396193559"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={hoverLink}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-sharma-175232a4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={hoverLink}
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/amit9851"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={hoverLink}
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <nav aria-label="Useful links">
            <h2 className="text-lg font-semibold text-purple-400 mb-3">
              Useful Links
            </h2>
            <ul className="space-y-2 text-gray-300">
              {[
                "about",
                "blog",
                "contact",
                "service",
                "testimonial",
                "patientinfo",
              ].map((path) => (
                <li key={path}>
                  <Link
                    to={`/${path}`}
                    className={hoverLink}
                    aria-label={path.replace(/-/g, " ")}
                  >
                    {path.charAt(0).toUpperCase() +
                      path.slice(1).replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Specializations */}
          <nav aria-label="Specializations">
            <h2 className="text-lg font-semibold text-purple-400 mb-3">
              Specializations
            </h2>
            <ul className="space-y-2 text-gray-300">
              {[
                ["knee-replacement", "Knee Replacement"],
                ["hip-replacement", "Hip Replacement"],
                ["arthroscopy", "Arthroscopy"],
                ["acl-and-pcl-reconstruction", "ACL/PCL Reconstruction"],
                ["sports-injury", "Sports Injury"],
                ["arthritis", "Arthritis Care"],
                ["osteoporosis", "Osteoporosis"],
                [
                  "minimal-invasive-complex-trauma-surgery",
                  "Minimally Invasive Trauma",
                ],
              ].map(([slug, label]) => (
                <li key={slug}>
                  <Link
                    to={`/service-detail/${slug}`}
                    className={hoverLink}
                    aria-label={label}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Clinic Hours */}
          <div aria-label="Clinic hours and contact">
            <h2 className="text-lg font-semibold text-purple-400 mb-3">
              Clinic Hours
            </h2>

            <div className="mb-4">
              <p className="font-semibold text-white">
                Yashoda Super Speciality Hospital
              </p>
              <ul className="text-gray-300">
                <li>Mon–Sat: 9 AM – 2 PM</li>
                <li>Mon–Sat: 5 PM – 7 PM</li>
              </ul>
              <p className="text-purple-300 flex items-center gap-2 mt-1">
                <FaPhone /> <a href="tel:+918750056560">+91-8750056560</a>
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                City Clinic, Krishna Nagar
              </p>
              <ul className="text-gray-300">
                <li>Mon–Sat: 7 PM – 9 PM</li>
              </ul>
              <p className="text-purple-300 flex items-center gap-2 mt-1">
                <FaPhone /> <a href="tel:+918826629486">+91-8826629486</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Dr. Amit Sharma. All rights
            reserved.
          </p>
          <a
            href="https://medipage.in"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverLink} text-purple-300`}
            aria-label="Website developed by Sunce Adtech"
          >
            Website by Sunce Adtech
          </a>
        </div>
      </div>
    </footer>
  );
}
