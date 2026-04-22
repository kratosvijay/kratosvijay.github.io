import { 
  Smartphone, 
  Layout, 
  Shield, 
  Globe, 
  Eye, 
  Briefcase 
} from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  icon: string; // We'll map this to a component in the UI
}

export const projects = [
  {
    title: "Indi Cabs Driver App",
    description: "High-performance driver application featuring real-time tracking, automated payout systems, and smart ride matching.",
    tech: ["Flutter", "Firebase", "Cashfree API"],
    link: "https://github.com/kratosvijay/indi_cabs_driver_app",
    icon: "Smartphone"
  },
  {
    title: "Indi Cabs User App",
    description: "Seamless taxi-booking experience with live distance tracking, instant notifications, and secure payment integrations.",
    tech: ["Flutter", "Firebase", "Google Maps SDK"],
    link: "https://github.com/kratosvijay/indi_cabs_user_app",
    icon: "Smartphone"
  },
  {
    title: "Indi Cabs Admin",
    description: "Centralized fleet management and settlement dashboard with real-time analytics and multi-vendor payout control.",
    tech: ["React", "Firebase", "Node.js"],
    link: "https://github.com/kratosvijay/indi_cabs_admin",
    icon: "Shield"
  },
  {
    title: "Swoken",
    description: "A privacy-first content aggregator built with Flutter, focusing on local data storage and zero-tracking feed management.",
    tech: ["Flutter", "Dart", "SQLite"],
    link: "https://github.com/kratosvijay/swoken",
    icon: "Eye"
  },
  {
    title: "Portfolio v2",
    description: "My premium personal portfolio built with Next.js 15, featuring glassmorphism and high-conversion design aesthetics.",
    tech: ["Next.js", "Tailwind CSS", "Lucide React"],
    link: "https://github.com/kratosvijay/kratosvijay.github.io",
    icon: "Globe"
  },
  {
    title: "Marketing Platform",
    description: "Conversion-optimized landing pages for the Indi Cabs ecosystem, designed for high performance and SEO excellence.",
    tech: ["HTML/CSS", "JavaScript", "Analytics"],
    link: "https://github.com/kratosvijay/indi_cabs_marketing_site",
    icon: "Layout"
  }
];
