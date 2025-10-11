"use client";

import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";
import Gallery from "@/components/Gallery";

export default function AdultoPage() {
    const images = [
        "art013.jpg",
        "art014.jpg",
        "art015.jpg",
        "art017.jpg",
        "art018.jpg",
        "art019.jpg",
        "art021.jpg",
        "art023.jpg",
        "art025.jpg",
        "art027.jpg",
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-12">
            {/* Aviso +18 */}
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex justify-center items-center gap-3 text-red-600">
                    <FaExclamationTriangle className="text-3xl" />
                    <h1 className="text-3xl md:text-4xl font-bold">⚠️ Conteúdo +18</h1>
                </div>
                <p className="text-gray-500 mt-2">
                    Este conteúdo é destinado apenas a maiores de 18 anos. Visualize com responsabilidade.
                </p>
            </motion.div>

            <Gallery images={images} altPrefix="Arte adulto" />

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
