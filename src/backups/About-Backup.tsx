"use client";

import React from "react";
import { Users, Award, TrendingUp, Shield, ArrowRight, CheckCircle } from "lucide-react";

export default function AboutUsSection() {
    const stats = [
        { number: "500+", label: "Empresas Atendidas", icon: Users },
        { number: "15+", label: "Anos de Experiência", icon: Award },
        { number: "98%", label: "Taxa de Satisfação", icon: TrendingUp },
        { number: "24/7", label: "Suporte Disponível", icon: Shield },
    ];

    const values = [
        "Transparência em todos os processos",
        "Tecnologia de ponta aplicada à contabilidade",
        "Relacionamento próximo e personalizado",
        "Resultados que elevam o seu negócio"
    ];

    return (
        <section id="quem-somos" className="relative pt-20 pb-10 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Section Header */}
                        <div className="space-y-4">
                            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                <Users className="w-4 h-4 mr-2" />
                                Sobre a ElevaCon
                            </span>

                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Transformamos a
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> gestão contábil</span> do seu negócio
                            </h2>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Há mais de 15 anos, a ElevaCon oferece soluções contábeis inovadoras
                                que combinam expertise tradicional com tecnologia de ponta, ajudando
                                empresas a crescer de forma sustentável e estratégica.
                            </p>
                        </div>

                        {/* Values List */}
                        <div className="space-y-4">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-3 group"
                                >
                                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 group-hover:text-indigo-600 transition-colors" />
                                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center hover:scale-105">
                                Conheça Nossa História
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Founder Box */}
                    {/* <div className="relative">
                      
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-2xl opacity-60 rotate-12"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-2xl opacity-40 -rotate-6"></div>

                        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500">
                            <div className="relative mb-6">
                                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center overflow-hidden group">
                                    <img
                                        src="/perfil-ceo.enc"
                                        alt="Fundador da ElevaCon"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                                    // onError={(e) => {
                                    //     const target = e.target as HTMLImageElement;
                                    //     target.outerHTML = `
                                    //         <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                                    //             <div class="text-6xl">👨‍💼</div>
                                    //         </div>
                                    //     `;
                                    // }}
                                    />
                                </div>

                                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                                    CEO & Fundador
                                </div>
                            </div>

                            <div className="text-center space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        Henrique Gonçalves Pereira
                                    </h3>
                                    <p className="text-blue-600 font-medium">
                                        Contador & Empreendedor
                                    </p>
                                </div>

                                <p className="text-gray-600 leading-relaxed">
                                    "Fundei a ElevaCon com a missão de revolucionar a contabilidade
                                    brasileira, oferecendo soluções que realmente fazem a diferença
                                    na vida dos empresários."
                                </p>

                                <div className="flex flex-wrap justify-center gap-2 pt-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                        CRC Ativo
                                    </span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                                        MBA Gestão
                                    </span>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                        +15 Anos
                                    </span>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                            LinkedIn
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                            CRC: 123456/SP
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};