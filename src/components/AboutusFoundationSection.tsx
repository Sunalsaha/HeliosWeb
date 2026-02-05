import { Target, Eye, Heart } from "lucide-react";

const AboutusFoundationSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-900 via-orange-600 to-amber-700 bg-clip-text text-transparent">
            Our Foundation
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto" />
        </div>


       <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Mission */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_10px_25px_rgba(15,23,42,0.08)] border border-orange-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 hover:bg-white transition-all duration-500 hover:border-orange-200 flex flex-col max-w-xs ">
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 to-amber-400 rounded-t-2xl group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-500" />

            <div className="flex-1 px-6 pb-6 pt-6 flex flex-col items-center justify-center text-center relative z-10">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/90 to-amber-500/90 flex items-center justify-center border-4 border-white/50 group-hover:scale-105 transition-all duration-500 group-hover:rotate-12">
                  <Target className="w-7 h-7 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-all duration-500 text-slate-900">
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-800 transition-all duration-500 px-2">
                To revolutionize healthcare delivery through innovative medical
                technology that empowers healthcare professionals and improves
                patient outcomes globally.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_10px_25px_rgba(15,23,42,0.08)] border border-orange-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 hover:bg-white transition-all duration-500 hover:border-orange-200 flex flex-col max-w-xs">
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 to-amber-400 rounded-t-2xl group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-500" />

            <div className="flex-1 px-6 pb-6 pt-6 flex flex-col items-center justify-center text-center relative">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/90 to-amber-500/90 flex items-center justify-center border-4 border-white/50 group-hover:scale-105 transition-all duration-500 group-hover:rotate-12">
                  <Eye className="w-7 h-7 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-all duration-500 text-slate-900">
                Our Vision
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-800 transition-all duration-500 px-2">
                To be the global leader in intelligent medical systems, creating
                a future where advanced technology seamlessly enhances human
                healthcare capabilities.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_10px_25px_rgba(15,23,42,0.08)] border border-orange-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 hover:bg-white transition-all duration-500 hover:border-orange-200  flex flex-col max-w-xs ">
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 to-amber-400 rounded-t-2xl group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-500" />

            <div className="flex-1 px-6 pb-6 pt-6 flex flex-col items-center justify-center text-center relative z-10">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/90 to-amber-500/90 flex items-center justify-center border-4 border-white/50 group-hover:scale-105 transition-all duration-500 group-hover:rotate-12">
                  <Heart className="w-7 h-7 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-all duration-500 text-slate-900">
                Our Values
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-800 transition-all duration-500 px-2">
                Innovation, integrity, collaboration, and excellence guide
                everything we do, ensuring we deliver solutions that truly make
                a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusFoundationSection;
