"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Hero Carousel Data ---
// --- Hero Slider Data ---
const sliderItems = [
  {
    image: "https://res.cloudinary.com/dnfbik3if/image/upload/v1771252866/mike-swigunski-zDDQZgZjFtM-unsplash_epaz1s.jpg",
    title: "SIGIRIYA",
    description: "Ancient palace located in the central Matale District.",

  },
  {
    image: "https://res.cloudinary.com/dnfbik3if/image/upload/v1771252809/don-kaveen-93IYznJPkOA-unsplash_tzttke.jpg",
    title: "GALLE",
    description: "Historic fortification on the southwest coast of Sri Lanka.",

  },
  {
    image: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=2070&auto=format&fit=crop",
    title: "ELLA",
    description: "Cloud-kissed mountains and the iconic Nine Arch Bridge.",

  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide]);

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

  return (
    <div className="bg-white text-road-dark min-h-screen font-poppins">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav px-6 lg:px-20 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <img src="/logo.png" alt="Pick & Drop Logo" className="h-12 lg:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105" />
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {["home", "fleet", "services", "contact"].map((item) => (
              <a
                key={item}
                className={`text-sm font-bold transition-all duration-300 uppercase tracking-widest relative group ${activeSection === item ? "text-primary" : "text-road-dark hover:text-primary"
                  }`}
                href={`#${item}`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeSection === item ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
              <span>Book Now</span>
            </a>
            <button className="md:hidden text-road-dark">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* New Immersive Slider Section */}
        <section id="home" className="relative h-screen w-full flex items-center justify-center px-0 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center scale-105 animate-ken-burns"
            style={{ backgroundImage: `url('https://res.cloudinary.com/dnfbik3if/image/upload/v1771252866/mike-swigunski-zDDQZgZjFtM-unsplash_epaz1s.jpg')` }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
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
                  <span className="inline-block px-5 py-1.5 bg-primary/20 rounded-full text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.4em] border border-primary/30">
                    Hassle-free Airport Transfers in Sri Lanka
                  </span>
                  <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.95] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    Pick and Drop <br />
                    <span className="text-primary italic">Shuttle Service</span>
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
                        className="flex items-center gap-2 px-4 py-2.5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                      >
                        <span className="material-symbols-outlined text-primary text-lg md:text-xl">{value.icon}</span>
                        <span className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-none">{value.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col items-center mb-4">
                  <a href="#contact" className="group relative w-full sm:w-auto">
                    <div className="absolute inset-0 bg-primary blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
                    <button className="relative w-full sm:w-auto h-16 md:h-20 px-10 md:px-14 bg-primary text-white font-black text-lg md:text-xl rounded-full shadow-[0_20px_50px_rgba(240,90,34,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 uppercase">
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
                  <span className="text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em]">We Accept</span>
                  <div className="h-px w-10 md:w-16 bg-linear-to-l from-transparent to-white/20"></div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-12 gap-y-6 md:gap-y-8 px-6">
                  {/* Visa */}
                  <div className="group/icon cursor-help transition-all duration-300   rounded-lg hover:scale-110">
                    <img
                      src="/visa.png"
                      className="h-12 md:h-12 w-auto opacity-100 transition-opacity  "
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
                  <div className="group/icon cursor-help transition-all duration-300 hover:scale-110">
                    <img
                      src="/dinersclub.png"
                      className="h-8 md:h-12 w-auto opacity-100 transition-opacity"
                      alt="Diners Club"
                    />
                  </div>

                  {/* Discover */}
                  <div className="group/icon cursor-help transition-all duration-300 hover:scale-110">
                    <img
                      src="/discover.png"
                      className="h-8 md:h-12 w-auto opacity-100 transition-opacity"
                      alt="Discover"
                    />
                  </div>

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
        <section className="bg-pattern-orange py-32 relative overflow-hidden border-t border-black/5">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px] animate-float"></div>
          <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-4">The Pick & Drop Edge</div>
              <h2 className="text-5xl lg:text-7xl font-black text-road-dark mb-6 italic uppercase tracking-tighter stylish-glow-text">Why <span className="text-primary">Choose</span> Us?</h2>
              <div className="w-24 h-2 bg-primary mx-auto rounded-full shadow-lg shadow-primary/20"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { icon: "verified_user", title: "Professional Drivers", desc: "Punctual and courteous drivers with years of experience on Sri Lankan roads.", color: "text-primary", bg: "bg-primary/20", iconColor: "text-primary" },
                { icon: "airport_shuttle", title: "Modern Fleet", desc: "Wide range of well-maintained, air-conditioned vehicles to suit your group size.", color: "text-secondary", bg: "bg-secondary/20", iconColor: "text-secondary" },
                { icon: "support_agent", title: "24/7 Support", desc: "Round-the-clock customer assistance for real-time tracking and help.", color: "text-sky-blue", bg: "bg-sky-blue/20", iconColor: "text-sky-blue" }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-10 rounded-[3rem] bg-white border border-primary/5 hover:border-primary/20 hover:bg-white transition-all duration-500 group shadow-lg shadow-black/5"
                >
                  <div className={`w-24 h-24 ${feature.bg} rounded-4xl flex items-center justify-center mx-auto mb-10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg shadow-black/5 relative`}>
                    <div className={`absolute inset-0 rounded-4xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity ${feature.bg}`}></div>
                    <span className={`material-symbols-outlined text-5xl ${feature.iconColor} drop-shadow-sm relative z-10`}>{feature.icon}</span>
                  </div>
                  <h4 className="text-2xl font-black mb-4 text-road-dark capitalize italic">{feature.title}</h4>
                  <p className="text-road-dark/60 leading-relaxed font-bold text-sm lg:text-base">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Service Category Cards */}
        <section id="services" className="bg-pattern-green max-w-full px-6 py-32 relative z-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64 animate-pulse"></div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            {/* Airport Transfer Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-white/5 rounded-3xl shadow-xl overflow-hidden flex flex-col sm:flex-row group border border-black/5 dark:border-white/10"
            >
              <div className="sm:w-2/5 h-52 sm:h-auto overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: "url('https://res.cloudinary.com/dnfbik3if/image/upload/v1771252809/don-kaveen-93IYznJPkOA-unsplash_tzttke.jpg')" }}
                />
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-between italic">
                <div>
                  <div className="flex items-center gap-2 text-accent-blue mb-3">
                    <span className="material-symbols-outlined">flight_takeoff</span>
                    <span className="text-xs font-black uppercase tracking-widest">Premium Service</span>
                  </div>
                  <h2 className="text-3xl font-black mb-3 text-road-dark italic uppercase tracking-tighter">Airport Transfers</h2>
                  <p className="text-road-dark/70 text-sm leading-relaxed mb-6 font-semibold">
                    Professional transfers to and from BIA Colombo or Mattala airports. Meet and greet service included.
                  </p>
                </div>
                <button className="flex items-center justify-between w-full group/btn cursor-pointer">
                  <span className="text-primary font-bold">Select Service</span>
                  <div className="bg-primary/10 group-hover/btn:bg-primary p-2 rounded-xl transition-all">
                    <span className="material-symbols-outlined text-primary group-hover/btn:text-white transition-colors">arrow_forward</span>
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Hotel Pickup Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col sm:flex-row group border border-black/5"
            >
              <div className="sm:w-2/5 h-52 sm:h-auto overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: "url('https://res.cloudinary.com/dnfbik3if/image/upload/v1771252811/daniel-klein-Qx8_d5dGhrs-unsplash_ioju8u.jpg')" }}
                />
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-between italic">
                <div>
                  <div className="flex items-center gap-2 text-accent-gold mb-3">
                    <span className="material-symbols-outlined">hotel</span>
                    <span className="text-xs font-extrabold uppercase tracking-widest">Convenient Pickups</span>
                  </div>
                  <h3 className="text-3xl font-black mb-3 text-road-dark italic uppercase tracking-tighter">Hotel Pickup & Drop</h3>
                  <p className="text-road-dark/70 text-sm leading-relaxed mb-6 font-semibold">
                    Reliable door-to-door shuttle service connecting you from your hotel to any destination in the island.
                  </p>
                </div>
                <button className="flex items-center justify-between w-full group/btn cursor-pointer">
                  <span className="text-primary font-bold">Select Service</span>
                  <div className="bg-primary/10 group-hover/btn:bg-primary p-2 rounded-xl transition-all">
                    <span className="material-symbols-outlined text-primary group-hover/btn:text-white transition-colors">arrow_forward</span>
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Long Distance Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col sm:flex-row group border border-black/5"
            >
              <div className="sm:w-2/5 h-52 sm:h-auto overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: "url('https://res.cloudinary.com/dnfbik3if/image/upload/v1771252810/anton-lecock-TPtaNsBOW9Q-unsplash_xjst26.jpg')" }}
                />
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-between italic">
                <div>
                  <div className="flex items-center gap-2 text-secondary mb-3">
                    <span className="material-symbols-outlined">distance</span>
                    <span className="text-xs font-extrabold uppercase tracking-widest">Island Wide</span>
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-text-dark">Long Distance Travel</h3>
                  <p className="text-road-grey text-sm leading-relaxed mb-6 font-medium">
                    Comfortable city-to-city transfers or custom tours with experienced multilingual drivers.
                  </p>
                </div>
                <button className="flex items-center justify-between w-full group/btn cursor-pointer">
                  <span className="text-primary font-bold">Select Service</span>
                  <div className="bg-primary/10 group-hover/btn:bg-primary p-2 rounded-xl transition-all">
                    <span className="material-symbols-outlined text-primary group-hover/btn:text-white transition-colors">arrow_forward</span>
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Multi-day Arrangements Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col sm:flex-row group border border-black/5"
            >
              <div className="sm:w-2/5 h-52 sm:h-auto overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: "url('https://res.cloudinary.com/dnfbik3if/image/upload/v1771252866/mike-swigunski-zDDQZgZjFtM-unsplash_epaz1s.jpg')" }}
                />
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-between italic">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <span className="material-symbols-outlined">calendar_month</span>
                    <span className="text-xs font-extrabold uppercase tracking-widest">Tour Experts</span>
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-text-dark">Tour & Arrangements</h3>
                  <p className="text-road-grey text-sm leading-relaxed mb-6 font-medium">
                    Customized multi-day transport plans and travel arrangements for your ultimate tour experience.
                  </p>
                </div>
                <button className="flex items-center justify-between w-full group/btn cursor-pointer">
                  <span className="text-primary font-bold">Select Service</span>
                  <div className="bg-primary/10 group-hover/btn:bg-primary p-2 rounded-xl transition-all">
                    <span className="material-symbols-outlined text-primary group-hover/btn:text-white transition-colors">arrow_forward</span>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="fleet" className="bg-pattern-blue py-32 relative overflow-hidden border-y border-black/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,99,157,0.03)_0%,transparent_70%)]"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-blue/5 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-blue/5 rounded-full blur-[100px]"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <div className="text-secondary font-black text-sm uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                  <span className="w-12 h-1.5 bg-secondary rounded-full"></span>
                  Professional Fleet
                </div>
                <h2 className="text-5xl lg:text-6xl font-black text-road-dark mb-6 italic uppercase tracking-tighter stylish-glow-text">Our Premium <span className="text-primary">Selection</span></h2>
                <p className="text-road-dark/70 text-lg font-bold leading-relaxed">Choose between our highly maintained hybrid vehicles for maximum comfort and fuel efficiency.</p>
              </div>
              <button className="flex items-center gap-2 text-primary font-black uppercase tracking-wider group cursor-pointer hover:translate-x-1 transition-transform">
                View All Vehicles
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Vehicle 1: Honda Shuttle */}
              <motion.div
                whileHover={{ y: -15 }}
                className="group relative bg-white rounded-[3.5rem] p-10 transition-all hover:shadow-2xl hover:shadow-primary/10 border border-accent-gold/20 shadow-xl shadow-black/5"
              >
                <div className="absolute top-10 right-10">
                  <span className="bg-primary text-white px-4 py-2 rounded-2xl font-black text-xs shadow-lg shadow-primary/20 uppercase tracking-tighter border border-white/20">Hybrid Luxury</span>
                </div>

                <div className="relative h-64 mb-8">
                  <img
                    src="https://res.cloudinary.com/dnfbik3if/image/upload/v1771253529/fit-lx-32-white_bxh03s.png"
                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal transition-transform duration-700 group-hover:scale-110"
                    alt="Honda Shuttle"
                  />
                </div>

                <div className="flex justify-between items-start italic">
                  <div>
                    <h3 className="text-4xl font-black text-road-dark mb-3 uppercase tracking-tighter italic">Honda Shuttle</h3>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2 text-road-dark/80 font-black text-sm uppercase tracking-wider">
                        <span className="material-symbols-outlined text-lg text-primary">person</span> 4 Seater
                      </div>
                      <div className="flex items-center gap-2 text-road-dark/80 font-black text-sm uppercase tracking-wider">
                        <span className="material-symbols-outlined text-lg text-primary">luggage</span> 3 Luggage
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Vehicle 2: Honda Fit */}
              <motion.div
                whileHover={{ y: -15 }}
                className="group relative bg-white rounded-[3.5rem] p-10 transition-all hover:shadow-2xl hover:shadow-primary/10 border border-accent-gold/20 shadow-xl shadow-black/5"
              >
                <div className="absolute top-10 right-10">
                  <span className="bg-secondary text-white px-4 py-2 rounded-2xl font-black text-xs shadow-lg shadow-secondary/20 uppercase tracking-tighter border border-white/20">Eco Comfort</span>
                </div>

                <div className="relative h-64 mb-8">
                  <img
                    src="https://res.cloudinary.com/dnfbik3if/image/upload/v1771257731/download_-_Edited_zwzuxb.png"
                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal transition-transform duration-700 group-hover:scale-110"
                    alt="Honda Fit"
                  />
                </div>

                <div className="flex justify-between items-start italic">
                  <div>
                    <h3 className="text-4xl font-black text-road-dark mb-3 uppercase tracking-tighter italic">Honda Fit</h3>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2 text-road-dark/80 font-black text-sm uppercase tracking-wider">
                        <span className="material-symbols-outlined text-lg text-primary">person</span> 4 Seater
                      </div>
                      <div className="flex items-center gap-2 text-road-dark/80 font-black text-sm uppercase tracking-wider">
                        <span className="material-symbols-outlined text-lg text-primary">luggage</span> 2 Luggage
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-gradient-orange min-h-screen flex items-center py-24 md:py-10 overflow-hidden relative">
          <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col items-center">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full font-black text-[10px] uppercase tracking-widest mb-4 shadow-xl shadow-primary/40">
                <span className="material-symbols-outlined text-sm">schedule</span>
                1 hr Response
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white mb-2 italic uppercase tracking-tighter stylish-glow-orange">Book <span className="text-primary">Now</span></h2>
              <p className="text-white/40 font-black max-w-lg mx-auto leading-tight text-xs lg:text-sm uppercase tracking-[0.2em] mb-4">Island-wide Premium Transit Service</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-form rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-16 relative overflow-hidden w-full shadow-2xl shadow-primary/10"
            >
              <form className="space-y-4 md:space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                {/* Name & WhatsApp & Email */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Name</label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-base">person</span>
                      <input type="text" placeholder="John Doe" className="w-full h-12 bg-white/20 border border-white/30 focus:bg-white/40 rounded-xl pl-10 pr-4 text-white outline-none transition-all font-bold text-sm" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">WhatsApp</label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-base">chat</span>
                      <input type="text" placeholder="+1..." className="w-full h-12 bg-white/20 border border-white/30 focus:bg-white/40 rounded-xl pl-10 pr-4 text-white outline-none transition-all font-bold text-sm" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Email</label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-base">mail</span>
                      <input type="email" placeholder="john@email.com" className="w-full h-12 bg-white/20 border border-white/30 focus:bg-white/40 rounded-xl pl-10 pr-4 text-white outline-none transition-all font-bold text-sm" />
                    </div>
                  </div>
                </div>

                {/* Pickup & Drop & Date */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Pickup</label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-base">location_on</span>
                      <input type="text" placeholder="From..." className="w-full h-12 bg-white/20 border border-white/30 focus:bg-white/40 rounded-xl pl-10 pr-4 text-white outline-none transition-all font-bold text-sm" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Drop</label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-base">near_me</span>
                      <input type="text" placeholder="To..." className="w-full h-12 bg-white/20 border border-white/30 focus:bg-white/40 rounded-xl pl-10 pr-4 text-white outline-none transition-all font-bold text-sm" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Date / Time</label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-base">today</span>
                      <input type="datetime-local" className="w-full h-12 bg-white/20 border border-white/30 rounded-xl pl-10 pr-4 text-white outline-none transition-all font-bold text-sm" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-end">
                  <div className="flex-1 w-full space-y-3">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Communication</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="comm_method" className="peer sr-only" />
                        <div className="w-5 h-5 border-2 border-white/20 rounded-full peer-checked:border-primary transition-all flex items-center justify-center">
                          <div className="w-2.5 h-2.5 bg-primary rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
                        </div>
                        <span className="font-bold text-white/60 text-[10px] uppercase tracking-widest group-hover:text-primary transition-colors">WhatsApp</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="comm_method" className="peer sr-only" />
                        <div className="w-5 h-5 border-2 border-white/20 rounded-full peer-checked:border-primary transition-all flex items-center justify-center">
                          <div className="w-2.5 h-2.5 bg-primary rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
                        </div>
                        <span className="font-bold text-white/60 text-[10px] uppercase tracking-widest group-hover:text-primary transition-colors">Email</span>
                      </label>
                    </div>
                  </div>

                  <button className="w-full md:w-auto flex-1 h-14 bg-primary hover:bg-primary/90 text-white font-black text-sm rounded-xl shadow-xl shadow-primary/40 transition-all flex items-center justify-center gap-3 py-2">
                    <span>SEND REQUEST</span>
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </form>

              {/* Direct Contact Options */}
              <div className="mt-8 pt-6 border-t border-white/10 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="#" className="flex items-center justify-center gap-2 h-12 bg-[#25D366] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-lg shadow-[#25D366]/20">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>WhatsApp Now</span>
                  </a>
                  <a href="#" className="flex items-center justify-center gap-2 h-12 bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-lg">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <section className="bg-pattern-green-light py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -mr-96 -mt-96"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-24">
              <span className="text-primary font-black text-xs uppercase tracking-[0.4em] mb-4">Plan Your Journey</span>
              <h2 className="text-5xl lg:text-7xl font-black text-road-dark mb-6 italic uppercase tracking-tighter">
                Popular <span className="text-primary">Destinations</span>
              </h2>
              <div className="w-24 h-2 bg-primary/20 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Galle",
                  distance: "150KM",
                  type: "Beaches / Nature / History",
                  places: "Unawatuna, Jungle Beach, Galle Fort",
                  markerPos: { x: "48%", y: "88%" },
                  img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1771254923/galle-fort_nscdgm.jpg"
                },
                {
                  name: "Sigiriya",
                  distance: "160KM",
                  type: "History / Culture / Adventure",
                  places: "Sigiriya Rock, Pidurangala, Minneriya",
                  markerPos: { x: "55%", y: "45%" },
                  img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1771252866/mike-swigunski-zDDQZgZjFtM-unsplash_epaz1s.jpg"
                },
                {
                  name: "Ella",
                  distance: "210KM",
                  type: "Nature / Mountains / Tea Estates",
                  places: "Nine Arch Bridge, Little Adam's Peak",
                  markerPos: { x: "65%", y: "68%" },
                  img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1771254759/yalulife_ella_1_opnbtk.jpg"
                },
                {
                  name: "Colombo",
                  distance: "35KM",
                  type: "City / Shopping / Nightlife",
                  places: "Lotus Tower, Galle Face, Pettah",
                  markerPos: { x: "42%", y: "62%" },
                  img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1771254848/colombo-sri-lanka-drone-view-1.jpg_hgfcrz.webp"
                }
              ].map((dest, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-black/5 border border-black/5 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-black italic uppercase tracking-tighter text-road-dark mb-8">
                      {dest.name}
                    </h3>

                    {/* Map Visualization */}
                    <div className="relative w-full aspect-3/4 mb-8 bg-brand-green-bg/30 rounded-3xl flex items-center justify-center p-6 border border-secondary/5">
                      <svg className="w-full h-full text-secondary/10 drop-shadow-sm" viewBox="0 0 100 150" fill="currentColor">
                        <path d="M50 5 C 60 10, 75 30, 80 50 C 85 70, 80 90, 75 110 C 70 130, 60 145, 50 145 C 40 145, 30 130, 25 110 C 20 90, 15 70, 20 50 C 25 30, 40 10, 50 5 Z" />
                        {/* Airport Marker (Colombo area) */}
                        <circle cx="42" cy="62" r="2" className="text-road-dark" />
                        {/* Route Line */}
                        <line x1="42" y1="62" x2={dest.markerPos.x.replace('%', '')} y2={dest.markerPos.y.replace('%', '')}
                          stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="4 2" className="opacity-40" />
                        {/* Destination Marker */}
                        <circle cx={dest.markerPos.x.replace('%', '')} cy={dest.markerPos.y.replace('%', '')} r="4" className="text-primary animate-pulse" />
                      </svg>

                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-black/5">
                        <span className="text-[10px] font-black italic text-primary">{dest.distance}</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Distance from Airport</label>
                        <p className="text-lg font-black text-road-dark italic">-{dest.distance}</p>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Destination type / for</label>
                        <p className="text-sm font-bold text-secondary italic leading-tight">{dest.type}</p>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Places</label>
                        <p className="text-sm font-bold text-road-dark/60 italic leading-snug">
                          {dest.places}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-black/5">
                      <button className="w-full h-12 rounded-2xl bg-road-dark text-white font-black text-xs uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-2 group/btn">
                        <span>Book Transfer</span>
                        <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                      </button>
                    </div>
                  </div>

                  {/* Hover Image Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none">
                    <img src={dest.img} className="w-full h-full object-cover grayscale" alt="" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Form Section */}


      </main>

      {/* Footer */}
      <footer className="bg-road-dark text-white/50 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-8 max-w-sm">
            <div className="flex items-center group cursor-pointer">
              <img src="/logo.png" alt="Pick & Drop Logo" className="h-28 w-auto object-contain transition-all duration-300 group-hover:scale-105 brightness-110" />
            </div>
            <p className="text-white/40 text-sm font-bold leading-relaxed uppercase tracking-wider">
              Premium island-wide shuttle and travel service in Sri Lanka. Punctual, Reliable, and Professional.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h4 className="text-white text-xs font-black uppercase tracking-[0.3em]">Navigate</h4>
              <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
                <a className="hover:text-primary transition-all" href="#home">Home</a>
                <a className="hover:text-primary transition-all" href="#fleet">Fleet</a>
                <a className="hover:text-primary transition-all" href="#services">Services</a>
                <a className="hover:text-primary transition-all" href="#contact">Contact</a>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-white text-xs font-black uppercase tracking-[0.3em]">Legal</h4>
              <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
                <a className="hover:text-primary transition-all" href="#">Privacy</a>
                <a className="hover:text-primary transition-all" href="#">Terms</a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-white/20">© 2024 Pick & Drop Sri Lanka.</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-[#1877F2] hover:text-white transition-all cursor-pointer group">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-linear-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all cursor-pointer group">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.690.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}
