import React, { useEffect, useRef, useState } from 'react';

// Reuse type definition to improve readability
type RevealAnimation = 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'fade-in';

interface RevealProps {
    children: React.ReactNode;
    animation?: RevealAnimation;
    delay?: number;
    duration?: number;
    threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({
    children,
    animation = 'fade-in-up',
    delay = 0,
    duration = 800,
    threshold = 0.1
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, {
            threshold,
            rootMargin: '0px 0px -50px 0px'
        });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    const getAnimationClass = () => {
        switch (animation) {
            case 'fade-in-up': return 'translate-y-10 opacity-0';
            case 'fade-in-left': return '-translate-x-10 opacity-0';
            case 'fade-in-right': return 'translate-x-10 opacity-0';
            case 'fade-in': return 'opacity-0';
            default: return 'translate-y-10 opacity-0';
        }
    };

    const activeClass = isVisible
        ? 'translate-y-0 translate-x-0 opacity-100'
        : getAnimationClass();

    return (
        <div
            ref={ref}
            className={`transition-all ease-out transform ${activeClass}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
};

export default Reveal;
