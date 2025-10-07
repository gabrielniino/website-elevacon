"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Calculator,
    FileText,
    TrendingUp,
    Shield,
    Users,
    Building2,
    PieChart,
    CreditCard,
    CheckCircle,
    ArrowRight,
    Clock,
    Award
} from "lucide-react";

export default function ServicesSection() {
    const [activeService, setActiveService] = React.useState(0);

    const services = [
        {
            id: 1,
            icon: Calculator,
            title: "Contabilidade Empresarial",
            anchor: "contabilidade-empresarial",
            description: "Gestão completa da contabilidade da sua empresa com relatórios precisos e atualizados.",
            features: [
                "Escrituração contábil completa",
                "Balancetes mensais",
                "Demonstrações financeiras",
                "Conciliação bancária"
            ],
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            id: 2,
            icon: FileText,
            title: "Declarações Fiscais",
            anchor: "declaracoes-fiscais",
            description: "Cuidamos de todas as obrigações fiscais da sua empresa com total segurança e pontualidade.",
            features: [
                "Imposto de Renda",
                "DCTF e ECD",
                "SPED Fiscal e Contábil",
                "Demais obrigações acessórias"
            ],
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50",
            iconColor: "text-green-600"
        },
        {
            id: 3,
            icon: Users,
            title: "Departamento Pessoal",
            anchor: "departamento-pessoal",
            description: "Gestão completa de recursos humanos e folha de pagamento para sua empresa.",
            features: [
                "Folha de pagamento",
                "Admissões e demissões",
                "FGTS e INSS",
                "Férias e 13º salário"
            ],
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            iconColor: "text-purple-600"
        },
        {
            id: 4,
            icon: TrendingUp,
            title: "Consultoria Tributária",
            anchor: "consultoria-tributaria",
            description: "Otimização fiscal e planejamento tributário para reduzir custos legalmente.",
            features: [
                "Planejamento tributário",
                "Análise de enquadramento",
                "Revisão de tributos",
                "Consultoria especializada",
                "Parcelamentos"
            ],
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
            iconColor: "text-orange-600"
        },
        {
            id: 5,
            icon: Building2,
            title: "Abertura de Empresas",
            anchor: "abertura-empresas",
            description: "Processo completo de constituição da sua empresa de forma rápida e segura.",
            features: [
                "Consulta de viabilidade",
                "Registro na Junta Comercial",
                "CNPJ e inscrições",
                "Licenças e alvarás"
            ],
            color: "from-indigo-500 to-indigo-600",
            bgColor: "bg-indigo-50",
            iconColor: "text-indigo-600"
        },
        {
            id: 6,
            icon: PieChart,
            title: "Análise Financeira",
            anchor: "analise-financeira",
            description: "Relatórios e análises detalhadas para tomada de decisões estratégicas.",
            features: [
                "Fluxo de caixa",
                "DRE gerencial",
                "Indicadores financeiros",
                "Análise de performance"
            ],
            color: "from-teal-500 to-teal-600",
            bgColor: "bg-teal-50",
            iconColor: "text-teal-600"
        }
    ];

    const stats = [
        { number: "", label: "Atendimento para todo o Brasil", icon: Building2 },
        { number: "", label: "Contadores com vasta experiência", icon: Award },
        { number: "", label: "Atendimento Humanizado", icon: CheckCircle },
        { number: "", label: "Satisfação dos Clientes", icon: Clock }
    ];

    return (
        <section id="servicos" className="pt-20 pb-10 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Shield className="w-4 h-4" />
                        <span>Serviços Especializados</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Soluções Contábeis
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Completas para sua Empresa
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Oferecemos serviços contábeis especializados e atendimento personalizado para impulsionar o crescimento do seu negócio.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                            <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.anchor}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group"
                            onClick={() => setActiveService(index)}
                        >
                            <div className={`h-full p-8 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ${activeService === index ? 'ring-2 ring-blue-500 shadow-2xl' : ''
                                }`}>

                                {/* Icon */}
                                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
                            backgroundSize: '50px 50px'
                        }} />
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Pronto para elevar sua Contabilidade?
                        </h3>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Converse com nossos especialistas e descubra como podemos
                            otimizar a gestão financeira da sua empresa.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://wa.me/5543998765432?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20contábeis%20da%20ElevaCon."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 cursor-pointer"
                                >
                                    <span>Fale Conosco</span>
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </a>


                            <a href="#contato">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 cursor-pointer"
                                >
                                    Solicitar Orçamento
                                </motion.button>
                            </a>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}