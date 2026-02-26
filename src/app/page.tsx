"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Hero Carousel Data ---
// --- Hero Slider Data ---
// --- Destination Data with Multiple Images ---
const destinations = [
  {
    name: "Galle",
    distance: "150KM",
    type: "Beaches / Nature / History",
    places: "Unawatuna, Jungle Beach, Galle Fort",
    markerPos: { x: "48%", y: "88%" },
    images: [
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1771731678/Galle_lpl2lm.png",
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772078184/WhatsApp_Image_2026-02-23_at_20.51.57_abvvi5.jpg",

      "https://res.cloudinary.com/dnfbik3if/image/upload/v1771254923/galle-fort_nscdgm.jpg",

    ],
    mapImg: "/galle.png"
  },
  {
    name: "Sigiriya",
    distance: "160KM",
    type: "History / Culture / Adventure",
    places: "Sigiriya Rock, Pidurangala, Minneriya",
    markerPos: { x: "55%", y: "45%" },
    images: [
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1771731686/Sigiriya_zoen7c.png",
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772078183/WhatsApp_Image_2026-02-23_at_20.51.43_mvard9.jpg",
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772078902/WhatsApp_Image_2026-02-23_at_20.52.02_daiqcj.jpg"
    ],
    mapImg: "/Sigiriya.png"
  },
  {
    name: "Ella",
    distance: "210KM",
    type: "Nature / Mountains / Tea Estates",
    places: "Nine Arch Bridge, Little Adam's Peak",
    markerPos: { x: "65%", y: "68%" },
    images: [
      "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=2070&auto=format&fit=crop",
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1771254759/yalulife_ella_1_opnbtk.jpg",
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772078925/WhatsApp_Image_2026-02-23_at_20.51.49_cavrzs.jpg"
    ],
    mapImg: "/Ella.png"
  },
  {
    name: "Colombo",
    distance: "35KM",
    type: "City / Shopping / Nightlife",
    places: "Lotus Tower, Galle Face, Pettah",
    markerPos: { x: "42%", y: "62%" },
    images: [
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1771731663/Colombo_sqqeku.png",
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772078883/WhatsApp_Image_2026-02-23_at_20.51.55_1_addldw.jpg",
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772078883/WhatsApp_Image_2026-02-23_at_20.51.55_f3jbeg.jpg"
    ],
    mapImg: "/Colombo.png"
  }
];

// --- Hero Images ---
const heroDesktop = "https://res.cloudinary.com/dnfbik3if/image/upload/v1771254848/colombo-sri-lanka-drone-view-1.jpg_hgfcrz.webp";
const heroMobile = "https://res.cloudinary.com/dnfbik3if/image/upload/v1771732069/mobileview_dngzok.jpg";

