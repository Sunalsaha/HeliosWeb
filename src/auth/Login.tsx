import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import ToastMessage from "../components/toast/ToastMessage";
import { useToast } from "../hooks/useToast";

import companyLogo from "../assets/company-logo.png"; // assume this is your orange sun + H logo

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  const navigate = useNavigate();
  const { open, setOpen, toast, showToast } = useToast();

  useEffect(() => {
    setisVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);

      showToast({
        type: "success",
        title: "Login Successful",
        description: "Welcome back to HELIOS Medical Systems!",
      });

      navigate("/");
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGoogleLogin = () => {
    showToast({
      type: "info",
      title: "Redirecting",
      description: "Redirecting to Google authentication...",
    });
  };

  const handleAppleLogin = () => {
    showToast({
      type: "info",
      title: "Redirecting",
      description: "Redirecting to Apple authentication...",
    });
  };

  return (
    <>
      <div className="h-screen bg-linear-to-b from-[#ffddb38f] via-[#fff1dc] to-[#fff9f5] flex flex-col lg:flex-row overflow-hidden">
        {/* Back to Home - always visible */}
        <Link
          to="/"
          className="absolute left-5 top-5 sm:left-8 sm:top-8 text-gray-600 hover:text-orange-600 text-sm sm:text-base font-medium z-20 transition-colors"
        >
          Back to Home
        </Link>

        {/* LEFT SIDE - Branding (hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br items-center justify-center px-8 xl:px-16 overflow-hidden">
          <div className="max-w-xl text-center space-y-8">
            <img
              src={companyLogo}
              alt="HELIOS Medical Systems"
              className="mx-auto h-44 w-44 object-contain drop-shadow-md"
              draggable={false}
            />
            <h1 className="text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
              Sign in to your HELIOS Medical Systems account to access advanced
              healthcare solutions and manage your medical data securely.
            </p>
          </div>
        </div>

        {/* HALF SMOOTH DIVIDER - Only visible on lg+ screens */}
        <div className="hidden lg:block absolute right-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-96 bg-linear-to-b from-transparent via-white/60 to-transparent shadow-lg z-10" />

        {/* RIGHT SIDE - Form */}
        <div
          className={`flex-1 flex items-center justify-center px-5 sm:px-8 py-10 lg:py-0 lg:min-h-screen transition-all duration-1000 ease-out overflow-hidden ${isVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
          }`}
        >
          <div className="w-full max-w-md space-y-8 overflow-hidden">
            {/* Mobile-only header */}
            <div className="text-center lg:hidden space-y-5">
              <img
                src={companyLogo}
                alt="HELIOS Medical Systems"
                className="mx-auto h-28 w-28 object-contain"
                draggable={false}
              />
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Welcome Back
                </h2>
                <p className="mt-2 text-gray-600">
                  Sign in to your HELIOS Medical Systems account
                </p>
              </div>
            </div>

            {/* Desktop-only header */}
            <div className="hidden lg:block text-center">
              <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
              <p className="mt-2 text-gray-600">
                Enter your credentials to continue
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-7 sm:p-9 overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Social Buttons */}
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 py-3.5 rounded-lg font-medium transition-all shadow-sm hover:shadow"
                  >
                    {/* Google icon (you already have SVG - keeping it) */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      {/* your Google paths here - unchanged */}
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Continue with Google
                  </button>

                  <button
                    type="button"
                    onClick={handleAppleLogin}
                    className="w-full flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white py-3.5 rounded-lg font-medium transition-all shadow-sm hover:shadow"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    Continue with Apple
                  </button>
                </div>

                {/* Divider */}
                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      Or continue with email
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3.5 px-6 rounded-lg text-white font-semibold text-lg transition-all ${
                    isLoading
                      ? "bg-orange-400 cursor-not-allowed"
                      : "bg-orange-500 hover:bg-orange-600 shadow-md hover:shadow-lg"
                  }`}
                  onClick={()=>navigate('/dashboard')}
                >
                  {isLoading ? "Signing in..." : "Login"}
                </button>
              </form>
            </div>

            {/* Terms footer */}
          </div>
        </div>
      </div>

      <ToastMessage
        open={open}
        onOpenChange={setOpen}
        title={toast.title}
        description={toast.description}
        type={toast.type}
      />
    </>
  );
};

export default Login;