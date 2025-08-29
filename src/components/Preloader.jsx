import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-[9999] h-screen w-full transition-opacity duration-700 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img
        src="/logo.png"
        alt="Nainital Cabs Logo"
        className={`transition-all duration-700
          ${loading ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          h-20 sm:h-24 md:h-28
          w-auto
          rounded-xl
          mx-auto
        `}
      />
    </div>
  );
};

export default Preloader;
