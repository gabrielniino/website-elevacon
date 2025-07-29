'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Mostrar o botão após 2 segundos
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            // Mostrar tooltip após aparecer
            setTimeout(() => setShowTooltip(true), 1000);
            // Esconder tooltip após 7 segundos
            setTimeout(() => setShowTooltip(false), 5000);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleWhatsAppClick = () => {
        const phoneNumber = '5543998765432'; // Número da ElevaCon
        const message = encodeURIComponent(
            'Olá! Vim através do site da ElevaCon e gostaria de saber mais sobre os serviços contábeis. Podem me ajudar?'
        );
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank');
    };

    const closeTooltip = () => {
        setShowTooltip(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-6 right-6 z-50">
                    {/* Tooltip */}
                    <AnimatePresence>
                        {showTooltip && !isHovered && (
                            <motion.div
                                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute right-20 bottom-2 mb-2"
                            >
                                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-xs">
                                    {/* Tooltip Arrow */}
                                    <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
                                        <div className="border-l-8 border-l-white border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
                                    </div>

                                    {/* Close Button */}
                                    <button
                                        onClick={closeTooltip}
                                        className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                                    >
                                        <X className="w-3 h-3 text-gray-400" />
                                    </button>

                                    {/* Content */}
                                    <div className="pr-4">
                                        <div className="flex items-center mb-2">
                                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
                                                <MessageCircle className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 text-sm">ElevaCon</p>
                                                <p className="text-xs text-green-500">Online agora</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            Olá! 👋 Precisa de ajuda com sua contabilidade?
                                            <br />
                                            <strong>Fale conosco no WhatsApp!</strong>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Main Button */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                        }}
                        className="relative"
                    >
                        {/* Pulse Animation Ring */}
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.7, 0, 0.7]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-green-500 rounded-full"
                        />

                        {/* Notification Dot */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white z-10"
                        >
                            <div className="w-full h-full bg-red-500 rounded-full animate-ping"></div>
                        </motion.div>

                        {/* Main Button */}
                        <motion.button
                            onClick={handleWhatsAppClick}
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group overflow-hidden cursor-pointer"
                        >
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full"></div>

                            {/* Hover Effect */}
                            <motion.div
                                className="absolute inset-0 bg-white rounded-full"
                                initial={{ scale: 0, opacity: 0 }}
                                whileHover={{ scale: 1, opacity: 0.1 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* WhatsApp Icon - Custom SVG */}
                            <motion.div
                                animate={{ rotate: isHovered ? [0, 10, -10, 0] : 0 }}
                                transition={{ duration: 0.5 }}
                                className="relative z-10"
                            >
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-white"
                                >
                                    <path
                                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.085"
                                        fill="currentColor"
                                    />
                                </svg>
                            </motion.div>
                        </motion.button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppButton;