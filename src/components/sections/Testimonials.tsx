'use client';

import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Shield } from 'lucide-react';
import { AnimatedTestimonials } from '../ui/animated-testimonials';

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Natália Pereira",
            designation: "Product Manager at TechFlow",
            src: "/nati-test.enc",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Maria Luiza",
            designation: "CTO at InnovateSphere",
            src: "/mary-test.enc",
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Juliana Licha",
            designation: "Operations Director at CloudScale",
            src: "/ju-test.enc",
        },
        {
            quote:
                "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "Gabriel Gonçalves",
            designation: "Engineering Lead at DataPro",
            src: "/nino-test.jpeg",
        },
        {
            quote:
                "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Henrique Gonçalves",
            designation: "VP of Technology at FutureNet",
            src: "/perfil-ceo.enc",
        },
    ];

    const stats = [
        { number: '98%', label: 'Satisfação dos Clientes', icon: Star },
        { number: '500+', label: 'Empresas Atendidas', icon: TrendingUp },
        { number: '15+', label: 'Anos de Experiência', icon: Shield },
        { number: '100%', label: 'Conformidade Fiscal', icon: Quote },
    ];

    return (
        <section id="clientes" className="relative bg-gradient-to-br pb-10 from-slate-50 via-white to-blue-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-40 left-10 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
            </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-20 lg:pb-0">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
                    >
                        <Quote className="w-4 h-4 mr-2" />
                        Depoimentos de Clientes
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                    >
                        O que nossos clientes
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            falam sobre nós
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Descubra como a ElevaCon tem transformado negócios em todo o Brasil,
                        oferecendo soluções contábeis que realmente elevam resultados.
                    </motion.p>
                </motion.div>

                {/* Testimonials Component */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12"
                >
                    <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
                </motion.div>

                
            </div>
        </section>
    );
};

export default TestimonialsSection;