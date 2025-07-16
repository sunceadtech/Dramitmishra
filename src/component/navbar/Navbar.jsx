import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import TopComp from "./TopComp";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Our Expertise",
    children: [
      { name: "Knee Replacement", path: "/service-detail/knee-replacement" },
      { name: "Hip Replacement", path: "/service-detail/hip-replacement" },
      { name: "Arthroscopy", path: "/service-detail/arthroscopy" },
      {
        name: "ACL & PCL Reconstruction",
        path: "/service-detail/acl-and-pcl-reconstruction",
      },
      { name: "Sports Injury", path: "/service-detail/sports-injury" },
      { name: "Arthritis", path: "/service-detail/arthritis" },
      { name: "Osteoporosis", path: "/service-detail/osteoporosis" },
      {
        name: "Minimal Invasive Complex Trauma Surgery",
        path: "/service-detail/minimal-invasive-complex-trauma-surgery",
      },
    ],
  },
  {
    name: "Patient Resources",
    children: [
      { name: "Testimonial", path: "/testimonial" },
      { name: "Patient Info", path: "/patientinfo" },
    ],
  },
  { name: "Blogs", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TopComp />
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-3 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center h-full">
            <img
              src="./images/logo.png"
              alt="logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) =>
              item.children ? (
                <div key={index} className="relative group">
                  <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-purple-600 focus:outline-none">
                    {item.name} <ChevronDown size={16} />
                  </button>
                  <div className="absolute left-0 top-full mt-2 bg-white text-gray-800 rounded shadow-lg p-2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:visible invisible transition-all duration-200 ease-out z-50 min-w-max max-w-xs whitespace-normal">
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.path}
                        className="block px-4 py-2 hover:bg-purple-100 rounded text-sm"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className="font-medium text-gray-700 hover:text-purple-600"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu: Right to Left Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <nav className="px-4 pb-4">
            <div
              className={`flex flex-col gap-4 mx-2 transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {navItems.map((item, index) =>
                item.children ? (
                  <details key={index} className="group">
                    <summary className="cursor-pointer text-gray-700 font-medium flex items-center justify-between">
                      {item.name}
                      <ChevronDown
                        size={16}
                        className="group-open:rotate-180 transition"
                      />
                    </summary>
                    <div className="mt-2 pl-3 flex flex-col gap-2">
                      {item.children.map((child, i) => (
                        <Link
                          key={i}
                          to={child.path}
                          className="text-sm text-purple-700 hover:underline"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-gray-700 font-medium hover:text-purple-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
