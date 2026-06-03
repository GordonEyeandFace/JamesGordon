'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import useMeasure from 'react-use-measure';

interface InfiniteSliderProps {
    children: React.ReactNode;
    speed?: number;
    hoverSpeed?: number;
    gap?: number;
    className?: string;
    fadeMask?: boolean;
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
    children,
    speed = 50,
    hoverSpeed = 15,
    gap = 48,
    className = '',
    fadeMask = true,
}) => {
    const [contentRef, { width: contentWidth }] = useMeasure();
    const [containerRef, { width: containerWidth }] = useMeasure();
    const x = useMotionValue(0);
    const controlsRef = useRef<ReturnType<typeof animate> | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Calculate the number of copies needed for seamless infinite scroll
    const copyCount = useMemo(() => {
        if (contentWidth <= 0 || containerWidth <= 0) return 3;
        return Math.max(3, Math.ceil((containerWidth * 2) / (contentWidth + gap)) + 1);
    }, [contentWidth, containerWidth, gap]);

    const slides = useMemo(() => React.Children.toArray(children), [children]);

    const renderSlideCopy = (copyIndex: number) =>
        slides.map((child, childIndex) => {
            if (React.isValidElement(child)) {
                const baseKey = child.key ?? childIndex;
                return React.cloneElement(child, {
                    key: `${copyIndex}-${baseKey}`,
                });
            }

            return (
                <React.Fragment key={`${copyIndex}-${childIndex}`}>
                    {child}
                </React.Fragment>
            );
        });

    useEffect(() => {
        if (!contentWidth) return;

        const distance = contentWidth + gap;
        const currentSpeed = isHovered ? hoverSpeed : speed;

        const run = () => {
            const currentX = x.get();
            const remaining = distance + currentX;
            const duration = Math.max(remaining / currentSpeed, 0);

            if (duration < 0.05) {
                x.set(0);
                controlsRef.current = animate(x, -distance, {
                    ease: 'linear',
                    duration: distance / currentSpeed,
                    onComplete: () => {
                        x.set(0);
                        run();
                    },
                });
                return;
            }

            controlsRef.current?.stop();
            controlsRef.current = animate(x, -distance, {
                ease: 'linear',
                duration,
                onComplete: () => {
                    x.set(0);
                    run();
                },
            });
        };

        run();
        return () => controlsRef.current?.stop();
    }, [contentWidth, gap, isHovered, speed, hoverSpeed, x]);

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={
                fadeMask
                    ? {
                          maskImage:
                              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                          WebkitMaskImage:
                              'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                      }
                    : undefined
            }
        >
            <motion.div className="flex w-max items-stretch" style={{ x, gap: `${gap}px` }}>
                <div ref={contentRef} className="flex shrink-0 items-stretch" style={{ gap: `${gap}px` }}>
                    {renderSlideCopy(0)}
                </div>
                {Array.from({ length: copyCount }).map((_, i) => (
                    <div key={i} className="flex shrink-0 items-stretch" style={{ gap: `${gap}px` }}>
                        {renderSlideCopy(i + 1)}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteSlider;
