"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Coffee } from "lucide-react";

export default function ApoieCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="fixed bottom-6 right-6 z-50"
        >
            <motion.div
                animate={{
                    y: [0, -5, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Link
                    href="/apoie"
                    className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 font-medium"
                >
                    <Coffee className="w-5 h-5 text-white" />
                    Apoie o Projeto
                </Link>
            </motion.div>
        </motion.div>
    );
}
