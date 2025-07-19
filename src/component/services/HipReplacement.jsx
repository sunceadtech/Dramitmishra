import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function HipReplacement() {
  return (
    <>
      <div className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
        <img
          src="/images/service.webp"
          alt="Hip Replacement Banner"
          className="absolute inset-0 w-full h-full object-cover"
          width="1920"
          height="500"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl px-4 md:px-32 text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
              HIP REPLACEMENT
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-1 sm:gap-2 text-sm text-white uppercase">
              <Link to="/" className="hover:underline font-bold text-white/90">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                to="/service"
                className="hover:underline font-bold text-white/90"
              >
                Services
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white/80 font-bold text-base">
                Hip Replacement
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 bg-white">
        <div className="max-w-7xl mx-auto lg:flex lg:gap-8 px-2 sm:px-4">
          <div className="lg:w-3/4 w-full">
            <div className="rounded overflow-hidden shadow-md mb-0">
              <img
                src="/images/hip.webp"
                alt="Hip Replacement Procedure"
                className="w-full object-cover"
                width="1200"
                height="675"
                loading="lazy"
              />
            </div>

            <div className="pt-2 space-y-6 text-gray-700 text-[15px]">
              <section className="py-10 bg-white">
                <div className="container mx-auto px-4 text-gray-700">
                  <h2 className="text-3xl font-bold mb-4">
                    Hip Replacement Surgery
                  </h2>
                  <p className="mb-6">
                    Hip replacement surgery (hip arthroplasty) is a procedure to
                    relieve hip pain and restore mobility in patients with
                    severe arthritis or joint damage. It involves replacing the
                    damaged joint surfaces with prosthetic components made of
                    metal, ceramic, or plastic.
                  </p>

                  <h3 className="text-2xl font-semibold mb-4">
                    Common Indications
                  </h3>
                  <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>✔️ Osteoarthritis – wear and tear of the hip cartilage</li>
                    <li>✔️ Rheumatoid Arthritis – chronic inflammation of the hip joint</li>
                    <li>✔️ Post-Traumatic Arthritis – joint damage from previous injury</li>
                    <li>✔️ Avascular Necrosis – loss of blood supply to the femoral head</li>
                    <li>✔️ Severe Hip Fractures or deformities</li>
                  </ul>

                  <h3 className="text-2xl font-semibold mb-4">Surgical Process</h3>
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">Pre-Surgery</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>✔️ Evaluation with X-rays, MRI, and blood tests</li>
                      <li>✔️ Surgical planning and prosthetic selection</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">During Surgery</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>✔️ Performed under general or spinal anesthesia</li>
                      <li>✔️ Damaged femoral head removed and replaced with metal stem</li>
                      <li>✔️ Acetabulum cleaned and fitted with metal cup and plastic liner</li>
                      <li>✔️ New femoral head placed to form smooth ball-and-socket joint</li>
                      <li>✔️ Incision closed and dressing applied</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">Recovery</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>✔️ Hospital stay for monitoring and rehab</li>
                      <li>✔️ Early physical therapy to regain mobility</li>
                      <li>✔️ Pain controlled with medications</li>
                      <li>✔️ Avoid strenuous activities during healing</li>
                      <li>✔️ Follow-up visits for long-term care</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>✔️ Relief from chronic hip pain</li>
                    <li>✔️ Improved joint function and range of motion</li>
                    <li>✔️ Enhanced ability to perform daily tasks</li>
                    <li>✔️ Long-term improvement in quality of life</li>
                  </ul>
                </div>
              </section>

              <hr className="my-6" />
              <div className="bg-blue-50 p-6 rounded text-center">
                <h3 className="text-xl font-bold mb-2">
                  Need an Advice? Please Contact Us
                </h3>
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Book Appointment with Dr. Amit Sharma
                </Link>
              </div>
            </div>
          </div>

          <aside className="lg:w-1/4 w-full mt-10 lg:mt-0 space-y-6 mb-6">
            <div className="bg-purple-700 text-white p-4 min-h-[400px] md:min-h-[550px] rounded shadow-sm">
              <h4 className="text-lg font-semibold text-slate-100 mb-4 md:text-3xl text-center">
                Our Services
              </h4>
              <ul className="text-sm md:text-md font-bold divide-y divide-purple-500 text-center">
                <li className="py-3">
                  <Link to="/service" className="hover:underline inline-block w-full">
                    View All Orthopedic Services
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/knee-replacement" className="hover:underline inline-block w-full">
                    Knee Replacement Surgery
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/hip-replacement" className="hover:underline inline-block w-full">
                    Hip Joint Replacement
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/arthroscopy" className="hover:underline inline-block w-full">
                    Joint Arthroscopy Procedures
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/acl-and-pcl-reconstruction" className="hover:underline inline-block w-full">
                    ACL / PCL Ligament Reconstruction
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/sports-injury" className="hover:underline inline-block w-full">
                    Sports Injury Management
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/arthritis" className="hover:underline inline-block w-full">
                    Arthritis Care
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/osteoporosis" className="hover:underline inline-block w-full">
                    Osteoporosis Treatment
                  </Link>
                </li>
                <li className="py-3">
                  <Link to="/service-detail/minimal-invasive-complex-trauma-surgery" className="hover:underline inline-block w-full">
                    Minimally Invasive Trauma Surgery
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white text-gray-800 min-h-[350px] p-4 rounded shadow-sm border">
              <h6 className="text-lg font-semibold mb-3">OPD TIMINGS</h6>
              <ul className="text-sm space-y-2">
                <li className="flex justify-between">
                  <span>MON to SAT</span>
                  <span>9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>MON to SAT</span>
                  <span>5:00 PM - 7:00 PM</span>
                </li>
                <li className="text-center text-xs mt-2">
                  <p className="font-medium">Yashoda Super Speciality Hospital</p>
                  Kaushambi, Ghaziabad <br />
                  Call @ 8750056560
                </li>
                <li className="flex justify-between mt-4">
                  <span>MON to SAT</span>
                  <span>7:00 PM - 9:00 PM</span>
                </li>
                <li className="text-center text-xs mt-2">
                  <p className="font-medium">City Clinic, Krishna Nagar</p>
                  (Opp. Swarn Cinema, near Surya Hospital), Delhi <br />
                  Call @ 8826629486
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default HipReplacement;
