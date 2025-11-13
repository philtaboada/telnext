"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { HeroCarousel, type HeroSlide } from "@/components/HeroCarousel";
import { PlansCarousel, type Plan } from "@/components/PlansCarousel";

// Iconos SVG
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" />
      <polyline points="12,5 19,12 12,19" strokeWidth="2" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Teléfono moderno más limpio */}
      <rect x="6" y="2" width="12" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
      {/* Pantalla */}
      <rect x="8" y="5" width="8" height="10" rx="1" fill="currentColor" opacity="0.1" />
      {/* Indicador de señal */}
      <path d="M8 2 L8 4" strokeWidth="2" />
      <path d="M16 2 L16 4" strokeWidth="2" />
    </svg>
  );
}

function LocationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" />
      <circle cx="12" cy="10" r="3" strokeWidth="2" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" />
      <polyline points="22,6 12,13 2,6" strokeWidth="2" />
    </svg>
  );
}

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" />
      <polyline points="7 10 12 15 17 10" strokeWidth="2" />
      <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" />
    </svg>
  );
}

function FiberIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      {/* Rectángulo/cubo principal rotado (cable/cubierta) */}
      <rect 
        x="8" 
        y="12" 
        width="7" 
        height="9" 
        rx="1"
        transform="rotate(-35 11.5 16.5)"
        opacity="1"
      />
      
      {/* Línea interna del rectángulo para dar efecto de borde */}
      <rect 
        x="8.5" 
        y="12.5" 
        width="6" 
        height="8" 
        rx="0.5"
        transform="rotate(-35 11.5 16.5)"
        opacity="0.3"
        fill="white"
      />
      
      {/* Fibra 1 - hacia arriba izquierda */}
      <line x1="7" y1="10" x2="2" y2="4" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
      <circle cx="2" cy="4" r="1.8" />
      
      {/* Fibra 2 - hacia arriba (centro) */}
      <line x1="8" y1="9" x2="7" y2="2" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
      <circle cx="7" cy="2" r="1.8" />
      
      {/* Fibra 3 - hacia arriba derecha */}
      <line x1="9.5" y1="8.5" x2="12" y2="3" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
      <circle cx="12" cy="3" r="1.8" />
      
      {/* Resplandor en los círculos */}
      <circle cx="2" cy="4" r="2.5" opacity="0.2" />
      <circle cx="7" cy="2" r="2.5" opacity="0.2" />
      <circle cx="12" cy="3" r="2.5" opacity="0.2" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <polyline points="12,6 12,12 16,14" strokeWidth="2" />
    </svg>
  );
}

function SignalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      {/* Antena/Torre */}
      <line x1="12" y1="2" x2="12" y2="8" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <circle cx="12" cy="8" r="2" fill="currentColor" opacity="0.3" />
      {/* Señales de cobertura más detalladas */}
      <path d="M2 20h.01" />
      <path d="M5 20v-2" />
      <path d="M8 20v-4" />
      <path d="M11 20v-6" />
      <path d="M14 20v-8" />
      <path d="M17 20v-10" />
      <path d="M20 20v-12" />
      <path d="M23 20v-14" />
      {/* Ondas de señal */}
      <circle cx="12" cy="12" r="3" fill="none" strokeDasharray="1 1" opacity="0.4" />
      <circle cx="12" cy="12" r="5" fill="none" strokeDasharray="1 1" opacity="0.3" />
    </svg>
  );
}

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      {/* Rayo principal más detallado */}
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      {/* Rayos secundarios para efecto de velocidad */}
      <path d="M8 6l2-2" strokeWidth="1.5" opacity="0.6" />
      <path d="M16 4l1-1" strokeWidth="1.5" opacity="0.6" />
      <path d="M19 7l1-1" strokeWidth="1.5" opacity="0.6" />
      <path d="M6 8l1-1" strokeWidth="1.5" opacity="0.5" />
      {/* Líneas de velocidad */}
      <path d="M5 12h2" strokeWidth="1.5" opacity="0.5" />
      <path d="M17 12h2" strokeWidth="1.5" opacity="0.5" />
      {/* Círculo de energía en el centro */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
      {/* Partículas de velocidad */}
      <circle cx="9" cy="9" r="0.5" fill="currentColor" opacity="0.6" />
      <circle cx="15" cy="7" r="0.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <polyline points="6,9 12,15 18,9" strokeWidth="2" />
    </svg>
  );
}

