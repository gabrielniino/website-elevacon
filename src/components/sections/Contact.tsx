'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    AlertCircle,
    User,
    Building,
    MessageSquare,
    ArrowRight
} from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

const ContactSection = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string>('');
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const services = [
        'Contabilidade Geral',
        'Consultoria Fiscal',
        'Departamento Pessoal',
        'Abertura de Empresa',
        'Planejamento Tributário',
        'Auditoria Contábil',
        'Consultoria Empresarial',
        'Outros'
    ];

    const contactInfo = [
        {
            icon: Phone,
            title: 'Telefone',
            content: '(43) 3025-4789',
            subContent: '(43) 99876-5432',
            color: 'text-green-600',
            bgColor: 'bg-green-100'
        },
        {
            icon: Mail,
            title: 'E-mail',
            content: 'contato@elevacon.com.br',
            subContent: 'comercial@elevacon.com.br',
            color: 'text-blue-600',
            bgColor: 'bg-blue-100'
        },
        {
            icon: MapPin,
            title: 'Endereço',
            content: 'Av. Higienópolis, 1247',
            subContent: 'Centro - Londrina/PR',
            color: 'text-purple-600',
            bgColor: 'bg-purple-100'
        },
        {
            icon: Clock,
            title: 'Horário',
            content: 'Seg à Sex: 8h às 18h',
            subContent: 'Sáb: 8h às 12h',
            color: 'text-orange-600',
            bgColor: 'bg-orange-100'
        }
    ];

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Nome é obrigatório';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'E-mail é obrigatório';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'E-mail inválido';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Telefone é obrigatório';
        }

        if (!formData.service) {
            newErrors.service = 'Selecione um serviço';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Mensagem é obrigatória';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = async (templateParams: any) => {
        try {
            // Usando fetch para enviar via EmailJS REST API
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: 'service_pcp5hk1', // Substitua pelo seu Service ID
                    user_id: 'I2B9mhf1iOAtx4paB', // Substitua pelo seu Template ID
                    template_id: 'template_mp8sb1k', // Substitua pela sua Public Key
                    template_params: templateParams
                })
            });

            if (!response.ok) {
                throw new Error('Falha no envio do email');
            }

            return { success: true };
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            throw error;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError('');

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            // Preparar dados para o template do email
            const templateParams = {
                to_email: 'gabrielg.pereira@outlook.com',
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                company: formData.company || 'Não informado',
                service: formData.service,
                message: formData.message,
                date: new Date().toLocaleDateString('pt-BR'),
                time: new Date().toLocaleTimeString('pt-BR')
            };

            await sendEmail(templateParams);

            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                message: ''
            });
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            setSubmitError('Ocorreu um erro ao enviar a mensagem. Tente novamente ou entre em contato por telefone.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Limpar erro quando o usuário começar a digitar
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }

        // Limpar erro de envio
        if (submitError) {
            setSubmitError('');
        }
    };

    if (isSubmitted) {
        return (
            <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 lg:py-32 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl font-bold text-gray-900 mb-4"
                    >
                        Mensagem Enviada com Sucesso!
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl text-gray-600 mb-8"
                    >
                        Obrigado pelo seu interesse! Nossa equipe entrará em contato em até 24 horas.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Enviar Nova Mensagem
                    </motion.button>
                </div>
            </section>
        );
    }

    return (
        <section id="contato" className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-10 lg:pt-20 lg:pb-10">
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
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Entre em Contato
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Vamos
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            {' '}elevar{' '}
                        </span>
                        seu negócio
                        <br />
                        para o próximo nível
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Fale conosco e descubra como podemos transformar a gestão contábil
                        da sua empresa com soluções personalizadas e atendimento especializado.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-10"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Solicite uma Proposta
                            </h3>
                            <p className="text-gray-600">
                                Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
                            </p>
                        </div>

                        {submitError && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start"
                            >
                                <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-red-700 font-medium">Erro no envio</p>
                                    <p className="text-red-600 text-sm mt-1">{submitError}</p>
                                </div>
                            </motion.div>
                        )}

                        <div className="space-y-6">
                            {/* Nome */}
                            <div className="relative">
                                <div className="relative">
                                    <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' || formData.name ? 'text-blue-600' : 'text-gray-400'
                                        }`} />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        className={`w-full pl-11 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:bg-white focus:outline-none transition-all duration-300 ${errors.name
                                            ? 'border-red-300 focus:border-red-500'
                                            : 'border-gray-200 focus:border-blue-500'
                                            }`}
                                        placeholder="Seu nome completo *"
                                        disabled={isSubmitting}
                                    />
                                </div>
                                {errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-sm mt-1 flex items-center"
                                    >
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.name}
                                    </motion.p>
                                )}
                            </div>

                            {/* Email e Telefone */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <div className="relative">
                                        <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' || formData.email ? 'text-blue-600' : 'text-gray-400'
                                            }`} />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full pl-11 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:bg-white focus:outline-none transition-all duration-300 ${errors.email
                                                ? 'border-red-300 focus:border-red-500'
                                                : 'border-gray-200 focus:border-blue-500'
                                                }`}
                                            placeholder="Seu e-mail *"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-500 text-sm mt-1 flex items-center"
                                        >
                                            <AlertCircle className="w-4 h-4 mr-1" />
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </div>

                                <div className="relative">
                                    <div className="relative">
                                        <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'phone' || formData.phone ? 'text-blue-600' : 'text-gray-400'
                                            }`} />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full pl-11 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:bg-white focus:outline-none transition-all duration-300 ${errors.phone
                                                ? 'border-red-300 focus:border-red-500'
                                                : 'border-gray-200 focus:border-blue-500'
                                                }`}
                                            placeholder="Seu telefone *"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    {errors.phone && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-500 text-sm mt-1 flex items-center"
                                        >
                                            <AlertCircle className="w-4 h-4 mr-1" />
                                            {errors.phone}
                                        </motion.p>
                                    )}
                                </div>
                            </div>

                            {/* Empresa */}
                            <div className="relative">
                                <Building className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'company' || formData.company ? 'text-blue-600' : 'text-gray-400'
                                    }`} />
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField('company')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-300"
                                    placeholder="Nome da empresa (opcional)"
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Serviço */}
                            <div className="relative">
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField('service')}
                                    onBlur={() => setFocusedField(null)}
                                    disabled={isSubmitting}
                                    className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-xl focus:bg-white focus:outline-none transition-all duration-300 appearance-none ${errors.service
                                        ? 'border-red-300 focus:border-red-500'
                                        : 'border-gray-200 focus:border-blue-500'
                                        }`}
                                >
                                    <option value="">Selecione o serviço desejado *</option>
                                    {services.map((service) => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                                <ArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-gray-400 pointer-events-none" />
                                {errors.service && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-sm mt-1 flex items-center"
                                    >
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.service}
                                    </motion.p>
                                )}
                            </div>

                            {/* Mensagem */}
                            <div className="relative">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    rows={4}
                                    disabled={isSubmitting}
                                    className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-xl focus:bg-white focus:outline-none transition-all duration-300 resize-none ${errors.message
                                        ? 'border-red-300 focus:border-red-500'
                                        : 'border-gray-200 focus:border-blue-500'
                                        }`}
                                    placeholder="Conte-nos mais sobre suas necessidades... *"
                                />
                                {errors.message && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-sm mt-1 flex items-center"
                                    >
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.message}
                                    </motion.p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className={`w-full py-4 px-6 rounded-xl cursor-pointer font-semibold text-white shadow-lg transition-all duration-300 flex items-center justify-center ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-xl'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2" />
                                        Enviar Mensagem
                                    </>
                                )}
                            </motion.button>
                        </div>

                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Outras formas de contato
                            </h3>
                            <p className="text-gray-600">
                                Prefere falar diretamente? Utilize um dos nossos canais de atendimento.
                            </p>
                        </div>

                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                        <info.icon className={`w-6 h-6 ${info.color}`} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                                        <p className="text-gray-700 font-medium">{info.content}</p>
                                        <p className="text-gray-600 text-sm">{info.subContent}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* CTA Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white"
                        >
                            <h4 className="text-xl font-bold mb-2">Atendimento Especializado</h4>
                            <p className="text-blue-100 mb-4">
                                Nossa equipe de especialistas está pronta para oferecer a melhor solução para sua empresa.
                            </p>
                            <div className="flex items-center text-blue-100">
                                <CheckCircle className="w-5 h-5 mr-2" />
                                <span>Resposta em até 24 horas</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;