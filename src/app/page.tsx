"use client";

import React, { useState, useEffect } from "react";

import { toast, Toaster } from "sonner";

import { Map } from "lucide-react";

// --- Hero Carousel Data ---
// --- Hero Slider Data ---
// --- Destination Data with Multiple Images ---
const destinations = [
  {
    name: "Galle",
    distance: "150KM",
    type: "Beaches / Nature / History/Nightlife",
    places: "Unawatuna, Jungle Beach, Galle Fort",
    markerPos: { x: "48%", y: "88%" },
    images: [
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772631708/Untitled_design_10_uyncjn.jpg",
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
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772631543/Untitled_design_8_svdadl.jpg",
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772078183/WhatsApp_Image_2026-02-23_at_20.51.43_mvard9.jpg",
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772078902/WhatsApp_Image_2026-02-23_at_20.52.02_daiqcj.jpg"
    ],
    mapImg: "/Sigiriya.png"
  },
  {
    name: "Ella",
    distance: "210KM",
    type: "Nature / Mountains / Tea Estates/Nightlife",
    places: "Nine Arch Bridge, Little Adam's Peak",
    markerPos: { x: "65%", y: "68%" },
    images: [
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772631640/Untitled_design_9_ic0goo.jpg",
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1771254759/yalulife_ella_1_opnbtk.jpg",
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772078925/WhatsApp_Image_2026-02-23_at_20.51.49_cavrzs.jpg"
    ],
    mapImg: "/Ella.png"
  },
  {
    name: "Colombo",
    distance: "35KM",
    type: "City / Shopping / Nightlife/port city",
    places: "Lotus Tower, Galle Face, Port City",
    markerPos: { x: "42%", y: "62%" },
    images: [
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772631373/Untitled_design_6_bujgvr.jpg",
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772078883/WhatsApp_Image_2026-02-23_at_20.51.55_1_addldw.jpg",
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1772078883/WhatsApp_Image_2026-02-23_at_20.51.55_f3jbeg.jpg"
    ],
    mapImg: "/Colombo.png"
  }
];

// --- Hero Images ---
const heroDesktop = "https://res.cloudinary.com/dnfbik3if/image/upload/v1772122284/89ef5768ada38b95bdd077e38b74af0f_xeankj.jpg";
const heroMobile = "https://res.cloudinary.com/dnfbik3if/image/upload/v1772544414/89ef5768ada38b95bdd077e38b74af0f_xeankj_qwp3w2.jpg";

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
      <img
        src={images[index]}
        className="absolute inset-0 object-cover w-full h-full transition-opacity duration-1000"
        alt="Destination View"
      />
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

const testimonialsData = [
  {
    id: 1,
    name: "Kasun Silva",
    text: "Outstanding service! The driver was professional, and the vehicle was very comfortable for our family trip from BIA to Ella.",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    name: "Sarah M.",
    text: "Highly recommended for airport transfers. The booking process was seamless, and the driver arrived right on time.",
    image: "https://i.pravatar.cc/150?img=47"
  },
  {
    id: 3,
    name: "James Fernando",
    text: "The best travel experience we had in Sri Lanka. The multi-day tour plan was perfectly organized. Thank you Pick & Drop!",
    image: "https://i.pravatar.cc/150?img=12"
  }
];

const TestimonialsSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonialsData.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-4xl md:rounded-[2.5rem] pt-12 pb-14 px-4 sm:p-8 md:p-12 border border-white/20 bg-black/40 backdrop-blur-lg shadow-2xl group transition-all duration-500 hover:border-white/30 hover:bg-black/45">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[90px] -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/15 rounded-full blur-[90px] -ml-32 -mb-32"></div>

      <div className="lg:mt-10 relative z-10 flex flex-col items-center justify-center text-center min-h-[220px] md:min-h-[280px]">
        <div className="flex flex-col items-center w-full justify-between h-full py-4 pb-8 md:pb-4">
          <div className="relative mb-5 md:mb-6">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-full blur-md opacity-60"></div>
            <img
              src={testimonialsData[index].image}
              alt={testimonialsData[index].name}
              className="w-24 h-24 md:w-auto md:h-28 rounded-full object-cover border-[3px] border-white shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 bg-primary text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 border-white shadow-lg z-20">
              <span className="material-symbols-outlined text-[14px] md:text-base">format_quote</span>
            </div>
          </div>

          <p className="text-white/90 text-[13px] lg:text-[2.5vh] h-32 md:h-fit sm:text-sm md:text-base font-bold italic leading-relaxed max-w-2xl mb-6 md:mb-8 px-2 drop-shadow-md">
            "{testimonialsData[index].text}"
          </p>

          <h4 className="text-base sm:text-lg md:text-xl lg:text-[3.5vh] font-black text-white uppercase tracking-widest drop-shadow-lg">
            {testimonialsData[index].name}
          </h4>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={handlePrev}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={handleNext}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-primary" : "w-1.5 bg-white/30 hover:bg-primary/50"
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const commMethod = data.comm_method;

    if (commMethod === "WhatsApp") {
      // WhatsApp Logic
      const message = `*New Booking Request*%0A%0A` +
        `*Name:* ${data.name}%0A` +
        `*WhatsApp:* ${data.whatsapp}%0A` +
        `*Email:* ${data.email}%0A` +
        `*Pickup:* ${data.pickup}%0A` +
        `*Drop:* ${data.drop}%0A` +
        `*Date:* ${data.date}%0A` +
        `*Time:* ${data.time}`;

      // Using the primary WhatsApp number provided by user
      const whatsappUrl = `https://wa.me/94772757097?text=${message}`;
      window.open(whatsappUrl, "_blank");
      toast.success("Redirecting to WhatsApp...");
      setIsSubmitting(false);
    } else {
      // Email Logic (Web3Forms)
      formData.append("access_key", "9233f8a5-fa40-4d91-b477-0b805eacc997");
      formData.append("subject", `New Booking from ${data.name}`);
      formData.append("from_name", "Pick & Drop Booking");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const resData = await response.json();
        if (resData.success) {
          toast.success("Thank you for contacting us! We'll get back to you soon.");
          (e.target as HTMLFormElement).reset();
        } else {
          toast.error("Failed to send email: " + resData.message);
        }
      } catch (err) {
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

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

  const navLinks = ["home", "services", "testimonials", "fleet", "destinations", "why-us", "contact"];

  return (
    <div className="bg-road-dark text-road-dark h-dvh overflow-y-auto lg:snap-y lg:snap-mandatory scroll-smooth font-poppins">
      <Toaster position="top-right" richColors duration={3000} />
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6 lg:px-20 lg:h-[10vh] flex items-center">
        <div className="mx-6 md:mx-20 flex items-center justify-between w-full">
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
                className={`text-xs lg:text-[1.8vh] font-black transition-all duration-300 uppercase tracking-widest relative group ${activeSection === item ? "text-orange-500" : "text-road-dark hover:text-orange-500"}`}
                href={`#${item}`}
              >
                {item.replace("-", " ")}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${activeSection === item ? "w-full" : "w-0 group-hover:w-full"}`} />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:flex min-w-[120px] lg:min-w-[10vw] cursor-pointer items-center justify-center rounded-xl h-10 lg:h-[5vh] px-6 bg-orange-500 text-white text-[10px] lg:text-[1.8vh] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-orange-700 transition-all">
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
      {menuOpen && (
        <>
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          />
          <div
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
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${activeSection === item
                    ? "bg-primary/10 text-primary"
                    : "text-road-dark hover:bg-gray-100"
                    }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${activeSection === item ? "bg-primary" : "bg-black/20"}`} />
                  {item.replace("-", " ")}
                </a>
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
          </div>
        </>
      )}

      <main>
        {/* New Immersive Slider Section */}
        <section id="home" className="relative h-dvh w-full flex items-center justify-center px-0 overflow-hidden snap-start snap-always scroll-mt-0">
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

          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full h-full flex flex-col pt-20 md:pt-[12vh] lg:pt-[14vh] 2xl:pt-[11vh]">
            {/* Center Content Area */}
            <div className="flex-1 flex items-center justify-center w-full">
              <div className="w-full text-center space-y-6 md:space-y-10">
                <div className="space-y-3 md:space-y-6">
                  <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[7.5vh] 2xl:text-[9vh] font-black italic uppercase   drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    Pick  and  Drop <br />
                    <span className="text-secondary italic ">Shuttle Service</span>
                  </h1>
                  <span className="inline-block px-8 py-2.5 bg-black/80 backdrop-blur-md rounded-full text-white font-black text-[10px] md:text-[13px] lg:text-[1.8vh] uppercase  border border-primary/60 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    Hassle-free <span className="text-secondary mx-2">   Airport Transfers  </span> in Sri Lanka
                  </span>
                </div>

                {/* Our Values Section */}
                <div className="space-y-3 md:space-y-8">

                  <div className="flex items-center gap-4 md:gap-6 justify-center">
                    <div className="h-px w-10 md:w-16 bg-linear-to-r from-transparent to-white/20"></div>
                    <span className="text-white text-[9px] md:text-[10px] lg:text-[1.4vh] font-black uppercase tracking-[0.5em]">Our Core Values</span>
                    <div className="h-px w-10 md:w-16 bg-linear-to-l from-transparent to-white/20"></div>
                  </div>



                  <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                    {[
                      { text: "Spacious", icon: "directions_car" },
                      { text: "Reliability", icon: "verified" },
                      { text: "Clean", icon: "cleaning_services" },
                      { text: "Ontime", icon: "schedule" },
                      { text: "Convenience", icon: "thumb_up" },
                    ].map((value, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 md:px-5 md:py-3 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-black/60 hover:border-primary/50 transition-all cursor-default shadow-lg w-[140px] sm:w-[160px] md:w-[210px]"
                      >
                        <span className="material-symbols-outlined text-secondary text-lg md:text-xl drop-shadow-[0_0_8px_rgba(253,185,19,0.4)]">{value.icon}</span>
                        <span className="text-white text-[12px] md:text-[13px] lg:text-[1.7vh] font-black uppercase tracking-widest leading-none drop-shadow-md">{value.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-1 flex flex-col items-center mb-2 md:mb-8">
                  <a href="#contact" className="group relative w-full sm:w-auto">
                    <div className="absolute inset-0 bg-primary blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
                    <button className="relative w-full sm:w-auto h-14 md:h-16 lg:h-[8.5vh] px-10 md:px-12 bg-primary text-white font-black text-lg md:text-lg lg:text-[2.2vh] rounded-full shadow-[0_20px_50px_rgba(46,125,50,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 uppercase">
                      BOOK NOW
                      <span className="material-symbols-outlined">south</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Aligned Payment Bar */}
            <div className="w-full md:max-w-4xl pb-14 md:pb-[10vh] lg:pb-[12vh] mx-auto gap-y-3 ">
              <div className="relative flex flex-col items-center gap-4 py-4 md:gap-6 md:py-6 border-t border-white/10 mb-4 md:mb-8">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="h-px w-10 md:w-16 bg-linear-to-r from-transparent to-white/20"></div>
                  <span className="text-white text-[9px] md:text-[10px] lg:text-[1.4vh] font-black uppercase tracking-[0.5em]">We Accept</span>
                  <div className="h-px w-10 md:w-16 bg-linear-to-l from-transparent to-white/20"></div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-12  md:gap-y-8 px-4 m ">
                  {/* Visa */}
                  <div className="group/icon cursor-help transition-all duration-300   rounded-lg hover:scale-110">
                    <img
                      src="/visa.png"
                      className="h-8 md:h-12 2xl:h-14 w-16 lg:w-auto opacity-100 transition-opacity  "
                      alt="Visa"
                    />
                  </div>

                  {/* Mastercard */}
                  <div className="group/icon cursor-help transition-all duration-300 hover:scale-110">
                    <img
                      src="/master.png"
                      className="h-8 md:h-12 2xl:h-14 w-auto opacity-100 transition-opacity"
                      alt="Mastercard"
                    />
                  </div>

                  {/* Amex */}
                  <div className="group/icon cursor-help transition-all duration-300 hover:scale-110">
                    <img
                      src="/amex.png"
                      className="h-8 md:h-12 2xl:h-14 w-auto opacity-100 transition-opacity"
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
                  <div className="group/icon cursor-help transition-all duration-300 hover:scale-110 mt-3 md:mt-0">
                    <img
                      src="/cash.png"
                      className="h-8 md:h-12 2xl:h-14 w-auto opacity-100 transition-opacity"
                      alt="Cash"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Category Cards */}
        <section id="services" className="min-h-dvh md:h-dvh md:max-h-screen flex items-center snap-start snap-always scroll-mt-0 bg-pattern-green max-w-full px-6 pt-10 pb-14 relative z-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

          <div className="md:mx-20 w-full">
            <div className="text-left mb-8">
              {/* Consistent section title design */}
              <p className="text-primary font-black text-[10px] md:text-xs lg:text-[1.8vh] uppercase tracking-[0.4em] mb-3">What We Offer</p>
              <h2 className="text-2xl sm:text-3xl lg:text-[6vh] font-black text-road-dark italic uppercase leading-none">Our Core <span className="text-primary mx-3">Services</span></h2>
              <div className="w-16 h-1.5 bg-primary rounded-full mt-4 shadow-lg shadow-primary/20"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
              {[
                { icon: "flight_takeoff", badge: "Premium Service", title: "Airport Transfers", desc: "Professional transfers to and from BIA Colombo or Mattala airports. Meet and greet service included.", img: "https://res.cloudinary.com/dnfbik3if/image/upload/v1772250518/WhatsApp_Image_2026-02-26_at_23.00.20_bb6ygg.jpg" },
                { icon: "hotel", badge: "Convenient Pickups", title: "Hotel Pickups", desc: "Reliable door-to-door shuttle service connecting you from your hotel to any corner of the island.", img: "/images/hotel_pickups.png" },
                { icon: "distance", badge: "Island Wide", title: "Long Distance", desc: "Comfortable city-to-city transfers or custom tours with experienced professional drivers.", img: "/images/long_distance.png" },
                { icon: "calendar_month", badge: "Tour Experts", title: "Tours & Plans", desc: "Customized multi-day transport plans and travel arrangements for your tour experience.", img: "/images/tours_and_plans.png" },
              ].map((svc, i) => (
                <div
                  key={i}
                  className="rounded-3xl overflow-hidden flex flex-row group relative border border-primary/50 md:border-white transition-all duration-500 hover:scale-[1.02] hover:border-primary/50 drop-shadow-lg shadow-primary/20 bg-white/20 backdrop-blur-md"
                >
                  {/* Top shine edge */}



                  {/* Image panel */}
                  <div className="w-[38%] shrink-0 overflow-hidden relative">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 min-h-[160px]"
                      style={{ backgroundImage: `url('${svc.img}')` }}
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-primary/25 to-primary/5 mix-blend-multiply" />
                    <div className="absolute inset-y-0 right-0 w-8 bg-linear-to-l from-white/20 to-transparent" />
                  </div>

                  {/* Content panel — frosted glass */}
                  <div
                    className="p-4 flex-1 flex flex-col justify-between italic border-l border-white/50 relative z-10 bg-white/10"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-accent-blue mb-2">
                        <span className="material-symbols-outlined text-[10px] lg:text-[1.5vh]">{svc.icon}</span>
                        <span className="text-[10px] lg:text-[1.5vh] text-accent-blue font-black uppercase tracking-[0.2em]">{svc.badge}</span>
                      </div>
                      <h3 className="text-base lg:text-[3vh] font-black mb-1.5 text-road-dark italic uppercase leading-tight group-hover:text-primary transition-colors">{svc.title}</h3>
                      <p className="text-road-dark/60 text-[10px] lg:text-[2vh] leading-relaxed mb-3 font-bold">{svc.desc}</p>
                    </div>
                    <a href="#contact" className="flex items-center justify-between w-full group/btn cursor-pointer mt-auto border-t border-white/40 pt-2 transition-all hover:opacity-80">
                      <span className="text-orange-500 font-black uppercase tracking-widest text-[11px] lg:text-[1.8vh]">Select Now</span>
                      <div className="bg-white/50 backdrop-blur-md border border-white/70 group-hover/btn:bg-orange-500 p-2 rounded-xl transition-all shadow-sm group-hover/btn:shadow-primary/30">
                        <span className="material-symbols-outlined text-xs text-orange-500 group-hover/btn:text-white transition-colors">arrow_forward</span>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section >

        {/* Testimonials Section */}
        <section id="testimonials" className="h-auto md:h-dvh md:max-h-screen flex flex-col items-center justify-start md:justify-center pt-12 pb-16 md:pt-0 lg:pt-12 md:pb-0 snap-start snap-always scroll-mt-0 relative overflow-hidden">
          {/* Background Image and Overlay */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://res.cloudinary.com/dnfbik3if/image/upload/v1772078183/WhatsApp_Image_2026-02-23_at_20.51.43_mvard9.jpg')` }}
          ></div>
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm z-0"></div>

          <div className="px-6 md:px-20 relative z-10 w-full mb-0 md:mb-8">
            <div className="mb-2 md:mb-8 border-b border-white/10 pb-5">
              <p className="text-primary font-black text-[10px] md:text-xs lg:text-[1.8vh] uppercase tracking-[0.4em] mb-3 drop-shadow-md">What They Say</p>
              <h2 className="text-2xl  sm:text-3xl lg:text-[6vh] font-black text-white italic uppercase leading-none drop-shadow-lg">
                Client <span className="text-primary">Testimonials</span>
              </h2>
              <div className="w-16 h-1 mb-2 bg-primary rounded-full mt-4 shadow-[0_0_15px_rgba(253,185,19,0.5)]"></div>
            </div>

            <div className="mt-4 md:mt-12 lg:mt-14">
              <TestimonialsSlider />
            </div>
          </div>
        </section>
        <section id="fleet" className="min-h-dvh md:h-dvh md:max-h-screen flex items-center snap-start snap-always scroll-mt-0 bg-pattern-yellow pt-10 pb-14 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.06)_0%,transparent_70%)]"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] -ml-64 -mb-64"></div>

          <div className="md:mx-20 px-6 md:px-0 w-full relative z-10">
            <div className="mb-8 lg:mb-12 border-b border-primary/20 pb-6 lg:pb-8 lg:mt-10">
              {/* Consistent section title design */}
              <p className="text-primary font-black text-[10px] md:text-xs lg:text-[1.8vh] uppercase tracking-[0.4em] mb-3">Our Vehicles</p>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[6vh] font-black text-road-dark italic uppercase leading-none">
                    Our Premium <span className="text-primary">Selection</span>
                  </h2>
                  <div className="w-16 h-1.5 bg-primary rounded-full mt-4 shadow-lg shadow-primary/20"></div>
                </div>

              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 md:mx-20">
              {/* Vehicle 1: Honda Shuttle */}
              <div
                className="group relative bg-sky-blue/10 backdrop-blur-3xl rounded-4xl p-6 lg:p-8 transition-all duration-500 hover:scale-[1.05] hover:border-primary/40 border border-sky-blue/20 shadow-[0_30px_60px_-15px_rgba(0,99,157,0.15)] overflow-hidden"
              >
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-sm">
                      <span className="material-symbols-outlined text-sm lg:text-[2vh] text-orange-500">person</span>
                      <span className="text-orange-500 font-black text-[15px] lg:text-[1.8vh] uppercase tracking-wider">3 Passengers</span>
                    </div>

                  </div>
                </div>

                <div className="relative h-32 lg:h-44 mb-4 flex items-center justify-center">
                  <img

                    src="https://res.cloudinary.com/dnfbik3if/image/upload/v1771257731/download_-_Edited_zwzuxb.png"
                    className="w-full md:scale-110 lg:scale-150 h-full object-contain transition-all duration-700 group-hover:scale-150  drop-shadow-[0_15px_30px_rgba(0,163,255,0.3)] md:drop-shadow-none group-hover:drop-shadow-[0_15px_30px_rgba(0,163,255,0.3)]"
                    alt="Honda Shuttle"
                  />
                </div>

                <div className="flex justify-between items-end italic relative z-10">
                  <div>
                    <h3 className="text-xl lg:text-[4vh] font-black text-road-dark uppercase italic leading-none group-hover:text-primary transition-colors">Honda Shuttle</h3>
                    <p className="text-primary text-[11px] lg:text-[1.8vh] font-black uppercase tracking-[0.2em] mt-1">Comfort Station Wagon</p>
                  </div>
                  <a href="#contact" className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl group-hover:bg-primary transition-all">
                    <span className="text-primary group-hover:text-white text-[10px] lg:text-[1.8vh] font-black uppercase tracking-widest">Book Now</span>
                    <span className="material-symbols-outlined text-sm lg:text-[2vh] text-primary group-hover:text-white">near_me</span>
                  </a>
                </div>
              </div>

              {/* Vehicle 2: Honda Fit */}
              <div
                className="group relative bg-sky-blue/10 backdrop-blur-3xl rounded-4xl p-6 lg:p-8 transition-all duration-500 hover:scale-[1.05] hover:border-primary/40 border border-sky-blue/20 shadow-[0_30px_60px_-15px_rgba(0,99,157,0.15)] overflow-hidden"
              >
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5   bg-white/20 backdrop-blur-lg rounded-full border border-white/30 shadow-sm">
                      <span className="material-symbols-outlined text-sm text-orange-500">person</span>
                      <span className="text-orange-500 font-black text-[15px] uppercase tracking-wider">3 Passengers</span>
                    </div>

                  </div>
                </div>

                <div className="relative h-32 lg:h-44 mb-4 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dnfbik3if/image/upload/v1772544135/fit-lx-32-white_bxh03s_yasemu.png"
                    className="w-fill h-full  scale-110 lg:scale-150 object-contain    drop-shadow-[0_15px_30px_rgba(0,163,255,0.3)] md:drop-shadow-none group-hover:drop-shadow-[0_15px_30px_rgba(0,163,255,0.3)]"
                    alt="Honda Fit"
                  />
                </div>

                <div className="flex justify-between items-end italic relative z-10">
                  <div>
                    <h3 className="text-xl lg:text-[4vh] font-black text-road-dark uppercase italic leading-none group-hover:text-primary transition-colors">Honda Fit</h3>
                    <p className="text-primary text-[11px] lg:text-[1.8vh] font-black uppercase tracking-[0.2em] mt-1">Smart Hybrid Hatchback</p>
                  </div>
                  <a href="#contact" className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl group-hover:bg-primary transition-all">
                    <span className="text-primary group-hover:text-white text-[10px] font-black uppercase tracking-widest">Book Now</span>
                    <span className="material-symbols-outlined text-sm text-primary group-hover:text-white">near_me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Popular Destinations Section */}

        {/* Our Fleet Section */}


        {/* Popular Destinations Section */}
        <section id="destinations" className="min-h-dvh md:h-dvh md:max-h-screen flex items-center snap-start snap-always scroll-mt-0 bg-pattern-yellow pt-10 md:pt-20 lg:pt-24 md:pb-20 pb-14 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] -mr-96 -mt-96"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -ml-96 -mb-96"></div>

          <div className="md:mx-20 px-6 md:px-0 relative z-10 w-full mt-5 lg:mt-20">
            {/* Consistent section title design */}
            <div className="mb-6 lg:mb-0 border-b border-road-dark/10 pb-5">
              <p className="text-primary font-black text-[10px] md:text-xs lg:text-[1.8vh] uppercase tracking-[0.4em] mb-3">Plan Your Journey</p>
              <h2 className="text-2xl sm:text-3xl lg:text-[6vh] font-black text-road-dark italic uppercase leading-none">
                Popular <span className="text-primary">Destinations</span>
              </h2>
              <div className="w-16 h-1.5 bg-primary rounded-full mt-1 shadow-lg shadow-primary/20"></div>
            </div>

            {/* Mobile: vertical flex-col. Desktop: 4-col grid */}
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 2xl:mx-[10vh] mt-2">
              {destinations.map((dest, i) => (
                <div
                  key={i}
                  className="rounded-[2rem] overflow-hidden border border-white/60 hover:border-secondary/50 group relative bg-white/25 backdrop-blur-3xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:shadow-[0_16px_50px_rgba(253,185,19,0.15)] transition-all duration-500 hover:scale-[1.05] flex flex-col"
                >
                  <div className="absolute -right-10 -top-10 w-40 h-72 md:h-40 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors duration-700 z-0" />

                  {/* Mobile: fixed tall height. Desktop: portrait aspect ratio */}
                  <div className="relative w-full h-72 sm:h-80 md:h-56 md:aspect-3/4 overflow-hidden">
                    <DestinationGallery images={dest.images} />


                  </div>

                  <div className="flex flex-col flex-1 p-4 relative z-10 bg-white/45 backdrop-blur-lg border-t border-white/50 group-hover:bg-white/55 transition-colors duration-500">
                    <div className="mb-2">
                      <div className="flex justify-between items-start mb-1.5">
                        <h3 className="text-2xl lg:text-[3.5vh] font-black italic uppercase text-road-dark group-hover:text-primary transition-colors leading-none">
                          {dest.name}
                        </h3>
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 shadow-sm">
                          <span className="material-symbols-outlined text-[10px] lg:text-[1.8vh] text-orange-500">distance</span>
                          <span className="text-[10px] lg:text-[1.8vh] font-black text-orange-500 uppercase tracking-wider ">{dest.distance}</span>
                        </div>
                      </div>

                    </div>

                    <div className="flex-1 space-y-6 mb-8">
                      {/* Iconic Places Section */}
                      <div className="relative group/places">
                        <div className="flex items-center gap-3 text-primary mb-2.5">
                          <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center group-hover/places:scale-110 transition-transform duration-300">
                            <Map size={16} strokeWidth={2.5} />
                          </div>
                          <span className="text-[11px] lg:text-[1.8vh] font-black uppercase tracking-widest leading-none">Iconic Places</span>
                        </div>
                        <div className="pl-4 ml-4 border-l-2 border-primary/20">
                          <p className="text-road-dark/70 font-bold text-xs lg:text-[2vh] leading-relaxed">
                            {dest.places}
                          </p>
                        </div>
                      </div>

                      {/* Travel Theme Badges - Replacing redundant Destination Value */}
                      <div className="relative group/theme">
                        <div className="flex items-center gap-3 text-sky-blue mb-2.5">
                          <div className="w-8 h-8 rounded-xl bg-sky-blue/15 flex items-center justify-center group-hover/theme:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-[18px]">verified</span>
                          </div>
                          <span className="text-[11px] lg:text-[1.8vh] font-black uppercase tracking-widest leading-none">Travel Theme</span>
                        </div>
                        <div className="pl-4 ml-4 border-l-2 border-sky-blue/20 flex flex-wrap gap-2">
                          {dest.type.split('/').map((tag, idx) => (
                            <span key={idx} className="px-2.5 py-1 bg-white/60 backdrop-blur-md rounded-lg text-road-dark/70 font-black text-[9px] lg:text-[1.6vh] uppercase tracking-widest border border-white/50 shadow-sm">
                              {tag.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="group/btn relative w-full h-10 lg:h-[5vh] rounded-2xl bg-road-dark text-white font-black text-[10px] lg:text-[1.8vh] uppercase tracking-[0.2em] overflow-hidden flex items-center justify-center gap-3 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20"
                    >
                      <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                      <span className="relative z-10 flex items-center gap-3">
                        Book Your Trip
                        <span className="material-symbols-outlined text-base lg:text-[2.5vh] group-hover/btn:translate-x-1.5 transition-transform duration-300">trending_flat</span>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="why-us" className="min-h-dvh md:h-dvh md:max-h-screen flex items-center snap-start snap-always scroll-mt-0 bg-pattern-yellow pt-10 lg:pt-20 lg:pb-10 pb-14 relative overflow-hidden border-t border-black/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>

          <div className="md:mx-20 px-6 md:px-0 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              {/* Left Column: Features */}
              <div className="space-y-8 lg:space-y-12">
                <div
                  className="space-y-8 lg:space-y-12"
                >
                  {/* Consistent section title design */}
                  <p className="text-primary font-black text-[10px] md:text-xs lg:text-[1.8vh] uppercase tracking-[0.4em] mb-3 mt-4">The Pick &amp; Drop Edge</p>
                  <h2 className="text-3xl lg:text-[6vh] font-black text-road-dark mb-4 italic uppercase leading-none">Why <span className="text-primary">Choose</span> Us?</h2>
                  <div className="w-16 h-1.5 bg-primary rounded-full shadow-lg shadow-primary/20"></div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: "verified_user", title: "Professional Drivers", desc: "Punctual and courteous drivers with years of experience on Sri Lankan roads.", bg: "bg-primary/20", iconColor: "text-primary" },
                    { icon: "airport_shuttle", title: "Modern Fleet", desc: "Wide range of well-maintained, air-conditioned vehicles to suit your group size.", bg: "bg-secondary/20", iconColor: "text-secondary" },
                    { icon: "support_agent", title: "24/7 Support", desc: "Round-the-clock customer assistance for real-time tracking and help.", bg: "bg-sky-blue/20", iconColor: "text-sky-blue" }
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 lg:p-9 rounded-3xl bg-sky-blue/12 backdrop-blur-md border border-sky-blue/20 hover:bg-sky-blue/18 hover:border-primary/40 group shadow-[0_20px_50px_-12px_rgba(0,99,157,0.12)] transition-colors duration-500"
                    >
                      <div className={`shrink-0 w-12 lg:w-16 h-12 lg:h-16 ${feature.bg} backdrop-blur-md rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 border border-white/30`}>
                        <span className={`material-symbols-outlined text-xl lg:text-4xl ${feature.iconColor}`}>{feature.icon}</span>
                      </div>
                      <div className="text-left">
                        <h4 className="text-sm lg:text-[2.8vh] font-black text-road-dark italic mb-1 uppercase tracking-tight">{feature.title}</h4>
                        <p className="text-road-dark/70 font-bold text-[12px] lg:text-[2vh] leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Fleet Manager */}
              <div className="relative">
                <div
                  className="flex flex-col items-center gap-5"
                >
                  {/* Portrait photo — narrow and tall */}
                  <div className="relative w-full max-w-[280px] mx-auto lg:mt-6">
                    <div className="absolute -inset-3 bg-accent-gold/10 rounded-[3rem] blur-2xl rotate-2"></div>
                    <div className="relative h-[380px] lg:h-[340px] w-full rounded-4xl overflow-hidden border-[5px] border-white shadow-2xl ">
                      <img
                        src="https://res.cloudinary.com/dnfbik3if/image/upload/v1772078935/Sample_2_bx2idx.png"
                        className="w-full h-full object-cover object-top"
                        alt="Fleet Manager Shehan Perera"
                      />
                      {/* Subtle bottom fade only */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>

                  {/* Description — always below the photo */}
                  <div className="w-full max-w-sm lg:max-w-none mx-auto px-1 text-center lg:text-left ">
                    <p className="text-primary font-black text-[14px] lg:text-[2vh] uppercase tracking-[0.35em] mb-1">Fleet Manager</p>
                    <h3 className="text-2xl lg:text-[5vh] font-black text-road-dark italic uppercase leading-none mb-3">
                      Shehan Perera
                    </h3>
                    <p className="text-road-dark/70 font-bold  text-[12px] lg:text-[2.2vh] md:text-md leading-relaxed mb-2 lg:mb-6 mt-2 text-justify">
                      His strong leadership, strategic planning, and commitment to safety ensure efficient transportation solutions and exceptional customer satisfaction.
                      An accomplished Fleet Manager with11 years of extensive experience in the tourism sector. Specializes in travel support, long trip management, vehicle maintenance, and service excellence.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {["Leadership", "Safety", "Trip Management"].map((tag) => (
                        < span key={tag} className="px-3 py-1 rounded-xl bg-primary/10 border border-primary/20 text-primary font-black text-[10px] md:text-md lg:text-[12px] uppercase tracking-widest" >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* Payment Form Section */}
        <section id="contact" className="min-h-dvh md:h-dvh md:max-h-screen flex items-center snap-start snap-always scroll-mt-0 pt-10 lg:pt-18 pb-14 bg-road-dark relative overflow-hidden">
          {/* Contact Desktop Background */}
          <div
            className="hidden md:block absolute inset-0 z-0 bg-contain bg-center"
            style={{ backgroundImage: `url('https://res.cloudinary.com/dnfbik3if/image/upload/v1772078909/WhatsApp_Image_2026-02-23_at_20.52.06_cbpy9t.jpg')` }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]"></div>
          </div>

          {/* Contact Mobile Background */}
          <div
            className="block md:hidden absolute inset-0 z-0 bg-cover bg-no-repeat  "
            style={{ backgroundImage: `url('https://res.cloudinary.com/dnfbik3if/image/upload/v1772078913/WhatsApp_Image_2026-02-23_at_20.51.42_1_afsy36.jpg')` }}
          >
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[10px]"></div>
          </div>

          <div className="md:mx-20 px-4 md:px-0 relative z-10 w-full flex flex-col items-center justify-center pt-4 lg:pt-10">
            <div className="text-center mt-2 mb-6 lg:mb-3 w-full">
              {/* Consistent section title design */}

              <h2 className=" mt-4 text-3xl lg:text-[6vh] font-black text-white italic uppercase leading-none mb-1">Book <span className="text-primary">Now</span></h2>
              <p className="text-primary font-black text-[10px] md:text-xs lg:text-[1.8vh] uppercase tracking-[0.4em] ">Island-wide Premium Transit Service</p>
              <div className="w-16 h-1.5 bg-primary rounded-full mt-4 mx-auto shadow-lg shadow-primary/20"></div>
            </div>

            <div
              className="glass-form rounded-[2.5rem] md:rounded-[4rem] p-6 lg:p-8 relative overflow-hidden max-w-7xl shadow-2xl"
            >
              <form className="space-y-6 md:space-y-8 relative z-10 mx-2 lg:mx-10" onSubmit={handleFormSubmit}>
                {/* Name & WhatsApp & Email */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] lg:text-[1.8vh] font-black text-white/80 uppercase tracking-widest ml-2">Name</label>
                    <div className="relative group w-full">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-base pointer-events-none">person</span>
                      <input name="name" required suppressHydrationWarning type="text" placeholder="John Doe" className="w-full block h-14 lg:h-[6vh] glass-input rounded-2xl pl-12 pr-4 outline-none font-bold text-sm lg:text-[1.8vh]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] lg:text-[1.8vh] font-black text-white/80 uppercase tracking-widest ml-2">WhatsApp Number</label>
                    <div className="relative group w-full">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-base pointer-events-none">chat</span>
                      <input name="whatsapp" required suppressHydrationWarning type="text" placeholder="+1..." className="w-full block h-14 lg:h-[6vh] glass-input rounded-2xl pl-12 pr-4 outline-none font-bold text-sm lg:text-[1.8vh]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] lg:text-[1.8vh] font-black text-white/80 uppercase tracking-widest ml-2">Email</label>
                    <div className="relative group w-full">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-base pointer-events-none">mail</span>
                      <input name="email" required suppressHydrationWarning type="email" placeholder="john@email.com" className="w-full block h-14 lg:h-[6vh] glass-input rounded-2xl pl-12 pr-4 outline-none font-bold text-sm lg:text-[1.8vh]" />
                    </div>
                  </div>
                </div>

                {/* Pickup & Drop & Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/80 uppercase tracking-widest ml-2">Pickup Location</label>
                    <div className="relative group w-full">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-base pointer-events-none">location_on</span>
                      <input name="pickup" required suppressHydrationWarning type="text" placeholder="From..." className="w-full block h-14 glass-input rounded-2xl pl-12 pr-4 outline-none font-bold text-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/80 uppercase tracking-widest ml-2">Drop Location</label>
                    <div className="relative group w-full">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-base pointer-events-none">near_me</span>
                      <input name="drop" required suppressHydrationWarning type="text" placeholder="To..." className="w-full block h-14 glass-input rounded-2xl pl-12 pr-4 outline-none font-bold text-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/80 uppercase tracking-widest ml-2">Arrival Date</label>
                    <div className="relative group w-full">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-base pointer-events-none">today</span>
                      <input name="date" required suppressHydrationWarning type="date" className="w-full block h-14 glass-input rounded-2xl pl-12 pr-4 outline-none font-bold text-sm scheme-dark" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/80 uppercase tracking-widest ml-2">Arrival Time</label>
                    <div className="relative group w-full">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-base pointer-events-none">schedule</span>
                      <input name="time" required suppressHydrationWarning type="time" className="w-full block h-14 glass-input rounded-2xl pl-12 pr-4 outline-none font-bold text-sm scheme-dark" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-end">
                  <div className="flex-1 w-full space-y-4">
                    <label className="text-[10px] lg:text-[1.8vh] font-black text-white/80 uppercase tracking-widest ml-2 block">Communication Preference</label>
                    <div className="flex gap-6 lg:gap-10">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="comm_method" value="WhatsApp" defaultChecked className="peer sr-only" />
                        <div className="w-6 h-6 border-2 border-white/20 rounded-full peer-checked:border-secondary transition-all flex items-center justify-center">
                          <div className="w-3 h-3 bg-secondary rounded-full opacity-0 peer-checked:opacity-100 transition-all shadow-[0_0_10px_rgba(253,185,19,0.5)]"></div>
                        </div>
                        <span className="font-bold text-white/60 text-xs lg:text-[1.8vh] uppercase tracking-widest group-hover:text-secondary transition-colors">WhatsApp</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="comm_method" value="Email" className="peer sr-only" />
                        <div className="w-6 h-6 border-2 border-white/20 rounded-full peer-checked:border-secondary transition-all flex items-center justify-center">
                          <div className="w-3 h-3 bg-secondary rounded-full opacity-0 peer-checked:opacity-100 transition-all shadow-[0_0_10px_rgba(253,185,19,0.5)]"></div>
                        </div>
                        <span className="font-bold text-white/60 text-xs lg:text-[1.8vh] uppercase tracking-widest group-hover:text-secondary transition-colors">Email</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col w-full md:w-auto items-center gap-4">
                    <button
                      disabled={isSubmitting}
                      suppressHydrationWarning
                      className="w-full md:w-auto h-16 lg:h-[8vh] px-12 bg-primary hover:bg-primary/90 text-white font-black text-sm lg:text-[2.2vh] rounded-2xl shadow-2xl shadow-primary/40 transition-all flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 border border-white/10 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? "SENDING..." : "SEND REQUEST"}</span>
                      <span className="material-symbols-outlined">send</span>
                    </button>
                  </div>
                </div>
              </form>

              {/* Direct Contact Options */}
              <div className="mt-4 pt-8 border-t border-white/10 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a href="https://wa.me/94772757097" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 h-14 bg-[#25D366]/90 backdrop-blur-md text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl shadow-[#25D366]/20 border border-white/10">
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
            </div>
          </div>
        </section>

      </main >

      {/* Footer */}
      < footer className="bg-road-dark text-white/50 py-10 px-6 relative overflow-hidden snap-start border-t border-white/5" >
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <div className="md:mx-20 flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center group cursor-pointer">
              <img src="/logo.png" alt="Pick & Drop Logo" className="h-20 lg:h-[12vh] w-auto object-contain transition-all duration-300 group-hover:scale-105 brightness-110" />
            </div>
            <p className="text-white/40 text-[11px] lg:text-[1.8vh] font-bold leading-relaxed uppercase tracking-wider">
              Premium island-wide shuttle and travel service in Sri Lanka. Punctual, Reliable, and Professional.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-16">
            <div className="space-y-4">
              <h4 className="text-white text-[10px] lg:text-[1.8vh] font-black uppercase tracking-[0.3em]">Navigate</h4>
              <div className="flex flex-col gap-2.5 text-[10px] lg:text-[1.8vh] font-bold uppercase tracking-widest text-white/40">
                <a className="hover:text-primary transition-all" href="#home">Home</a>
                <a className="hover:text-primary transition-all" href="#why-us">Why Us</a>
                <a className="hover:text-primary transition-all" href="#services">Services</a>
                <a className="hover:text-primary transition-all" href="#fleet">Fleet</a>
                <a className="hover:text-primary transition-all" href="#destinations">Destinations</a>
                <a className="hover:text-primary transition-all" href="#contact">Contact</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-[10px] lg:text-[1.8vh] font-black uppercase tracking-[0.3em]">Legal</h4>
              <div className="flex flex-col gap-2.5 text-[10px] lg:text-[1.8vh] font-bold uppercase tracking-widest text-white/40">
                <a className="hover:text-primary transition-all" href="#">Privacy</a>
                <a className="hover:text-primary transition-all" href="#">Terms</a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mx-20 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] lg:text-[1.6vh] font-black uppercase tracking-[0.3em] text-white/20">© 2024 Pick & Drop Sri Lanka.</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-[#25D366] hover:text-white transition-all cursor-pointer group">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-linear-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all cursor-pointer group">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.690.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
}