// Slides del Hero Carousel
const heroSlides: HeroSlide[] = [
  {
    id: "1",
    imagen: "/hs-1.png",
    titulo: "Disfruta en familia",
    descripcion: "Conecta a toda tu familia con nuestra señal ultra estable. Disfruta de contenido en vivo, deportes, noticias y entretenimiento sin interrupciones. Conexión Wi-Fi de alta velocidad para múltiples dispositivos simultáneos.",
    ctaTexto: "Ver Planes",
    ctaLink: "#plans",
  },
  {
    id: "2",
    imagen: "/hs-2.png",
    titulo: "Internet ultrarrápido ",
    descripcion: "Velocidades de internet de última generación para trabajar, estudiar y entretenerse. Navegación fluida, descargas instantáneas y streaming en alta definición sin límites.",
    ctaTexto: "Ver Planes",
    ctaLink: "#plans",
  },
  {
    id: "3",
    imagen: "/hs-3.png",
    titulo: "Streaming sin límites",
    descripcion: "Accede a miles de películas, series y canales en vivo. Transmite en cualquier dispositivo, en cualquier momento y lugar. La mejor experiencia de entretenimiento al alcance de tu mano.",
    ctaTexto: "Comenzar",
    ctaLink: "#plans",
  },
];

const caracteristicasHero = [
  {
    icono: SignalIcon,
    titulo: "Cobertura confiable",
    descripcion: "Cobertura confiable",
  },
  {
    icono: ZapIcon,
    titulo: "Mayor velocidad",
    descripcion: "Descarga y sube archivos a la misma velocidad.",
  },
  {
    icono: FiberIcon,
    titulo: "Mayor estabilidad",
    descripcion: "Conexión 100% fibra óptica hasta tu hogar (FTTH).",
  },
];

const beneficios = [
  { icono: "⚡", titulo: "Conexión Rápida", descripcion: "Velocidades ultrarrápidas con tecnología de última generación para una experiencia sin límites." },
  { icono: "🛟", titulo: "Soporte 24/7", descripcion: "Atención al cliente disponible las 24 horas del día, los 7 días de la semana." },
  { icono: "💰", titulo: "Mejores Planes", descripcion: "Planes flexibles y competitivos adaptados a tus necesidades y presupuesto." },
];

const planes = [
  {
    titulo: "Internet",
    subtitulo: "BÁSICO",
    precio: "50.00",
    velocidad: "200 Mbps",
    nuevo: false,
    caracteristicas: [
      { icono: DownloadIcon, texto: "Descarga Ilimitada" },
      { icono: FiberIcon, texto: "Por Fibra Óptica" },
      { icono: ClockIcon, texto: "24 horas del día" },
    ],
  },
  {
    titulo: "Internet",
    subtitulo: "ESTÁNDAR",
    precio: "70.00",
    velocidad: "400 Mbps",
    nuevo: false,
    caracteristicas: [
      { icono: DownloadIcon, texto: "Descarga Ilimitada" },
      { icono: FiberIcon, texto: "Por Fibra Óptica" },
      { icono: ClockIcon, texto: "24 horas del día" },
    ],
  },
  {
    titulo: "Internet",
    subtitulo: "AVANZADO",
    precio: "80.00",
    velocidad: "800 Mbps",
    nuevo: false,
    destacado: true,
    caracteristicas: [
      { icono: DownloadIcon, texto: "Descarga Ilimitada" },
      { icono: FiberIcon, texto: "Por Fibra Óptica" },
      { icono: ClockIcon, texto: "24 horas del día" },
    ],
  },
  {
    titulo: "Internet",
    subtitulo: "PREMIUM",
    precio: "100.00",
    velocidad: "1000 Mbps",
    nuevo: false,
    caracteristicas: [
      { icono: DownloadIcon, texto: "Descarga Ilimitada" },
      { icono: FiberIcon, texto: "Por Fibra Óptica" },
      { icono: ClockIcon, texto: "24 horas del día" },
    ],
  },
];

