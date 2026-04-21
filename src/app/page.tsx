import React from "react";
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  Smartphone, 
  Database, 
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  CreditCard,
  MessageCircle,
  Mail
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Mobile App Development",
    description: "High-performance iOS and Android apps built with Flutter for a seamless user experience and fast time-to-market.",
    icon: <Smartphone className="text-accent" size={24} />,
    tech: "Flutter, Dart, Native Integration"
  },
  {
    title: "Backend Architecture",
    description: "Scalable server-side solutions using Node.js and Firebase to handle high-concurrency and real-time data needs.",
    icon: <Database className="text-primary" size={24} />,
    tech: "Firebase, Cloud Functions, Node.js"
  },
  {
    title: "Payment Integration",
    description: "Secure and automated financial systems integrated with Cashfree and Razorpay for reliable settlements and payouts.",
    icon: <CreditCard className="text-accent" size={24} />,
    tech: "Cashfree API, Webhooks, Security"
  },
  {
    title: "Real-time Ecosystems",
    description: "Live distance tracking, instant notifications, and smart matching algorithms for logistics and booking platforms.",
    icon: <Zap className="text-primary" size={24} />,
    tech: "Firestore, Geo-hashing, WebSocket"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-2 glass rounded-2xl flex items-center gap-6 shadow-2xl backdrop-blur-3xl">
        <a href="#hero" className="text-xs font-bold text-slate-300 hover:text-white transition-colors">Home</a>
        <a href="#featured" className="text-xs font-bold text-slate-300 hover:text-white transition-colors">Work</a>
        <a href="#services" className="text-xs font-bold text-slate-300 hover:text-white transition-colors">Services</a>
        <a href="mailto:dillivijay@indicabs.net" className="text-xs font-bold px-4 py-2 bg-primary rounded-xl text-white hover:bg-indigo-600 transition-all">Hire Me</a>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 pt-20">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-float opacity-30"></div>
        
        <div className="text-center z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 glass text-[10px] font-black tracking-widest text-accent uppercase animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Available for Freelance Projects
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1] tracking-tighter text-white">
            I build mobile apps with <br/>
            <span className="gradient-text">real-time systems</span> and <br/>
            payment integration.
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            Specializing in high-performance booking platforms, automated financial systems, and 
            scalable infrastructure for startups and modern businesses.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#featured" className="btn-primary px-10">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="mailto:dillivijay@indicabs.net" className="btn-secondary px-10">
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Featured Project - Indi Cabs */}
      <section id="featured" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <span className="text-primary font-black tracking-[0.2em] text-xs uppercase mb-4 block">Case Study</span>
            <h2 className="section-title">Indi Cabs Ecosystem.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-[40px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative glass rounded-[40px] overflow-hidden border border-white/5 border-t-white/10 shadow-2xl">
                <Image 
                  src="/images/mockup.png" 
                  alt="Indi Cabs App Mockup" 
                  width={800} 
                  height={800} 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="premium-card bg-white/5">
                <h3 className="text-3xl font-black mb-4 text-white">Complete Ride-Booking Infrastructure</h3>
                <p className="text-text-muted leading-relaxed mb-8">
                  Architected and deployed a multi-platform ecosystem from initial concept to commercial launch. 
                  Focused on high reliability, fraud prevention, and lightning-fast matching.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-sm">
                  {[
                    "Real-time Driver Matching",
                    "Automated Cashfree Payouts",
                    "Fleet Management Admin Panel",
                    "Rider & Partner App Unification"
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-slate-200">
                      <ShieldCheck size={20} className="text-accent" />
                      {feat}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {["Flutter", "Firebase", "Node.js", "Cashfree", "Google Maps SDK"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-xl text-accent font-black text-xs uppercase tracking-widest glow-shadow">
                    Built End-to-End
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="section-title text-center mx-auto mb-6">Expert Solutions.</h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              I don't just write code — I build robust technical foundations that drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="premium-card group bg-white/[0.03] backdrop-blur-sm border-white/5 hover:border-accent/40">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent/20 transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">{service.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-auto border-t border-white/5 pt-4">
                  {service.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-center">
            <div>
              <div className="text-6xl font-black text-white mb-2">2+</div>
              <div className="text-accent font-bold tracking-widest text-xs uppercase">Commercial Apps Live</div>
              <p className="text-text-muted text-xs mt-2 px-8">Deployed on Google Play Store with real active users.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-2">End-to-End</div>
              <div className="text-accent font-bold tracking-widest text-xs uppercase">Product Delivery</div>
              <p className="text-text-muted text-xs mt-2 px-8">From design & logic to backend & payment security.</p>
            </div>
            <div>
              <div className="text-6xl font-black text-white mb-2">Verified</div>
              <div className="text-accent font-bold tracking-widest text-xs uppercase">Payment Systems</div>
              <p className="text-text-muted text-xs mt-2 px-8">Expertise in multi-vendor settlements and payouts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <footer id="contact" className="py-40 px-4 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none opacity-30"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter text-white">
            Have an idea? <br/>
            Let’s build it <span className="gradient-text">together.</span>
          </h2>
          <p className="text-2xl text-text-muted mb-16 max-w-2xl mx-auto">
            Currently accepting new high-impact projects for 2024.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="mailto:dillivijay@indicabs.net" className="btn-primary w-full md:w-auto px-12 text-xl shadow-accent/20">
              <Mail size={24} /> Get Started
            </a>
            <a href="https://wa.me/917010471243" target="_blank" className="btn-secondary w-full md:w-auto px-12 text-xl">
              <MessageCircle size={24} className="text-green-500" /> WhatsApp
            </a>
          </div>

          <div className="mt-32 flex flex-col items-center gap-8">
            <div className="flex items-center gap-8 border-t border-white/5 pt-12">
              <a href="https://github.com/kratosvijay" target="_blank" className="text-slate-400 hover:text-white transition-all">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/dillivijay-v-209965219/" target="_blank" className="text-slate-400 hover:text-indigo-400 transition-all">
                <Linkedin size={28} />
              </a>
            </div>
            <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              © {new Date().getFullYear()} Dilli Vijay. Built for High Conversion & Performance.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
