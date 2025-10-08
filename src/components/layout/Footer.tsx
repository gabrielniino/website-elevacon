"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    ArrowRight,
    Heart,
    Send
} from "lucide-react";

export default function Footer() {

    const footerLinks = {
        company: [
            { name: "Sobre nós", href: "#quem-somos" }
            // { name: "Nossa equipe", href: "#" },
            // { name: "Carreiras", href: "#" },
            // { name: "Imprensa", href: "#" },
            // { name: "Blog", href: "#" }
        ],
        services: [
            { name: "Contabilidade Empresarial", href: "#contabilidade-empresarial" },
            { name: "Declarações Fiscais", href: "#declaracoes-fiscais" },
            { name: "Departamento Pessoal", href: "#departamento-pessoal" },
            { name: "Consultoria Tributária", href: "#consultoria-tributaria" },
            { name: "Abertura de Empresas", href: "#abertura-empresas" },
            { name: "Análise Financeira", href: "#analise-financeira" }
        ],
        support: [
            // { name: "Central de ajuda", href: "#" },
            { name: "FAQ", href: "#saiba-mais" },
            { name: "Contato", href: "#contato" }
            // { name: "Status", href: "#" },
            // { name: "Comunidade", href: "#" }
        ]
    };

    const socialLinks = [
        { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
        // { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-500" },
        { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-600" },
        { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" }
        // { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" }
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <motion.div
                className="relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, staggerChildren: 0.1, delayChildren: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

                        {/* Brand Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <div className="mb-6 flex flex-col items-start">
                                <img
                                    src="/logo-eleva-removebg.png"
                                    alt="ElevaCon"
                                    className="h-12 w-auto mb-4 object-contain"
                                />
                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    Descomplicamos a burocracia contábil para que você foque no crescimento do seu negócio.
                                </p>
                            </div>


                            {/* Contact Info */}
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                                    <Mail className="w-4 h-4 text-blue-400" />
                                    <span className="text-sm">elevacontecnologia@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                                    <Phone className="w-4 h-4 text-blue-400" />
                                    <span className="text-sm">+55 (43) 99109-2846</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                                    <MapPin className="w-4 h-4 text-blue-400" />
                                    <span className="text-sm">Londrina, PR - Brasil</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Links Sections */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                Empresa
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                                        >
                                            <span>{link.name}</span>
                                            <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                Serviços
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.services.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                                        >
                                            <span>{link.name}</span>
                                            <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                Suporte
                            </h3>
                            <ul className="space-y-3 mb-8">
                                {footerLinks.support.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                                        >
                                            <span>{link.name}</span>
                                            <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                        </a>
                                    </li>
                                ))}
                            </ul>

                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 bg-black/20 backdrop-blur-sm"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="text-center">
                            <p className="text-sm text-gray-400 font-medium">
                                © 2025 ElevaCon | Todos os direitos reservados.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
}