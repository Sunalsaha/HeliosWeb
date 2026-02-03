// // Product.tsx
// import React, { useState } from 'react';
// import NavberDashboard from '../components/NavberDashboard';
// import ProductsHeader from '../components/ProductsHeader';
// import { Search, Filter, X } from 'lucide-react';

// function Product() {
//   // State for search & filters (you'll connect these to your real data later)
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedStatus, setSelectedStatus] = useState('All');

//   // Example filter options — change these to match your actual product data
//   const categories = ['All', 'Imaging', 'Diagnostics', 'Monitoring', 'Surgical', 'Lab Equipment'];
//   const statuses = ['All', 'Active', 'Inactive', 'New', 'Discontinued'];

//   const handleClearSearch = () => {
//     setSearchTerm('');
//   };

//   return (
//     <>
//       <NavberDashboard />
//       <ProductsHeader />

//       {/* ─── Search + Filter Bar ─── */}
//       <div className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
//         <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-4">
//           <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
//             {/* Search Input */}
//             <div className="relative flex-1 min-w-0">
//               <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
//                 <Search className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="block w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 shadow-sm"
//                 placeholder="Search products, serial number, model..."
//               />
//               {searchTerm && (
//                 <button
//                   onClick={handleClearSearch}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               )}
//             </div>

//             {/* Filters */}
//             <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
//               {/* Category Filter */}
//               <div className="relative min-w-[180px]">
//                 <select
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                   className="block w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 appearance-none shadow-sm transition-all duration-200"
//                 >
//                   {categories.map((cat) => (
//                     <option key={cat} value={cat}>
//                       {cat === 'All' ? 'All Categories' : cat}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
//                   <Filter className="h-4 w-4" />
//                 </div>
//               </div>

//               {/* Status Filter */}
//               <div className="relative min-w-[160px]">
//                 <select
//                   value={selectedStatus}
//                   onChange={(e) => setSelectedStatus(e.target.value)}
//                   className="block w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 appearance-none shadow-sm transition-all duration-200"
//                 >
//                   {statuses.map((status) => (
//                     <option key={status} value={status}>
//                       {status === 'All' ? 'All Status' : status}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Optional: Reset filters button */}
//               {(selectedCategory !== 'All' || selectedStatus !== 'All' || searchTerm) && (
//                 <button
//                   onClick={() => {
//                     setSearchTerm('');
//                     setSelectedCategory('All');
//                     setSelectedStatus('All');
//                   }}
//                   className="px-4 py-3 text-sm font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-xl transition-colors whitespace-nowrap"
//                 >
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ─── Your products content goes here ─── */}
//       <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 min-h-[60vh] flex items-center justify-center text-gray-500">
//           <div className="text-center">
//             <p className="text-lg font-medium mb-2">Products will appear here</p>
//             <p className="text-sm">
//               Filtered by: <strong>{searchTerm || '—'}</strong> | Category:{' '}
//               <strong>{selectedCategory}</strong> | Status:{' '}
//               <strong>{selectedStatus}</strong>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Product;

// Product.tsx
import React, { useState, useRef, useEffect } from "react";
import NavberDashboard from "../components/NavberDashboard";
import ProductsHeader from "../components/ProductsHeader";
import { Search, Filter, X, ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactToggle from "../components/ContactToggle";

interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  status: string;
  price: string;
  image: string;
  description: string;
}

/* -----------------------------------
   Promo Card Component
----------------------------------- */
interface PromoCardProps {
  title: string;
  subtitle: string;
  offer: string;
  image: string;
  category?: string;
}

