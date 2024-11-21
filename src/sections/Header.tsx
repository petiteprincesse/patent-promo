"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo.png";
import { motion } from "framer-motion";
import MenuIcon from "@/assets/menu.svg";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
        <div className="inline-flex gap-1 items-center">
          <p>
            <a
              href="https://innoagency.ru/news/news/v_moskve_podveli_itogi_hakatona_lidery_cifrovoy_transformacii_20240630"
              target="_blank"
            >
              Проект-победитель конкурса 'Лидеры цифровой трансформации - 2024'
            </a>
          </p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div>
        <div className="py-5">
          <div className="container">
            <div className="flex items-center justify-between">
              <motion.img src={Logo.src} alt="МИК" width={150} />
              <MenuIcon className="h-5 w-5 md:hidden" />
              <nav className="hidden md:flex gap-6 text-black/60 items-center">
                <a href="#product">Приложение</a>
                <a href="#command">Команда</a>
                <a href="#algorithm">Алгоритм анализа</a>
                <a
                  href="#product"
                  className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tigh"
                >
                  Подробнее
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
