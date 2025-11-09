"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaPaintBrush, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-100 to-pink-200 flex flex-col items-center justify-center overflow-hidden">

      {/* 🌸 HERO SPLIT PRINCIPAL */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl px-8 py-24 md:py-32">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl font-bold text-pink-700 mb-4">
            A arte ganha vida 🎨
          </h1>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Bem-vindo à <strong>ArteVivaQ</strong>, o espaço criativo de{" "}
            <strong>Sra. Albuquerque</strong> — onde emoção e cor se transformam em expressão artística.
          </p>

          <Link
            href="#galeria"
            className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition font-medium shadow-md hover:shadow-lg"
          >
            Explorar Galeria <FaArrowRight />
          </Link>

          {/* 🌙 Aviso sobre modo escuro (visível apenas no mobile) */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mt-6 text-sm text-gray-500 bg-white/70 backdrop-blur-sm border border-pink-100 rounded-xl p-3 inline-flex items-center justify-center gap-2 shadow-sm md:hidden"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-pink-600 text-lg"
            >
              🌙
            </motion.span>
            <span>
              Para uma <strong>melhor imersão visual</strong>, desative o modo escuro do seu dispositivo.
            </span>
          </motion.p>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        >
          <Image
            src="/logoartevivaq.png"
            alt="Logo ArteVivaQ"
            width={320}
            height={320}
            className="rounded-full shadow-2xl"
          />
        </motion.div>
      </section>

      {/* 🎨 SOBRE A ARTISTA (Hero Split invertido com design artístico e animações sutis) */}
      <section className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-8 py-24 mb-20 overflow-hidden rounded-[2rem]">

        {/* 🌈 Fundo com gradiente animado de pinceladas */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-gradient-to-r from-pink-100 via-rose-200 to-pink-100 opacity-80 bg-[length:200%_200%] rounded-[2rem]"
        />

        {/* Textura sutil sobre o fundo */}
        <div className="absolute inset-0 bg-[url('/texture.svg')] opacity-20 mix-blend-overlay" />

        {/* 🎨 Imagem com efeito de brilho pulsante */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative md:w-1/2 flex justify-center mb-10 md:mb-0 z-10"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 40px rgba(255,192,203,0.6)",
                "0 0 70px rgba(255,182,193,0.8)",
                "0 0 40px rgba(255,192,203,0.6)",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border-4 border-white"
          >
            <Image
              src="/karla.jpg"
              alt="Artista Karla Albuquerque"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* 🖋️ Texto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative md:w-1/2 text-center md:text-left z-10 bg-white/40 backdrop-blur-md rounded-2xl p-6 shadow-inner"
        >
          <h2 className="text-3xl font-bold text-pink-800 mb-3">🎨 Sra. Albuquerque</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A mente criativa por trás da <strong>ArteVivaQ</strong>. Apaixonada por desenhar desde a infância,
            ela expressa emoções e visões do mundo por meio de linhas, cores e personagens que ganham alma.
            Cada traço é um reflexo de sua sensibilidade e da beleza que enxerga nas pequenas coisas da vida.
          </p>

          <a
            href="https://www.instagram.com/karla_albuquerqueoficial17/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium transition"
          >
            <FaInstagram /> Siga no Instagram
          </a>

          {/* ✒️ Citação artística */}
          <p className="italic text-pink-800 mt-6 border-l-4 border-pink-400 pl-4 text-sm">
            “A arte é o espelho da alma em cores e traços.” — <strong>Sra. Albuquerque</strong>
          </p>
        </motion.div>
      </section>

      {/* 💻 SOBRE O DESENVOLVEDOR (Hero Split moderno com fundo animado e links profissionais) */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl px-8 py-24 mb-20 overflow-hidden rounded-[2rem]">

        {/* 🌈 Fundo animado com movimento artístico digital */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-gradient-to-l from-pink-100 via-rose-200 to-pink-100 opacity-80 bg-[length:200%_200%] rounded-[2rem]"
        />

        {/* Textura leve sobre o fundo */}
        <div className="absolute inset-0 bg-[url('/texture.svg')] opacity-15 mix-blend-overlay" />

        {/* 💻 Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative md:w-1/2 text-center md:text-left z-10 bg-white/40 backdrop-blur-md rounded-2xl p-6 shadow-inner"
        >
          {/* Título com globo animado */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <h2 className="text-3xl font-bold text-pink-800">💻 Robson Albuquerque</h2>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="text-pink-600 text-2xl"
            >
              🌐
            </motion.div>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Desenvolvedor e criador deste site, apaixonado por tecnologia, design e boas ideias.
            Seu objetivo foi transformar a arte da Sra. Albuquerque em uma experiência digital viva e inspiradora.
            Atua na criação de projetos criativos e educativos que unem estética, inovação e propósito.
          </p>

          {/* 🔗 Links profissionais */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/robson.albuquerque_cm/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium transition"
            >
              <FaInstagram /> Instagram
            </a>

            <a
              href="https://robsonverse.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition text-sm font-medium"
            >
              🌐 Portfólio
            </a>

            <a
              href="https://aprenderviolaoonline.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition text-sm font-medium"
            >
              🎸 Aprender Violão
            </a>
          </div>

          {/* ✒️ Frase inspiradora de tecnologia */}
          <p className="italic text-pink-800 mt-6 border-l-4 border-pink-400 pl-4 text-sm">
            “Transformar ideias em código é como pintar com lógica e paixão.” — <strong>Robson Albuquerque</strong>
          </p>
        </motion.div>

        {/* 🧠 Imagem com efeito de brilho pulsante */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative md:w-1/2 flex justify-center mb-10 md:mb-0 z-10"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 40px rgba(255,192,203,0.6)",
                "0 0 70px rgba(255,182,193,0.8)",
                "0 0 40px rgba(255,192,203,0.6)",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border-4 border-white"
          >
            <Image
              src="/robson.jpg"
              alt="Desenvolvedor Robson Albuquerque"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* 🌊 DIVISOR ARTÍSTICO DUPLO ENTRE AS SEÇÕES */}
      <section className="relative w-full overflow-hidden h-56 md:h-64">
        {/* 🔹 Fundo com gradiente animado sutil */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-gradient-to-r from-pink-100 via-rose-200 to-pink-100 opacity-80 bg-[length:200%_200%]"
        />

        {/* 🔹 Primeira onda (principal) */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <path
            fill="url(#waveGradient1)"
            fillOpacity="1"
            d="M0,256L60,234.7C120,213,240,171,360,165.3C480,160,600,192,720,208C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
          <defs>
            <linearGradient id="waveGradient1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fbcfe8" />
              <stop offset="50%" stopColor="#f9a8d4" />
              <stop offset="100%" stopColor="#fbcfe8" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* 🔹 Segunda onda invertida (camada translúcida) */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full opacity-70 scale-y-[-1]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <path
            fill="url(#waveGradient2)"
            fillOpacity="1"
            d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,218.7C672,224,768,192,864,186.7C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="waveGradient2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fde2e4" />
              <stop offset="50%" stopColor="#fbcfe8" />
              <stop offset="100%" stopColor="#fde2e4" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* 🔹 Brilho final sobre o divisor */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-100/20 to-white/70 pointer-events-none" />
      </section>

      {/* 🖼️ GALERIA */}
      <section id="galeria" className="text-center w-full max-w-6xl px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-pink-700 mb-6"
        >
          Explore a Galeria
        </motion.h2>
        <p className="text-gray-700 mb-10 text-lg">
          Mergulhe no universo artístico da <strong>ArteVivaQ</strong>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Desenhos Animados", icon: <FaPaintBrush />, path: "/animados" },
            { name: "Religiosos", icon: <FaPaintBrush />, path: "/religiosos" },
            { name: "Arte Realista", icon: <FaPaintBrush />, path: "/realista" },
            { name: "+18", icon: <FaPaintBrush />, path: "/adulto" },
          ].map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href={cat.path}
                className="bg-white/80 backdrop-blur-md shadow-lg hover:shadow-2xl rounded-2xl py-8 px-6 flex flex-col items-center transition transform hover:-translate-y-1"
              >
                <div className="text-pink-600 text-4xl mb-3">{cat.icon}</div>
                <p className="font-semibold text-gray-800 text-lg">{cat.name}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
