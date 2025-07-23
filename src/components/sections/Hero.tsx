'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Users, Award } from 'lucide-react';
import GraphicElement3D from '../ui/hero/grafic-element-hero';
import InfiniteBrandsCarousel from '../ui/hero/infinity-brands-hero';

const Hero = () => {

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
                        <GraphicElement3D />

                    </div>
                </div>
            </div>

            {/* Client Logos Section */}
            <InfiniteBrandsCarousel/>
        </section>
    );
};

export default Hero;