"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaPaintBrush, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-100 flex flex-col items-center justify-center py-20 text-center px-6">

      {/* Seção de Boas-Vindas */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-16"
      >
        <Image
          src="/logoartevivaq.png"
          alt="Logo ArteVivaQ"
          width={180}
          height={180}
          className="rounded-full shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-pink-700 mb-2">Bem-vindo à ArteVivaQ 🎨</h1>
        <p className="text-gray-600 max-w-2xl">
          Onde a arte ganha vida pelas mãos de <strong>Sra. Albuquerque</strong>.
          Um espaço dedicado à expressão criativa, à beleza dos traços e à inspiração de cada detalhe.
        </p>
      </motion.div>

      {/* Seção sobre a artista */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 max-w-4xl mb-16"
      >
        <Image
          src="/karla.jpg"
          alt="Artista Karla Albuquerque"
          width={180}
          height={180}
          className="rounded-full object-cover shadow-md"
        />
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-pink-700 mb-2">🎨 Sra. Albuquerque</h2>
          <p className="text-gray-700 mb-3">
            A mente criativa por trás da <strong>ArteVivaQ</strong>.
            Apaixonada por desenhar desde a infância, ela expressa suas emoções e visões do mundo por meio de linhas, cores e personagens que ganham alma.
          </p>
          <a
            href="https://www.instagram.com/karla_albuquerqueoficial17/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition font-medium"
          >
            <FaInstagram /> Siga no Instagram
          </a>
        </div>
      </motion.div>

      {/* Seção sobre o desenvolvedor */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 max-w-4xl mb-16"
      >
        <Image
          src="/robson.jpg"
          alt="Desenvolvedor Robson Albuquerque"
          width={180}
          height={180}
          className="rounded-full object-cover shadow-md"
        />
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-pink-700 mb-2">💻 Robson Albuquerque</h2>
          <p className="text-gray-700 mb-3">
            Desenvolvedor e criador deste site, apaixonado por tecnologia, design e boas ideias.
            Seu objetivo foi transformar a arte da Sra. Albuquerque em uma experiência digital viva e inspiradora.
          </p>
          <a
            href="https://www.instagram.com/robson.albuquerque_cm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition font-medium"
          >
            <FaInstagram /> Siga no Instagram
          </a>
        </div>
      </motion.div>

      {/* Seção de categorias */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-pink-700 mb-6">Explore a Galeria</h2>
        <p className="text-gray-600 mb-8">Escolha uma categoria e mergulhe no universo artístico da ArteVivaQ:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Desenhos Animados", icon: <FaPaintBrush />, path: "/animados" },
            { name: "Religiosos", icon: <FaPaintBrush />, path: "/religiosos" },
            { name: "Arte Realista", icon: <FaPaintBrush />, path: "/realista" },
            { name: "+18", icon: <FaPaintBrush />, path: "/adulto" },
          ].map((cat, i) => (
            <Link
              key={i}
              href={cat.path}
              className="bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl rounded-xl py-6 px-4 flex flex-col items-center transition transform hover:-translate-y-1"
            >
              <div className="text-pink-600 text-3xl mb-3">{cat.icon}</div>
              <p className="font-semibold text-gray-700">{cat.name}</p>
              <FaArrowRight className="text-pink-600 mt-2" />
            </Link>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
