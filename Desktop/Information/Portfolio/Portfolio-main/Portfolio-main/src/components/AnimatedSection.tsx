import React, { ReactNode, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    id,
    className = '',
    children,
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
}) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    const onIntersect: IntersectionObserverCallback = useRef(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        }
    }).current;

    const observer = useIntersectionObserver(onIntersect, {
        threshold,
        rootMargin,
    });

    useEffect(() => {
        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
            return () => {
                observer.unobserve(currentRef);
            };
        }
    }, [observer]);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
        >
            {children}
        </section>
    );
};

export default AnimatedSection;
