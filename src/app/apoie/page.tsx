"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Coffee, Copy, CheckCircle, ArrowLeft, Wallet, QrCode } from "lucide-react";
import { useState } from "react";
import PixCopyBlock from "@/components/PixCopyBlock";

export default function Apoie() {
    const [copied, setCopied] = useState(false);
    const chavePix = "robalbuquerque98@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(chavePix);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-100 to-pink-200 flex flex-col items-center justify-center px-6 py-20 text-center">

            {/* ☕ HERO SPLIT */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mb-20">
                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h1 className="text-5xl font-bold text-pink-700 mb-4">
                        Apoie o projeto ☕
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Se o site e as artes te inspiram, apoie com um café ☕ e ajude a manter o projeto vivo.
                        Todo valor recebido será utilizado para manter o <strong>ArteVivaQ</strong> online e sempre atualizado.
                    </p>
                    <div className="flex items-center gap-2 text-pink-600 font-medium justify-center md:justify-start">
                        <Wallet className="w-5 h-5" />
                        <span>Apoio direto ao desenvolvedor</span>
                    </div>
                </motion.div>

                {/* Imagem */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 flex justify-center mb-10 md:mb-0"
                >
                    <Image
                        src="/robson.jpg"
                        alt="Desenvolvedor Robson Albuquerque"
                        width={340}
                        height={340}
                        className="rounded-full border-4 border-white shadow-[0_0_60px_rgba(255,192,203,0.6)]"
                    />
                </motion.div>
            </section>

            {/* 💖 SEÇÃO DE APOIO COM PIX */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-10 max-w-2xl w-full text-center"
            >
                <h2 className="text-2xl font-bold text-pink-700 mb-4 flex items-center justify-center gap-2">
                    <Coffee className="w-6 h-6 text-pink-700" /> Apoie com um café ☕
                </h2>

                <p className="text-gray-700 mb-6">
                    Cada apoio é um incentivo para continuar criando experiências digitais únicas e inspiradoras.
                    Se desejar contribuir, envie via Pix:
                </p>

                {/* 🔁 Reutilização do componente PixCopyBlock */}
                <PixCopyBlock
                    chavePix="robalbuquerque98@gmail.com"
                    qrCodePath="/pix-robson.png"
                    nome="Robson Albuquerque"
                    tipo="E-mail"
                />

                {/* 💬 Mensagem de gratidão */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="text-gray-700 mt-6 leading-relaxed"
                >
                    🙏 Agradeço imensamente cada gesto de apoio.
                    Seu incentivo mantém viva a conexão entre arte e tecnologia no <strong>ArteVivaQ</strong>.
                </motion.p>
            </motion.section>

            {/* ❤️ Rodapé de retorno */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-16"
            >
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-pink-700 hover:text-pink-800 font-medium transition text-lg"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Voltar à Galeria
                </Link>
            </motion.div>
        </main>
    );
}
