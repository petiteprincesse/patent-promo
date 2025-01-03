"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Algorithm = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
      id="#algorithm"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title" id="algorithm">
            Алгоритм анализа
          </h2>
          <p className="section-description mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{ translateY }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring image"
            width={360}
            className="absolute -right-[331px] -top-[19px ]"
            style={{ translateY }}
          />
        </div>
      </div>
      <div className="flex gap-2 mt-10 justify-center">
        <a href="#start" className="btn btn-text gap-1">
          <span>В начало</span>
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};
