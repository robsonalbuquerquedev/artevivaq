"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, Calendar, CheckCircle, XCircle, Lock } from "lucide-react";
import Image from "next/image";

export default function SolicitarAcessoAdulto() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("rota", "solicitar-acesso-adulto");

        const response = await fetch("https://formsubmit.co/ajax/4e955f7fefc407e2eded8c5f9cf357e3", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            setStatus("success");
            form.reset();
        } else {
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 md:py-24">

            {/* 💬 Texto lateral */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 text-center md:text-left"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-6">
                    Solicite seu acesso 🔒
                </h1>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    A seção <strong>+18</strong> da <strong>ArteVivaQ</strong> é reservada
                    a maiores de idade e contém obras artísticas de nu artístico e retratos
                    realistas do corpo humano.
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-pink-50 border border-pink-200 text-sm text-gray-700 rounded-xl p-4 mb-6 shadow-sm inline-flex items-center gap-2"
                >
                    🌙 <strong>Dica:</strong> Desative o modo escuro do celular para
                    visualizar melhor os campos. Isso não afeta o envio do formulário.
                </motion.div>

                <p className="text-gray-600">
                    Após o envio, a artista verificará sua solicitação e enviará a senha
                    exclusiva por e-mail.
                </p>
            </motion.div>

            {/* 🧾 Formulário */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 w-full max-w-md bg-white/90 backdrop-blur-md border border-pink-100 shadow-xl rounded-2xl p-8"
            >
                <h2 className="text-2xl font-bold text-pink-700 mb-4 flex items-center justify-center gap-2">
                    <Lock className="w-5 h-5" /> Solicitar Acesso
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Nome */}
                    <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            name="nome"
                            required
                            placeholder="Seu nome completo"
                            className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>

                    {/* E-mail */}
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Seu e-mail"
                            className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>

                    {/* Idade */}
                    <div className="relative">
                        <Calendar className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                            type="number"
                            name="idade"
                            min="18"
                            required
                            placeholder="Sua idade (mínimo 18 anos)"
                            className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>

                    {/* Botão */}
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition font-medium cursor-pointer"
                    >
                        Enviar solicitação
                    </motion.button>
                </form>

                {/* Mensagens de retorno */}
                {status === "success" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-6 text-green-600 text-center flex items-center justify-center gap-2"
                    >
                        <CheckCircle className="w-5 h-5" />
                        Solicitação enviada com sucesso!
                        Aguarde o e-mail com a senha.
                    </motion.div>
                )}
                {status === "error" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-6 text-red-600 text-center flex items-center justify-center gap-2"
                    >
                        <XCircle className="w-5 h-5" />
                        Ocorreu um erro. Tente novamente.
                    </motion.div>
                )}
            </motion.div>
        </main>
    );
}
