"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.17-1.36A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.08-1.11l-.29-.17l-3.06.8l.82-2.99l-.19-.31A8 8 0 1 1 12 20Zm4.45-5.1c-.24-.12-1.43-.71-1.65-.79s-.38-.12-.54.12s-.62.79-.76.95s-.28.18-.52.06s-1-.37-1.9-1.18a7 7 0 0 1-1.3-1.6c-.14-.24 0-.38.11-.5s.24-.28.36-.42s.16-.24.24-.4s0-.3 0-.42s-.54-1.3-.75-1.78c-.2-.48-.4-.41-.54-.42h-.46a.89.89 0 0 0-.64.3a2.69 2.69 0 0 0-.84 2c0 1.18.84 2.33.96 2.49s1.66 2.54 4 3.46a13.66 13.66 0 0 0 1.35.4a3.24 3.24 0 0 0 1.48.09a2.42 2.42 0 0 0 1.58-1.11a2 2 0 0 0 .14-1.11c-.05-.09-.22-.15-.46-.27Z" />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

interface WhatsAppChatProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppChat({ phoneNumber, message = "Hola, quisiera más información" }: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\s/g, "")}?text=${encodeURIComponent(message)}`;

  const handleOpenChat = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-all hover:scale-110 hover:bg-emerald-600 hover:shadow-emerald-500/50 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        aria-label="Abrir chat de WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8" />
        {/* Indicador de notificación */}
        <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
          1
        </span>
      </button>

      {/* Modal/Overlay */}
      {isOpen && (
        <>
          {/* Overlay oscuro */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Modal */}
          <div className="fixed bottom-24 right-6 z-50 w-80 animate-slide-up sm:w-96">
            <Card className="border-emerald-200 bg-white p-6 shadow-2xl">
              {/* Header del modal */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <WhatsAppIcon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">¿Necesitas ayuda?</h3>
                    <p className="text-sm text-slate-600">Chatea con nosotros</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                  aria-label="Cerrar"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Contenido del modal */}
              <div className="space-y-4">
                <p className="text-sm text-slate-600">
                  Estamos aquí para ayudarte. Haz clic en el botón de abajo para iniciar una conversación por WhatsApp.
                </p>

                {/* Botón principal de WhatsApp */}
                <button
                  onClick={handleOpenChat}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:bg-emerald-600 hover:shadow-xl active:scale-95"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                  Iniciar conversación
                </button>

                {/* Información adicional */}
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs font-medium text-slate-700">Horario de atención:</p>
                  <p className="text-xs text-slate-600">Lunes a Domingo: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </Card>
          </div>
        </>
      )}
    </>
  );
}

