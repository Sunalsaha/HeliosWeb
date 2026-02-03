import { useState, useEffect, useRef } from "react";

const CurrentStatistics = () => {
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { label: "Happy Clients", value: 2500, suffix: "+", icon: "👥", color: "from-orange-400 to-amber-500" },
    { label: "Installations", value: 15000, suffix: "+", icon: "⚙️", color: "from-amber-400 to-yellow-500" },
    { label: "Countries", value: 45, suffix: "", icon: "🌍", color: "from-orange-500 to-amber-600" },
    { label: "Awards", value: 25, suffix: "+", icon: "🏆", color: "from-yellow-400 to-orange-500" }
  ];

  // Custom counter animation hook
  const useCounter = (endValue: number, delay: number) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isStatsVisible) return;
      
      let start = 0;
      const duration = 2000;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (easeOutQuart)
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(start + (endValue - start) * easeOut));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      const timeout = setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay);
      
      return () => {
        clearTimeout(timeout);
      };
    }, [isStatsVisible, endValue, delay]);
    
    return count;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.3, rootMargin: '-50px' }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={statsRef} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-900 via-orange-600 to-amber-700 bg-clip-text text-transparent">
            Current Statistics
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our latest performance metrics showcase the trust and impact we've built across the healthcare industry.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-8"></div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const currentCount = useCounter(stat.value, index * 300);
            
            return (
              <div 
                key={index}
                className="group p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-orange-100 bg-white relative overflow-hidden rounded-2xl"
              >
                {/* Gradient overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-all duration-500`}
                />
                
                <div className="relative z-10">
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div 
                      className={`relative w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                  </div>
                  
                  {/* Animated Number */}
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
                    {currentCount.toLocaleString()}{stat.suffix}
                  </div>
                  
                  {/* Label */}
                  <p className="text-gray-600 text-lg font-medium mb-6">{stat.label}</p>
                  
                  {/* Progress bar */}
                  <div className="h-1 bg-orange-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-2000 ease-out`}
                      style={{
                        width: isStatsVisible ? '100%' : '0%',
                        transitionDelay: `${index * 0.2 + 0.5}s`
                      }}
                    />
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

export default CurrentStatistics;