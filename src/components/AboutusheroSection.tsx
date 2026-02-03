// AboutusheroSection.tsx
import React from "react";
import {
  ArrowRight,
  Heart,
  Award,
  Target,
  Users,
  ChevronDown,
} from "lucide-react";

function AboutusheroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50/50 via-white to-amber-50/40 overflow-hidden">
      {/* Soft, light background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gentle organic shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-orange-100/40 via-orange-50/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-amber-100/30 via-orange-50/20 to-transparent rounded-full blur-3xl" />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fb923c 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20 lg:py-24 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Centered intro section */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-orange-200 rounded-full shadow-sm mb-6">
              <Heart className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="text-orange-600 font-semibold text-sm sm:text-base">
                Our Story
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Building the Future of
              <span className="block mt-2 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Medical Innovation
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              For over a decade, HELIOS has been at the forefront of healthcare
              technology, transforming lives through intelligent medical
              solutions and unwavering commitment to excellence.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Discover More
          </span>
          <ChevronDown className="w-6 h-6 text-orange-400" />
        </div>
      </div>
    </section>
  );
}

export default AboutusheroSection;
