'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    Minus,
    HelpCircle,
    FileText,
    Calculator,
    Shield,
    Clock,
    TrendingUp,
    Users,
    Building
} from 'lucide-react';

interface FAQ {
    id: number;
    question: string;
    answer: string;
    category: 'geral' | 'servicos' | 'prazos' | 'custos';
    icon: any;
}

const FAQSection = () => {
    const [activeItems, setActiveItems] = useState<number[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>('todos');

    const categories = [
        { id: 'todos', name: 'Todas', icon: HelpCircle },
        { id: 'geral', name: 'Geral', icon: Building },
        { id: 'servicos', name: 'Serviços', icon: FileText },
        { id: 'prazos', name: 'Prazos', icon: Clock },
        { id: 'custos', name: 'Custos', icon: Calculator }
    ];

    const faqs: FAQ[] = [
        {
            id: 1,
            category: 'geral',
            icon: Building,
            question: 'O que diferencia a ElevaCon de outras empresas de contabilidade?',
            answer: 'A ElevaCon oferece um atendimento humanizado, entendendo a necessidade de cada cliente.'
        },
        {
            id: 2,
            category: 'servicos',
            icon: FileText,
            question: 'Quais serviços contábeis vocês oferecem?',
            answer: 'Oferecemos contabilidade completa, consultoria fiscal, departamento pessoal, abertura de empresas, planejamento tributário, auditoria contábil, consultoria empresarial, e acompanhamento de processos junto aos órgãos competentes. Todos os serviços são personalizados conforme o perfil e necessidades da sua empresa.'
        },
        {
            id: 3,
            category: 'prazos',
            icon: Clock,
            question: 'Qual o prazo para abertura de uma nova empresa?',
            answer: 'O prazo médio para abertura de empresa é de 5 a 15 dias úteis, dependendo do tipo de negócio e documentação. Empresas simples (MEI, SLU) podem ser abertas em 3-5 dias, enquanto empresas mais complexas podem levar até 20 dias. Nossa equipe acompanha todo o processo e mantém você informado em cada etapa.'
        },
        {
            id: 4,
            category: 'custos',
            icon: Calculator,
            question: 'Como funciona a precificação dos serviços contábeis?',
            answer: 'Nossos preços são baseados no porte da empresa, complexidade das operações, e serviços contratados. Oferecemos pacotes mensais a partir de R$ 299.'
        },
        // {
        //     id: 5,
        //     category: 'prazos',
        //     icon: Shield,
        //     question: 'Vocês garantem o cumprimento de todos os prazos fiscais?',
        //     answer: 'Sim! Temos um cronograma digital rigoroso com todas as obrigações fiscais e trabalhistas. Nossa equipe monitora constantemente os prazos e você recebe notificações automáticas. Oferecemos garantia total contra multas por atraso em obrigações sob nossa responsabilidade.'
        // },
        {
            id: 6,
            category: 'servicos',
            icon: TrendingUp,
            question: 'Vocês oferecem consultoria para redução de impostos?',
            answer: 'Absolutamente! Nosso planejamento tributário analisa sua operação para identificar oportunidades legais de redução de impostos. Já conseguimos economias de 15% a 40% para nossos clientes através de enquadramento tributário adequado, aproveitamento de benefícios fiscais e reestruturação societária quando necessário.'
        },
        {
            id: 7,
            category: 'geral',
            icon: Users,
            question: 'Como funciona o atendimento e suporte ao cliente?',
            answer: 'Cada cliente tem um contador responsável . Oferecemos suporte via WhatsApp, e-mail, telefone e reuniões presenciais ou virtuais. Nossa equipe está disponível de segunda a sexta das 9h às 17:30h.'
        },
        {
            id: 8,
            category: 'servicos',
            icon: FileText,
            question: 'Vocês trabalham com empresas de todos os portes?',
            answer: 'Sim! Atendemos desde MEIs e microempresas até empresas de grande porte. Nossa estrutura é escalável e adaptamos nossos serviços conforme a necessidade: MEIs e microempresas têm pacotes simplificados, enquanto empresas maiores recebem consultoria estratégica mais aprofundada e equipe dedicada.'
        },
        {
            id: 9,
            category: 'prazos',
            icon: Clock,
            question: 'Qual o prazo para regularização de empresa com pendências?',
            answer: 'O prazo varia conforme a complexidade das pendências. Questões simples (atraso em declarações) são resolvidas em 5-10 dias. Problemas mais complexos (débitos em parcelamento, regularização societária) podem levar de 30 a 90 dias. Fazemos um diagnóstico gratuito e apresentamos cronograma detalhado.'
        },
        {
            id: 10,
            category: 'custos',
            icon: Calculator,
            question: 'Existe taxa de migração para quem vem de outro contador?',
            answer: 'Não cobramos taxa de migração! Nossa equipe cuida gratuitamente de todo o processo de transição: análise da situação atual, coleta de documentos, e regularização de eventuais pendências deixadas pelo contador anterior.'
        }
    ];

    const toggleItem = (id: number) => {
        setActiveItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const filteredFAQs = activeCategory === 'todos'
        ? faqs
        : faqs.filter(faq => faq.category === activeCategory);

    return (
        <section id="saiba-mais" className="relative bg-gradient-to-br pb-10 from-white via-blue-50 to-indigo-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-40 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-40 right-10 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 lg:pt-20 lg:pb-0">
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
                        <HelpCircle className="w-4 h-4 mr-2" />
                        Perguntas Frequentes
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Tire suas
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            {' '}dúvidas{' '}
                        </span>
                        <br />
                        sobre nossos serviços
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Encontre respostas para as principais questões sobre contabilidade,
                        nossos serviços e como podemos ajudar sua empresa a crescer.
                    </motion.p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                                : 'bg-white/80 text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                                }`}
                        >
                            <category.icon className="w-4 h-4 mr-2" />
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-4"
                >
                    <AnimatePresence mode="wait">
                        {filteredFAQs.map((faq, index) => (
                            <motion.div
                                key={`${activeCategory}-${faq.id}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleItem(faq.id)}
                                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors duration-200"
                                >
                                    <div className="flex items-center flex-1">
                                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                                            <faq.icon className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: activeItems.includes(faq.id) ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex-shrink-0"
                                    >
                                        {activeItems.includes(faq.id) ? (
                                            <Minus className="w-6 h-6 text-blue-600" />
                                        ) : (
                                            <Plus className="w-6 h-6 text-gray-500" />
                                        )}
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {activeItems.includes(faq.id) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6">
                                                <div className="pl-14">
                                                    <motion.p
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.2, delay: 0.1 }}
                                                        className="text-gray-600 leading-relaxed"
                                                    >
                                                        {faq.answer}
                                                    </motion.p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;