const PromoCard: React.FC<PromoCardProps> = ({
  title,
  subtitle,

  image,
}) => {
  return (
    <div
      className="
        relative h-[220px] rounded-2xl overflow-hidden
        shadow-md hover:shadow-xl transition-all duration-300
        group cursor-pointer
      "
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full p-6 flex flex-col justify-center text-white">
        <p className="text-sm text-white/80 mb-1">{subtitle}</p>
        <h3 className="text-xl font-semibold leading-tight mb-2">{title}</h3>
        {/* <p className="text-lg font-bold mb-4">{offer}</p> */}

        <div className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300">
          View Products
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

function Product() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const categories = [
    "All",
    "ACCESSORIS FOR MACHINERY",
    "Chemical",
    "DIPONED",
    "Disposable Item",
    "Electrical Item",
    "General Item & Instrument",
    "Gym Items",
    "HELMIER",
    "Instrument & Implants",
    "Kits",
    "Kits & Reagent",
    "Lab Equipments",
    "Lens",
    "Linen Items",
    "MEDTRONIC",
    "MEDTRONIC CATHETER",
    "MEDTRONIC NEURO",
    "Machinery",
    "Medical Equipments",
    "Medicine",
    "ORTHOPADIC",
    "Pathological Item",
    "Physiotherapy",
    "REDDY'S",
    "Repairing",
    "Servicing",
    "Spare Part",
    "Sports Item",
    "Stationery/Miscellaneous/Printing Item",
    "Surgical",
    "Surgical Item",
    "Suture Item",
    "Urology",
  ];

  // Close category dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* -----------------------------------
     Promo Cards Data (Backend Ready) with categories
  ----------------------------------- */
  const promoCards: PromoCardProps[] = [


    // New cards for your categories
    {
      subtitle: "Machinery Accessories",
      title: "ACCESSORIS FOR MACHINERY",
      offer: "Up to 25% Off",
      image:
        "https://img.freepik.com/premium-photo/3d-rendering-medical-ventilator-machine-hospital_493806-557.jpg",
      category: "ACCESSORIS FOR MACHINERY",
    },
    {
      subtitle: "Lab Chemicals",
      title: "Chemical",
      offer: "20% Off",
      image:
        "https://images.unsplash.com/photo-1694230155228-cdde50083573?fm=jpg&q=60&w=3000&auto=format&fit=crop",
      category: "Chemical",
    },
    {
      subtitle: "Diagnostic Supplies",
      title: "DIPONED",
      offer: "Min. 15% Off",
      image:
        "https://www.henryschein.com/us-en/images/medical/defibrillators_600.jpg",
      category: "DIPONED",
    },
    {
      subtitle: "Single-Use Items",
      title: "Disposable Item",
      offer: "Special Pricing",
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1170&auto=format&fit=crop",
      category: "Disposable Item",
    },
    {
      subtitle: "Powered Devices",
      title: "Electrical Item",
      offer: "Up to 30% Off",
      image:
        "https://images.unsplash.com/photo-1516549655669-dfdb4a1e11e6?q=80&w=1170&auto=format&fit=crop",
      category: "Electrical Item",
    },
    {
      subtitle: "Essential Tools",
      title: "General Item & Instrument",
      offer: "Best Deals",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=1170&auto=format&fit=crop",
      category: "General Item & Instrument",
    },
    {
      subtitle: "Fitness Recovery",
      title: "Gym Items",
      offer: "15-25% Off",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1170&auto=format&fit=crop",
      category: "Gym Items",
    },
    {
      subtitle: "Protective Gear",
      title: "HELMIER",
      offer: "Limited Offer",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1170&auto=format&fit=crop",
      category: "HELMIER",
    },
    {
      subtitle: "Precision Tools",
      title: "Instrument & Implants",
      offer: "Up to 35% Off",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1170&auto=format&fit=crop",
      category: "Instrument & Implants",
    },
    {
      subtitle: "Treatment Packages",
      title: "Kits",
      offer: "20% Off",
      image:
        "https://images.unsplash.com/photo-1559757149-e9b2c7e8fc4d?q=80&w=1170&auto=format&fit=crop",
      category: "Kits",
    },
    {
      subtitle: "Testing Solutions",
      title: "Kits & Reagent",
      offer: "Special Discount",
      image:
        "https://images.unsplash.com/photo-1585435557343-3b092031d5ad?q=80&w=1170&auto=format&fit=crop",
      category: "Kits & Reagent",
    },
    {
      subtitle: "Research Tools",
      title: "Lab Equipments",
      offer: "Up to 30% Off",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1170&auto=format&fit=crop",
      category: "Lab Equipments",
    },
    // "All" can be a special card or handled separately in UI
    {
      subtitle: "Explore Everything",
      title: "All",
      offer: "Browse All Categories",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1153&auto=format&fit=crop",
      category: "All",
    },
  ];

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setIsCategoryOpen(false);
  };

  // FIXED: Proper filter logic - search and category work independently
  const filteredPromoCards = promoCards.filter((card) => {
    // Search filter - checks title and subtitle
    const matchesSearch =
      searchTerm === "" ||
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.subtitle.toLowerCase().includes(searchTerm.toLowerCase());

    // Category filter - checks category property
    const matchesCategory =
      selectedCategory === "All" ||
      (card.category && card.category === selectedCategory);

    // Both filters must match
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <NavberDashboard />
      <ProductsHeader />
      <ContactToggle />
      {/* Search + Filter Bar */}
      <div className="border-b border-gray-200  bg-white/90 backdrop-blur-sm sticky top-0 z-30 py-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                placeholder="Search by product name or description..."
              />
              {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Filters Container */}
            <div className="flex flex-wrap items-center">
              {/* Category Filter */}
              <div
                ref={categoryRef}
                className="relative  lg:right-25" // ✅ fixed
              >
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="
        flex items-center justify-between
        px-4 py-3
        bg-white border border-gray-200 rounded-xl
        hover:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500
        text-gray-700 hover:text-gray-900
        transition-all duration-200
        min-w-[170px]
      "
                >
                  <span className="truncate">
                    {selectedCategory === "All"
                      ? "All Categories"
                      : selectedCategory}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 ml-2 transition-transform duration-200 ${
                      isCategoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {isCategoryOpen && (
                  <div
                    className="
          absolute left-0 top-full mt-2 z-50
          bg-white rounded-xl shadow-lg border border-gray-100
          min-w-[200px] max-h-60
          overflow-y-auto no-scrollbar
        "
                  >
                    <div className="p-3 border-b sticky top-0 bg-white">
                      <p className="text-sm font-semibold text-gray-700">
                        Select Category
                      </p>
                    </div>

                    <ul>
                      {categories.map((cat) => (
                        <li key={cat}>
                          <button
                            onClick={() => {
                              setSelectedCategory(cat);
                              setIsCategoryOpen(false);
                            }}
                            className={`
                  w-full text-left px-4 py-3
                  hover:bg-amber-50 transition-colors
                  ${
                    selectedCategory === cat
                      ? "text-amber-700 bg-amber-50 font-medium"
                      : "text-gray-700"
                  }
                `}
                          >
                            {cat === "All" ? "All Categories" : cat}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Reset Filters Button */}
              {(selectedCategory !== "All" || searchTerm.trim() !== "") && (
                <button
                  onClick={handleResetFilters}
                  className="
        px-4 py-3 text-sm font-medium
        text-amber-700 bg-amber-50
        hover:bg-amber-100
        border border-amber-200
        rounded-xl
        transition-colors whitespace-nowrap
      "
                >
                  Reset All Filters
                </button>
              )}
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory !== "All" || searchTerm.trim() !== "") && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-500">Active filters:</span>
              {searchTerm.trim() !== "" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200">
                  Search: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-1 hover:text-blue-900 transition-colors"
                    aria-label="Remove search filter"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedCategory !== "All" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-full border border-amber-200">
                  Category: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="ml-1 hover:text-amber-900 transition-colors"
                    aria-label="Remove category filter"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Count */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Medical Equipment
          </h2>
          <p className="text-gray-600 mt-1">
            Showing {filteredPromoCards.length} of {promoCards.length} products
            {searchTerm.trim() !== "" && ` matching "${searchTerm}"`}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Promo Cards Grid */}
        {filteredPromoCards.length > 0 ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            onClick={() => navigate("/disclouse")}
          >
            {filteredPromoCards.map((card, index) => (
              <PromoCard key={index} {...card} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-100 rounded-full">
              <Search className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-gray-500 mb-6">
              {searchTerm.trim() !== "" && selectedCategory !== "All"
                ? `No products found for "${searchTerm}" in ${selectedCategory}. Try a different search or category.`
                : searchTerm.trim() !== ""
                  ? `No products found for "${searchTerm}". Try a different search term.`
                  : `No products found in ${selectedCategory}. Try selecting a different category.`}
            </p>
            <div className="flex gap-3 justify-center">
              {searchTerm.trim() !== "" && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-300 transition-colors"
                >
                  Clear Search
                </button>
              )}
              {selectedCategory !== "All" && (
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-300 transition-colors"
                >
                  Clear Category
                </button>
              )}
              <button
                onClick={handleResetFilters}
                className="px-6 py-2 bg-amber-600 text-white font-medium rounded-xl hover:bg-amber-700 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
