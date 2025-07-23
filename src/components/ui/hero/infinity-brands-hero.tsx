import React from "react";

const clientLogos = [
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    },
    {
        name: "Meta",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
    },
    {
        name: "Netflix",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
    },
    {
        name: "Tesla",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg"
    },
    {
        name: "Spotify",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
    },
    {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    },
    {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
];

export default function InfiniteBrandsCarousel() {
    return (
        <div className="flex items-center justify-center">
            <div className="relative z-10 backdrop-blur-sm w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    {/* Infinite Scrolling Container */}
                    <div className="relative overflow-hidden">
                        {/* Gradient masks para suavizar as bordas */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l to-transparent z-10 pointer-events-none" />

                        {/* Scrolling wrapper */}
                        <div className="flex space-x-8 animate-scroll">
                            {/* Primeira linha de logos */}
                            {clientLogos.map((client, index) => (
                                <div
                                    key={client.name}
                                    className="flex-shrink-0 flex items-center justify-center group cursor-pointer"
                                >
                                    <div className="w-30 h-20 rounded-xl flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 hover:scale-110 p-3">
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
                                    <div className="w-30 h-20 rounded-xl flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 hover:scale-110 p-3">
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