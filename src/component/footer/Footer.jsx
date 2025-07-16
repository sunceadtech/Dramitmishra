import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  const hoverLink =
    "relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-purple-400 after:transition-all after:duration-300 after:ease-in-out";

  return (
    <>
      <footer className="bg-gray-900 text-white pt-12 pb-6 relative">
        <a
          href="https://api.whatsapp.com/send?phone=+918826629486&text=Hello,I%20want%20to%20book%20an%20Appointment"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600"
          aria-label="WhatsApp Chat"
        >
          <FaWhatsapp size={24} />
        </a>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <img
                src="https://www.dramitsharma.info/drassets/img/footer.png"
                alt="Dr. Amit Sharma"
                className="mb-4 w-40"
              />
              <p className="text-sm text-gray-300">
                Dr Amit Sharma is an Orthopedic surgeon with over 23 years of
                experience, specializing in Joint replacements, Arthroscopy,
                Trauma surgery, and Sports injuries.
              </p>
              <a
                href="/about"
                className={`${hoverLink} text-purple-400 text-sm mt-2 inline-block`}
              >
                Read More
              </a>
              <div className="flex gap-4 mt-4 text-white">
                <a
                  href="https://www.facebook.com/profile?id=61560396193559"
                  target="_blank"
                  rel="noreferrer"
                  className={hoverLink}
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/in/amit-sharma-175232a4/"
                  target="_blank"
                  rel="noreferrer"
                  className={hoverLink}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/amit9851?utm_source=qr&igsh=dG5tZXlxdXJoendk"
                  target="_blank"
                  rel="noreferrer"
                  className={hoverLink}
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-3">
                Useful Links
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  <a href="/about" className={hoverLink}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className={hoverLink}>
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="/contact" className={hoverLink}>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/service" className={hoverLink}>
                    Our Expertise
                  </a>
                </li>
                <li>
                  <a href="/testimonial" className={hoverLink}>
                    Patient Testimonial
                  </a>
                </li>
                <li>
                  <a href="/patientinfo" className={hoverLink}>
                    Patient Information
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-3">
                Our Expertise
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  <a
                    href="/service-detail/knee-replacement"
                    className={hoverLink}
                  >
                    Knee Replacement
                  </a>
                </li>
                <li>
                  <a
                    href="/service-detail/hip-replacement"
                    className={hoverLink}
                  >
                    Hip Replacement
                  </a>
                </li>
                <li>
                  <a href="/service-detail/arthroscopy" className={hoverLink}>
                    Arthroscopy
                  </a>
                </li>
                <li>
                  <a
                    href="/service-detail/acl-and-pcl-reconstruction"
                    className={hoverLink}
                  >
                    ACL & PCL Reconstruction
                  </a>
                </li>
                <li>
                  <a href="/service-detail/sports-injury" className={hoverLink}>
                    Sports Injury
                  </a>
                </li>
                <li>
                  <a href="/service-detail/arthritis" className={hoverLink}>
                    Arthritis
                  </a>
                </li>
                <li>
                  <a href="/service-detail/osteoporosis" className={hoverLink}>
                    Osteoporosis
                  </a>
                </li>
                <li>
                  <a
                    href="/service-detail/minimal-invasive-complex-trauma-surgery"
                    className={hoverLink}
                  >
                    Minimally Invasive Trauma Surgery
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-3">
                Working Hours
              </h4>
              <p className="text-sm text-white font-semibold">
                Yashoda Super Speciality Hospital, Kaushambi, Ghaziabad
              </p>
              <ul className="text-sm text-gray-300 mb-4">
                <li>Mon–Sat: 9:00 AM to 2:00 PM</li>
                <li>Mon–Sat: 5:00 PM to 7:00 PM</li>
              </ul>
              <p className="text-sm text-purple-300 flex items-center gap-2">
                <FaPhone /> +91-8750056560
              </p>

              <div className="h-6"></div>

              <p className="text-sm text-white font-semibold">
                City Clinic, Krishna Nagar, Delhi
              </p>
              <ul className="text-sm text-gray-300 mb-4">
                <li>Mon–Sat: 7:00 PM to 9:00 PM</li>
              </ul>
              <p className="text-sm text-purple-300 flex items-center gap-2">
                <FaPhone /> +91-8826629486
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Dr Amit Sharma. All rights
              reserved.
            </p>
            <a
              href="https://medipage.in"
              target="_blank"
              rel="noreferrer"
              className={`${hoverLink} text-purple-300`}
            >
              Developed by: Medipage Communications
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
