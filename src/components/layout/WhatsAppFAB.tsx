import { MessageCircle } from "lucide-react";

const WhatsAppFAB = () => (
    <a
        href="https://wa.me/8801711221122"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-110 transition-all flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
    >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
    </a>
);

export default WhatsAppFAB;
