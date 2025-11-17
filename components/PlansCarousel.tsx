"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { buttonClasses } from "@/components/ui/button";

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" />
      <polyline points="12,5 19,12 12,19" strokeWidth="2" />
    </svg>
  );
}

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <line x1="19" y1="12" x2="5" y2="12" strokeWidth="2" />
      <polyline points="12,19 5,12 12,5" strokeWidth="2" />
    </svg>
  );
}

export interface Plan {
  titulo: string;
  subtitulo: string;
  precio: string;
  velocidad: string;
  nuevo?: boolean;
  destacado?: boolean;
  caracteristicas: Array<{
    icono: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    texto: string;
  }>;
}

interface PlansCarouselProps {
  plans: Plan[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  cardsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export function PlansCarousel({ 
  plans, 
  autoPlay = true, 
  autoPlayInterval = 5000,
  cardsPerView = { mobile: 1, tablet: 2, desktop: 3 }
}: PlansCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(cardsPerView.desktop);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(cardsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(cardsPerView.tablet);
      } else {
        setCardsToShow(cardsPerView.desktop);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, [cardsPerView]);

  useEffect(() => {
    if (!autoPlay || isPaused || plans.length <= cardsToShow) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, plans.length - cardsToShow);
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isPaused, plans.length, cardsToShow]);

  const maxIndex = Math.max(0, plans.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), autoPlayInterval * 2);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), autoPlayInterval * 2);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), autoPlayInterval * 2);
  };

  if (plans.length === 0) {
    return null;
  }

  return (
    <div 
      className="relative px-4 md:px-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Container con overflow hidden */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` 
          }}
        >
          {plans.map((plan, index) => {
            const esDestacado = plan.destacado;
            return (
              <div
                key={`${plan.titulo}-${index}`}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                <Card
                  className={`relative overflow-hidden border-2 bg-white p-0 h-full ${esDestacado ? "border-cyan-600 shadow-xl" : "border-slate-200"}`}
                >
                  {/* Banner superior */}
                  {(plan.nuevo || esDestacado) && (
                    <div className={`absolute top-0 left-0 right-0 z-10 ${esDestacado ? "bg-cyan-600" : "bg-cyan-500"} py-2 text-center`}>
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        {esDestacado ? "MÁS POPULAR" : "NUEVO PLAN"}
                      </span>
                    </div>
                  )}

                  <div className={`p-8 ${plan.nuevo || esDestacado ? "pt-12" : ""}`}>
                    {/* Título */}
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold">
                        <span className="text-cyan-600">PLAN</span>{" "}
                        <span className="text-slate-900">{plan.subtitulo}</span>
                      </h3>
                    </div>

                    {/* Precio */}
                    <div className="mb-6 text-center">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-lg font-semibold text-slate-700">S/</span>
                        <span className="text-6xl font-bold text-slate-900">{plan.precio.split(".")[0]}</span>
                        <span className="text-2xl font-semibold text-slate-700">.{plan.precio.split(".")[1]}</span>
                      </div>
                    </div>

                    {/* Velocidad destacada */}
                    <div className="mb-8 text-center">
                      <div className="text-4xl font-bold text-cyan-600">{plan.velocidad}</div>
                    </div>

                    {/* Características */}
                    <ul className="mb-8 space-y-4">
                      {plan.caracteristicas.map((caracteristica, idx) => {
                        const IconComponent = caracteristica.icono;
                        return (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <span className="text-slate-700 font-medium">{caracteristica.texto}</span>
                          </li>
                        );
                      })}
                    </ul>

                    {/* Botón */}
                    <a
                      href={`https://wa.me/51900111333?text=${encodeURIComponent(`Hola, quiero el plan de S/ ${plan.precio} por ${plan.velocidad}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClasses({
                        variant: esDestacado ? "default" : "outline",
                        size: "lg",
                        className: "w-full text-center",
                      })}
                    >
                      HAZ CLIC AQUÍ
                    </a>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      {plans.length > cardsToShow && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white shadow-lg p-2 md:p-3 transition-all hover:bg-slate-100 -translate-x-2 md:translate-x-0"
            aria-label="Plan anterior"
          >
            <ArrowLeftIcon className="h-5 w-5 md:h-6 md:w-6 text-slate-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white shadow-lg p-2 md:p-3 transition-all hover:bg-slate-100 translate-x-2 md:translate-x-0"
            aria-label="Siguiente plan"
          >
            <ArrowRightIcon className="h-5 w-5 md:h-6 md:w-6 text-slate-700" />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {plans.length > cardsToShow && (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-cyan-600" : "w-2 bg-slate-300"
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

