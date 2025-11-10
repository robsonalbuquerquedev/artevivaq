"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLock, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import Gallery from "@/components/Gallery";
import Link from "next/link";

export default function AdultoPage() {
    const [hasAccess, setHasAccess] = useState(false);
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    // 🔹 senha configurada pela artista (ex: enviada por e-mail)
    const senhaCorreta = "ARTEVIVAQ2025"; // ← pode ser trocada facilmente

    useEffect(() => {
        const access = localStorage.getItem("adultAccess");
        if (access === "true") setHasAccess(true);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (senha === senhaCorreta) {
            localStorage.setItem("adultAccess", "true");
            setHasAccess(true);
            setError("");
        } else {
            setError("Senha incorreta. Verifique seu e-mail e tente novamente.");
        }
    };

    const images = [
        "art013.jpg",
        "art014.jpg",
        "art015.jpg",
        "art017.jpg",
        "art018.jpg",
        "art019.jpg",
        "art021.jpg",
        "art023.jpg",
        "art025.jpg",
        "art027.jpg",
        "art034.jpg",
        "art035.jpg",
        "art036.jpg",
        "art037.jpg",
    ];

    // 🔒 Caso o usuário ainda não tenha acesso
    if (!hasAccess) {
        return (
            <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center px-6 py-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-md bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-pink-100"
                >
                    <div className="flex justify-center mb-4 text-red-600">
                        <FaExclamationTriangle className="text-4xl" />
                    </div>
                    <h1 className="text-2xl font-bold text-pink-700 mb-2">
                        ⚠️ Conteúdo +18
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Este conteúdo é destinado apenas a maiores de 18 anos.
                        <br />
                        Para acessar, insira a senha fornecida pela artista.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Digite a senha recebida"
                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition font-medium flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <FaLock /> Acessar
                        </motion.button>
                    </form>

                    <p className="text-gray-500 text-sm mt-6">
                        Ainda não possui a senha?{" "}
                        <Link
                            href="/adulto-solicitar-acesso"
                            className="text-pink-700 font-semibold hover:underline"
                        >
                            Solicite aqui
                        </Link>
                    </p>
                </motion.div>
            </main>
        );
    }

    // ✅ Caso o usuário já tenha acesso autorizado
    return (
        <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-12">
            {/* Aviso +18 */}
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex justify-center items-center gap-3 text-red-600">
                    <FaCheckCircle className="text-3xl" />
                    <h1 className="text-3xl md:text-4xl font-bold">Acesso Liberado ✅</h1>
                </div>
                <p className="text-gray-500 mt-2">
                    Visualize com responsabilidade. Conteúdo artístico e reservado a
                    maiores de 18 anos.
                </p>
            </motion.div>

            <Gallery images={images} altPrefix="Arte adulto" />
        </main>
    );
}
