import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import companyLogo from "../assets/company-logo.png";

function NavberDashboard() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/dashboard" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
  ];

  const isActivePage = (path:any) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={companyLogo}
              alt="Company logo"
              className="w-12 h-12"
              style={{ objectFit: "contain" }}
            />
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              HELIOS MEDICAL SYSTEMS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all duration-300 relative group ${
                  isActivePage(link.path)
                    ? "text-orange-500"
                    : "text-foreground hover:text-orange-500"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full ${
                    isActivePage(link.path) ? "w-full" : ""
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 text-gray-600" />
              <input
                placeholder="Search medical systems..."
                className="pl-10 w-64 h-10 rounded-lg bg-white/80 border border-[#d3d3d3] focus:outline-[#fa8202e6]  focus:border-primary "
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-border">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 font-medium transition-colors duration-300 relative group ${
                    isActivePage(link.path)
                      ? "text-orange-500"
                      : "text-foreground hover:text-orange-500"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full ${
                      isActivePage(link.path) ? "w-full" : ""
                    }`}
                  />
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    placeholder="Search medical systems..."
                    className="pl-10 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavberDashboard;