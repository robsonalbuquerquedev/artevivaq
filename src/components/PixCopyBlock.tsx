"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Copy, CheckCircle, QrCode } from "lucide-react";

interface PixCopyBlockProps {
    chavePix: string;
    qrCodePath?: string; // opcional, caminho da imagem do QR Code
}

export default function PixCopyBlock({ chavePix, qrCodePath }: PixCopyBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(chavePix);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md border border-pink-200 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-center gap-6 max-w-2xl mx-auto"
        >
            {/* 🧾 QR Code Pix */}
            {qrCodePath && (
                <div className="flex flex-col items-center">
                    <div className="bg-white p-3 rounded-xl shadow-inner">
                        <Image
                            src={qrCodePath}
                            alt="QR Code Pix"
                            width={160}
                            height={160}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
                        <QrCode className="w-4 h-4 text-pink-600" />
                        Escaneie com o app do seu banco
                    </p>
                </div>
            )}

            {/* 🔑 Chave Pix + botão copiar */}
            <div className="text-center md:text-left">
                <p className="font-semibold text-pink-800 mb-1">🔑 Chave Pix:</p>
                <p className="text-gray-800 font-medium select-all break-all">
                    {chavePix}
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={handleCopy}
                    className="mt-3 inline-flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition font-medium cursor-pointer"
                >
                    {copied ? (
                        <>
                            <CheckCircle className="w-5 h-5" /> Copiado!
                        </>
                    ) : (
                        <>
                            <Copy className="w-5 h-5" /> Copiar chave Pix
                        </>
                    )}
                </motion.button>
            </div>
        </motion.div>
    );
}
