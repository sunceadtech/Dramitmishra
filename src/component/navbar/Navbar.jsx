import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import TopComp from "./TopComp";

// Navigation items structure for desktop & mobile
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Orthopedic Treatments",
    children: [
      {
        name: "Knee Replacement Surgeon",
        path: "/service-detail/knee-replacement",
      },
      {
        name: "Hip Replacement Surgeon",
        path: "/service-detail/hip-replacement",
      },
      { name: "Arthroscopy Procedure", path: "/service-detail/arthroscopy" },
      {
        name: "ACL & PCL Reconstruction",
        path: "/service-detail/acl-and-pcl-reconstruction",
      },
      {
        name: "Sports Injury Management",
        path: "/service-detail/sports-injury",
      },
      { name: "Arthritis Treatment", path: "/service-detail/arthritis" },
      { name: "Osteoporosis Management", path: "/service-detail/osteoporosis" },
      {
        name: "Minimally Invasive Trauma Surgery",
        path: "/service-detail/minimal-invasive-complex-trauma-surgery",
      },
    ],
  },
  {
    name: "Patient Resources",
    children: [
      { name: "Patient Testimonials", path: "/testimonial" },
      { name: "Patient Information", path: "/patientinfo" },
    ],
  },
  { name: "Health Blogs", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Tracks mobile menu open state
  const [isClient, setIsClient] = useState(false); // Useful if you're using SSR or hydration issues

  useEffect(() => {
    // Ensures the navbar mounts only after client-side render
    setIsClient(true);
  }, []);

  return (
    <>
      {/* Top contact bar or announcement bar */}
      <TopComp />

      {/* Main sticky navbar */}
      <header className="bg-white shadow sticky top-0 z-50" role="banner">
        <div className="max-w-screen-xl mx-auto px-4 py-3 h-16 md:h-20 flex items-center justify-between">
          {/* Logo with accessibility labels */}
          <Link
            to="/"
            className="flex items-center h-full"
            aria-label="Homepage - Dr. Amit Sharma Orthopedic Surgeon"
          >
            <img
              src="/images/logo.png"
              alt="Logo of Dr. Amit Sharma - Best Orthopedic Surgeon in Delhi"
              className="h-10 w-auto object-contain"
              width="120"
              height="40"
              decoding="async"
              fetchpriority="high"
            />
          </Link>

          {/* Desktop navigation menu */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Desktop main navigation"
          >
            {navItems.map((item, index) =>
              item.children ? (
                // Dropdown menu for nested items
                <div key={index} className="relative group">
                  <button
                    className="flex items-center gap-1 font-medium text-gray-700 hover:text-purple-600 focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {item.name} <ChevronDown size={16} />
                  </button>

                  {/* Dropdown links container (visible on hover) */}
                  <div className="absolute left-0 top-full mt-2 bg-white text-gray-800 rounded shadow-lg p-2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:visible invisible transition-all duration-200 ease-out z-50 min-w-max max-w-xs whitespace-normal">
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.path}
                        className="block px-4 py-2 hover:bg-purple-100 rounded text-sm"
                        aria-label={`Read more about ${child.name}`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                // Regular nav links
                <Link
                  key={index}
                  to={item.path}
                  className="font-medium text-gray-700 hover:text-purple-600"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Hamburger icon for mobile view */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <nav className="px-4 pb-4" aria-label="Mobile navigation">
            <div
              className={`flex flex-col gap-4 mx-2 transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {navItems.map((item, index) =>
                item.children ? (
                  // Expandable menu using <details> for better accessibility
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
                          onClick={() => setIsOpen(false)} // Close menu after click
                          aria-label={`View service: ${child.name}`}
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
                    onClick={() => setIsOpen(false)} // Close menu after click
                    aria-label={`Navigate to ${item.name}`}
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
