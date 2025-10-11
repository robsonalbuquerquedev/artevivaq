"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaComment } from "react-icons/fa";

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
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center px-6 py-12">
            <motion.div
                className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-2xl font-bold text-pink-700 mb-6 flex items-center gap-2">
                    <FaPaperPlane /> Feedback
                </h1>
                <p className="text-gray-500 mb-6">
                    Envie sua mensagem para a ArteVivaQ. Responderemos assim que possível!
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Nome */}
                    <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                        <FaUser className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Seu nome"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </motion.div>

                    {/* Mensagem */}
                    <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                        <FaComment className="absolute left-3 top-3 text-gray-400" />
                        <textarea
                            name="message"
                            placeholder="Sua mensagem"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </motion.div>

                    {/* Botão enviar */}
                    <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                        {status === "loading" ? "Enviando..." : "Enviar"}
                        {status !== "loading" && <FaPaperPlane />}
                    </motion.button>
                </form>

                {/* Status da submissão */}
                {status === "success" && (
                    <motion.p
                        className="mt-4 text-green-600 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        ✅ Mensagem enviada com sucesso!
                    </motion.p>
                )}
                {status === "error" && (
                    <motion.p
                        className="mt-4 text-red-600 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        ❌ Ocorreu um erro. Tente novamente.
                    </motion.p>
                )}
            </motion.div>
        </main>
    );
}
