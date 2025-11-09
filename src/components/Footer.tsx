"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaArrowRight } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-16 bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 gap-6">

                {/* 🔹 Créditos */}
                <div className="text-center md:text-left leading-relaxed">
                    <p>
                        🖌️ Autora:{" "}
                        <strong className="text-pink-700">Sra. Albuquerque</strong>
                    </p>
                    <p>
                        💻 Desenvolvido por{" "}
                        <strong className="text-pink-700">Robson Albuquerque</strong>
                    </p>
                    <p>© {new Date().getFullYear()} — ArteVivaQ</p>
                </div>

                {/* 🔹 CTA Profissional */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center md:text-right"
                >
                    <p className="font-medium text-gray-700 mb-2">
                        Gostou deste site?{" "}
                        <span className="text-pink-700 font-semibold">
                            Eu posso criar algo assim para sua marca.
                        </span>
                    </p>
                    <a
                        href="https://robsonverse.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition font-medium"
                    >
                        Conheça meu portfólio <FaArrowRight className="text-sm" />
                    </a>
                </motion.div>

                {/* 🔹 Ícones sociais */}
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

            {/* 🔹 Linha animada inferior */}
            <motion.div
                className="h-[2px] bg-gradient-to-r from-pink-500 to-rose-400"
                layoutId="underline"
            />
        </footer>
    );
}
