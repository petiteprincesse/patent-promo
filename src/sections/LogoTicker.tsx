"use client";
import LeadersLogo from "@/assets/LeadersLogo.png";
import MayorsProjectLogo from "@/assets/MayorsProjectLogo.png";
import InnovationDepartmentLogo from "@/assets/InnovationDepartmentLogo.png";
import InnovationAgencyLogo from "@/assets/InnovationAgencyLogo.png";
import ClusterLogo from "@/assets/ClusterLogo.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-16 pr-16 flex-none"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={LeadersLogo}
              alt="Leaders logo"
              className="logo-ticker-image min-h-10"
            />
            <Image
              src={MayorsProjectLogo}
              alt="Mayors project logo"
              className="logo-ticker-image min-h-10"
            />
            <Image
              src={InnovationDepartmentLogo}
              alt="Innovation department logo"
              className="logo-ticker-image min-h-10"
            />
            <Image
              src={InnovationAgencyLogo}
              alt="Innovation agency logo"
              className="logo-ticker-image min-h-10"
            />
            <Image
              src={ClusterLogo}
              alt="Cluster logo"
              className="logo-ticker-image min-h-10"
            />
            <Image
              src={LeadersLogo}
              alt="Leaders logo"
              className="logo-ticker-image min-h-10"
            />
            {/* Второй блок логотипов для отсутствия "дырок" в анимации */}
            <Image
              src={MayorsProjectLogo}
              alt="Mayors project logo"
              className="logo-ticker-image min-h-10"
            />
            <Image
              src={InnovationDepartmentLogo}
              alt="Innovation department logo"
              className="logo-ticker-image min-h-10"
            />
            <Image
              src={InnovationAgencyLogo}
              alt="Innovation agency logo"
              className="logo-ticker-image min-h-10"
            />
            <Image
              src={ClusterLogo}
              alt="Cluster logo"
              className="logo-ticker-image min-h-10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
