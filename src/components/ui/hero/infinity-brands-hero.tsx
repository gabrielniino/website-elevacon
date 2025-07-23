import React from "react";

const clientLogos = [
    { name: "Google", logo: "/google.webp" },
    { name: "Microsoft", logo: "/microsoft.webp" },
    { name: "Acertinity", logo: "/acertinity-ui.webp" },
    { name: "Asteroid", logo: "/asteroid-kit-ui.webp" },
    { name: "Gamity", logo: "/gamity.webp" },
    { name: "Hostit", logo: "/hostit.webp" },
];

export default function InfiniteBrandsCarousel() {
    return (
        <div className="flex items-center justify-center">
            <div className="relative z-10 backdrop-blur-sm w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Infinite Scrolling Container */}
                    <div className="relative overflow-hidden">
                        {/* Gradient masks para suavizar as bordas */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none" />

                        {/* Scrolling wrapper */}
                        <div className="flex space-x-8 animate-scroll">
                            {/* Primeira linha de logos */}
                            {clientLogos.map((client, index) => (
                                <div
                                    key={client.name}
                                    className="flex-shrink-0 flex items-center justify-center group cursor-pointer"
                                >
                                    <div className="w-24 h-16 bg-gray-100 rounded-xl flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 shadow-sm group-hover:shadow-md hover:scale-110 p-3">
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="max-w-full max-h-full object-contain"
                                            // onError={(e) => {
                                            //     // Fallback para quando a imagem não carregar
                                            //     e.target.style.display = 'none';
                                            //     e.target.nextSibling.style.display = 'flex';
                                            // }}
                                        />
                                        <div
                                            className="hidden w-full h-full items-center justify-center text-xs font-medium text-gray-600"
                                        >
                                            {client.name}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Duplicação para efeito infinito */}
                            {clientLogos.map((client, index) => (
                                <div
                                    key={`duplicate-${client.name}`}
                                    className="flex-shrink-0 flex items-center justify-center group cursor-pointer"
                                >
                                    <div className="w-24 h-16 bg-gray-100 rounded-xl flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 shadow-sm group-hover:shadow-md hover:scale-110 p-3">
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="max-w-full max-h-full object-contain"
                                            // onError={(e) => {
                                            //     // Fallback para quando a imagem não carregar
                                            //     e.target.style.display = 'none';
                                            //     e.target.nextSibling.style.display = 'flex';
                                            // }}
                                        />
                                        <div
                                            className="hidden w-full h-full items-center justify-center text-xs font-medium text-gray-600"
                                        >
                                            {client.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Animated Text */}
                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-500">
                            Junte-se a mais de 500 empresas que já elevaram seus resultados conosco
                        </p>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(calc(-100% / 3));
                        }
                    }
                    
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                        width: max-content;
                    }
                    
                    .animate-scroll:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </div>
        </div>
    );
}