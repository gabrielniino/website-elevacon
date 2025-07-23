import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Users, Award } from "lucide-react";

// Componentes 3D Card do Aceternity
interface CardContainerProps {
    children: React.ReactNode;
    className?: string;
}

const CardContainer: React.FC<CardContainerProps> = ({ children, className }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className={`w-fit h-fit ${className}`}
            style={{
                perspective: "1000px",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                style={{
                    transform: isHovered
                        ? "rotateY(10deg) rotateX(10deg)"
                        : "rotateY(0deg) rotateX(0deg)",
                    transition: "transform 0.6s ease-out",
                    transformStyle: "preserve-3d",
                }}
            >
                {children}
            </div>
        </div>
    );
};

interface CardItemProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    translateZ?: number | string;
    className?: string;
    as?: React.ElementType;
}

const CardItem: React.FC<CardItemProps> = ({
    children,
    translateZ = 0,
    className,
    as: Component = "div",
    ...props
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    React.useEffect(() => {
        const handleMouseMove = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        const parent = document.querySelector('[data-card-container]');
        if (parent) {
            parent.addEventListener('mouseenter', handleMouseMove);
            parent.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                parent.removeEventListener('mouseenter', handleMouseMove);
                parent.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (
        <Component
            className={className}
            style={{
                transform: isHovered
                    ? `translateZ(${translateZ}px)`
                    : `translateZ(0px)`,
                transition: "transform 0.6s ease-out",
            }}
            {...props}
        >
            {children}
        </Component>
    );
};

export default function GraphicElement3D() {
    return (
        <div className="flex items-center justify-center">
            <CardContainer className="inter-var" data-card-container>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="flex justify-center items-center"
                >
                    <div className="relative">
                        {/* Main Circle com 3D */}
                        <CardItem translateZ="20">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 opacity-20"
                            />
                        </CardItem>

                        {/* Inner Elements com maior profundidade */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <CardItem translateZ="80">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                    className="w-64 h-64 bg-white rounded-full shadow-2xl flex items-center justify-center"
                                >
                                    <div className="text-center">
                                        <CardItem translateZ="40">
                                            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                                <TrendingUp className="w-10 h-10 text-white" />
                                            </div>
                                        </CardItem>
                                        <CardItem translateZ="30">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Crescimento</h3>
                                        </CardItem>
                                        <CardItem translateZ="20">
                                            <p className="text-sm text-gray-600">Garantido</p>
                                        </CardItem>
                                    </div>
                                </motion.div>
                            </CardItem>
                        </div>

                        {/* Floating Elements com diferentes profundidades 3D */}
                        {[
                            { icon: Shield, position: 'top-4 left-16', delay: 0.7, depth: 100 },
                            { icon: Users, position: 'top-16 right-4', delay: 0.8, depth: 120 },
                            { icon: Award, position: 'bottom-4 right-16', delay: 0.9, depth: 110 },
                            { icon: TrendingUp, position: 'bottom-16 left-4', delay: 1.0, depth: 90 }
                        ].map((item, index) => (
                            <CardItem key={index} translateZ={item.depth} className={`absolute ${item.position}`}>
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: item.delay }}
                                    className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
                                >
                                    <item.icon className="w-8 h-8 text-blue-600" />
                                </motion.div>
                            </CardItem>
                        ))}
                    </div>
                </motion.div>
            </CardContainer>
        </div>
    );
}