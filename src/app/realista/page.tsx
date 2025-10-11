"use client";

import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import Gallery from "@/components/Gallery";

export default function RealistaPage() {
    const images = [
        "art011.jpg",
        "art012.jpg",
        "art016.jpg",
        "art020.jpg",
        "art024.jpg",
        "art026.jpg",
        "art028.jpg",
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
                    <FaEye className="text-3xl" />
                    <h1 className="text-3xl md:text-4xl font-bold">🎨 Arte Realista</h1>
                </div>
                <p className="text-gray-500 mt-2">
                    Um mergulho no realismo — detalhes, emoções e expressões capturadas pela arte.
                </p>
            </motion.div>

            <Gallery images={images} altPrefix="Arte realista" />

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
