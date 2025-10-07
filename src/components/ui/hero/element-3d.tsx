'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SceneType = 'Foco em Resultado' | 'Segurança' | 'Contabilidade Inteligente' | 'Atendimento Humanizado' | 'Especialistas com vasta Experiencia' | 'Atendimento para todo o Brasil';

const Hero2DElement: React.FC = () => {
    const [currentScene, setCurrentScene] = useState<number>(0);
    const [label, setLabel] = useState<SceneType>('Foco em Resultado');

    const scenes: SceneType[] = ['Foco em Resultado', 'Segurança', 'Contabilidade Inteligente', 'Atendimento Humanizado', 'Especialistas com vasta Experiencia', 'Atendimento para todo o Brasil'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentScene((prev) => {
                const next = (prev + 1) % 6;
                setLabel(scenes[next]);
                return next;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const BrazilGlobeScene = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full flex items-center justify-center"
        >
            <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-2xl">
                {[...Array(2)].map((_, i) => (
                    <motion.ellipse
                        key={`orbit-${i}`}
                        cx="150"
                        cy="150"
                        rx={100 + i * 20}
                        ry={60 + i * 12}
                        fill="none"
                        stroke="rgba(59, 130, 246, 0.2)"
                        strokeWidth="1"
                        strokeDasharray="5 5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
                <motion.circle
                    cx="150"
                    cy="150"
                    r="70"
                    fill="url(#globeGradient)"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
                />
                {[0, 1, 2, 3, 4].map((i) => (
                    <motion.ellipse
                        key={`lat-${i}`}
                        cx="150"
                        cy="150"
                        rx="70"
                        ry={15 * (2.5 - Math.abs(i - 2))}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                        transform={`translate(0, ${(i - 2) * 28})`}
                    />
                ))}
                {[...Array(6)].map((_, i) => (
                    <motion.ellipse
                        key={`long-${i}`}
                        cx="150"
                        cy="150"
                        rx={70 * Math.abs(Math.cos((i * 30) * Math.PI / 180))}
                        ry="70"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                    />
                ))}
                <motion.ellipse
                    cx="130"
                    cy="130"
                    rx="25"
                    ry="30"
                    fill="rgba(255, 255, 255, 0.2)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                {[
                    { x: 150, y: 140, delay: 1 },
                    { x: 165, y: 160, delay: 1.2 },
                    { x: 158, y: 125, delay: 1.4 },
                    { x: 175, y: 145, delay: 1.6 },
                    { x: 140, y: 135, delay: 1.8 }
                ].map((point, i) => (
                    <motion.g key={`point-${i}`}>
                        <motion.circle
                            cx={point.x}
                            cy={point.y}
                            r="4"
                            fill="#fbbf24"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: point.delay }}
                        />
                        <motion.circle
                            cx={point.x}
                            cy={point.y}
                            r="4"
                            fill="none"
                            stroke="#fbbf24"
                            strokeWidth="2"
                            initial={{ scale: 1, opacity: 0 }}
                            animate={{
                                scale: [1, 2.5, 2.5],
                                opacity: [0.8, 0, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: point.delay + 0.5
                            }}
                        />
                    </motion.g>
                ))}
                {[
                    { x1: 150, y1: 140, x2: 165, y2: 160, delay: 2 },
                    { x1: 150, y1: 140, x2: 158, y2: 125, delay: 2.1 },
                    { x1: 150, y1: 140, x2: 175, y2: 145, delay: 2.2 },
                    { x1: 150, y1: 140, x2: 140, y2: 135, delay: 2.3 }
                ].map((line, i) => (
                    <motion.line
                        key={`connection-${i}`}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="rgba(251, 191, 36, 0.6)"
                        strokeWidth="2"
                        strokeDasharray="3 3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: line.delay }}
                    />
                ))}
                {[...Array(3)].map((_, i) => (
                    <motion.circle
                        key={`wave-${i}`}
                        cx="150"
                        cy="150"
                        r="70"
                        fill="none"
                        stroke="rgba(99, 102, 241, 0.3)"
                        strokeWidth="2"
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{
                            scale: [1, 1.6, 1.6],
                            opacity: [0.5, 0, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 1,
                            ease: "easeOut"
                        }}
                    />
                ))}
                <defs>
                    <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    );

    // Componente de Experiência - Troféu com estrelas
    const ExperienceScene = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full flex items-center justify-center"
        >
            <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-2xl">
                {/* Raios de brilho */}
                {[...Array(8)].map((_, i) => (
                    <motion.line
                        key={`ray-${i}`}
                        x1="150"
                        y1="150"
                        x2={150 + Math.cos((i * 45 - 90) * Math.PI / 180) * 80}
                        y2={150 + Math.sin((i * 45 - 90) * Math.PI / 180) * 80}
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            pathLength: [0, 1, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Base do troféu */}
                <motion.rect
                    x="130"
                    y="200"
                    width="40"
                    height="8"
                    rx="2"
                    fill="#6366f1"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    style={{ transformOrigin: '150px 204px' }}
                />

                {/* Pedestal */}
                <motion.rect
                    x="140"
                    y="180"
                    width="20"
                    height="20"
                    rx="2"
                    fill="#8b5cf6"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{ transformOrigin: '150px 190px' }}
                />

                {/* Taça - parte inferior */}
                <motion.path
                    d="M 120 130 L 125 165 Q 125 175 150 175 Q 175 175 175 165 L 180 130 Z"
                    fill="url(#trophyGradient)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 150 }}
                    style={{ transformOrigin: '150px 150px' }}
                />

                {/* Taça - parte superior */}
                <motion.ellipse
                    cx="150"
                    cy="130"
                    rx="30"
                    ry="10"
                    fill="#3b82f6"
                    stroke="#2563eb"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                />

                {/* Alças do troféu */}
                <motion.path
                    d="M 120 135 Q 95 135 95 155 Q 95 165 105 165"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                />
                <motion.path
                    d="M 180 135 Q 205 135 205 155 Q 205 165 195 165"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                />

                {/* Haste */}
                <motion.rect
                    x="145"
                    y="175"
                    width="10"
                    height="5"
                    fill="#6366f1"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    style={{ transformOrigin: '150px 177px' }}
                />

                {/* Estrelas decorativas */}
                {[
                    { x: 100, y: 100, delay: 1 },
                    { x: 200, y: 100, delay: 1.2 },
                    { x: 80, y: 160, delay: 1.4 },
                    { x: 220, y: 160, delay: 1.6 }
                ].map((star, i) => (
                    <motion.g key={`star-${i}`}>
                        <motion.path
                            d={`M ${star.x} ${star.y} L ${star.x + 3} ${star.y + 8} L ${star.x + 10} ${star.y + 10} L ${star.x + 4} ${star.y + 14} L ${star.x + 6} ${star.y + 22} L ${star.x} ${star.y + 17} L ${star.x - 6} ${star.y + 22} L ${star.x - 4} ${star.y + 14} L ${star.x - 10} ${star.y + 10} L ${star.x - 3} ${star.y + 8} Z`}
                            fill="#fbbf24"
                            initial={{ scale: 0, rotate: 0 }}
                            animate={{
                                scale: [0, 1.2, 1],
                                rotate: [0, 180, 360]
                            }}
                            transition={{ duration: 0.8, delay: star.delay }}
                        />
                        <motion.circle
                            cx={star.x}
                            cy={star.y + 11}
                            r="15"
                            fill="none"
                            stroke="rgba(251, 191, 36, 0.4)"
                            strokeWidth="2"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0, 1.5, 1.5],
                                opacity: [0.5, 0, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: star.delay + 0.5
                            }}
                        />
                    </motion.g>
                ))}

                {/* Brilho na taça */}
                <motion.ellipse
                    cx="140"
                    cy="145"
                    rx="8"
                    ry="15"
                    fill="rgba(255, 255, 255, 0.3)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                <defs>
                    <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    );

    // Componente de Atendimento Humanizado - Pessoas conectadas por coração
    const HumanizedScene = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full flex items-center justify-center"
        >
            <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-2xl">
                {/* Ondas de energia ao redor */}
                {[...Array(3)].map((_, i) => (
                    <motion.circle
                        key={`wave-${i}`}
                        cx="150"
                        cy="150"
                        r="80"
                        fill="none"
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="2"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{
                            scale: [0.6, 1.3, 1.3],
                            opacity: [0.5, 0.2, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 1,
                            ease: "easeOut"
                        }}
                    />
                ))}

                {/* Coração central */}
                <motion.path
                    d="M 150 120 C 150 110 140 100 130 100 C 115 100 110 115 110 125 C 110 140 150 170 150 170 C 150 170 190 140 190 125 C 190 115 185 100 170 100 C 160 100 150 110 150 120 Z"
                    fill="url(#heartGradient)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
                />

                {/* Pulso do coração */}
                <motion.path
                    d="M 150 120 C 150 110 140 100 130 100 C 115 100 110 115 110 125 C 110 140 150 170 150 170 C 150 170 190 140 190 125 C 190 115 185 100 170 100 C 160 100 150 110 150 120 Z"
                    fill="none"
                    stroke="rgba(239, 68, 68, 0.5)"
                    strokeWidth="4"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.15, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Brilho no coração */}
                <motion.ellipse
                    cx="135"
                    cy="115"
                    rx="10"
                    ry="15"
                    fill="rgba(255, 255, 255, 0.4)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Pessoas conectadas - Pessoa à esquerda */}
                <motion.g
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {/* Cabeça */}
                    <circle cx="90" cy="180" r="15" fill="#6366f1" />
                    {/* Corpo */}
                    <motion.ellipse
                        cx="90"
                        cy="210"
                        rx="18"
                        ry="22"
                        fill="#6366f1"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    />
                </motion.g>

                {/* Pessoa à direita */}
                <motion.g
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {/* Cabeça */}
                    <circle cx="210" cy="180" r="15" fill="#8b5cf6" />
                    {/* Corpo */}
                    <motion.ellipse
                        cx="210"
                        cy="210"
                        rx="18"
                        ry="22"
                        fill="#8b5cf6"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    />
                </motion.g>

                {/* Pessoa no centro inferior */}
                <motion.g
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {/* Cabeça */}
                    <circle cx="150" cy="210" r="15" fill="#3b82f6" />
                    {/* Corpo */}
                    <motion.ellipse
                        cx="150"
                        cy="240"
                        rx="18"
                        ry="22"
                        fill="#3b82f6"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    />
                </motion.g>

                {/* Linhas de conexão para o coração */}
                <motion.path
                    d="M 90 195 Q 110 175 130 155"
                    fill="none"
                    stroke="rgba(99, 102, 241, 0.5)"
                    strokeWidth="3"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                />
                <motion.path
                    d="M 210 195 Q 190 175 170 155"
                    fill="none"
                    stroke="rgba(139, 92, 246, 0.5)"
                    strokeWidth="3"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                />
                <motion.path
                    d="M 150 225 L 150 175"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.5)"
                    strokeWidth="3"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                />

                {/* Partículas de conexão flutuantes */}
                {[
                    { cx: 110, cy: 175, delay: 1.5 },
                    { cx: 190, cy: 175, delay: 1.7 },
                    { cx: 150, cy: 195, delay: 1.9 }
                ].map((particle, i) => (
                    <motion.circle
                        key={`particle-${i}`}
                        cx={particle.cx}
                        cy={particle.cy}
                        r="3"
                        fill="#fbbf24"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            y: [-10, 0, -10]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                <defs>
                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    );

    // Componente de Crescimento - Gráfico de linha subindo
    const GrowthScene = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full flex items-center justify-center"
        >
            <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-2xl">
                {/* Grid de fundo */}
                <g opacity="0.2">
                    {[...Array(5)].map((_, i) => (
                        <motion.line
                            key={`h-${i}`}
                            x1="40"
                            y1={60 + i * 50}
                            x2="260"
                            y2={60 + i * 50}
                            stroke="rgba(59, 130, 246, 0.5)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                        />
                    ))}
                    {[...Array(5)].map((_, i) => (
                        <motion.line
                            key={`v-${i}`}
                            x1={40 + i * 55}
                            y1="60"
                            x2={40 + i * 55}
                            y2="260"
                            stroke="rgba(59, 130, 246, 0.5)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                        />
                    ))}
                </g>

                {/* Linha de crescimento */}
                <motion.path
                    d="M 40 240 L 95 200 L 150 180 L 205 120 L 260 60"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                />

                {/* Área sob a linha */}
                <motion.path
                    d="M 40 240 L 95 200 L 150 180 L 205 120 L 260 60 L 260 260 L 40 260 Z"
                    fill="url(#gradient2)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />

                {/* Pontos na linha */}
                {[
                    { x: 40, y: 240 },
                    { x: 95, y: 200 },
                    { x: 150, y: 180 },
                    { x: 205, y: 120 },
                    { x: 260, y: 60 }
                ].map((point, i) => (
                    <motion.circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="6"
                        fill="#3b82f6"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }}
                    >
                        <animate
                            attributeName="r"
                            values="6;8;6"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </motion.circle>
                ))}

                {/* Seta para cima */}
                <motion.g
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                >
                    <motion.path
                        d="M 270 70 L 270 50 L 280 60 L 270 50 L 260 60 Z"
                        fill="#6366f1"
                        animate={{ y: [-2, 2, -2] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.g>

                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    );

    // Componente de Segurança - Escudo pulsando
    const SecurityScene = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full flex items-center justify-center"
        >
            <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-2xl">
                {/* Círculos de pulso de fundo */}
                {[...Array(3)].map((_, i) => (
                    <motion.circle
                        key={i}
                        cx="150"
                        cy="150"
                        r="100"
                        fill="none"
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="2"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                            scale: [0.8, 1.4, 1.4],
                            opacity: [0.5, 0.2, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 1,
                            ease: "easeOut"
                        }}
                    />
                ))}

                {/* Escudo principal */}
                <motion.path
                    d="M 150 60 L 200 80 L 200 140 Q 200 200 150 230 Q 100 200 100 140 L 100 80 Z"
                    fill="url(#shieldGradient)"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                />

                {/* Brilho no escudo */}
                <motion.path
                    d="M 120 90 Q 130 110 120 130 Q 115 120 120 90"
                    fill="rgba(255, 255, 255, 0.3)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Check mark */}
                <motion.path
                    d="M 130 145 L 145 160 L 175 120"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                />

                {/* Pulso do escudo */}
                <motion.path
                    d="M 150 60 L 200 80 L 200 140 Q 200 200 150 230 Q 100 200 100 140 L 100 80 Z"
                    fill="none"
                    stroke="rgba(99, 102, 241, 0.6)"
                    strokeWidth="6"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                <defs>
                    <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    );

    // Componente de Contabilidade - Gráfico de pizza animado
    const AccountingScene = () => {
        const segments = [
            { percent: 35, color: '#3b82f6', delay: 0 },
            { percent: 25, color: '#6366f1', delay: 0.3 },
            { percent: 20, color: '#8b5cf6', delay: 0.6 },
            { percent: 20, color: '#a78bfa', delay: 0.9 }
        ];

        const createArc = (percent: number, startAngle: number) => {
            const angle = (percent / 100) * 360;
            const endAngle = startAngle + angle;
            const largeArc = angle > 180 ? 1 : 0;

            const start = polarToCartesian(150, 150, 80, startAngle);
            const end = polarToCartesian(150, 150, 80, endAngle);

            return `M 150 150 L ${start.x} ${start.y} A 80 80 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
        };

        const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => {
            const rad = ((angle - 90) * Math.PI) / 180;
            return {
                x: cx + r * Math.cos(rad),
                y: cy + r * Math.sin(rad)
            };
        };

        let currentAngle = 0;

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full flex items-center justify-center"
            >
                <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-2xl">
                    {/* Círculo de fundo */}
                    <circle cx="150" cy="150" r="85" fill="rgba(59, 130, 246, 0.1)" />

                    {/* Segmentos do gráfico */}
                    {segments.map((segment, i) => {
                        const path = createArc(segment.percent, currentAngle);
                        const angle = currentAngle;
                        currentAngle += (segment.percent / 100) * 360;

                        return (
                            <motion.g key={i}>
                                <motion.path
                                    d={path}
                                    fill={segment.color}
                                    stroke="#1e293b"
                                    strokeWidth="2"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: segment.delay,
                                        type: "spring",
                                        stiffness: 150
                                    }}
                                    style={{ transformOrigin: '150px 150px' }}
                                    whileHover={{ scale: 1.05 }}
                                />

                                {/* Porcentagem */}
                                <motion.text
                                    x={150 + Math.cos(((angle + (segment.percent / 100) * 360 / 2) - 90) * Math.PI / 180) * 60}
                                    y={150 + Math.sin(((angle + (segment.percent / 100) * 360 / 2) - 90) * Math.PI / 180) * 60}
                                    fill="white"
                                    fontSize="16"
                                    fontWeight="bold"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: segment.delay + 0.5 }}
                                >
                                    {segment.percent}%
                                </motion.text>
                            </motion.g>
                        );
                    })}

                    {/* Círculo central branco */}
                    <motion.circle
                        cx="150"
                        cy="150"
                        r="45"
                        fill="#1e293b"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    />

                    {/* Ícone central */}
                    <motion.g
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                    >
                        <circle cx="150" cy="135" r="4" fill="#3b82f6" />
                        <circle cx="165" cy="135" r="4" fill="#6366f1" />
                        <rect x="138" y="145" width="10" height="20" rx="2" fill="#3b82f6" />
                        <rect x="153" y="150" width="10" height="15" rx="2" fill="#6366f1" />
                    </motion.g>

                    {/* Animação de rotação sutil */}
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 150 150"
                        to="360 150 150"
                        dur="60s"
                        repeatCount="indefinite"
                    />
                </svg>
            </motion.div>
        );
    };

    return (
        <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
            {/* Círculo animado em volta */}
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Segundo círculo */}
            <motion.div
                className="absolute inset-4 rounded-full border border-blue-400/20"
                animate={{
                    scale: [1, 1.03, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
            />

            {/* Cenas alternadas */}
            <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                    {currentScene === 0 && <GrowthScene key="growth" />}
                    {currentScene === 1 && <SecurityScene key="security" />}
                    {currentScene === 2 && <AccountingScene key="accounting" />}
                    {currentScene === 3 && <HumanizedScene key="humanized" />}
                    {currentScene === 4 && <ExperienceScene key="experience" />}
                    {currentScene === 5 && <BrazilGlobeScene key="brazilglobe" />}
                </AnimatePresence>
            </div>

            {/* Label */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                >
                    <span className="text-white font-semibold text-lg">{label}</span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Hero2DElement;