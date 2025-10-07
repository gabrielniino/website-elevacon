'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Sparkles, Shield, Zap } from 'lucide-react';

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

            {/* Gradient Orbs */}
            <div className="absolute inset-0">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
                ></motion.div>
                <motion.div 
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ 
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-3xl"
                ></motion.div>
                <motion.div 
                    animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl"
                ></motion.div>
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
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
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

                            {/* Stats Cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                className="grid grid-cols-3 gap-4 mb-8 max-w-xl mx-auto lg:mx-0"
                            >
                                {[
                                    { value: '500+', label: 'Clientes' },
                                    { value: '99%', label: 'Satisfação' },
                                    { value: '24/7', label: 'Suporte' }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
                                    >
                                        <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>

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

                        {/* Right Content - Animated Calculator */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="hidden lg:block"
                        >
                            <div className="relative">
                                {/* Calculator Card */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl overflow-hidden"
                                >
                                    {/* Calculator Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                                <span className="text-white font-bold text-xl">$</span>
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold">Análise Contábil</h3>
                                                <p className="text-gray-400 text-xs">Em tempo real</p>
                                            </div>
                                        </div>
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-3 h-3 bg-green-400 rounded-full"
                                        />
                                    </div>

                                    {/* Display Screen */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 mb-6 border border-white/10"
                                    >
                                        <div className="text-right">
                                            <div className="text-gray-400 text-sm mb-2">Resultado</div>
                                            <motion.div
                                                key={Math.random()}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                                            >
                                                R$ 47.582,00
                                            </motion.div>
                                            <div className="flex items-center justify-end gap-2 mt-2">
                                                <TrendingUp className="w-4 h-4 text-green-400" />
                                                <span className="text-green-400 text-sm font-semibold">+12.5%</span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Calculation Breakdown */}
                                    <div className="space-y-3 mb-6">
                                        {[
                                            { label: 'Receitas', value: 'R$ 68.400,00', color: 'green', delay: 0.6 },
                                            { label: 'Despesas', value: 'R$ 20.818,00', color: 'red', delay: 0.7 },
                                            { label: 'Impostos', value: 'R$ 12.360,00', color: 'yellow', delay: 0.8 }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: item.delay }}
                                                whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                                                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer transition-all"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-2 h-2 rounded-full bg-${item.color}-400`} />
                                                    <span className="text-gray-300 text-sm">{item.label}</span>
                                                </div>
                                                <span className="text-white font-semibold text-sm">{item.value}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Calculator Buttons Grid */}
                                    <div className="grid grid-cols-4 gap-2">
                                        {['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn, i) => (
                                            <motion.button
                                                key={i}
                                                whileHover={{ scale: 1.1, backgroundColor: btn === '=' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 255, 255, 0.15)' }}
                                                whileTap={{ scale: 0.95 }}
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.9 + i * 0.02 }}
                                                className={`h-12 rounded-xl font-semibold transition-all ${
                                                    btn === '=' 
                                                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                                                        : 'bg-white/10 text-white border border-white/20'
                                                }`}
                                            >
                                                {btn}
                                            </motion.button>
                                        ))}
                                    </div>

                                    {/* Animated Lines */}
                                    <motion.div
                                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
                                        animate={{ x: ['-100%', '100%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                </motion.div>

                                {/* Floating Badges */}
                                <motion.div
                                    animate={{ 
                                        y: [0, -10, 0],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{ 
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-5 py-2 rounded-full font-bold shadow-xl text-sm"
                                >
                                    ✓ Certificado Digital
                                </motion.div>

                                <motion.div
                                    animate={{ 
                                        y: [0, -8, 0],
                                        rotate: [0, -5, 0]
                                    }}
                                    transition={{ 
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                    className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-5 py-2 rounded-full font-bold shadow-xl text-sm"
                                >
                                    💼 CRC Ativo
                                </motion.div>
                            </div>
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