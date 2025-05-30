"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const phoneNumber = "593999999999"; // ← Reemplaza con tu número
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20servicios`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
      aria-label="Chatear por WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}
