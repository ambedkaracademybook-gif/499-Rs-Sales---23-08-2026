import React from 'react';

export const StickyWhatsAppButton: React.FC = () => {
  const whatsappNumber = "916369626229";
  const message = "Hi Ambedkar Academy, I’m interested in the ₹499 TNPSC programme. Please share the details.";
  const encodedUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-20 sm:bottom-22 right-4 sm:right-6 z-40">
      <a
        id="floating-whatsapp-btn"
        href={encodedUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ambedkar Academy on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Subtle Ping Animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" />

        {/* SVG WhatsApp Official Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.476-.15-.677.15-.201.301-.777.979-.953 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.176.201-.301.301-.502.101-.201.05-.376-.025-.527-.075-.15-.677-1.632-.928-2.234-.244-.587-.493-.507-.677-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.053 1.029-1.053 2.509s1.079 2.909 1.23 3.11c.15.201 2.124 3.243 5.145 4.549.718.311 1.279.497 1.716.636.721.23 1.377.197 1.896.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.276-.201-.577-.351z" />
          <path d="M12.004 0C5.378 0 .003 5.375.003 12c0 2.115.552 4.181 1.6 6L.069 24l6.176-1.619c1.742.95 3.709 1.452 5.759 1.452 6.626 0 12-5.375 12-12s-5.374-12-12-12zm0 21.818c-1.859 0-3.644-.523-5.184-1.499l-.372-.224-3.856 1.011 1.029-3.759-.246-.391C2.33 15.352 1.77 13.704 1.77 12c0-5.642 4.59-10.232 10.234-10.232 5.644 0 10.234 4.59 10.234 10.232 0 5.642-4.59 10.232-10.234 10.232z" />
        </svg>

        {/* Hover Tooltip (Desktop) */}
        <span className="hidden sm:group-hover:block absolute right-16 px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#F5B94C]/40 text-xs font-semibold text-white whitespace-nowrap shadow-lg">
          Chat with Academy
        </span>
      </a>
    </div>
  );
};
