import { motion } from "motion/react";
import { COMPANY_NAP } from "../data";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={COMPANY_NAP.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg text-white hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-brand-navy"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      aria-label="Contactar a SEMCO Panamá por WhatsApp"
      id="floating-whatsapp-btn"
    >
      {/* Pulse effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping -z-10"></span>
      
      <svg
        className="w-8 h-8 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.015 14.062.99 11.457.99c-5.445 0-9.87 4.372-9.874 9.802-.001 1.774.478 3.509 1.387 5.068l-.924 3.376 3.471-.912zm11.303-7.62c-.3-.149-1.774-.875-2.046-.975-.272-.1-.471-.149-.669.149-.198.299-.768.975-.941 1.17-.173.199-.347.224-.648.075-.3-.15-1.266-.467-2.41-1.485-.89-.794-1.49-1.775-1.665-2.074-.173-.3-.018-.462.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.498.1-.199.05-.374-.025-.523-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.774-.724 2.022-1.424.248-.699.248-1.295.173-1.422-.074-.127-.272-.198-.57-.347z" />
      </svg>
    </motion.a>
  );
}
