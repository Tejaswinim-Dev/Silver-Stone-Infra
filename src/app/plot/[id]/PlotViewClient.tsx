"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Property, WHATSAPP_NUMBER } from "@/data/properties";
import Logo from "@/components/Logo";
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Ruler,
  Compass,
  Phone,
  Layers,
  Sparkles,
  Award,
  Maximize2,
  ShieldCheck,
  Building2,
  Navigation,
  Clock,
  Eye,
  FileCheck
} from "lucide-react";

interface Props {
  plot: Property;
}

export default function PlotViewClient({ plot }: Props) {
  const [activeView, setActiveView] = useState<"front" | "east" | "top">("front");
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const currentImageUrl = plot.views[activeView] || plot.img;

  const viewLabels = [
    { id: "front", label: "Front View", shortLabel: "Front", icon: Building2, desc: "Main Entrance & Facade" },
    { id: "east", label: "East Face View", shortLabel: "East Face", icon: Compass, desc: "East Elevation & Sunlight" },
    { id: "top", label: "Top / Aerial View", shortLabel: "Top Aerial", icon: Layers, desc: "Drone Aerial & Master Plan" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-[#c5a880] selection:text-black pb-28">
      {/* TOP NAVIGATION BAR - MOBILE OPTIMIZED */}
      <nav className="w-full bg-[#0d0d14]/95 backdrop-blur-xl border-b border-white/10 py-3 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* BACK LINK */}
          <Link
            href="/"
            className="p-2 sm:px-4 sm:py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-[#c5a880] transition-colors shrink-0 flex items-center gap-1.5 text-xs font-semibold"
          >
            <ArrowLeft size={16} className="text-[#c5a880]" />
            <span className="hidden sm:inline">Back to All Plots</span>
          </Link>

          {/* LOGO */}
          <Link href="/" className="shrink-0 scale-90 sm:scale-100">
            <Logo size="sm" />
          </Link>

          {/* CONTACT BUTTON */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am inquiring about Plot ${plot.id} in ${plot.loc} priced at ${plot.price}.`}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-[#c5a880] to-[#a08560] text-black px-3 sm:px-5 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-md shrink-0 flex items-center gap-1.5 shadow-lg shadow-[#c5a880]/15"
          >
            <Phone size={13} />
            <span>Contact</span>
          </a>
        </div>
      </nav>

      {/* HERO & VIEW DISPLAY SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        {/* BREADCRUMB & TITLE HEADER */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <span className="px-3 py-1 bg-[#c5a880]/10 border border-[#c5a880]/30 text-[#c5a880] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
              {plot.status}
            </span>
            <span className="text-gray-400 text-xs tracking-wider uppercase font-semibold">
              ID: <strong className="text-white">{plot.id}</strong>
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 text-xs tracking-wider uppercase font-semibold">
              {plot.plotNo}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bodoni font-normal text-white tracking-tight mb-2">
            {plot.loc} <span className="gold-gradient-text italic font-cormorant font-normal">Luxury Plot</span>
          </h1>

          <p className="text-gray-400 text-xs sm:text-base max-w-3xl leading-relaxed font-light">
            {plot.description}
          </p>
        </div>

        {/* MAIN IMAGE & VIEW TABS CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-14">
          {/* IMAGE DISPLAY BOX (8 COLS) */}
          <div className="lg:col-span-8 space-y-4">
            {/* VIEW SELECTOR PILLS - BALANCED 3-COL GRID FOR MOBILE */}
            <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-[#12121a] border border-white/10 rounded-xl">
              {viewLabels.map((v) => {
                const Icon = v.icon;
                const isActive = activeView === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => setActiveView(v.id as any)}
                    className={`py-2.5 sm:py-3 px-2 rounded-lg flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-[#c5a880] text-black shadow-lg shadow-[#c5a880]/20 font-bold"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon size={15} />
                    <span className="truncate">{v.shortLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* MAIN IMAGE STAGE */}
            <div className="relative h-[280px] sm:h-[420px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#07070a] shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeView}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentImageUrl}
                    alt={`${plot.loc} Plot ${plot.id} - ${activeView} view`}
                    fill
                    unoptimized={true}
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* CAPTION BADGE */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-[10px] sm:text-xs font-medium text-white flex items-center gap-1.5">
                      <Sparkles size={13} className="text-[#c5a880]" />
                      <span>{viewLabels.find((v) => v.id === activeView)?.desc}</span>
                    </div>

                    <button
                      onClick={() => setFullscreenImage(currentImageUrl)}
                      className="pointer-events-auto bg-black/80 hover:bg-[#c5a880] hover:text-black text-white p-2 rounded-lg border border-white/15 transition-all duration-300 flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold"
                    >
                      <Maximize2 size={13} />
                      <span className="hidden sm:inline">Enlarge</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* THUMBNAIL ROW (EAST, FRONT, TOP) */}
            <div className="grid grid-cols-3 gap-2.5">
              {viewLabels.map((v) => {
                const img = plot.views[v.id as keyof typeof plot.views] || plot.img;
                const isSelected = activeView === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => setActiveView(v.id as any)}
                    className={`relative h-20 sm:h-26 rounded-xl overflow-hidden border-2 transition-all duration-300 text-left ${
                      isSelected
                        ? "border-[#c5a880] ring-2 ring-[#c5a880]/40 scale-[1.02]"
                        : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={v.label}
                      fill
                      unoptimized={true}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 hover:bg-black/10 transition-colors" />
                    <span className="absolute bottom-1.5 left-1.5 text-[9px] font-bold text-white uppercase tracking-wider bg-black/80 backdrop-blur-sm px-1.5 py-0.5 rounded">
                      {v.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* KEY METRICS & PRICING PANEL (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">
            {/* PRICE CARD */}
            <div className="bg-gradient-to-br from-[#12121a] to-[#181824] border border-[#c5a880]/30 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-bold mb-1.5 block">
                Total Price Investment
              </span>
              <div className="text-3xl sm:text-5xl font-bodoni font-bold gold-gradient-text mb-1">
                {plot.price}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium mb-6">
                Rate: <strong className="text-[#c5a880]">{plot.pricePerSqYd}</strong>
              </div>

              {/* QUICK SPEC LIST */}
              <div className="space-y-3.5 border-t border-white/10 pt-5 mb-6 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Ruler size={14} className="text-[#c5a880]" /> Plot Size
                  </span>
                  <span className="font-bold text-white">{plot.size} ({plot.sqft})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Compass size={14} className="text-[#c5a880]" /> Orientation
                  </span>
                  <span className="font-bold text-white">{plot.facing}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Building2 size={14} className="text-[#c5a880]" /> Dimensions
                  </span>
                  <span className="font-bold text-white">{plot.dimensions}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Navigation size={14} className="text-[#c5a880]" /> Road Facing
                  </span>
                  <span className="font-bold text-white">{plot.roadWidth}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400 flex items-center gap-2">
                    <FileCheck size={14} className="text-[#c5a880]" /> Approval
                  </span>
                  <span className="font-bold text-[#c5a880]">{plot.specifications.approval}</span>
                </div>
              </div>

              {/* WHATSAPP ACTION BUTTON */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want to book a free site visit for Plot ${plot.id} in ${plot.loc} priced at ${plot.price}. Please share available dates.`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-gradient-to-r from-[#c5a880] to-[#a08560] text-black py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-[0.15em] hover:brightness-110 transition-all text-center flex items-center justify-center gap-2 shadow-xl shadow-[#c5a880]/20"
              >
                <Phone size={16} /> Book Free Site Visit
              </a>
            </div>

            {/* TRUST BADGE BOX */}
            <div className="bg-[#12121a] border border-white/10 rounded-2xl p-5 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#c5a880] font-bold flex items-center gap-2">
                <ShieldCheck size={16} /> Assurance Guarantee
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Every Silver Stone Infra plot comes with verified 100% marketable title deed, approved layout plans, and full bank loan assistance.
              </p>
            </div>
          </div>
        </div>

        {/* DETAILED SPECIFICATIONS & HIGHLIGHTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* PROPERTY HIGHLIGHTS */}
          <div className="bg-[#12121a] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-cinzel text-white font-semibold mb-6 flex items-center gap-2.5">
              <Award className="text-[#c5a880]" size={20} /> Key Layout Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {plot.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-white/5 p-3.5 rounded-xl border border-white/5">
                  <CheckCircle2 className="text-[#c5a880] shrink-0 mt-0.5" size={16} />
                  <span className="text-xs text-gray-300 leading-relaxed font-light">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* INFRASTRUCTURE & SPECIFICATIONS */}
          <div className="bg-[#12121a] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-cinzel text-white font-semibold mb-6 flex items-center gap-2.5">
              <Layers className="text-[#c5a880]" size={20} /> Development Specifications
            </h3>
            <div className="space-y-3">
              {Object.entries(plot.specifications).map(([key, val]) => (
                <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold shrink-0">{key}</span>
                  <span className="text-xs font-bold text-white text-left sm:text-right break-words">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NEARBY LANDMARKS & CONNECTIVITY */}
        <div className="bg-gradient-to-r from-[#12121a] via-[#161622] to-[#12121a] border border-white/10 rounded-2xl p-6 sm:p-8 mb-14">
          <h3 className="text-lg sm:text-xl font-cinzel text-white font-semibold mb-6 flex items-center gap-2.5">
            <MapPin className="text-[#c5a880]" size={20} /> Location & Nearby Connectivity
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {plot.nearby.map((n, idx) => (
              <div key={idx} className="bg-black/40 p-4.5 rounded-xl border border-white/10 hover:border-[#c5a880]/40 transition-colors">
                <Clock className="text-[#c5a880] mb-2.5" size={18} />
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">{n.name}</h4>
                <p className="text-[11px] text-[#c5a880] font-medium">{n.distance}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="bg-gradient-to-r from-[#181824] via-[#202030] to-[#181824] border border-[#c5a880]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-bold block">
              Direct Developer Contact
            </span>
            <h2 className="text-2xl sm:text-4xl font-cinzel text-white font-bold">
              Schedule Your Private On-Site Guided Tour
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
              Experience Plot {plot.id} in person. Our site manager will arrange free luxury cab pick-up and drop for your site inspection in {plot.loc}.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi Silver Stone Infra team, I would like to book a site visit for Plot ${plot.id} (${plot.loc}). Please share available slots.`}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-[#c5a880] to-[#a08560] text-black px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <Phone size={16} /> WhatsApp Us Instantly
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN IMAGE MODAL */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="relative w-full max-w-6xl h-[80vh]">
              <Image
                src={fullscreenImage}
                alt="Enlarged Plot View"
                fill
                unoptimized={true}
                className="object-contain"
              />
            </div>
            <span className="absolute top-6 right-6 text-white text-[10px] uppercase tracking-widest bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
              Click anywhere to close
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE STICKY FLOATING CTA BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-md border-t border-white/10 p-3.5 z-50 flex items-center justify-between gap-3 px-5">
        <div>
          <span className="text-[9px] text-gray-400 uppercase block">Plot {plot.id} Price</span>
          <span className="text-lg font-cinzel font-bold text-[#c5a880]">{plot.price}</span>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am interested in Plot ${plot.id} in ${plot.loc}.`}
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-r from-[#c5a880] to-[#a08560] text-black px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5"
        >
          <Phone size={14} /> Book Visit
        </a>
      </div>
    </div>
  );
}
