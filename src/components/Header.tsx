"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Home,
    Palette,
    HandHeart,
    Coffee,
    MessageCircle,
    Menu,
    X,
    ShoppingBag,
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
        { name: "Loja", path: "/loja", icon: <ShoppingBag className="w-4 h-4" /> },
        { name: "Feedback", path: "/feedback", icon: <MessageCircle className="w-4 h-4" /> },
    ];

    return (
        <>
            {/* 🔹 Sidebar Desktop */}
            <aside className="hidden md:flex flex-col w-72 h-screen fixed top-0 left-0 bg-gradient-to-b from-pink-50 via-rose-100 to-pink-50 border-r border-pink-100 shadow-lg p-6 z-40">
                {/* Logo */}
                <Link href="/" className="mb-10 flex items-center gap-3 group">
                    <Image
                        src="/logoartevivaq.png"
                        width={45}
                        height={45}
                        alt="ArteVivaQ Logo"
                        className="rounded-full border border-pink-200 shadow-sm group-hover:scale-105 transition"
                    />
                    <span className="text-2xl font-bold text-pink-700 group-hover:text-pink-600 transition">
                        ArteVivaQ
                    </span>
                </Link>

                {/* Navegação */}
                <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                    Navegação
                </p>
                <nav className="flex flex-col gap-2 mb-8">
                    {links.slice(0, 5).map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:text-pink-700 hover:bg-pink-100 transition ${pathname === link.path
                                ? "bg-pink-100 text-pink-700 font-semibold"
                                : ""
                                }`}
                        >
                            {link.icon}
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                    Projeto
                </p>
                <nav className="flex flex-col gap-2">
                    {links.slice(5).map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:text-pink-700 hover:bg-pink-100 transition ${pathname === link.path
                                ? "bg-pink-100 text-pink-700 font-semibold"
                                : ""
                                }`}
                        >
                            {link.icon}
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* 🔹 Header Mobile */}
            <header className="md:hidden fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100 z-50">
                <div className="flex items-center justify-between px-5 py-4">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logoartevivaq.png"
                            alt="ArteVivaQ Logo"
                            width={40}
                            height={40}
                            className="rounded-full border border-pink-200"
                        />
                        <span className="text-xl font-bold text-pink-700">ArteVivaQ</span>
                    </Link>

                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="text-pink-700 text-3xl focus:outline-none"
                    >
                        {isSidebarOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* 🔹 Sidebar Mobile (retraível, sem sobreposição) */}
            <motion.aside
                initial={false}
                animate={{ width: isSidebarOpen ? "16rem" : "0rem" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 left-0 h-screen bg-gradient-to-b from-pink-50 via-rose-100 to-pink-50 border-r border-pink-100 shadow-lg overflow-hidden z-40 md:hidden"
            >
                <div className={`flex flex-col h-full ${isSidebarOpen ? "p-6" : "p-0"}`}>
                    {isSidebarOpen && (
                        <>
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-lg font-semibold text-pink-700">
                                    Menu
                                </span>
                                <button
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="text-pink-700 text-2xl hover:text-pink-800 transition"
                                >
                                    <X />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-3">
                                {links.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        onClick={() => setIsSidebarOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:text-pink-800 hover:bg-pink-100 transition ${pathname === link.path
                                            ? "bg-pink-100 text-pink-700 font-semibold"
                                            : ""
                                            }`}
                                    >
                                        {link.icon}
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </motion.aside>
        </>
    );
}
