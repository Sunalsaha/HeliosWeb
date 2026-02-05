import { Calendar } from "lucide-react";




const milestones = [
    { year: "2010", title: "Company Founded", description: "HELIOS Medical Systems was established with a vision to revolutionize healthcare technology." },
    { year: "2013", title: "First Product Launch", description: "Launched our first medical imaging system, setting new standards in diagnostic accuracy." },
    { year: "2016", title: "Global Expansion", description: "Expanded operations to Europe and Asia, serving healthcare institutions worldwide." },
    { year: "2019", title: "AI Integration", description: "Introduced artificial intelligence capabilities across our entire product line." },
    { year: "2022", title: "Innovation Award", description: "Received the Global Healthcare Innovation Award for breakthrough medical technology." },
    { year: "2024", title: "Future Vision", description: "Leading the next generation of smart, connected medical systems." }
  ];

const AboutusJourneySection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-orange-100/30 via-amber-100/20 to-yellow-100/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-orange-900 via-orange-600 to-amber-700 bg-clip-text text-transparent pb-2">
            Our Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            From our founding to today, explore the key milestones that have shaped 
            HELIOS Medical Systems into the innovation leader we are today.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6 sm:mt-8"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line - Responsive positioning */}
            <div className="absolute left-6 sm:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-amber-500 shadow-lg" />
            
            <div className="space-y-10 sm:space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start group">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-md opacity-40"></div>
                    <div className="relative w-12 sm:w-24 h-12 sm:h-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-xl shadow-2xl transform transition-transform duration-500 group-hover:scale-110">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  
                  <div className="ml-6 sm:ml-12 flex-1">
                    {/* Custom Card matching the image design */}
                    <div className="rounded-2xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:translate-x-2 shadow-lg relative overflow-hidden">
                      {/* Card background with rounded corners and subtle shadow */}
                      <div className="bg-[#FEF7F2] border border-orange-200/50 rounded-2xl p-6 lg:p-8 backdrop-blur-sm hover:bg-orange-50/50 transition-all duration-500 relative">
                        {/* Subtle gradient overlay on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                        
                        {/* Vertical orange line connecting to year circle */}
                        <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-1 h-24 sm:h-32 bg-gradient-to-b from-orange-500 to-amber-500 shadow-md rounded-full opacity-90"></div>
                        
                        <div className="relative z-10">
                          {/* Year and Calendar row */}
                          <div className="flex items-center mb-4 sm:mb-6 gap-3">
                          
                              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                            
                            <span className="text-orange-600 font-bold text-lg sm:text-xl bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent tracking-wide">
                              {milestone.year}
                            </span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 leading-tight group-hover:text-orange-700 transition-all duration-300">
                            {milestone.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium tracking-wide">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusJourneySection;