"use client";
import { motion } from "framer-motion";
import Logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:blur before::w-full before:bg-[linear-gradient(to_right,#F87FF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <motion.img
            src={Logo.src}
            alt="МИК"
            height={40}
            className="relative"
          />
        </div>
        <p className="mt-6">&copy; 2024 MIC, Inc. All right reserved.</p>
      </div>
    </footer>
  );
};
