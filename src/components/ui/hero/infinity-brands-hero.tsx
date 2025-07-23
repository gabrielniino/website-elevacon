import React from "react";
import { motion } from "framer-motion";

// Dados de exemplo das marcas
const clientLogos = [
    { name: "Apple", logo: "🍎" },
    { name: "Google", logo: "🔍" },
    { name: "Microsoft", logo: "🪟" },
    { name: "Amazon", logo: "📦" },
    { name: "Meta", logo: "👥" },
    { name: "Netflix", logo: "🎬" },
    { name: "Spotify", logo: "🎵" },
    { name: "Uber", logo: "🚗" },
    { name: "Tesla", logo: "⚡" },
    { name: "Nike", logo: "👟" },
    { name: "Samsung", logo: "📱" },
    { name: "Intel", logo: "💻" },
];

export default function InfiniteBrandsCarousel() {
    return (
        <div className=" bg-gray-50 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-gray-200 w-full"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center mb-10">
                        <h3 className="text-lg font-semibold text-gray-600 mb-8">
                            Marcas que confiam na gente
                        </h3>
                    </div>

                    {/* Infinite Scrolling Container */}
                    <div className="relative overflow-hidden">
                        {/* Gradient masks para suavizar as bordas */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none" />

                        {/* Scrolling wrapper */}
                        <div className="flex space-x-8 animate-scroll">
                            {/* Primeira linha de logos */}
                            {clientLogos.map((client, index) => (
                                <motion.div
                                    key={client.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="flex-shrink-0 flex items-center justify-center group cursor-pointer"
                                >
                                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-2xl grayscale group-hover:grayscale-0 transition-all duration-300 shadow-sm group-hover:shadow-md hover:scale-110">
                                        {client.logo}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Duplicação para efeito infinito */}
                            {clientLogos.map((client, index) => (
                                <motion.div
                                    key={`duplicate-${client.name}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="flex-shrink-0 flex items-center justify-center group cursor-pointer"
                                >
                                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-2xl grayscale group-hover:grayscale-0 transition-all duration-300 shadow-sm group-hover:shadow-md hover:scale-110">
                                        {client.logo}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Animated Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="text-center mt-8"
                    >
                        <p className="text-sm text-gray-500">
                            Junte-se a mais de 500 empresas que já elevaram seus resultados conosco
                        </p>
                    </motion.div>
                </div>

                <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
            </motion.div>
        </div>
    );
}