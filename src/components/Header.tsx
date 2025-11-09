"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    Menu,
    X,
    Home,
    Palette,
    MessageCircle,
    HandHeart,
    HeartHandshake,
    Coffee,
} from "lucide-react";

export default function Header() {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const links = [
        { name: "Início", path: "/", icon: <Home className="w-4 h-4" /> },
        { name: "Desenhos Animados", path: "/animados", icon: <Palette className="w-4 h-4" /> },
        { name: "Religiosos", path: "/religiosos", icon: <Palette className="w-4 h-4" /> },
        { name: "Arte Realista", path: "/realista", icon: <Palette className="w-4 h-4" /> },
        { name: "+18", path: "/adulto", icon: <Palette className="w-4 h-4" /> },
        { name: "Peça sua Arte", path: "/peca-sua-arte", icon: <HandHeart className="w-4 h-4" /> },
        { name: "Apoie o Projeto", path: "/apoie", icon: <Coffee className="w-4 h-4" /> },
        { name: "Feedback", path: "/feedback", icon: <MessageCircle className="w-4 h-4" /> },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* 🔹 Logo */}
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

                {/* 🔹 Botão Hamburguer */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="text-pink-700 text-2xl md:hidden"
                    aria-label="Abrir menu"
                >
                    {isSidebarOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* 🔹 Linha de destaque */}
            <motion.div
                className="h-[2px] bg-gradient-to-r from-pink-500 to-rose-400"
                layoutId="underline"
            />

            {/* 🔹 Sidebar (Desktop e Mobile) */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed top-0 right-0 h-full w-72 bg-white/95 backdrop-blur-md shadow-2xl z-50 flex flex-col justify-between"
                    >
                        {/* Conteúdo do menu */}
                        <div>
                            {/* Logo no topo */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-pink-100">
                                <Link href="/" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-3">
                                    <Image
                                        src="/logoartevivaq.png"
                                        alt="ArteVivaQ"
                                        width={40}
                                        height={40}
                                        className="rounded-full border border-pink-200"
                                    />
                                    <span className="text-xl font-semibold text-pink-700">ArteVivaQ</span>
                                </Link>
                                <button
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="text-pink-600 text-xl hover:text-pink-700 transition"
                                >
                                    <X />
                                </button>
                            </div>

                            {/* Lista de links */}
                            <nav className="flex flex-col px-6 py-4 space-y-3 overflow-y-auto">
                                {links.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        onClick={() => setIsSidebarOpen(false)}
                                        className={`flex items-center gap-3 rounded-xl px-4 py-2 text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition ${pathname === link.path ? "bg-pink-100 text-pink-700 font-semibold" : ""
                                            }`}
                                    >
                                        {link.icon}
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Rodapé do sidebar */}
                        <div className="px-6 py-4 border-t border-pink-100 text-sm text-gray-500 text-center">
                            © {new Date().getFullYear()} — ArteVivaQ
                            <br />
                            <span className="text-pink-700 font-medium">Por Robson Albuquerque</span>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* 🔹 Menu Desktop tradicional */}
            <nav className="hidden md:flex items-center justify-center gap-6 py-3">
                {links.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={`flex items-center gap-2 text-gray-600 hover:text-pink-600 transition ${pathname === link.path ? "font-semibold text-pink-700" : ""
                            }`}
                    >
                        {link.icon}
                        {link.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
