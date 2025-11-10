"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ExternalLink, Palette, PencilRuler, Box } from "lucide-react";

// 🎨 Produtos com categoria
const produtos = [
    {
        nome: "Kit de Lápis Artísticos Profissionais",
        descricao: "Conjunto premium com lápis de várias durezas para sombreamento e esboço.",
        imagem: "/produtos/lapis-artistico.png",
        link: "https://s.shopee.com.br/5VNOAFJkOs",
        categoria: "Desenho",
    },
    {
        nome: "Sketchbook Premium A5",
        descricao: "Caderno de desenho com folhas grossas, ideal para grafite, nanquim e aquarela leve.",
        imagem: "/produtos/sketchbook.png",
        link: "https://s.shopee.com.br/1gAfbQfocq",
        categoria: "Desenho",
    },
    {
        nome: "Pincéis de Ponta Fina – Kit com 12",
        descricao: "Pincéis variados para pintura detalhada, perfeitos para aquarela e tinta acrílica.",
        imagem: "/produtos/pinceis.png",
        link: "https://s.shopee.com.br/1gAfbl2XD0",
        categoria: "Pintura",
    },
    {
        nome: "Tinta Aquarela Profissional 24 Cores",
        descricao: "Pigmentos vivos e solúveis em água, com excelente fixação e mistura.",
        imagem: "/produtos/aquarela.png",
        link: "https://s.shopee.com.br/2qMd0FgTY5",
        categoria: "Pintura",
    },
    {
        nome: "Canetas Nanquim Artísticas",
        descricao: "Canetas de precisão com tinta preta resistente à água — ideais para ilustrações.",
        imagem: "/produtos/nanquim.png",
        link: "https://s.shopee.com.br/AUm48aTEEP",
        categoria: "Acessórios",
    },
    {
        nome: "Estojo Organizador de Materiais",
        descricao: "Estojo multifuncional para guardar lápis, pincéis e marcadores de forma prática.",
        imagem: "/produtos/estojo.png",
        link: "https://s.shopee.com.br/6fZLan7qTn",
        categoria: "Acessórios",
    },
];

export default function LojaPage() {
    const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

    const categorias = [
        { nome: "Todos", icone: <ShoppingBag className="w-4 h-4" /> },
        { nome: "Desenho", icone: <PencilRuler className="w-4 h-4" /> },
        { nome: "Pintura", icone: <Palette className="w-4 h-4" /> },
        { nome: "Acessórios", icone: <Box className="w-4 h-4" /> },
    ];

    const produtosFiltrados =
        categoriaAtiva === "Todos"
            ? produtos
            : produtos.filter((p) => p.categoria === categoriaAtiva);

    return (
        <main className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-100 to-pink-50 px-6 py-20 flex flex-col items-center">
            {/* 🌸 Hero da Loja */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl text-center mb-10"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4 flex items-center justify-center gap-2">
                    <ShoppingBag className="w-8 h-8 text-pink-600" />
                    Loja Criativa ArteVivaQ
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Descubra materiais artísticos selecionados com carinho 🎨
                    Tudo o que você precisa para transformar inspiração em arte.
                </p>
            </motion.div>

            {/* 🧩 Filtros de categorias */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-3 mb-12"
            >
                {categorias.map((cat) => (
                    <button
                        key={cat.nome}
                        onClick={() => setCategoriaAtiva(cat.nome)}
                        className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all shadow-sm
              ${categoriaAtiva === cat.nome
                                ? "bg-pink-600 text-white border-pink-600"
                                : "bg-white/80 text-gray-700 border-pink-200 hover:bg-pink-50 hover:text-pink-700"
                            }`}
                    >
                        {cat.icone} {cat.nome}
                    </button>
                ))}
            </motion.div>

            {/* 🛒 Lista de Produtos */}
            <motion.section
                layout
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full"
            >
                <AnimatePresence>
                    {produtosFiltrados.map((item, index) => (
                        <motion.div
                            key={item.nome}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="bg-white/90 backdrop-blur-md border border-pink-100 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col"
                        >
                            <div className="bg-white p-3 rounded-t-2xl flex items-center justify-center">
                                <Image
                                    src={item.imagem}
                                    alt={item.nome}
                                    width={300}
                                    height={220}
                                    className="object-contain rounded-lg shadow-sm"
                                />
                            </div>
                            <div className="p-5 flex flex-col justify-between flex-grow">
                                <div>
                                    <h2 className="text-lg font-semibold text-pink-700 mb-2">
                                        {item.nome}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-4">{item.descricao}</p>
                                </div>
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    className="mt-auto inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition font-medium cursor-pointer"
                                >
                                    Comprar <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.section>

            {/* 💖 Rodapé da Loja */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-gray-600 text-sm mt-14 max-w-xl text-center"
            >
                Cada compra feita através dos nossos links ajuda a manter o projeto{" "}
                <strong>ArteVivaQ</strong> vivo e a apoiar novas criações artísticas 🌸
            </motion.p>
        </main>
    );
}
