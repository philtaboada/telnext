"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

export interface HeroSlide {
  id: string;
  imagen: string;
  titulo: string;
  precio?: string;
  periodo?: string;
  descripcion: string;
  ctaTexto?: string;
  ctaLink?: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function HeroCarousel({ slides, autoPlay = true, autoPlayInterval = 5000 }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!autoPlay || isPaused || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isPaused, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), autoPlayInterval * 2);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), autoPlayInterval * 2);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), autoPlayInterval * 2);
  };

  if (slides.length === 0) {
    return null;
  }

  const currentSlideData = slides[currentSlide];

  // Función para obtener el estilo de background-image
  const getBackgroundImage = (imagen: string) => {
    if (imagen.startsWith("http") || imagen.startsWith("/")) {
      return `url("${imagen}")`;
    }
    // Si es un emoji o texto, usar un gradiente de fondo
    return "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 58, 138, 0.9))";
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden py-24 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images - Cada slide como fondo */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: getBackgroundImage(slide.imagen),
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay oscuro para mejorar legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-cyan-900/40 to-transparent"></div>
          
          {/* Si es emoji, mostrarlo centrado */}
          {!slide.imagen.startsWith("http") && !slide.imagen.startsWith("/") && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl opacity-20">{slide.imagen}</div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows - Posicionadas en las esquinas superiores */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 lg:left-8"
            aria-label="Previous slide"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 lg:right-8"
            aria-label="Next slide"
          >
            <ArrowRightIcon className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
                {currentSlideData.titulo.split(". ").map((line, index, array) => (
                  <span key={index}>
                    {line}
                    {index < array.length - 1 && (
                      <>
                        .<br />
                      </>
                    )}
                  </span>
                ))}
              </h1>
              {currentSlideData.precio && (
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold">{currentSlideData.precio}</span>
                  {currentSlideData.periodo && (
                    <span className="text-xl text-slate-300">{currentSlideData.periodo}</span>
                  )}
                </div>
              )}
              <p className="text-lg text-slate-300 lg:text-xl">{currentSlideData.descripcion}</p>
            </div>
            {currentSlideData.ctaLink && (
              <Link href={currentSlideData.ctaLink} className={buttonClasses({ size: "lg" })}>
                {currentSlideData.ctaTexto || "Learn More"}{" "}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            )}
          </div>

          {/* Espacio para mantener el layout de 2 columnas */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Slide Indicators */}
        {slides.length > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

