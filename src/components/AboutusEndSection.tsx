import { ArrowRight } from "lucide-react";

interface AboutusEndSectionProps {
  onContactClick?: () => void;
  onDemoClick?: () => void;
}

const AboutusEndSection = ({
  onContactClick,
  onDemoClick,
}: AboutusEndSectionProps) => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl sm:rounded-3xl blur-2xl opacity-10"></div>

          <div className="relative bg-white p-8 sm:p-12 lg:p-16 text-center border-2 border-orange-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-16 sm:w-20 h-16 sm:h-20 bg-orange-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 bg-amber-400/10 rounded-lg rotate-45 blur-lg"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-orange-900 via-orange-600 to-amber-700 bg-clip-text text-transparent pb-2">
                Ready to Transform Healthcare?
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Join thousands of healthcare professionals who trust HELIOS Medical Systems
                to deliver exceptional patient care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
                {/* Contact button */}
                <button
                  onClick={onContactClick}
                  className="w-full flex flex-row sm:w-auto bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-3 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 border-0"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="ml-2 sm:ml-3 w-5 sm:w-6 h-5 sm:h-6 relative top-1" />
                </button>

                {/* Demo button */}
                <button
                  onClick={onDemoClick}
                  className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-3 rounded-full border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white shadow-lg transform transition-all duration-300 hover:scale-105"
                >
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusEndSection;
