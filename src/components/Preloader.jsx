import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide after 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-[9999] transition-opacity duration-700 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img
        src="/logo.png"
        alt="Lake City Cabs Logo"
        className={`h-28 rounded-xl transition-all duration-700 ${
          loading ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      />
    </div>
  );
};

export default Preloader;
