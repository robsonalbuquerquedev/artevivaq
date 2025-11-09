"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { QrCode, Copy, CheckCircle } from "lucide-react";

interface PixCopyBlockProps {
    chavePix: string;
    qrCodePath: string;
    nome?: string; // opcional — ex: "Sra. Albuquerque"
    tipo?: string; // opcional — ex: "E-mail"
}

export default function PixCopyBlock({
    chavePix,
    qrCodePath,
    nome,
    tipo,
}: PixCopyBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(chavePix);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch (err) {
            console.error("Erro ao copiar chave Pix:", err);
        }
    };

    return (
        <div className="flex flex-col items-center">
            {/* QR Code */}
            <div className="bg-white p-4 rounded-2xl shadow-inner mb-4">
                <Image
                    src={qrCodePath}
                    alt={`QR Code Pix ${nome ? `de ${nome}` : ""}`}
                    width={200}
                    height={200}
                    className="rounded-lg shadow-md"
                />
            </div>

            <p className="text-sm text-gray-600 mb-4 flex items-center justify-center gap-2">
                <QrCode className="w-4 h-4 text-pink-600" /> Escaneie com o app do seu banco
            </p>

            {/* Informações complementares */}
            <div className="bg-white border border-pink-200 rounded-xl p-4 mb-4 shadow-inner w-full max-w-xs text-center">
                {nome && (
                    <p className="font-semibold text-pink-700 text-sm mb-1">{nome}</p>
                )}
                {tipo && (
                    <p className="text-gray-600 text-xs mb-1">
                        Tipo de chave: <strong>{tipo}</strong>
                    </p>
                )}
                <p className="text-gray-800 font-medium select-all break-all">
                    {chavePix}
                </p>

                {/* Botão copiar */}
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
        </div>
    );
}
