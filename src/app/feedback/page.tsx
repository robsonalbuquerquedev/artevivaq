"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, MessageSquare, CheckCircle, XCircle, Moon } from "lucide-react";

export default function FeedbackPage() {
    const [form, setForm] = useState({ name: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://formsubmit.co/ajax/4e955f7fefc407e2eded8c5f9cf357e3", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (data.success || response.ok) {
                setStatus("success");
                setForm({ name: "", message: "" });
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 via-rose-100 to-pink-50 py-16 px-6 overflow-hidden relative">

            {/* 🔹 Fundo artístico */}
            <div className="absolute inset-0 bg-[url('/texture.svg')] opacity-10 mix-blend-overlay" />

            {/* 🔹 Hero Split */}
            <section className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-5xl bg-white/60 backdrop-blur-md rounded-[2rem] shadow-xl overflow-hidden border border-pink-100">

                {/* Lado esquerdo - mensagem */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left p-10 bg-gradient-to-b from-pink-100 via-rose-100 to-pink-50"
                >
                    <h1 className="text-3xl font-bold text-pink-800 mb-3">📩 Envie seu Feedback</h1>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Sua opinião é muito importante para nós!
                        Compartilhe suas ideias, sugestões ou impressões sobre o projeto{" "}
                        <strong>ArteVivaQ</strong> 💕
                    </p>
                    <p className="text-sm text-gray-500">
                        Cada mensagem ajuda a deixar nosso espaço ainda mais inspirador 🎨
                    </p>
                </motion.div>

                {/* Lado direito - formulário */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 p-8"
                >
                    {/* 🔸 Aviso sobre o modo escuro */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-pink-50 border border-pink-200 text-sm text-gray-700 rounded-xl p-3 mb-6 text-center shadow-sm"
                    >
                        <Moon className="inline-block w-4 h-4 mr-1 text-pink-600" />
                        <strong>Dica:</strong> Se os textos estiverem difíceis de ler, desative o modo escuro do navegador.
                        Isso <strong>não afeta o envio</strong> — apenas melhora a visualização. 🌙
                    </motion.div>

                    {/* 🔸 Formulário */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {/* Nome */}
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-pink-600" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Seu nome"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded-xl pl-10 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/70 backdrop-blur-sm text-gray-800"
                            />
                        </div>

                        {/* Mensagem */}
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 text-pink-600" />
                            <textarea
                                name="message"
                                placeholder="Escreva sua mensagem"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="border border-gray-300 rounded-xl pl-10 pr-4 py-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/70 backdrop-blur-sm text-gray-800"
                            />
                        </div>

                        {/* Botão de envio */}
                        <motion.button
                            type="submit"
                            disabled={status === "loading"}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`cursor-pointer w-full font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition ${status === "loading"
                                    ? "bg-pink-400 text-white cursor-not-allowed"
                                    : "bg-pink-600 hover:bg-pink-700 text-white shadow-md"
                                }`}
                        >
                            {status === "loading" ? "Enviando..." : "Enviar Feedback"}
                            {status !== "loading" && <Send className="w-5 h-5" />}
                        </motion.button>

                        {/* Status do envio */}
                        {status === "success" && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-green-600 flex items-center gap-2 justify-center mt-3"
                            >
                                <CheckCircle className="w-5 h-5" />
                                Mensagem enviada com sucesso!
                            </motion.p>
                        )}
                        {status === "error" && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-600 flex items-center gap-2 justify-center mt-3"
                            >
                                <XCircle className="w-5 h-5" />
                                Ocorreu um erro. Tente novamente.
                            </motion.p>
                        )}
                    </form>
                </motion.div>
            </section>
        </main>
    );
}
