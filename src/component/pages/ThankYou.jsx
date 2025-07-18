import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/');
  };

  return (
    <>
      <div className="flex justify-center space-y-6 m-6 md:mt-28 mt-16">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in">

          <div className="text-center">
            <div className="mx-auto flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              <strong>Dr: Amit Sharma</strong> has received your message. Our team will contact you as soon as possible.Mean while you can contact below as well.
            </p>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800 mb-2">
                <strong>Email:</strong> <span className="text-gray-700">amit9851@yahoo.com</span>
              </p>
              <p className="text-sm text-blue-800">
                <strong>Phone:</strong> <span className="text-gray-700">+91-8750056560</span>
              </p>
            </div>


            <button
              onClick={handleClose}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              Visit Our Website
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYou;


// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// const slides = [
//   {
//     image: "/images/heroimage.webp",
//     title: "Expert Care for Every Step You Take",
//     description:
//       "We are dedicated to restoring your mobility and enhancing your quality of life with personalised treatment plans and advanced surgical techniques.",
//   },
//   {
//     image: "/images/herobanner.webp",
//     title: "Mastering Surgical Excellence for Optimal Outcomes",
//     description:
//       "With unparalleled expertise and cutting-edge techniques, we provide top-tier orthopaedic surgical care.",
//   },
// ];

// export default function Home() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000); // 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="relative w-full h-[90vh] overflow-hidden"
//       aria-label="Home Hero Section"
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0"
//         >
//           {/* Background Image for Desktop */}
//           <div
//             className="hidden lg:block w-full h-full bg-cover bg-center"
//             style={{ backgroundImage: `url(${slides[current].image})` }}
//             role="img"
//             aria-label={slides[current].title}
//           >
//             <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 flex items-center justify-end p-6 xl:p-12 bg-gradient-to-l from-white/80 to-white/0">
//               <div className="max-w-xl bg-white/90 p-6 rounded-lg shadow-lg">
//                 <h1 className="text-3xl xl:text-4xl font-bold text-purple-900 mb-4">
//                   {slides[current].title}
//                 </h1>
//                 <p className="text-gray-700 mb-6 text-base xl:text-lg">
//                   {slides[current].description}
//                 </p>
//                 <h2 className="text-xl font-semibold text-purple-800 mb-4">
//                   Book an Appointment
//                 </h2>
//                 <div className="flex flex-col xl:flex-row gap-4 mb-6">
//                   <Link
//                     to="/contact"
//                     className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition text-sm text-center"
//                   >
//                     Yashoda Super Speciality Hospital, Kaushambi
//                   </Link>
//                   <Link
//                     to="/contact"
//                     className="bg-white border border-purple-700 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-100 transition text-sm text-center"
//                   >
//                     City Clinic, Krishna Nagar
//                   </Link>
//                 </div>
//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   <Stat label="Joint Replacements" value="3K+" />
//                   <Stat label="Operated Patients" value="10K+" />
//                   <Stat label="Years of Experience" value="23+" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Mobile View */}
//           <div className="block lg:hidden bg-white min-h-screen">
//             <img
//               src={slides[current].image}
//               alt={slides[current].title}
//               loading="lazy"
//               className="w-full h-[250px] sm:h-[300px] object-cover"
//             />
//             <div className="p-4 space-y-4 pb-16">
//               <h1 className="text-xl font-bold text-purple-900">
//                 {slides[current].title}
//               </h1>
//               <p className="text-gray-700 text-sm">{slides[current].description}</p>
//               <h2 className="text-lg font-semibold text-purple-800">Book an Appointment</h2>
//               <div className="flex flex-col sm:flex-row gap-4 mt-2">
//                 <Link
//                   to="/contact"
//                   className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition text-sm text-center"
//                 >
//                   Yashoda Hospital, Kaushambi
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="bg-white border border-purple-700 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-100 transition text-sm text-center"
//                 >
//                   City Clinic, Krishna Nagar
//                 </Link>
//               </div>
//               <div className="grid grid-cols-3 gap-4 text-center pt-2">
//                 <Stat label="Joint Replacements" value="3K+" small />
//                 <Stat label="Operated Patients" value="10K+" small />
//                 <Stat label="Years of Experience" value="23+" small />
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </section>
//   );
// }

// function Stat({ label, value, small }) {
//   return (
//     <div>
//       <h3 className={`font-bold text-purple-900 ${small ? "text-xl" : "text-2xl"}`}>{value}</h3>
//       <p className={`text-gray-600 ${small ? "text-xs" : "text-sm"}`}>{label}</p>
//     </div>
//   );
// }
