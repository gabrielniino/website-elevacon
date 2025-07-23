'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const menuItems = [
        {
            name: 'Serviços',
            href: '#servicos',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Contabilidade', href: '#contabilidade' },
                { name: 'Consultoria Fiscal', href: '#consultoria-fiscal' },
                { name: 'Departamento Pessoal', href: '#departamento-pessoal' },
                { name: 'Abertura de Empresas', href: '#abertura-empresas' }
            ]
        },
        { name: 'Quem Somos', href: '#quem-somos' },
        { name: 'Nossos Clientes', href: '#clientes' },
        { name: 'Contato', href: '#contato' }
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleDropdownToggle = (itemName: string) => {
        setActiveDropdown(activeDropdown === itemName ? null : itemName);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                    >
                        <a href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">E</span>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                ElevaCon
                            </span>
                        </a>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <div key={item.name} className="relative">
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="relative"
                                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                                    onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                                >
                                    <a
                                        href={item.href}
                                        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50"
                                    >
                                        <span>{item.name}</span>
                                        {item.hasDropdown && (
                                            <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                                        )}
                                    </a>

                                    {/* Dropdown Menu */}
                                    {item.hasDropdown && activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                                        >
                                            {item.dropdownItems?.map((dropdownItem) => (
                                                <a
                                                    key={dropdownItem.name}
                                                    href={dropdownItem.href}
                                                    className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                                                >
                                                    {dropdownItem.name}
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </motion.div>
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="hidden md:block"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
                        >
                            Fale Conosco
                        </motion.button>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleMenu}
                            className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    height: isMenuOpen ? 'auto' : 0,
                    opacity: isMenuOpen ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden bg-white border-t border-gray-200"
            >
                <div className="px-4 py-4 space-y-2">
                    {menuItems.map((item) => (
                        <div key={item.name}>
                            <div className="flex items-center justify-between">
                                <a
                                    href={item.href}
                                    className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                                {item.hasDropdown && (
                                    <button
                                        onClick={() => handleDropdownToggle(item.name)}
                                        className="p-1 text-gray-500 hover:text-blue-600"
                                    >
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                )}
                            </div>

                            {/* Mobile Dropdown */}
                            {item.hasDropdown && activeDropdown === item.name && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="ml-4 space-y-1 border-l-2 border-blue-100 pl-4"
                                >
                                    {item.dropdownItems?.map((dropdownItem) => (
                                        <a
                                            key={dropdownItem.name}
                                            href={dropdownItem.href}
                                            className="block text-gray-600 hover:text-blue-600 py-1 text-sm transition-colors duration-150"
                                        >
                                            {dropdownItem.name}
                                        </a>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    ))}

                    {/* Mobile CTA Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md"
                    >
                        Fale Conosco
                    </motion.button>
                </div>
            </motion.div>
        </motion.header>
    );
};

export default Header;