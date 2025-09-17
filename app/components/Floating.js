import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* 24 Hour Service Badge */}
      <div className="flex items-center bg-[#5E3B1F] text-white px-3 py-2 rounded-lg shadow-lg">
        <span className="animate-pulse mr-2 h-2 w-2 bg-white rounded-full"></span>
        <p className="text-xs font-medium">24 Hour Services Available</p>
      </div>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9831679025?text=Hi,%20I%20would%20like%20to%20inquire%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+917439839760"
        className="flex items-center justify-center w-14 h-14 bg-[#27A4A1] hover:bg-[#218e8b] text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Call Now"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
}