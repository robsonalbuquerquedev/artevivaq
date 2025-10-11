"use client";

import { motion } from "framer-motion";
import { FaPaintBrush } from "react-icons/fa";
import Gallery from "@/components/Gallery";

export default function AnimadosPage() {
    const images = [
        "art001.jpg",
        "art002.jpg",
        "art003.jpg",
        "art004.jpg",
        "art005.jpg",
        "art006.jpg",
        "art007.jpg",
        "art008.jpg",
        "art010.jpg",
        "art022.jpg",
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-12">
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex justify-center items-center gap-3 text-pink-700">
                    <FaPaintBrush className="text-3xl" />
                    <h1 className="text-3xl md:text-4xl font-bold">🎨 Desenhos Animados</h1>
                </div>
                <p className="text-gray-500 mt-2">
                    Uma coleção cheia de cor, criatividade e imaginação.
                </p>
            </motion.div>

            <Gallery images={images} altPrefix="Desenho animado" />

            <motion.p
                className="text-center text-gray-400 mt-10 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
            </motion.p>
        </main>
    );
}
