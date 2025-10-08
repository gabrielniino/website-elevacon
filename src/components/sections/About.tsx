"use client";

import React from "react";
import { Target, Eye, Heart, Users, Award, TrendingUp, Shield, ArrowRight, CheckCircle } from "lucide-react";

export default function AboutUsSection() {
    const pillars = [
        {
            icon: Target,
            title: "Missão",
            description: "Gerar resultados, dentro da ética e da legalidade para atender as expectativas de nossos clientes, fornecedores e colaboradores.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: Eye,
            title: "Visão",
            description: "Agregar conhecimento visando a contínua melhoria nos processos internos, na qualidade dos serviços e no relacionamento com nossos parceiros.",
            color: "from-indigo-500 to-indigo-600"
        },
        {
            icon: Heart,
            title: "Valores",
            description: "Relacionamento com o cliente, qualidade dos serviços prestados, investimento, inovação e comprometimento.",
            color: "from-purple-500 to-purple-600"
        }
    ];

    const highlights = [
        "Visão inovadora e estratégica",
        "Soluções tecnológicas personalizadas",
        "Atendimento a diversos ramos de atividade",
        "Parceria focada em resultados",
        "Qualidade e segurança como principais características"
    ];

    return (
        <section id="quem-somos" className="relative pt-20 pb-10 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full opacity-10 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        <Users className="w-4 h-4 mr-2" />
                        Sobre a ElevaCon
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Transformamos a
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> gestão contábil</span> do seu negócio
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        Prestação de serviços na área contábil, assessoria, contabilidade consultiva
                        e empresarial, consolidando uma relação de parceria através de uma troca de
                        objetivos e resultados profissionais e comerciais.
                    </p>
                </div>

                {/* Mission, Vision, Values Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                        >
                            <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${pillar.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <pillar.icon className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {pillar.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* About Description & Highlights */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-gray-900">
                            Nossa Trajetória
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            A ElevaCon vem se solidificando no mercado devido sua visão inovadora,
                            estratégica e tecnológica que objetiva trazer soluções aos clientes,
                            considerando as peculiaridades de cada um.
                        </p>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            Contamos com um portfólio de clientes em diversos ramos de atividade,
                            de pequeno e médio porte, para os quais executamos os mais variados
                            serviços com a qualidade e segurança que nos é característica principal.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-gray-900 mb-6">
                            Nossos Diferenciais
                        </h4>
                        {highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-3 group"
                            >
                                <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0 group-hover:text-indigo-600 transition-colors" />
                                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                                    {highlight}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}