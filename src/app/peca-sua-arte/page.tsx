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
import PixCopyBlock from "@/components/PixCopyBlock";

export default function PecaSuaArte() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        categoria: "",
        descricao: "",
        enviarImagem: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { nome, email, categoria, descricao } = formData;

        if (!nome || !email || !categoria || !descricao) {
            alert("Por favor, preencha todos os campos obrigatórios!");
            return;
        }

        // Monta a mensagem para o WhatsApp
        const mensagem = encodeURIComponent(
            `🎨 *Novo Pedido de Arte Personalizada*\n\n` +
            `👤 *Nome:* ${nome}\n` +
            `📧 *E-mail:* ${email}\n` +
            `🖌️ *Categoria:* ${categoria}\n` +
            `💭 *Descrição:* ${descricao}\n` +
            `🖼️ *Deseja enviar imagem de referência:* ${formData.enviarImagem ? "Sim ✅" : "Não ❌"}\n\n` +
            `Enviado via ArteVivaQ 🌸`
        );

        // Número da artista (com código do país e DDD)
        const numeroWhatsApp = "5581995450707";
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

        // Abre o WhatsApp em nova aba
        window.open(linkWhatsApp, "_blank");

        // Mostra status de sucesso e limpa o formulário
        setStatus("success");
        setFormData({
            nome: "",
            email: "",
            categoria: "",
            descricao: "",
            enviarImagem: false,
        });

        // Remove a mensagem de sucesso após alguns segundos
        setTimeout(() => setStatus("idle"), 4000);
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

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-pink-50/90 border border-pink-200 text-xs sm:text-sm text-gray-700 rounded-xl p-4 mb-6 text-center shadow-sm leading-relaxed sm:leading-normal"
            >
                <strong>Dica:</strong> Em alguns celulares no <strong>modo escuro</strong>,
                os textos de instrução dentro dos campos podem ficar mais difíceis de ler.
                <br className="hidden sm:block" />
                Se preferir, <strong>desative o modo escuro</strong> temporariamente para melhor visualização —
                isso <strong>não afeta o envio</strong> da mensagem.
            </motion.div>

            {/* 📝 FORMULÁRIO */}
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-2xl text-left space-y-6"
            >
                {/* Nome */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Nome completo
                    </label>
                    <div className="flex items-center gap-3">
                        <User className="text-pink-600 w-5 h-5" />
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
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
                            name="descricao"
                            value={formData.descricao}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            placeholder="Descreva o que deseja (personagem, cores, pose, expressão...)"
                        />
                    </div>
                </div>

                {/* Deseja enviar imagem? */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Deseja enviar uma imagem de referência pelo WhatsApp?
                    </label>
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            name="enviarImagem"
                            checked={formData.enviarImagem}
                            onChange={(e) =>
                                setFormData({ ...formData, enviarImagem: e.target.checked })
                            }
                            className="w-5 h-5 accent-pink-600 cursor-pointer"
                        />
                        <span className="text-gray-700 text-sm">
                            Sim, pretendo enviar uma imagem junto à conversa.
                        </span>
                    </div>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                    📸 Caso marque essa opção, envie a imagem de referência diretamente na conversa do WhatsApp após clicar em “Enviar via WhatsApp”.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-pink-50 border border-pink-200 rounded-xl text-sm text-gray-700 text-center px-4 py-3 flex items-center justify-center gap-2 shadow-sm"
                >
                    💬 <span>Ao clicar em <strong>Enviar via WhatsApp</strong>, você será redirecionado para conversar diretamente com a artista.</span>
                </motion.div>

                {/* Botão de envio */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    type="submit"
                    disabled={status === "success"}
                    className={`w-full font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer 
        ${status === "success"
                            ? "bg-green-500 text-white"
                            : "bg-pink-600 hover:bg-pink-700 text-white"
                        }`}
                >
                    {status === "success" ? (
                        <>
                            <CheckCircle className="w-5 h-5" /> Enviado!
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" /> Enviar via WhatsApp
                        </>
                    )}
                </motion.button>

                {/* Mensagens de status */}
                {status === "success" && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-green-600 flex items-center gap-2 mt-4"
                    >
                        <CheckCircle className="w-5 h-5" />
                        Pedido enviado! Abra o WhatsApp para finalizar com a artista.
                    </motion.p>
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

                <PixCopyBlock
                    chavePix="karla.simone2025@gmail.com"
                    qrCodePath="/pix-karla.png"
                    nome="Sra. Albuquerque"
                    tipo="E-mail"
                />

                <p className="text-sm text-gray-500 mt-2">
                    (Envie o comprovante após confirmação do valor)
                </p>
            </motion.section>
        </main>
    );
}
