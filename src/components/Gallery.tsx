"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface GalleryProps {
    images: string[];
    altPrefix?: string;
}

export default function Gallery({ images, altPrefix = "Arte" }: GalleryProps) {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <>
            {/* Grid de imagens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl bg-white cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelected(img)}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <Image
                            src={`/${img}`}
                            alt={`${altPrefix} ${index + 1}`}
                            width={400}
                            height={400}
                            className="object-cover w-full h-64"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Modal de zoom */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            className="relative max-w-3xl w-full p-4"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()} // evita fechar ao clicar na imagem
                        >
                            <button
                                className="absolute top-2 right-2 text-white text-2xl p-1 hover:text-red-500"
                                onClick={() => setSelected(null)}
                            >
                                <FaTimes />
                            </button>
                            <Image
                                src={`/${selected}`}
                                alt={altPrefix}
                                width={800}
                                height={800}
                                className="object-contain w-full h-full rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
