"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowLeft, Heart } from "lucide-react";

export default function Obrigado() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 via-rose-100 to-pink-200 px-6 text-center">

            {/* Ícone de sucesso animado */}
            <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-pink-600 mb-6"
            >
                <CheckCircle className="w-24 h-24 mx-auto text-pink-600 drop-shadow-lg" />
            </motion.div>

            {/* Mensagem principal */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl font-bold text-pink-800 mb-4"
            >
                Pedido enviado com sucesso! 🎨
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-gray-700 text-lg max-w-xl mb-8 leading-relaxed"
            >
                Agradecemos por confiar na arte de <strong>Sra. Albuquerque</strong>.
                Em breve você receberá um retorno com o valor e detalhes do pagamento via Pix.
                Sua ideia está prestes a ganhar vida em traços e cores!
            </motion.p>

            {/* Botão de retorno */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition text-lg font-medium shadow-lg"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Voltar à Galeria
                </Link>
            </motion.div>

            {/* Ícone decorativo final */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-12 text-pink-500 flex items-center gap-2 text-sm"
            >
                <Heart className="w-4 h-4 animate-pulse" />
                <span>ArteVivaQ — Onde a arte ganha vida</span>
            </motion.div>
        </main>
    );
}
