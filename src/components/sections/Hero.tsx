'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Users, Award } from 'lucide-react';

const Hero = () => {
    // Logos dos clientes (placeholder - substitua pelas logos reais)
    const clientLogos = [
        { name: 'TechCorp', logo: '🏢' },
        { name: 'InnovaSoft', logo: '💻' },
        { name: 'BuildMax', logo: '🏗️' },
        { name: 'GreenEnergy', logo: '⚡' },
        { name: 'MedCare', logo: '🏥' },
        { name: 'EduTech', logo: '📚' },
        { name: 'FoodChain', logo: '🍽️' },
        { name: 'AutoParts', logo: '🚗' }
    ];

    const stats = [
        { icon: Users, number: '500+', label: 'Clientes Ativos' },
        { icon: Award, number: '15+', label: 'Anos de Experiência' },
        { icon: TrendingUp, number: '98%', label: 'Satisfação do Cliente' },
        { icon: Shield, number: '100%', label: 'Conformidade Fiscal' }
    ];

    return (
        <section className="relative min-h-screen flex flex-col justify-between bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-30 blur-3xl"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="mb-6"
                            >
                                <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                                    <TrendingUp className="w-4 h-4 mr-2" />
                                    Soluções Contábeis Inteligentes
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight mb-6"
                            >
                                <span className="text-gray-900">Solução que</span>{' '}
                                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                                    Eleva
                                </span>
                                <br />
                                <span className="text-gray-900">o seu negócio</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                            >
                                Transforme a gestão contábil da sua empresa com soluções modernas,
                                tecnologia avançada e uma equipe especializada que entende as necessidades
                                do seu negócio.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                                >
                                    Começar Agora
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    Saiba Mais
                                </motion.button>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                            >
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                        className="text-center lg:text-left"
                                    >
                                        <div className="flex items-center justify-center lg:justify-start mb-2">
                                            <stat.icon className="w-6 h-6 text-blue-600 mr-2" />
                                            <span className="text-2xl lg:text-3xl font-bold text-gray-900">
                                                {stat.number}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right Content - Visual Element */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="hidden lg:flex justify-center items-center"
                        >
                            <div className="relative">
                                {/* Main Circle */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 opacity-20"
                                ></motion.div>

                                {/* Inner Elements */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                        className="w-64 h-64 bg-white rounded-full shadow-2xl flex items-center justify-center"
                                    >
                                        <div className="text-center">
                                            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                                <TrendingUp className="w-10 h-10 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Crescimento</h3>
                                            <p className="text-sm text-gray-600">Garantido</p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Floating Elements */}
                                {[
                                    { icon: Shield, position: 'top-0 left-12', delay: 0.7 },
                                    { icon: Users, position: 'top-12 right-0', delay: 0.8 },
                                    { icon: Award, position: 'bottom-0 right-12', delay: 0.9 },
                                    { icon: TrendingUp, position: 'bottom-12 left-0', delay: 1.0 }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: item.delay }}
                                        className={`absolute ${item.position} w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center`}
                                    >
                                        <item.icon className="w-8 h-8 text-blue-600" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Client Logos Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-gray-200"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center mb-10">
                        <h3 className="text-lg font-semibold text-gray-600 mb-8">
                            Marcas que confiam na gente
                        </h3>
                    </div>

                    {/* Logo Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
                        {clientLogos.map((client, index) => (
                            <motion.div
                                key={client.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center justify-center group cursor-pointer"
                            >
                                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-2xl grayscale group-hover:grayscale-0 transition-all duration-300 shadow-sm group-hover:shadow-md">
                                    {client.logo}
                                </div>
                            </motion.div>
                        ))}
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
            </motion.div>
        </section>
    );
};

export default Hero;