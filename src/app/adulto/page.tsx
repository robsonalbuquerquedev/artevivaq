"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLock, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import Image from "next/image";

export default function AdultoPage() {
    const [hasAccess, setHasAccess] = useState(false);
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    // 🔹 Senha definida pela artista
    const senhaCorreta = "ARTEVIVAQ2025";

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
            <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 md:py-24">

                {/* 🎨 Texto lateral */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <div className="flex items-center justify-center md:justify-start gap-3 text-red-600 mb-3">
                        <FaExclamationTriangle className="text-3xl" />
                        <h1 className="text-3xl md:text-4xl font-bold">Conteúdo +18</h1>
                    </div>

                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        Esta seção da <strong>ArteVivaQ</strong> contém obras de{" "}
                        <strong>nu artístico</strong> e estudos corporais voltados à arte.
                        O acesso é exclusivo para maiores de idade.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-pink-50 border border-pink-200 text-sm text-gray-700 rounded-xl p-4 mb-6 shadow-sm inline-flex items-center gap-2"
                    >
                        🌙 <strong>Dica:</strong> Desative o modo escuro para melhor
                        visualização dos campos.
                    </motion.div>

                    <p className="text-gray-600">
                        Insira abaixo a senha recebida por e-mail para desbloquear o acesso.
                    </p>
                </motion.div>

                {/* 🔐 Formulário */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 w-full max-w-md bg-white/90 backdrop-blur-md border border-pink-100 shadow-xl rounded-2xl p-8"
                >
                    <h2 className="text-2xl font-bold text-pink-700 mb-4 flex items-center justify-center gap-2">
                        <FaLock /> Inserir Senha
                    </h2>

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

    // ✅ Caso o usuário já tenha acesso
    return (
        <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center px-6 py-16 md:py-24">
            {/* Cabeçalho visual */}
            <motion.div
                className="text-center mb-10 max-w-2xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex justify-center items-center gap-3 text-pink-600 mb-2">
                    <FaCheckCircle className="text-3xl" />
                    <h1 className="text-3xl md:text-4xl font-bold">Acesso Liberado ✅</h1>
                </div>
                <p className="text-gray-600">
                    Visualize com responsabilidade — o conteúdo a seguir é artístico e
                    voltado ao estudo da forma humana.
                </p>
            </motion.div>

            <Gallery images={images} altPrefix="Arte adulto" />
        </main>
    );
}
