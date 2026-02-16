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
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="text-primary flex items-center relative">
              <span className="material-symbols-outlined text-3xl font-bold drop-shadow-md transition-transform group-hover:-translate-y-1" style={{ fontVariationSettings: "'FILL' 1" }}>airport_shuttle</span>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent-gold rounded-full border-2 border-white"></div>
            </div>
            <h2 className="text-road-dark text-2xl font-black leading-tight tracking-tighter italic uppercase">
              <span className="text-primary">Pick</span>
              <span className="text-road-dark mx-0.5">&</span>
              <span className="text-secondary">Drop</span>
            </h2>
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
            <button className="hidden sm:flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
              <span>Book Now</span>
            </button>
            <button className="md:hidden text-road-dark">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* New Immersive Slider Section */}
        <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
          {/* Background Images with Cross-fade */}
          <AnimatePresence>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                style={{ backgroundImage: `url('${sliderItems[currentSlide].image}')` }}
              >
                <div className="absolute inset-0 hero-overlay"></div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            {/* Left Column: Content */}
            <div className="flex flex-col gap-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h1 className="text-white text-7xl lg:text-[10rem] font-black leading-none tracking-tighter drop-shadow-2xl italic">
                    {sliderItems[currentSlide].title}
                  </h1>
                  <p className="text-white/80 text-lg lg:text-xl font-medium max-w-md mt-6 leading-relaxed">
                    {sliderItems[currentSlide].description}
                  </p>
                  <div className="mt-10 flex items-center gap-4">
                    <button className="h-16 px-10 bg-primary text-white font-black text-lg rounded-full shadow-2xl shadow-primary/40 hover:scale-105 transition-all">
                      BOOK RIDE
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Vertical Swiper */}
            <div className="hidden lg:flex flex-col gap-4 items-end">
              {sliderItems.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ x: -10 }}
                  className={`relative w-64 h-32 rounded-3xl overflow-hidden cursor-pointer glass-card ${currentSlide === index ? 'active scale-110 shadow-2xl z-20' : 'opacity-60 grayscale-[0.5]'}`}
                >
                  <img src={item.image} className="absolute inset-0 w-full h-full object-cover" alt={item.title} />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-black text-xs tracking-widest uppercase">{item.title}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Slide Indicator */}
          <div className="absolute bottom-10 left-6 lg:hidden flex gap-2">
            {sliderItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1 rounded-full transition-all duration-300 ${currentSlide === i ? "w-8 bg-primary" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
        </section>

        {/* Service Category Cards */}
        <section id="services" className="bg-brand-orange-bg max-w-full px-6 py-32 relative z-20">
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
        <section id="contact" className="premium-dark-bg min-h-screen flex items-center py-24 md:py-10 overflow-hidden relative">
          <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col items-center">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full font-black text-[10px] uppercase tracking-widest mb-4 shadow-xl shadow-primary/40">
                <span className="material-symbols-outlined text-sm">schedule</span>
                1 hr Response
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white mb-2 italic uppercase tracking-tighter stylish-glow-text">Book <span className="text-primary">Now</span></h2>
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

                  <button className="w-full md:w-auto flex-1 h-14 bg-primary hover:bg-primary/90 text-white font-black text-sm rounded-xl shadow-xl shadow-primary/40 transition-all flex items-center justify-center gap-3">
                    <span>SEND REQUEST</span>
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </form>

              {/* Direct Contact Options */}
              <div className="mt-8 pt-6 border-t border-white/10 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="#" className="flex items-center justify-center gap-2 h-12 bg-[#25D366] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-lg shadow-[#25D366]/20">
                    <span className="material-symbols-outlined text-lg">chat</span> WhatsApp Now
                  </a>
                  <a href="#" className="flex items-center justify-center gap-2 h-12 bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-lg">
                    <span className="material-symbols-outlined text-lg">photo_camera</span> Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Destinations Section */}

        {/* Our Fleet Section */}
        <section id="fleet" className="bg-brand-green-bg py-32 relative overflow-hidden border-y border-black/5">
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

        {/* Popular Destinations Section */}
        <section className="bg-white py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-20">
              <span className="text-primary font-black text-xs uppercase tracking-[0.4em] mb-4">Curated Experiences</span>
              <h2 className="text-5xl lg:text-7xl font-black text-road-dark mb-6 italic uppercase tracking-tighter">
                Sought-after <span className="text-primary">Escapes</span>
              </h2>
              <p className="text-road-dark/50 text-lg font-bold max-w-2xl leading-relaxed">
                Seamless travel to Sri Lanka's most iconic landscapes, from golden coasts to misty highlands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 h-auto md:h-[900px]">
              {/* Featured: Sigiriya (Large Vertical) */}
              <motion.div
                whileHover={{ y: -10 }}
                className="md:col-span-2 md:row-span-2 relative rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl"
              >
                <img src="https://res.cloudinary.com/dnfbik3if/image/upload/v1771252866/mike-swigunski-zDDQZgZjFtM-unsplash_epaz1s.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Sigiriya" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-10 text-white">
                  <span className="bg-primary/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Historical Marvel</span>
                  <h4 className="text-5xl font-black mb-4 italic uppercase tracking-tighter">Sigiriya</h4>
                  <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 font-bold text-sm">
                      <span className="material-symbols-outlined text-primary">distance</span> 160km
                    </div>
                    <div className="flex items-center gap-2 font-bold text-sm">
                      <span className="material-symbols-outlined text-primary">schedule</span> 4 Hours
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Colombo (Horizontal Top) */}
              <motion.div
                whileHover={{ y: -10 }}
                className="md:col-span-2 md:row-span-1 relative rounded-[3rem] overflow-hidden group cursor-pointer shadow-xl"
              >
                <img src="https://res.cloudinary.com/dnfbik3if/image/upload/v1771254848/colombo-sri-lanka-drone-view-1.jpg_hgfcrz.webp" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Colombo" />
                <div className="absolute inset-0 bg-linear-to-tr from-black/70 via-black/10 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-2">Colombo</h4>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">The Commercial Heart</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">35km</span>
                    <span className="text-xs font-black px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">45 Mins</span>
                  </div>
                </div>
              </motion.div>

              {/* Negombo (Horizontal Mid) */}
              <motion.div
                whileHover={{ y: -10 }}
                className="md:col-span-2 md:row-span-1 relative rounded-[3rem] overflow-hidden group cursor-pointer shadow-xl"
              >
                <img src="https://res.cloudinary.com/dnfbik3if/image/upload/v1771257423/360_F_293750256_GUPMyruD3enUZ9EAXVXqwdzSkfV98QRE_rmrilp.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Negombo" />
                <div className="absolute inset-0 bg-linear-to-tr from-black/70 via-black/10 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-2">Negombo</h4>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">Golden Shores</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">12km</span>
                    <span className="text-xs font-black px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">20 Mins</span>
                  </div>
                </div>
              </motion.div>

              {/* Galle (Horizontal Bottom Left) */}
              <motion.div
                whileHover={{ y: -10 }}
                className="md:col-span-2 md:row-span-1 relative rounded-[3rem] overflow-hidden group cursor-pointer shadow-xl"
              >
                <img src="https://res.cloudinary.com/dnfbik3if/image/upload/v1771254923/galle-fort_nscdgm.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Galle" />
                <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-2">Galle</h4>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black px-3 py-1 bg-primary/20 backdrop-blur-md rounded-lg border border-primary/30">150km</span>
                    <span className="text-xs font-black px-3 py-1 bg-primary/20 backdrop-blur-md rounded-lg border border-primary/30">2.5 Hours</span>
                  </div>
                </div>
              </motion.div>

              {/* Ella (Horizontal Bottom Right) */}
              <motion.div
                whileHover={{ y: -10 }}
                className="md:col-span-2 md:row-span-1 relative rounded-[3rem] overflow-hidden group cursor-pointer shadow-xl"
              >
                <img src="https://res.cloudinary.com/dnfbik3if/image/upload/v1771254759/yalulife_ella_1_opnbtk.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Ella" />
                <div className="absolute inset-0 bg-linear-to-bl from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white text-right">
                  <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-2">Ella</h4>
                  <div className="flex items-center justify-end gap-4">
                    <span className="text-xs font-black px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">210km</span>
                    <span className="text-xs font-black px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">5 Hours</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Payment Form Section */}

        <section className="bg-brand-gold-bg py-32 relative overflow-hidden border-t border-black/5">
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
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
      </main>

      {/* Footer */}
      <footer className="bg-road-dark text-white/50 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-8 max-w-sm">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="text-primary flex items-center">
                <span className="material-symbols-outlined text-5xl font-black transition-transform group-hover:-translate-y-1" style={{ fontVariationSettings: "'FILL' 1" }}>airport_shuttle</span>
              </div>
              <h2 className="text-white text-4xl font-black leading-tight tracking-tighter italic uppercase">
                <span className="text-primary">Pick</span>
                <span className="text-white mx-0.5">&</span>
                <span className="text-secondary">Drop</span>
              </h2>
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
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white transition-all cursor-pointer">
              <span className="material-symbols-outlined">facebook</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white transition-all cursor-pointer">
              <span className="material-symbols-outlined">photo_camera</span>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}
