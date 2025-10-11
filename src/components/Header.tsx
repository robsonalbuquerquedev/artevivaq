"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPaintBrush, FaHome, FaComments } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const categories = [
        { name: "Desenhos Animados", path: "/animados" },
        { name: "Religiosos", path: "/religiosos" },
        { name: "Arte Realista", path: "/realista" },
        { name: "+18", path: "/adulto" },
    ];

    return (
        <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/logoartevivaq.png"
                        alt="ArteVivaQ Logo"
                        width={45}
                        height={45}
                        className="rounded-full border border-pink-200 group-hover:scale-105 transition"
                    />
                    <span className="text-2xl font-bold text-pink-700 group-hover:text-pink-600 transition">
                        ArteVivaQ
                    </span>
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        href="/"
                        className={`flex items-center gap-2 text-gray-600 hover:text-pink-600 transition ${pathname === "/" ? "font-semibold text-pink-700" : ""
                            }`}
                    >
                        <FaHome /> Início
                    </Link>

                    {categories.map((cat) => (
                        <Link
                            key={cat.path}
                            href={cat.path}
                            className={`flex items-center gap-2 text-gray-600 hover:text-pink-600 transition ${pathname === cat.path ? "font-semibold text-pink-700" : ""
                                }`}
                        >
                            <FaPaintBrush /> {cat.name}
                        </Link>
                    ))}

                    <Link
                        href="/feedback"
                        className={`flex items-center gap-2 text-gray-600 hover:text-pink-600 transition ${pathname === "/feedback" ? "font-semibold text-pink-700" : ""
                            }`}
                    >
                        <FaComments /> Feedback
                    </Link>
                </nav>

                {/* Botão Hamburguer (Mobile) */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-pink-700 text-2xl focus:outline-none"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Linha animada no topo */}
            <motion.div
                className="h-[2px] bg-gradient-to-r from-pink-500 to-rose-400"
                layoutId="underline"
            />

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white/95 backdrop-blur-md shadow-lg flex flex-col items-center py-6 space-y-4"
                    >
                        <Link
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-2 text-gray-700 hover:text-pink-700 transition ${pathname === "/" ? "font-semibold text-pink-700" : ""
                                }`}
                        >
                            <FaHome /> Início
                        </Link>

                        {categories.map((cat) => (
                            <Link
                                key={cat.path}
                                href={cat.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center gap-2 text-gray-700 hover:text-pink-700 transition ${pathname === cat.path ? "font-semibold text-pink-700" : ""
                                    }`}
                            >
                                <FaPaintBrush /> {cat.name}
                            </Link>
                        ))}

                        <Link
                            href="/feedback"
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-2 text-gray-700 hover:text-pink-700 transition ${pathname === "/feedback" ? "font-semibold text-pink-700" : ""
                                }`}
                        >
                            <FaComments /> Feedback
                        </Link>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
