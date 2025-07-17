import React from 'react'

function KneeComp() {
  return (
   <>
   
      {/*overlay div content */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16 md:py-32"
        style={{
          backgroundImage:
            "url('https://www.dramitsharma.info/drassets/img/banner-img.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unsure About Knee Pain?
            </h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Constant knee pain affecting your mobility? Take our simple test
              to check your{" "}
              <span className="text-yellow-300 font-semibold">
                knee condition
              </span>{" "}
              and see if surgery might be the right option.
            </p>
            <a
              href="/service-detail/knee-replacement"
              className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md shadow hover:bg-yellow-300 transition"
            >
              Check Your Knee Health
            </a>
          </div>
        </div>
      </section>

      {/*overlay end dive hai */}
   </>
  )
}

export default KneeComp