// --- Mini Component for Destination Image Animation ---
const DestinationGallery = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Destination View"
        />
      </AnimatePresence>
      {/* Small Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? "bg-white w-4" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Close mobile menu when body scrolls
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = ["home", "why-us", "services", "fleet", "destinations", "contact"];

  return (
    <div className="bg-white text-road-dark h-screen overflow-y-auto snap-y snap-proximity lg:snap-mandatory font-poppins scroll-smooth">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative group cursor-pointer z-20">
              <img
                src="/logo.png"
                alt="Pick & Drop Logo"
                className="absolute top-1/2 -translate-y-1/2 left-0 h-16 lg:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)] max-w-none"
              />
              <div className="h-10 lg:h-12 w-28 lg:w-40" />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item}
                className={`text-xs font-black transition-all duration-300 uppercase tracking-widest relative group ${activeSection === item ? "text-primary" : "text-road-dark hover:text-primary"}`}
                href={`#${item}`}
              >
                {item.replace("-", " ")}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeSection === item ? "w-full" : "w-0 group-hover:w-full"}`} />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:flex min-w-[120px] cursor-pointer items-center justify-center rounded-xl h-10 px-6 bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
              <span>Book Now</span>
            </a>
            <button
              suppressHydrationWarning
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden text-road-dark flex items-center justify-center p-2 rounded-lg border border-black/10 hover:bg-gray-100 transition-all"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Down Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col md:hidden overflow-y-auto"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
                <img src="/logo.png" alt="Pick & Drop Logo" className="h-12 w-auto object-contain" />
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 transition-all">
                  <span className="material-symbols-outlined text-road-dark">close</span>
                </button>
              </div>
              {/* Nav links */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {navLinks.map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${activeSection === item
                        ? "bg-primary/10 text-primary"
                        : "text-road-dark hover:bg-gray-100"
                      }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${activeSection === item ? "bg-primary" : "bg-black/20"}`} />
                    {item.replace("-", " ")}
                  </motion.a>
                ))}
              </nav>
              {/* CTA */}
              <div className="px-6 pb-8">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full h-14 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all"
                >
                  <span className="material-symbols-outlined text-base">directions_car</span>
                  Book Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main>
        {/* New Immersive Slider Section */}
        <section id="home" className="relative h-screen w-full flex items-center justify-center px-0 overflow-hidden snap-start scroll-mt-0">
          {/* Desktop Background Image */}
          <div
            className="hidden md:block absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroDesktop}')` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Mobile Background Image */}
          <div
            className="block md:hidden absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroMobile}')` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full h-full flex flex-col pt-24">
            {/* Center Content Area */}
            <div className="flex-1 flex items-center justify-center w-full">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full text-center space-y-8 md:space-y-12"
              >
                <div className="space-y-4 md:space-y-6">
                  <span className="inline-block px-8 py-2.5 bg-black/75 backdrop-blur-xl rounded-full text-white font-black text-[10px] md:text-[11px] uppercase tracking-[0.4em] border border-primary/60 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    Hassle-free <span className="text-secondary">Airport Transfers</span> in Sri Lanka
                  </span>
                  <h1 className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.95] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    Pick and Drop <br />
                    <span className="text-secondary italic">Shuttle Service</span>
                  </h1>
                </div>

                {/* Our Values Section */}
                <div className="space-y-6 md:space-y-8">
                  <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Our Core Values</div>
                  <div className="flex flex-wrap justify-center gap-2.5 md:gap-4">
                    {[
                      { text: "Reliability", icon: "verified" },
                      { text: "Convenience", icon: "task_alt" },
                      { text: "Clean", icon: "clean_hands" },
                      { text: "Spacious", icon: "straighten" },
                      { text: "On-time delivery", icon: "schedule" },
                      { text: "Reliable Drivers", icon: "person_check" }
                    ].map((value, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-2 px-5 py-3 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-black/60 hover:border-primary/50 transition-all cursor-default shadow-lg"
                      >
                        <span className="material-symbols-outlined text-secondary text-lg md:text-xl drop-shadow-[0_0_8px_rgba(253,185,19,0.4)]">{value.icon}</span>
                        <span className="text-white text-[10px] md:text-[11px] font-black uppercase tracking-widest leading-none drop-shadow-md">{value.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col items-center mb-4">
                  <a href="#contact" className="group relative w-full sm:w-auto">
                    <div className="absolute inset-0 bg-primary blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
                    <button className="relative w-full sm:w-auto h-16 md:h-20 px-10 md:px-14 bg-primary text-white font-black text-lg md:text-xl rounded-full shadow-[0_20px_50px_rgba(46,125,50,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 uppercase">
                      BOOK NOW
                      <span className="material-symbols-outlined animate-bounce">south</span>
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Bottom Aligned Payment Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="w-full max-w-4xl pb-10 mx-auto"
            >
              <div className="relative flex flex-col items-center gap-10 py-10 border-t border-white/10">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="h-px w-10 md:w-16 bg-linear-to-r from-transparent to-white/20"></div>
                  <span className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em]">We Accept</span>
                  <div className="h-px w-10 md:w-16 bg-linear-to-l from-transparent to-white/20"></div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-12 gap-y-6 md:gap-y-8 px-6">
                  {/* Visa */}
                  <div className="group/icon cursor-help transition-all duration-300   rounded-lg hover:scale-110">
                    <img
                      src="/visa.png"
                      className="h-8 md:h-12 w-auto opacity-100 transition-opacity  "
                      alt="Visa"
                    />
                  </div>

                  {/* Mastercard */}
                  <div className="group/icon cursor-help transition-all duration-300 hover:scale-110">
                    <img
                      src="/mastercard.png"
                      className="h-8 md:h-12 w-auto opacity-100 transition-opacity"
                      alt="Mastercard"
                    />
                  </div>

                  {/* Amex */}
                  <div className="group/icon cursor-help transition-all duration-300 hover:scale-110">
                    <img
                      src="/americanexpress.png"
                      className="h-8 md:h-12 w-auto opacity-100 transition-opacity"
                      alt="Amex"
                    />
                  </div>

                  {/* Diners Club */}
                  {/* <div className="group/icon cursor-help transition-all duration-300 hover:scale-110">
                    <img
                      src="/dinersclub.png"
                      className="h-8 md:h-12 w-auto opacity-100 transition-opacity"
                      alt="Diners Club"
                    />
                  </div>

                  {/* Discover */}
                  {/* <div className="group/icon cursor-help transition-all duration-300 hover:scale-110">
                    <img
                      src="/discover.png"
                      className="h-8 md:h-12 w-auto opacity-100 transition-opacity"
                      alt="Discover"
                    />
                  </div> */}

                  {/* Cash */}
                  <div className="group/icon cursor-help transition-all duration-300 hover:scale-110">
                    <div className="flex items-center gap-3 py-2 px-5 bg-primary/10 rounded-2xl border border-primary/20 group-hover/icon:bg-primary/20 transition-all">
                      <span className="material-symbols-outlined text-primary text-2xl">payments</span>
                      <div className="flex flex-col text-left">
                        <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-wider leading-none">Cash</span>
                        <span className="text-white/40 text-[7px] md:text-[8px] font-bold uppercase tracking-widest leading-none mt-1">Accepted</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="why-us" className="min-h-screen flex items-center snap-start scroll-mt-0 bg-pattern-yellow py-20 relative overflow-hidden border-t border-black/5">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px] animate-float"></div>
          <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }}></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              {/* Left Column: Features */}
              <div className="space-y-8 lg:space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-3">The Pick &amp; Drop Edge</div>
                  <h2 className="text-3xl lg:text-6xl font-black text-road-dark mb-6 italic uppercase tracking-tighter leading-none">Why <span className="text-primary">Choose</span> Us?</h2>
                  <div className="w-20 h-2 bg-primary rounded-full shadow-lg shadow-primary/20"></div>
                </motion.div>

                <div className="space-y-4">
                  {[
                    { icon: "verified_user", title: "Professional Drivers", desc: "Punctual and courteous drivers with years of experience on Sri Lankan roads.", bg: "bg-primary/20", iconColor: "text-primary" },
                    { icon: "airport_shuttle", title: "Modern Fleet", desc: "Wide range of well-maintained, air-conditioned vehicles to suit your group size.", bg: "bg-secondary/20", iconColor: "text-secondary" },
                    { icon: "support_agent", title: "24/7 Support", desc: "Round-the-clock customer assistance for real-time tracking and help.", bg: "bg-sky-blue/20", iconColor: "text-sky-blue" }
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 }}
                      className="flex items-center gap-4 p-4 lg:p-6 rounded-3xl bg-sky-blue/8 backdrop-blur-3xl border border-sky-blue/20 hover:bg-sky-blue/15 hover:border-primary/40 group shadow-[0_20px_50px_-12px_rgba(0,99,157,0.12)] transition-all duration-500"
                    >
                      <div className={`shrink-0 w-12 lg:w-16 h-12 lg:h-16 ${feature.bg} backdrop-blur-xl rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 border border-white/30`}>
                        <span className={`material-symbols-outlined text-xl lg:text-3xl ${feature.iconColor}`}>{feature.icon}</span>
                      </div>
                      <div className="text-left">
                        <h4 className="text-sm lg:text-lg font-black text-road-dark italic mb-1 uppercase tracking-tight">{feature.title}</h4>
                        <p className="text-road-dark/70 font-bold text-[10px] lg:text-xs leading-relaxed">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Fleet Manager — hidden on mobile to save space */}
              <div className="hidden lg:block relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-accent-gold/10 rounded-[4rem] blur-2xl rotate-3"></div>
                  <div className="relative h-[460px] w-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                    <img
                      src="https://res.cloudinary.com/dnfbik3if/image/upload/v1772078935/Sample_2_bx2idx.png"
                      className="w-full h-full object-cover transition-all duration-700"
                      alt="Fleet Manager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-road-dark/80 via-transparent to-transparent"></div>
                  </div>
                </motion.div>
                <div className="mt-6 space-y-3 px-4">
                  <h3 className="text-2xl font-black text-road-dark italic uppercase tracking-tighter">Experience &amp; Leadership</h3>
                  <p className="text-road-dark/60 font-bold text-xs leading-relaxed max-w-md">
                    Shehan Perera is an accomplished Fleet Manager with 11 years of extensive experience in the tourism sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Category Cards */}
        <section id="services" className="min-h-screen flex items-center snap-start scroll-mt-0 bg-pattern-green max-w-full px-6 py-20 relative z-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64 animate-pulse"></div>

          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-6">
              <h2 className="text-3xl lg:text-5xl font-black text-road-dark italic uppercase tracking-tighter">Our Core <span className="text-primary">Services</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
              {[
                { icon: "flight_takeoff", badge: "Premium Service", title: "Airport Transfers", desc: "Professional transfers to and from BIA Colombo or Mattala airports. Meet and greet service included.", img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1771252809/don-kaveen-93IYznJPkOA-unsplash_tzttke.jpg" },
                { icon: "hotel", badge: "Convenient Pickups", title: "Hotel Pickups", desc: "Reliable door-to-door shuttle service connecting you from your hotel to any corner of the island.", img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1771252811/daniel-klein-Qx8_d5dGhrs-unsplash_ioju8u.jpg" },
                { icon: "distance", badge: "Island Wide", title: "Long Distance", desc: "Comfortable city-to-city transfers or custom tours with experienced professional drivers.", img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1772078925/WhatsApp_Image_2026-02-23_at_20.51.49_cavrzs.jpg" },
                { icon: "calendar_month", badge: "Tour Experts", title: "Tours & Plans", desc: "Customized multi-day transport plans and travel arrangements for your tour experience.", img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1771252866/mike-swigunski-zDDQZgZjFtM-unsplash_epaz1s.jpg" },
              ].map((svc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl overflow-hidden flex flex-row group border border-white/50 hover:border-primary/40 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-2xl bg-white/30"
                >
                  {/* Image — fixed width on mobile so it always shows */}
                  <div className="w-[38%] shrink-0 overflow-hidden relative">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 min-h-[140px]"
                      style={{ backgroundImage: `url('${svc.img}')` }}
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                  </div>
                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between italic bg-white/20 backdrop-blur-xl border-l border-white/40">
                    <div>
                      <div className="flex items-center gap-2 text-secondary mb-2">
                        <span className="material-symbols-outlined text-base">{svc.icon}</span>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em]">{svc.badge}</span>
                      </div>
                      <h3 className="text-base lg:text-xl font-black mb-1.5 text-road-dark italic uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors">{svc.title}</h3>
                      <p className="text-road-dark/60 text-[9px] lg:text-[11px] leading-relaxed mb-3 font-bold">{svc.desc}</p>
                    </div>
                    <div className="flex items-center justify-between w-full group/btn cursor-pointer mt-auto border-t border-primary/10 pt-2">
                      <span className="text-primary font-black uppercase tracking-widest text-[8px]">Select Now</span>
                      <div className="bg-primary/10 group-hover/btn:bg-primary p-2 rounded-xl transition-all shadow-lg group-hover/btn:shadow-primary/30">
                        <span className="material-symbols-outlined text-xs text-primary group-hover/btn:text-white transition-colors">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="fleet" className="min-h-screen flex items-center snap-start scroll-mt-0 bg-pattern-blue py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.06)_0%,transparent_70%)]"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] -ml-64 -mb-64"></div>

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 lg:mb-12 gap-6 w-full border-b border-primary/20 pb-6 lg:pb-8">
              <div className="flex items-center gap-6 lg:gap-10">

                <h2 className="text-3xl lg:text-5xl font-black text-road-dark italic uppercase tracking-tighter whitespace-nowrap">
                  Our Premium <span className="text-primary">Selection</span>
                </h2>
              </div>
              <div className="flex items-center gap-8">
                <p className="hidden md:block text-road-dark/60 text-[10px] lg:text-xs font-bold leading-tight max-w-[240px]">
                  Highly maintained hybrid vehicles for maximum comfort and efficiency.
                </p>

              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Vehicle 1: Honda Shuttle */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                whileHover={{ y: -8 }}
                className="group relative bg-sky-blue/10 backdrop-blur-3xl rounded-4xl p-6 lg:p-8 transition-all hover:border-primary/40 border border-sky-blue/20 shadow-[0_30px_60px_-15px_rgba(0,99,157,0.15)] overflow-hidden"
              >
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="glass-pill bg-white/40 border border-white/60 px-3 py-1.5 rounded-xl font-black text-[9px] text-primary uppercase tracking-tighter shadow-sm backdrop-blur-md">
                    Hybrid Luxury
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5 text-road-dark/70 font-black text-[9px] uppercase">
                      <span className="material-symbols-outlined text-sm text-primary">person</span> 4
                    </div>
                    <div className="flex items-center gap-1.5 text-road-dark/70 font-black text-[9px] uppercase">
                      <span className="material-symbols-outlined text-sm text-primary">luggage</span> 3
                    </div>
                  </div>
                </div>

                <div className="relative h-32 lg:h-44 mb-4 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dnfbik3if/image/upload/v1771253529/fit-lx-32-white_bxh03s.png"
                    className="w-[90%] h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_15px_30px_rgba(0,163,255,0.3)]"
                    alt="Honda Shuttle"
                  />
                </div>

                <div className="flex justify-between items-end italic relative z-10">
                  <div>
                    <h3 className="text-xl lg:text-3xl font-black text-road-dark uppercase tracking-tighter italic leading-none group-hover:text-primary transition-colors">Honda Shuttle</h3>
                    <p className="text-primary text-[9px] font-black uppercase tracking-[0.2em] mt-1">Comfort Station Wagon</p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary transition-all">
                    <span className="material-symbols-outlined text-sm text-primary group-hover:text-white">near_me</span>
                  </div>
                </div>
              </motion.div>

              {/* Vehicle 2: Honda Fit */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-sky-blue/10 backdrop-blur-3xl rounded-4xl p-6 lg:p-8 transition-all hover:border-primary/40 border border-sky-blue/20 shadow-[0_30px_60px_-15px_rgba(0,99,157,0.15)] overflow-hidden"
              >
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="glass-pill bg-white/40 border border-white/60 px-3 py-1.5 rounded-xl font-black text-[9px] text-primary uppercase tracking-tighter shadow-sm backdrop-blur-md">
                    Eco Comfort
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5 text-road-dark/70 font-black text-[9px] uppercase">
                      <span className="material-symbols-outlined text-sm text-primary">person</span> 4
                    </div>
                    <div className="flex items-center gap-1.5 text-road-dark/70 font-black text-[9px] uppercase">
                      <span className="material-symbols-outlined text-sm text-primary">luggage</span> 2
                    </div>
                  </div>
                </div>

                <div className="relative h-32 lg:h-44 mb-4 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dnfbik3if/image/upload/v1771257731/download_-_Edited_zwzuxb.png"
                    className="w-[90%] h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_15px_30px_rgba(0,163,255,0.3)]"
                    alt="Honda Fit"
                  />
                </div>

                <div className="flex justify-between items-end italic relative z-10">
                  <div>
                    <h3 className="text-xl lg:text-3xl font-black text-road-dark uppercase tracking-tighter italic leading-none group-hover:text-primary transition-colors">Honda Fit</h3>
                    <p className="text-primary text-[9px] font-black uppercase tracking-[0.2em] mt-1">Smart Hybrid Hatchback</p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary transition-all">
                    <span className="material-symbols-outlined text-sm text-primary group-hover:text-white">near_me</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="contact" className="min-h-screen flex items-center snap-start scroll-mt-0 py-20 bg-road-dark relative overflow-hidden">
          {/* Contact Desktop Background */}
          <div
            className="hidden md:block absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')` }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          </div>

          {/* Contact Mobile Background */}
          <div
            className="block md:hidden absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2042&auto=format&fit=crop')` }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[6px]"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col items-center justify-center">
            <div className="text-center mb-6 lg:mb-10 w-full">
              <div className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-3">Island-wide Premium Transit Service</div>
              <h2 className="text-5xl lg:text-9xl font-black text-white italic uppercase tracking-tighter leading-none">Book <span className="text-secondary">Now</span></h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-form rounded-[2.5rem] md:rounded-[4rem] p-6 lg:p-12 relative overflow-hidden w-full shadow-2xl"
            >
              <form className="space-y-6 md:space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                {/* Name & WhatsApp & Email */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-2">Name</label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-base">person</span>
                      <input suppressHydrationWarning type="text" placeholder="John Doe" className="w-full h-14 glass-input rounded-2xl pl-12 pr-4 outline-none font-bold text-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-2">WhatsApp</label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-base">chat</span>
                      <input suppressHydrationWarning type="text" placeholder="+1..." className="w-full h-14 glass-input rounded-2xl pl-12 pr-4 outline-none font-bold text-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-2">Email</label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-base">mail</span>
                      <input suppressHydrationWarning type="email" placeholder="john@email.com" className="w-full h-14 glass-input rounded-2xl pl-12 pr-4 outline-none font-bold text-sm" />
                    </div>
                  </div>
                </div>

                {/* Pickup & Drop & Date */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-2">Pickup</label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-base">location_on</span>
                      <input suppressHydrationWarning type="text" placeholder="From..." className="w-full h-14 glass-input rounded-2xl pl-12 pr-4 outline-none font-bold text-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-2">Drop</label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-base">near_me</span>
                      <input suppressHydrationWarning type="text" placeholder="To..." className="w-full h-14 glass-input rounded-2xl pl-12 pr-4 outline-none font-bold text-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-2">Date / Time</label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-base">today</span>
                      <input suppressHydrationWarning type="datetime-local" className="w-full h-14 glass-input rounded-2xl pl-12 pr-4 outline-none font-bold text-sm [color-scheme:dark]" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-end">
                  <div className="flex-1 w-full space-y-4">
                    <label className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-2">Communication</label>
                    <div className="flex gap-10">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="comm_method" className="peer sr-only" />
                        <div className="w-6 h-6 border-2 border-white/20 rounded-full peer-checked:border-secondary transition-all flex items-center justify-center">
                          <div className="w-3 h-3 bg-secondary rounded-full opacity-0 peer-checked:opacity-100 transition-all shadow-[0_0_10px_rgba(253,185,19,0.5)]"></div>
                        </div>
                        <span className="font-bold text-white/60 text-xs uppercase tracking-widest group-hover:text-secondary transition-colors">WhatsApp</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="comm_method" className="peer sr-only" />
                        <div className="w-6 h-6 border-2 border-white/20 rounded-full peer-checked:border-secondary transition-all flex items-center justify-center">
                          <div className="w-3 h-3 bg-secondary rounded-full opacity-0 peer-checked:opacity-100 transition-all shadow-[0_0_10px_rgba(253,185,19,0.5)]"></div>
                        </div>
                        <span className="font-bold text-white/60 text-xs uppercase tracking-widest group-hover:text-secondary transition-colors">Email</span>
                      </label>
                    </div>
                  </div>

                  <button
                    suppressHydrationWarning
                    className="w-full md:w-auto h-16 px-12 bg-primary hover:bg-primary/90 text-white font-black text-sm rounded-2xl shadow-2xl shadow-primary/40 transition-all flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 border border-white/10 uppercase tracking-widest"
                  >
                    <span>SEND REQUEST</span>
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </form>

              {/* Direct Contact Options */}
              <div className="mt-12 pt-8 border-t border-white/10 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a href="#" className="flex items-center justify-center gap-3 h-14 bg-[#25D366]/90 backdrop-blur-md text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl shadow-[#25D366]/20 border border-white/10">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>WhatsApp Now</span>
                  </a>
                  <a href="#" className="flex items-center justify-center gap-3 h-14 bg-linear-to-tr from-[#f9ce34]/90 via-[#ee2a7b]/90 to-[#6228d7]/90 backdrop-blur-md text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl border border-white/10">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.690.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Destinations Section */}

        {/* Our Fleet Section */}


        {/* Popular Destinations Section */}
        <section id="destinations" className="min-h-screen flex items-center snap-start scroll-mt-0 bg-pattern-yellow py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] -mr-96 -mt-96"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -ml-96 -mb-96"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            {/* Compact one-line header */}
            <div className="flex items-end justify-between mb-6 lg:mb-8 border-b border-road-dark/10 pb-5">
              <div>
                <p className="text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-1">Plan Your Journey</p>
                <h2 className="text-2xl lg:text-4xl font-black text-road-dark italic uppercase tracking-tighter">
                  Popular <span className="text-primary">Destinations</span>
                </h2>
              </div>
              <div className="hidden md:block w-32 h-1 bg-linear-to-r from-primary via-secondary to-primary rounded-full opacity-50"></div>
            </div>

            {/* Mobile: horizontal scroll strip. Desktop: 4-col grid */}
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-2 px-2 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
              {destinations.map((dest, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
                  className="rounded-[2rem] overflow-hidden border border-white/60 hover:border-secondary/50 group relative bg-white/25 backdrop-blur-3xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:shadow-[0_16px_50px_rgba(253,185,19,0.15)] transition-all duration-500 flex flex-col shrink-0 w-[78vw] sm:w-[55vw] md:w-auto snap-center"
                >
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors duration-700 z-0" />

                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <DestinationGallery images={dest.images} />
                    <div className="absolute bottom-3 left-3 right-3 z-30 bg-black/30 backdrop-blur-md rounded-xl px-3 py-1.5 flex items-center justify-between">
                      <span className="text-white font-black text-[9px] uppercase tracking-[0.2em]">{dest.distance}</span>
                      <span className="material-symbols-outlined text-secondary text-sm">near_me</span>
                    </div>
                    <div className="absolute top-3 left-3 z-30 bg-white/20 backdrop-blur-md border border-white/40 px-2.5 py-1 rounded-lg">
                      <span className="text-white font-black text-[8px] uppercase tracking-widest">{dest.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-4 relative z-10 bg-white/10 backdrop-blur-xl">
                    <h3 className="text-base lg:text-lg font-black italic uppercase tracking-tighter text-road-dark mb-1 group-hover:text-primary transition-colors leading-none">
                      {dest.name}
                    </h3>
                    <p className="text-road-dark/50 text-[9px] font-bold leading-snug line-clamp-2 mb-3 flex-1">
                      {dest.places}
                    </p>
                    <a
                      href="#contact"
                      className="w-full h-9 rounded-xl bg-road-dark/90 backdrop-blur-sm text-white font-black text-[8px] uppercase tracking-widest hover:bg-primary hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-white/10"
                    >
                      <span>Book Now</span>
                      <span className="material-symbols-outlined text-xs group-hover/btn:translate-x-1 transition-transform">directions_car</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Scroll hint on mobile */}
            <p className="md:hidden text-center text-[9px] font-black uppercase tracking-widest text-road-dark/30 mt-3">← Swipe to explore →</p>
          </div>
        </section>

        {/* Payment Form Section */}


      </main>

      {/* Footer */}
      <footer className="bg-road-dark text-white/50 py-10 px-6 relative overflow-hidden snap-start border-t border-white/5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center group cursor-pointer">
              <img src="/logo.png" alt="Pick & Drop Logo" className="h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105 brightness-110" />
            </div>
            <p className="text-white/40 text-[11px] font-bold leading-relaxed uppercase tracking-wider">
              Premium island-wide shuttle and travel service in Sri Lanka. Punctual, Reliable, and Professional.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-16">
            <div className="space-y-4">
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Navigate</h4>
              <div className="flex flex-col gap-2.5 text-[10px] font-bold uppercase tracking-widest text-white/40">
                <a className="hover:text-primary transition-all" href="#home">Home</a>
                <a className="hover:text-primary transition-all" href="#why-us">Why Us</a>
                <a className="hover:text-primary transition-all" href="#services">Services</a>
                <a className="hover:text-primary transition-all" href="#fleet">Fleet</a>
                <a className="hover:text-primary transition-all" href="#destinations">Destinations</a>
                <a className="hover:text-primary transition-all" href="#contact">Contact</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Legal</h4>
              <div className="flex flex-col gap-2.5 text-[10px] font-bold uppercase tracking-widest text-white/40">
                <a className="hover:text-primary transition-all" href="#">Privacy</a>
                <a className="hover:text-primary transition-all" href="#">Terms</a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">© 2024 Pick & Drop Sri Lanka.</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-[#25D366] hover:text-white transition-all cursor-pointer group">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all cursor-pointer group">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.690.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
