import { Target, Heart, Users, Award, type LucideIcon } from "lucide-react";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const AboutusDrivesUsSection = () => {
  const values: Value[] = [
    { 
      icon: Target, 
      title: "Innovation First", 
      description: "We continuously push the boundaries of what's possible in medical technology, investing heavily in R&D to bring breakthrough solutions to healthcare.",
      color: "from-orange-400 to-orange-600"
    },
    { 
      icon: Heart, 
      title: "Patient-Centered", 
      description: "Every decision we make is guided by how it will ultimately improve patient outcomes and enhance the quality of healthcare delivery.",
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: Users, 
      title: "Collaboration", 
      description: "We work closely with healthcare professionals, researchers, and institutions to develop solutions that meet real-world clinical needs.",
      color: "from-amber-400 to-orange-500"
    },
    { 
      icon: Award, 
      title: "Excellence", 
      description: "We maintain the highest standards of quality, safety, and reliability in all our products and services.",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-orange-900 via-orange-600 to-amber-700 bg-clip-text text-transparent">
            What Drives Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Our core values shape every decision we make and every solution we create.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6 sm:mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div key={index} className="group h-full">
                <div className="bg-gradient-to-br from-white to-orange-50/50 p-8 h-full transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl relative overflow-hidden border border-orange-100/50 rounded-2xl shadow-lg hover:shadow-orange-200/50 flex flex-col">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color}/5 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-100/20 to-amber-100/10 rounded-full blur-xl group-hover:scale-150 transition-all duration-700"></div>

                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    {/* Icon and Title - Fixed alignment */}
                    <div className="flex flex-row items-center  text-center gap-4">
                      <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 mb-6`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold group-hover:text-orange-600 transition-colors duration-300 text-gray-800 mb-4">
                        {value.title}
                      </h3>
                      <div className={`w-20 h-1 bg-gradient-to-r ${value.color} rounded-full mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="flex-1 flex items-center">
                      <p className="text-gray-600 leading-relaxed text-lg text-center px-2">
                        {value.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className=" pt-6 mt-2">
                      <div className="flex items-center justify-center space-x-2 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex-1 h-1 bg-orange-100 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${value.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000`}></div>
                        </div>
                        <span className="text-sm text-gray-500 font-medium opacity-0 group-hover:opacity-100">
                          Excellence Driven
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutusDrivesUsSection;