"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Phone,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Star,
  TrendingUp,
  Shield,
  Award,
  Sparkles,
  Layers,
  Compass,
  Ruler,
  Eye,
  Calendar,
  Building2,
  Play,
  Quote,
  Video
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import { properties, WHATSAPP_NUMBER, Property } from "@/data/properties";

const heroSlides = [
  { 
    img: "/hero1.jpg", 
    title: "Find the Right Plot.", 
    subtitle: "Build the Right Future.",
    tag: "Premium Plots · Hyderabad"
  },
  { 
    img: "/hero2.jpg", 
    title: "Prime Locations.", 
    subtitle: "Exceptional Value.",
    tag: "Luxury Villas · Curated"
  },
  { 
    img: "/hero3.jpg", 
    title: "Your Legacy Begins.", 
    subtitle: "Invest with Confidence.",
    tag: "City of Pearls · Hyderabad"
  },
];

const locations = [
  { name: "Madhuranagar", desc: "Premium residential community with wide roads and lush green cover", count: 12, img: "/plots/M-102/front.jpg" },
  { name: "Gachibowli", desc: "Fast-growing IT hub with exceptional connectivity and infrastructure", count: 18, img: "/plots/G-301/front.jpg" },
  { name: "Jubilee Hills", desc: "Ultra-premium elite addresses with elite schools and hospitals nearby", count: 5, img: "/plots/J-505/front.jpg" },
];

const stats = [
  { value: "350+", label: "Plots Sold", icon: TrendingUp },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "100%", label: "Legal Clearance", icon: Shield },
  { value: "4.9", label: "Client Rating", icon: Star },
];

const videoReels = [
  {
    id: "reel-1",
    title: "Madhuranagar 150 Sq.Yd Site Walkthrough",
    duration: "1:15",
    views: "14.2K views",
    location: "Madhuranagar",
    thumbnail: "/plots/M-102/front.jpg",
    embedUrl: "https://www.youtube-nocookie.com/embed/KdElDAR17_w?autoplay=1&mute=0&rel=0",
    tag: "Site Walkthrough"
  },
  {
    id: "reel-2",
    title: "Gachibowli Financial District Drone Tour",
    duration: "1:40",
    views: "28.5K views",
    location: "Gachibowli",
    thumbnail: "/plots/G-301/top.jpg",
    embedUrl: "https://www.youtube-nocookie.com/embed/FC7TQAvwZ1E?autoplay=1&mute=0&rel=0",
    tag: "Aerial Drone"
  },
  {
    id: "reel-3",
    title: "Jubilee Hills Hilltop Estate Villa Elevation",
    duration: "2:05",
    views: "32.1K views",
    location: "Jubilee Hills",
    thumbnail: "/plots/J-505/front.jpg",
    embedUrl: "https://www.youtube-nocookie.com/embed/M--urO9cl0k?autoplay=1&mute=0&rel=0",
    tag: "Luxury Estate"
  },
  {
    id: "reel-4",
    title: "Ameerpet Corner Enclave Spot Registration",
    duration: "0:55",
    views: "19.8K views",
    location: "Ameerpet",
    thumbnail: "/plots/A-405/east.jpg",
    embedUrl: "https://www.youtube-nocookie.com/embed/TRq__2sI4Y8?autoplay=1&mute=0&rel=0",
    tag: "Customer Story"
  }
];

const testimonials = [
  {
    name: "Dr. K. Srinivas & Family",
    role: "Senior Consultant Surgeon",
    plot: "Plot #102 · Madhuranagar",
    comment: "Silver Stone Infra delivered 100% on their promise. The HMDA title clearance was flawless and spot registration happened within 48 hours of booking.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Rajesh & Ananya Varma",
    role: "VP of Engineering, IT Tech",
    plot: "Plot #301 · Gachibowli",
    comment: "Finding a clear title 300 Sq. Yd plot in Gachibowli near Financial District seemed impossible until we visited Silver Stone. Exceptional service.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Vikram & Deepa Reddy",
    role: "NRI Investors (Dallas, USA)",
    plot: "Plot #505 · Jubilee Hills",
    comment: "Managing real estate from overseas is usually scary. Silver Stone Infra provided live drone walkthroughs, complete legal documents online, and zero hassle.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

// Interactive slot data generator for 32 plots
interface SlotInfo {
  slotNo: string;
  id: string;
  loc: string;
  size: string;
  sqft: string;
  facing: string;
  price: string;
  status: "Available" | "Reserved" | "Sold Out";
  propertyId?: string;
  img: string;
}

const generateLayoutSlots = (): SlotInfo[] => {
  return Array.from({ length: 32 }).map((_, i) => {
    const slotNum = (i + 1).toString().padStart(2, "0");
    const isSold = [3, 7, 8, 12, 15, 18, 22, 23, 27, 30].includes(i + 1);
    const isReserved = [5, 14, 25].includes(i + 1);

    const mappedProp = properties[i % properties.length];

    return {
      slotNo: slotNum,
      id: `SLOT-${slotNum}`,
      loc: mappedProp.loc,
      size: `${140 + (i * 10) % 200} Sq. Yds`,
      sqft: `${(140 + (i * 10) % 200) * 9} sq.ft`,
      facing: i % 2 === 0 ? "East Facing (Pure Vastu)" : "North-East Facing",
      price: `₹${40 + (i * 3) % 45} Lakhs`,
      status: isSold ? "Sold Out" : isReserved ? "Reserved" : "Available",
      propertyId: mappedProp.id,
      img: mappedProp.img
    };
  });
};

const layoutSlots = generateLayoutSlots();

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<SlotInfo | null>(null);
  const [selectedReel, setSelectedReel] = useState<typeof videoReels[0] | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length);

  // Robust Location Filter logic
  const filteredProperties =
    filter === "All"
      ? properties
      : properties.filter(
          (p) =>
            p.loc.toLowerCase().trim() === filter.toLowerCase().trim() ||
            p.loc.toLowerCase().includes(filter.toLowerCase().trim())
        );

  const handleLocationClick = (locName: string) => {
    setFilter(locName);
    const elem = document.getElementById("properties");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-[#c5a880] selection:text-black pb-20 md:pb-0">

      {/* HEADER NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#c5a880]/20 py-3 shadow-2xl"
            : "bg-gradient-to-b from-black/90 via-black/40 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* BRAND LOGO */}
          <Link href="/" className="focus:outline-none shrink-0 scale-95 sm:scale-100">
            <Logo size="md" />
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {["Properties", "Locations", "Availability", "Reels", "Testimonials", "About"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.15em] font-semibold text-gray-300 hover:text-[#c5a880] transition-colors"
              >
                {item}
              </Link>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-[#c5a880] to-[#a08560] text-black px-5 py-2.5 text-[11px] uppercase tracking-widest font-bold hover:brightness-110 transition-all flex items-center gap-2 rounded-sm shadow-lg shadow-[#c5a880]/15"
            >
              <Phone size={14} /> WhatsApp Us
            </a>
          </div>

          {/* MOBILE HAMBURGER BUTTON - PREMIUM GLOW */}
          <button
            className="lg:hidden p-2.5 rounded-xl bg-[#141420] border border-[#c5a880]/40 text-[#c5a880] focus:outline-none shadow-lg shadow-black/50 hover:bg-[#c5a880]/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ULTRA PREMIUM MOBILE DRAWER MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[#0d0d16]/98 border-b border-[#c5a880]/30 overflow-hidden backdrop-blur-2xl shadow-2xl"
            >
              <div className="px-6 py-8 flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                  <Logo size="sm" />
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-bold px-2.5 py-1 bg-[#c5a880]/10 rounded-full border border-[#c5a880]/20">
                    Menu
                  </span>
                </div>

                {[
                  { label: "Properties Portfolio", href: "#properties" },
                  { label: "Prime Locations", href: "#locations" },
                  { label: "Master Layout & Slots", href: "#availability" },
                  { label: "Site Video Reels", href: "#reels" },
                  { label: "Client Testimonials", href: "#testimonials" },
                  { label: "About Developer", href: "#about" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-semibold tracking-wider text-gray-200 hover:text-[#c5a880] py-2.5 border-b border-white/5 flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                    <ChevronRight size={16} className="text-[#c5a880]" />
                  </Link>
                ))}

                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi Silver Stone Infra, I am reaching out from your website menu.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-gradient-to-r from-[#c5a880] to-[#a08560] text-black py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Phone size={16} /> WhatsApp Developer Team
                  </a>
                  <a
                    href={`tel:${WHATSAPP_NUMBER}`}
                    className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2"
                  >
                    Call +91 98765 43210
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO CAROUSEL SECTION */}
      <section className="relative h-[85vh] sm:h-screen overflow-hidden bg-[#0a0a0f]">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              priority={idx === 0}
              unoptimized={true}
              className="object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 via-transparent to-transparent" />
          </div>
        ))}

        {/* HERO CONTENT */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] text-[#c5a880] bg-[#c5a880]/10 border border-[#c5a880]/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-ping" />
                {heroSlides[currentSlide].tag}
              </div>

              <h1 className="text-3xl sm:text-6xl md:text-7xl font-bodoni font-medium text-white leading-tight mb-2 tracking-tight luxury-text-shadow">
                {heroSlides[currentSlide].title}
              </h1>

              <h2 className="text-3xl sm:text-6xl md:text-7xl font-cormorant font-normal italic gold-gradient-text leading-tight mb-6 sm:mb-8">
                {heroSlides[currentSlide].subtitle}
              </h2>

              <p className="text-gray-300 text-xs sm:text-lg mb-8 sm:mb-10 max-w-xl font-light leading-relaxed">
                Discover carefully selected luxury villa plots in prime locations across Hyderabad — where your vision meets the perfect plot.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="#properties"
                  className="bg-gradient-to-r from-[#c5a880] to-[#a08560] text-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm font-bold text-xs uppercase tracking-[0.15em] hover:brightness-110 transition-all shadow-xl shadow-[#c5a880]/20"
                >
                  Explore Properties
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am interested in exploring Silver Stone Infra plots.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm font-bold text-xs uppercase tracking-[0.15em] transition-all flex items-center gap-2"
                >
                  <span>WhatsApp Us</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CAROUSEL CONTROLS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentSlide === idx ? "w-8 bg-[#c5a880]" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-gradient-to-r from-[#c5a880] via-[#d4b992] to-[#a08560] text-black py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-black" />
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-cinzel font-bold text-black">{s.value}</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-black/70">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* LOCATIONS SECTION - CLICKABLE LOCATION FILTERS */}
      <section id="locations" className="py-20 sm:py-24 px-6 bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#c5a880] mb-3 block">
                Prime Hotspots
              </span>
              <h2 className="text-2xl sm:text-5xl font-bodoni font-medium text-white leading-tight">
                Explore Properties <br /> By Location
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md">
              Click on any location below (e.g. <strong>Madhuranagar</strong>) to immediately filter and view all matching luxury plots in our portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {locations.map((loc) => (
              <div
                key={loc.name}
                onClick={() => handleLocationClick(loc.name)}
                className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-[#12121a] cursor-pointer hover:border-[#c5a880]/60 transition-all duration-500 shadow-xl"
              >
                <Image
                  src={loc.img}
                  alt={loc.name}
                  fill
                  unoptimized={true}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                
                <div className="absolute top-4 right-4 bg-[#c5a880] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                  {loc.count} Plots Available
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a880] mb-1 block">
                    Click To View All {loc.name} Plots →
                  </span>
                  <h3 className="text-2xl font-cinzel font-bold text-white mb-2 group-hover:text-[#c5a880] transition-colors">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES SECTION */}
      <section id="properties" className="py-20 sm:py-24 px-6 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#c5a880] mb-3 block">
              Curated Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-bodoni font-medium text-white mb-4">
              Featured Luxury Plots
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light">
              Showing properties for: <strong className="text-[#c5a880] font-bold">{filter}</strong>
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {["All", "Madhuranagar", "Gachibowli", "Jubilee Hills", "Banjara Hills", "Miyapur"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all ${
                  filter.toLowerCase() === f.toLowerCase()
                    ? "bg-[#c5a880] text-black font-bold shadow-lg shadow-[#c5a880]/20"
                    : "bg-white/5 text-gray-400 hover:text-white border border-white/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* PROPERTY CARDS GRID - 100% CLICKABLE CARDS WITHOUT INVALID NESTED <a> TAGS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="relative block text-left bg-[#12121a] border border-white/10 rounded-2xl overflow-hidden hover:border-[#c5a880]/60 transition-all duration-300 hover:-translate-y-2 group shadow-xl"
              >
                {/* ABSOLUTE LINK OVERLAY FOR ENTIRE CARD CLICKABILITY */}
                <Link
                  href={`/plot/${prop.id}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View details for Plot ${prop.id}`}
                />

                <div className="relative h-60 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={prop.img}
                    alt={`Plot ${prop.id}`}
                    fill
                    unoptimized={true}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-black/20" />
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full z-20 pointer-events-none ${
                      prop.status === "Available"
                        ? "bg-[#c5a880] text-black"
                        : "bg-red-500/90 text-white"
                    }`}
                  >
                    {prop.status}
                  </span>
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 text-[10px] font-bold text-[#c5a880] uppercase tracking-wider flex items-center gap-1 z-20 pointer-events-none">
                    <Eye size={12} /> Open Plot Page
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-cinzel font-bold text-white group-hover:text-[#c5a880] transition-colors">Plot {prop.id}</h3>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <MapPin size={13} className="text-[#c5a880]" /> {prop.loc}
                    </span>
                  </div>

                  <div className="text-2xl font-cinzel font-bold text-[#c5a880] mb-5">
                    {prop.price}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <span className="text-[9px] uppercase tracking-wider text-gray-400 block font-semibold mb-1">
                        Size
                      </span>
                      <span className="text-xs font-bold text-white">{prop.size}</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <span className="text-[9px] uppercase tracking-wider text-gray-400 block font-semibold mb-1">
                        Facing
                      </span>
                      <span className="text-xs font-bold text-white truncate block">{prop.facing}</span>
                    </div>
                  </div>

                  <div className="flex gap-3 relative z-20">
                    <div className="flex-1 bg-[#c5a880]/10 group-hover:bg-[#c5a880] group-hover:text-black text-[#c5a880] text-center py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border border-[#c5a880]/30 flex items-center justify-center gap-2 pointer-events-none">
                      <Eye size={14} /> View Plot Details
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am interested in Plot ${prop.id} in ${prop.loc} priced at ${prop.price}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white/10 hover:bg-[#c5a880] hover:text-black text-white px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center border border-white/10 shrink-0"
                      title="Enquire on WhatsApp"
                    >
                      <Phone size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASTER LAYOUT & INTERACTIVE AVAILABILITY GRID (32 SLOTS) */}
      <section id="availability" className="py-20 sm:py-24 px-6 bg-[#0d0d14] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#c5a880] mb-3 block">
                Interactive Layout Map
              </span>
              <h2 className="text-2xl sm:text-5xl font-bodoni font-medium text-white">
                Master Layout & Availability
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md">
              Click on any plot slot below (e.g. Slot 04) to view full specs, instant availability status, and hold your reservation.
            </p>
          </div>

          {/* 32-PLOT INTERACTIVE GRID */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 bg-white/5 p-3.5 sm:p-4 rounded-2xl border border-white/10 mb-8">
            {layoutSlots.map((slot) => {
              const isAvailable = slot.status === "Available";
              const isReserved = slot.status === "Reserved";
              return (
                <button
                  key={slot.id}
                  onClick={() => setSelectedSlot(slot)}
                  className={`h-20 sm:h-24 rounded-xl p-1.5 sm:p-2 flex flex-col items-center justify-center transition-all duration-300 border ${
                    isAvailable
                      ? "bg-[#141420] border-white/10 hover:border-[#c5a880] hover:bg-[#c5a880]/15 hover:scale-105 text-white"
                      : isReserved
                      ? "bg-[#c5a880]/10 border-[#c5a880]/40 text-[#c5a880]"
                      : "bg-white/5 border-transparent text-gray-600 opacity-50 cursor-not-allowed"
                  }`}
                >
                  <span className="text-[10px] text-gray-400 font-semibold mb-0.5">Plot</span>
                  <span className="text-lg sm:text-xl font-cinzel font-bold">{slot.slotNo}</span>
                  <span className={`text-[7px] sm:text-[8px] uppercase tracking-wider font-bold mt-1 ${
                    isAvailable ? "text-[#c5a880]" : isReserved ? "text-[#c5a880]" : "text-gray-500"
                  }`}>
                    {slot.status}
                  </span>
                </button>
              );
            })}
          </div>

          {/* LEGEND STRIP */}
          <div className="flex flex-wrap items-center justify-end gap-6 text-xs uppercase tracking-wider font-bold text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#141420] border border-[#c5a880]" />
              <span>Available Slot</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#c5a880]" />
              <span>Reserved</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span>Sold Out</span>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: SITE WALKTHROUGH VIDEO REELS (VERTICAL 9:16 CARDS) */}
      <section id="reels" className="py-20 sm:py-24 px-6 bg-[#0a0a0f] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#c5a880] mb-3 block flex items-center gap-2">
                <Video size={16} /> Site Experience
              </span>
              <h2 className="text-2xl sm:text-5xl font-bodoni font-medium text-white">
                Live Video Reels & Tours
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md">
              Watch real site walkthrough video reels, drone footage, and client key handovers directly from our plots across Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {videoReels.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setSelectedReel(reel)}
                className="group relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-[#12121a] cursor-pointer hover:border-[#c5a880]/60 transition-all duration-300 shadow-xl"
              >
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  unoptimized={true}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/30" />

                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-[#c5a880] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-white/10">
                  {reel.tag}
                </span>

                <span className="absolute top-3 right-3 bg-black/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  {reel.duration}
                </span>

                {/* PLAY BUTTON ICON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#c5a880]/90 text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play size={24} className="fill-black ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-sm font-semibold text-white mb-1 line-clamp-2 leading-snug">
                    {reel.title}
                  </h4>
                  <p className="text-[10px] text-[#c5a880] font-medium">{reel.views}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: CLIENT TESTIMONIALS & REVIEWS */}
      <section id="testimonials" className="py-20 sm:py-24 px-6 bg-[#0d0d14] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#c5a880] mb-3 block">
              Verified Buyer Reviews
            </span>
            <h2 className="text-3xl sm:text-5xl font-bodoni font-medium text-white mb-4">
              What Our Plot Owners Say
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light">
              Over 350+ happy families have invested in their future with Silver Stone Infra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#12121a] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative"
              >
                <Quote size={32} className="text-[#c5a880]/20 absolute top-6 right-6" />

                <div>
                  <div className="flex gap-1 text-[#c5a880] mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-[#c5a880]" />
                    ))}
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-[#c5a880]/40">
                    <Image src={t.avatar} alt={t.name} fill unoptimized={true} className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-cinzel font-bold text-white">{t.name}</h4>
                    <p className="text-[11px] text-gray-400">{t.role}</p>
                    <p className="text-[10px] text-[#c5a880] font-semibold">{t.plot}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE SLOT POPUP MODAL */}
      <AnimatePresence>
        {selectedSlot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSlot(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#12121a] border border-[#c5a880]/40 rounded-2xl p-4 sm:p-7 max-w-lg w-full relative shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedSlot(null)}
                className="absolute top-3.5 right-3.5 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 z-10"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="px-2.5 py-0.5 bg-[#c5a880]/10 border border-[#c5a880]/30 text-[#c5a880] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Slot #{selectedSlot.slotNo} Details
                </span>
                <span className={`text-[11px] font-bold uppercase ${
                  selectedSlot.status === "Available" ? "text-green-400" : "text-amber-400"
                }`}>
                  • {selectedSlot.status}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white mb-1 pr-6">
                Plot {selectedSlot.slotNo} - {selectedSlot.loc}
              </h3>

              <div className="text-xl sm:text-2xl font-cinzel font-bold text-[#c5a880] mb-3">
                {selectedSlot.price}
              </div>

              <div className="relative h-32 sm:h-44 w-full rounded-xl overflow-hidden mb-3.5 border border-white/10">
                <Image
                  src={selectedSlot.img}
                  alt={`Plot Slot ${selectedSlot.slotNo}`}
                  fill
                  unoptimized={true}
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5 mb-4 text-xs">
                <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <span className="text-gray-400 block text-[10px] mb-0.5">Area</span>
                  <strong className="text-white text-xs font-bold">{selectedSlot.size}</strong>
                </div>
                <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <span className="text-gray-400 block text-[10px] mb-0.5">Facing</span>
                  <strong className="text-white text-xs font-bold truncate block">{selectedSlot.facing}</strong>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I would like to hold/reserve Slot ${selectedSlot.slotNo} (${selectedSlot.loc}) priced at ${selectedSlot.price}. Please share booking steps.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-gradient-to-r from-[#c5a880] to-[#a08560] text-black font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-lg"
                >
                  <Phone size={15} /> Reserve Slot {selectedSlot.slotNo}
                </a>

                {selectedSlot.propertyId && (
                  <Link
                    href={`/plot/${selectedSlot.propertyId}`}
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl text-xs uppercase tracking-widest text-center border border-white/10 flex items-center justify-center gap-1.5"
                  >
                    <Eye size={14} /> View Page
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VIDEO REEL PLAYBACK POPUP MODAL */}
      <AnimatePresence>
        {selectedReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReel(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#12121a] border border-[#c5a880]/40 rounded-2xl p-6 max-w-lg w-full relative shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedReel(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-white/5"
              >
                <X size={20} />
              </button>

              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a880] mb-2 block">
                {selectedReel.tag} • {selectedReel.location}
              </span>
              <h3 className="text-lg font-cinzel font-bold text-white mb-4">{selectedReel.title}</h3>

              {/* RESPONSIVE VIDEO IFRAME PLAYER */}
              <div className="relative h-[340px] sm:h-[420px] w-full rounded-2xl overflow-hidden mb-5 bg-black border border-[#c5a880]/30 shadow-2xl">
                <iframe
                  src={selectedReel.embedUrl}
                  title={selectedReel.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I watched the video reel for ${selectedReel.title} in ${selectedReel.location}. I want to visit this site.`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-gradient-to-r from-[#c5a880] to-[#a08560] text-black py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone size={16} /> Schedule Visit For This Reel
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WHY CHOOSE US */}
      <section className="py-20 sm:py-24 px-6 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#c5a880] mb-3 block">
              The Silver Stone Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-bodoni font-medium text-white">
              Why Invest With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Verified Titles", desc: "Every plot undergoes strict legal verification and 100% marketable clearance.", icon: Shield },
              { title: "High Growth Zones", desc: "Strategically selected locations near IT corridors and Outer Ring Road.", icon: TrendingUp },
              { title: "Transparent Pricing", desc: "No hidden charges. Clear square yard breakdown with bank loan support.", icon: CheckCircle2 },
              { title: "Full Assistance", desc: "Personal manager provided from site inspection to final registration.", icon: Award },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#12121a] border border-white/10 p-8 rounded-2xl hover:border-[#c5a880]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#c5a880]/10 border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-cinzel font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 sm:py-24 px-6 bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image src="/hero1.jpg" alt="About Silver Stone Infra" fill unoptimized={true} className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-5 rounded-2xl border border-white/10">
              <span className="text-3xl sm:text-4xl font-cinzel font-bold text-[#c5a880] block mb-1">15+ Years</span>
              <span className="text-xs uppercase tracking-widest text-gray-300 font-semibold">
                Building Trust Across Hyderabad Real Estate
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#c5a880] mb-3 block">
              Our Legacy
            </span>
            <h2 className="text-2xl sm:text-5xl font-bodoni font-medium text-white mb-6 leading-tight">
              Crafting Futures Through Premium Real Estate
            </h2>
            <p className="text-gray-300 text-xs sm:text-base font-light leading-relaxed mb-4">
              At Silver Stone Infra, we believe that finding the right property is the foundation of a secure future. We specialize in curating prime residential plots across Hyderabad&apos;s most promising locations.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-8">
              Our approach is simple: absolute transparency, rigorous legal verification, and a commitment to helping you make the right investment decision without hassle.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c5a880] to-[#a08560] text-black px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl"
            >
              <Phone size={16} /> Contact Founder Team
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section id="contact" className="py-20 sm:py-24 px-6 bg-[#0a0a0f] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#12121a] to-[#181824] border border-[#c5a880]/30 rounded-3xl p-8 sm:p-16 relative shadow-2xl">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a880] mb-4 block">
            Direct Developer Helpline
          </span>
          <h2 className="text-2xl sm:text-5xl font-cinzel font-bold text-white mb-6">
            Ready To Find Your Dream Plot?
          </h2>
          <p className="text-gray-300 text-xs sm:text-base font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Schedule a free site visit with complimentary vehicle transport across Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I would like to schedule a site visit with Silver Stone Infra.`}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-[#c5a880] to-[#a08560] text-black px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl"
            >
              <Phone size={18} /> WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* PREMIUM MOBILE-FRIENDLY FOOTER */}
      <footer className="bg-[#07070a] border-t border-white/10 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* BRAND COLUMN (5 COLS) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" />
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-md pt-2">
              Silver Stone Infra is Hyderabad&apos;s leading luxury real estate developer specializing in HMDA & RERA approved gated villa plot developments across prime growth corridors.
            </p>
          </div>

          {/* QUICK LINKS (3 COLS) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#c5a880]">Navigation</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><Link href="#properties" className="hover:text-[#c5a880] transition-colors">Properties Portfolio</Link></li>
              <li><Link href="#locations" className="hover:text-[#c5a880] transition-colors">Prime Locations</Link></li>
              <li><Link href="#availability" className="hover:text-[#c5a880] transition-colors">Master Layout</Link></li>
              <li><Link href="#reels" className="hover:text-[#c5a880] transition-colors">Video Reels</Link></li>
              <li><Link href="#testimonials" className="hover:text-[#c5a880] transition-colors">Buyer Reviews</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO (4 COLS) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#c5a880]">Corporate Headquarters</h4>
            <p className="text-xs text-gray-300 font-light leading-relaxed">
              Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033
            </p>
            <p className="text-xs text-gray-300 font-light">
              Phone: <strong className="text-white">+91 98765 43210</strong>
            </p>
            <p className="text-xs text-gray-300 font-light">
              Email: <strong className="text-white">hello@silverstoneinfra.in</strong>
            </p>
          </div>
        </div>

        {/* COPYRIGHT STRIP */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Silver Stone Infra. All rights reserved.</p>
          <p className="text-gray-400 font-medium">Designed for Luxury Real Estate</p>
        </div>
      </footer>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-[#c5a880]/30 p-3.5 z-50 flex items-center justify-between px-6">
        <div>
          <span className="text-[9px] uppercase tracking-wider text-gray-400 block">Silver Stone Infra</span>
          <span className="text-xs font-bold text-[#c5a880]">Direct Developer Helpline</span>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am inquiring about Silver Stone Infra plots.`}
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-r from-[#c5a880] to-[#a08560] text-black px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg"
        >
          <Phone size={14} /> WhatsApp
        </a>
      </div>
    </div>
  );
}