const estadisticas = [
  { numero: "15", sufijo: "+", titulo: "Años de experiencia" },
  { numero: "500", sufijo: "+", titulo: "Clientes en el mundo" },
  { numero: "100", sufijo: "+", titulo: "Kilómetros de fibra" },
];


export default function Home() {

  return (
    <div className="min-h-screen bg-[#FEFEFE] text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#FEFEFE] backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/med-1.png"
              alt="FIBERNEXT Logo"
              width={150}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#home" className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors">
              Inicio
            </Link>
            <Link href="#plans" className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors">
              Planes
            </Link>
            <Link href="#other-services" className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors">
              Otros Servicios
            </Link>
            <Link href="#contact" className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors">
              Contacto
            </Link>
          </nav>
          <Link href="#plans">
            <Button size="sm">Comenzar</Button>
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section - Carousel */}
        <HeroCarousel slides={heroSlides} autoPlay={true} autoPlayInterval={5000} />

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {caracteristicasHero.map((caracteristica, index) => {
                const IconComponent = caracteristica.icono;
                return (
                  <Card key={caracteristica.titulo} className="group relative border-slate-200 bg-white p-8 transition-all duration-300 hover:bg-slate-900 hover:border-slate-700 cursor-pointer">
                    {/* Número en esquina superior derecha - solo visible en hover */}
                    <div className="absolute top-4 right-4 text-6xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="mb-6 flex items-start gap-4">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center text-cyan-600 group-hover:text-white">
                        <IconComponent className="h-18 w-18" />
                      </div>
                    </div>
                    <CardTitle className="mb-3 text-xl transition-colors group-hover:text-white">{caracteristica.titulo}</CardTitle>
                    <CardDescription className="mb-6 text-slate-600 transition-colors group-hover:text-slate-300">{caracteristica.descripcion}</CardDescription>
                    <Link href="#plans" className="text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors group-hover:text-white group-hover:hover:text-cyan-300">
                      Saber más <ArrowRightIcon className="ml-1 inline h-4 w-4" />
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* More to Stream Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold lg:text-5xl">Más para Transmitir.</h2>
                <div className="space-y-4 text-lg text-slate-600">
                  <p>
                    Disfruta de acceso ilimitado a nuestro servicio de streaming. Relájate con temporadas completas de contenido exclusivo, una biblioteca de películas, programas actuales, noticias, comedia y deportes en vivo. Todo esto sin costo adicional, sin letra pequeña.
                  </p>
                  <p>Mira canales deportivos exclusivos cada semana. Obtén el mejor servicio al cliente de TV. Combina tus servicios favoritos.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg">
                    Saber más <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                  <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-6 py-4">
                    <PhoneIcon className="h-6 w-6 text-cyan-600" />
                    <div>
                      <p className="text-sm text-slate-500">Llámanos diariamente 8.00 - 18.00</p>
                      <a href="tel:+51997370235" className="text-xl font-bold text-slate-900">
                        +51 997 370 235
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[600px]">
                {/* Imagen grande arriba-derecha */}
                <div className="absolute top-0 right-0 w-3/4 h-2/3 rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 overflow-hidden shadow-lg">
                  <Image
                    src="/mid-2.png"
                    alt="Entertainment"
                    width={600}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Imagen pequeña abajo-izquierda superpuesta */}
                <div className="absolute bottom-0 left-0 w-2/3 h-1/2 rounded-2xl bg-gradient-to-br from-cyan-100 to-teal-100 overflow-hidden shadow-xl z-10">
                  <Image
                    src="/mid.png"
                    alt="Streaming content"
                    width={500}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Search Section */}
        <section className="relative py-16 text-white overflow-hidden">
          {/* Imagen de fondo */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/patron.png)' }}
          />
          {/* Degradado encima de la imagen con opacidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-teal-600/90" />
          {/* Contenido */}
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Descubre el Internet Perfecto para Tu Hogar</h2>
              <p className="mb-8 text-lg text-white">Descarga, Transmite y Trabaja Sin Límites. ¡Encuentra Tu Plan Ideal Ahora!</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold lg:text-5xl">Solo Beneficios.</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {beneficios.map((beneficio) => (
                <Card key={beneficio.titulo} className="border-slate-200 bg-white p-6 text-center">
                  <div className="mb-4 text-5xl">{beneficio.icono}</div>
                  <CardTitle className="mb-2">{beneficio.titulo}</CardTitle>
                  <CardDescription className="text-slate-600">{beneficio.descripcion}</CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold lg:text-5xl">Tus Planes Perfectos.</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Disfruta de acceso ilimitado a nuestro servicio de streaming. Relájate con temporadas completas de contenido exclusivo y una biblioteca de películas.
              </p>
            </div>
            <PlansCarousel 
              plans={planes as Plan[]} 
              autoPlay={true}
              autoPlayInterval={5000}
              cardsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
            />
          </div>
        </section>


        {/* Stats Section */}
        <section className="bg-gradient-to-r from-slate-900 via-cyan-900 to-teal-900 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {estadisticas.map((stat) => (
                <div key={stat.titulo} className="text-center">
                  <div className="mb-4 text-6xl font-bold">
                    {stat.numero}
                    <span className="text-4xl">{stat.sufijo}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{stat.titulo}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services Section */}
        <section id="other-services" className="py-32 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold lg:text-5xl">Otros Servicios</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Ofrecemos servicios especializados en infraestructura de telecomunicaciones y redes.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Servicio 1 */}
              <Card className="group relative h-96 overflow-hidden border-2 border-slate-200 transition-all duration-300 hover:border-cyan-600 hover:shadow-xl">
                <Image
                  src="/c-1.png"
                  alt="Instalación de Torres"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  unoptimized
                />
                {/* Overlay oscuro para legibilidad del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                {/* Contenido del texto */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <CardTitle className="mb-3 text-2xl font-bold text-white">Instalación de Torres</CardTitle>
                  <CardDescription className="text-base text-white/90 leading-relaxed">
                    Instalación de torres ventadas y/o arriostradas para infraestructura de telecomunicaciones. Servicio profesional con garantía de calidad.
                  </CardDescription>
                </div>
                {/* Línea decorativa */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 to-red-500"></div>
              </Card>

              {/* Servicio 2 */}
              <Card className="group relative h-96 overflow-hidden border-2 border-slate-200 transition-all duration-300 hover:border-cyan-600 hover:shadow-xl">
                <Image
                  src="/c-2.png"
                  alt="Redes Alámbricas e Inalámbricas"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  unoptimized
                />
                {/* Overlay oscuro para legibilidad del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                {/* Contenido del texto */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <CardTitle className="mb-3 text-2xl font-bold text-white">Redes Alámbricas e Inalámbricas</CardTitle>
                  <CardDescription className="text-base text-white/90 leading-relaxed">
                    Instalación y configuración profesional de redes alámbricas e inalámbricas. Diseño e implementación de soluciones de conectividad.
                  </CardDescription>
                </div>
                {/* Línea decorativa */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              </Card>

              {/* Servicio 3 */}
              <Card className="group relative h-96 overflow-hidden border-2 border-slate-200 transition-all duration-300 hover:border-cyan-600 hover:shadow-xl">
                <Image
                  src="/c-3.png"
                  alt="Estudios de Radioenlaces"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  unoptimized
                />
                {/* Overlay oscuro para legibilidad del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                {/* Contenido del texto */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <CardTitle className="mb-3 text-2xl font-bold text-white">Estudios de Radioenlaces</CardTitle>
                  <CardDescription className="text-base text-white/90 leading-relaxed">
                    Estudios y viabilidad de radioenlaces. Análisis técnico y planificación de enlaces de comunicación inalámbrica.
                  </CardDescription>
                </div>
                {/* Línea decorativa */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <h2 className="mb-4 text-4xl font-bold lg:text-5xl">Contáctanos</h2>
                  <p className="text-lg text-slate-600">
                    ¿Tienes preguntas? Estamos aquí para ayudarte. Contáctanos y responderemos lo antes posible.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
                      <LocationIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Dirección</p>
                      <p className="text-slate-600">Jr. Necochea S/N, Perú</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
                      <MailIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Correo</p>
                      <a href="mailto:telnextperu@gmail.com" className="text-slate-600 hover:text-cyan-600">
                        telnextperu@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
                      <PhoneIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Teléfono</p>
                      <a href="tel:+51997370235" className="text-slate-600 hover:text-cyan-600">
                        +51 997 370 235
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-cyan-600 hover:text-white transition-colors">
                    <span className="text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.6 7.6 0 0 0-.46-2.43a4.9 4.9 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.8 4.8 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.8 4.8 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.6 7.6 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.2 3.2 0 0 1-1.15.75a5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3a3.3 3.3 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.1 3.1 0 0 1 .75 1.1a5.6 5.6 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33"></path></svg>
                    </span>
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-cyan-600 hover:text-white transition-colors">
                    <span className="text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20 20 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2"></path></svg>
                    </span>
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-cyan-600 hover:text-white transition-colors">
                    <span className="text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path></svg>
                    </span>
                  </a>
                </div>
              </div>
              <Card className="border-slate-200 bg-white p-8">
                <CardTitle className="mb-4">Envíanos un mensaje</CardTitle>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                      Correo
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Enviar Mensaje
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="/med-1.png"
                  alt="FIBERNEXT Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <p className="mb-4 text-slate-600">
                Proporcionando los mejores servicios de TV e Internet para tu hogar y negocio.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors">
                  <span className="text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.6 7.6 0 0 0-.46-2.43a4.9 4.9 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.8 4.8 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.8 4.8 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.6 7.6 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.2 3.2 0 0 1-1.15.75a5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3a3.3 3.3 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.1 3.1 0 0 1 .75 1.1a5.6 5.6 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33"></path></svg>
                  </span>
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors">
                  <span className="text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20 20 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2"></path></svg>
                  </span>
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors">
                  <span className="text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path></svg>
                  </span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-slate-900">Datos de Contacto</h3>
              <ul className="space-y-3 text-slate-600">
                <li>Jr. Necochea S/N</li>
                <li>
                  <a href="tel:+51997370235" className="hover:text-cyan-600 transition-colors">
                    +51 997370235
                  </a>
                </li>
                <li>
                  <a href="mailto:telnextperu@gmail.com" className="hover:text-cyan-600 transition-colors">
                    telnextperu@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-slate-900">Mide tu Velocidad</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://fast.com/es/" className="text-slate-600 hover:text-cyan-600 transition-colors">
                    Opción Fast
                  </Link>
                </li>
                <li>
                  <Link href="https://www.speedtest.net/" className="text-slate-600 hover:text-cyan-600 transition-colors">
                    Opción Speedtest
                  </Link>
                </li>
              </ul>
            </div>
           
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
            <p>
              Copyright © {new Date().getFullYear()} FIBERNEXT. Todos los Derechos Reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
