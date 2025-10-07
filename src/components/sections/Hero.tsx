'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles,  } from 'lucide-react';
import Hero3DElement from '../ui/hero/element-3d';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-between bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">

            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>



            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="mb-6"
                            >
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full text-sm font-medium mb-4 shadow-lg cursor-pointer"
                                >
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    Soluções Contábeis Inteligentes
                                </motion.span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight mb-6"
                            >
                                <span className="text-white">Solução que</span>{' '}
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                                        Eleva
                                    </span>
                                    <motion.span
                                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                    />
                                </span>
                                <br />
                                <span className="text-white">o seu negócio</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                            >
                                Descomplicamos a burocracia contábil para que você foque no crescimento do seu negócio.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden"
                                    onClick={() => {
                                        const section = document.querySelector('#servicos')
                                        section?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                >
                                    <span className="relative z-10 flex items-center">
                                        Começar Agora
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.6)' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/20 hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                                    onClick={() => {
                                        const section = document.querySelector('#saiba-mais')
                                        section?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                >
                                    Saiba Mais
                                </motion.button>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="hidden lg:block"
                        >
                            <Hero3DElement />
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="relative z-10">
                <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <motion.path
                        d="M0,0 C300,80 600,80 900,40 L1200,60 L1200,120 L0,120 Z"
                        fill="rgba(255, 255, 255, 0.05)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </svg>
            </div>
        </section>
    );
};

export default Hero;