"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
    Send,
    User,
    Mail,
    Image as ImageIcon,
    MessageSquare,
    Palette,
    Wallet,
    CheckCircle,
    ShieldCheck,
} from "lucide-react";

export default function PecaSuaArte() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("rota", "peca-sua-arte"); // Campo oculto anti-spam

        const response = await fetch("https://formsubmit.co/ajax/4e955f7fefc407e2eded8c5f9cf357e3", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            setStatus("success");
            form.reset();

            // Redirecionamento suave para uma tela de agradecimento
            setTimeout(() => {
                window.location.href = "/obrigado";
            }, 3000);
        } else {
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-100 to-pink-200 py-20 px-6 flex flex-col items-center justify-center">
            {/* 🎨 HERO SPLIT */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mb-20">
                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h1 className="text-5xl font-bold text-pink-700 mb-4">
                        Peça sua arte exclusiva 🎨
                    </h1>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        Transforme sua ideia em um desenho único feito à mão pela{" "}
                        <strong>Sra. Albuquerque</strong>.
                        Descreva sua visão, envie uma referência e receba seu orçamento via Pix.
                    </p>
                    <div className="flex items-center gap-2 text-pink-600 font-medium justify-center md:justify-start">
                        <ShieldCheck className="w-5 h-5" />
                        <span>Envio 100% seguro e direto para a artista</span>
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
                        src="/karla.jpg"
                        alt="Artista Karla Albuquerque"
                        width={350}
                        height={350}
                        className="rounded-full shadow-[0_0_60px_rgba(255,192,203,0.6)] border-4 border-white"
                    />
                </motion.div>
            </section>

            {/* 📝 FORMULÁRIO */}
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-2xl text-left space-y-6"
            >
                {/* Campo oculto anti-spam */}
                <input type="hidden" name="rota" value="peca-sua-arte" />

                {/* Nome */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Nome completo
                    </label>
                    <div className="flex items-center gap-3">
                        <User className="text-pink-600 w-5 h-5" />
                        <input
                            type="text"
                            name="Nome"
                            required
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            placeholder="Digite seu nome completo"
                        />
                    </div>
                </div>

                {/* E-mail */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        E-mail
                    </label>
                    <div className="flex items-center gap-3">
                        <Mail className="text-pink-600 w-5 h-5" />
                        <input
                            type="email"
                            name="Email"
                            required
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            placeholder="Seu e-mail para contato"
                        />
                    </div>
                </div>

                {/* Categoria */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Categoria da arte
                    </label>
                    <div className="flex items-center gap-3">
                        <Palette className="text-pink-600 w-5 h-5" />
                        <select
                            name="Categoria"
                            required
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        >
                            <option value="">Selecione uma categoria</option>
                            <option>Desenho Animado</option>
                            <option>Arte Realista</option>
                            <option>Religioso</option>
                            <option>+18</option>
                        </select>
                    </div>
                </div>

                {/* Descrição */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Descrição da ideia
                    </label>
                    <div className="flex items-start gap-3">
                        <MessageSquare className="text-pink-600 w-5 h-5 mt-3" />
                        <textarea
                            name="Descrição"
                            required
                            rows={4}
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            placeholder="Descreva o que deseja (personagem, cores, pose, expressão...)"
                        />
                    </div>
                </div>

                {/* Imagem de referência */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Enviar imagem de referência (opcional)
                    </label>
                    <div className="flex items-center gap-3">
                        <ImageIcon className="text-pink-600 w-5 h-5" />
                        <input
                            type="file"
                            name="Imagem de Referência"
                            accept="image/*"
                            className="w-full text-gray-700 cursor-pointer"
                        />
                    </div>
                </div>

                {/* Botão de envio */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    type="submit"
                    className="w-full bg-pink-600 text-white font-semibold py-3 rounded-xl hover:bg-pink-700 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                    <Send className="w-5 h-5" /> Enviar pedido
                </motion.button>

                {/* Mensagens de status */}
                {status === "success" && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-green-600 flex items-center gap-2 mt-4"
                    >
                        <CheckCircle className="w-5 h-5" />
                        Pedido enviado com sucesso! Redirecionando...
                    </motion.p>
                )}
                {status === "error" && (
                    <p className="text-red-600 mt-4">
                        Ocorreu um erro ao enviar. Tente novamente.
                    </p>
                )}
            </motion.form>

            {/* 💸 INFORMAÇÕES DE PAGAMENTO */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-2xl mt-16 text-gray-700 text-center"
            >
                <h2 className="text-2xl font-bold text-pink-700 mb-4 flex items-center justify-center gap-2">
                    <Wallet className="w-6 h-6 text-pink-700" /> Pagamento via Pix
                </h2>
                <p className="mb-3">
                    Após o envio do formulário, a artista enviará o valor e as instruções para pagamento via Pix.
                </p>
                <p className="font-semibold text-pink-800">
                    🔑 Chave Pix:{" "}
                    <span className="text-gray-800">karla.albuquerque.pix@gmail.com</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    (Envie o comprovante após confirmação do valor)
                </p>
            </motion.section>
        </main>
    );
}
