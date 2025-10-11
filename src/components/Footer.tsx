"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-16 bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 gap-4">
                {/* Créditos */}
                <div className="text-center md:text-left">
                    <p>
                        🖌️ Autora: <strong className="text-pink-700">Sra. Albuquerque</strong>
                    </p>
                    <p>
                        💻 Desenvolvido por{" "}
                        <strong className="text-pink-700">Robson Albuquerque</strong>
                    </p>
                    <p>
                        © {new Date().getFullYear()} — ArteVivaQ
                    </p>
                </div>

                {/* Ícones sociais */}
                <div className="flex gap-5 text-xl text-gray-500">
                    <motion.a
                        whileHover={{ scale: 1.2, color: "#E1306C" }}
                        href="https://www.instagram.com/sra._albuquerque2000/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.2, color: "#333" }}
                        href="https://github.com/robsonalbuquerquedev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </motion.a>
                </div>
            </div>

            {/* Linha animada inferior */}
            <motion.div
                className="h-[2px] bg-gradient-to-r from-pink-500 to-rose-400"
                layoutId="underline"
            />
        </footer>
    );
}
