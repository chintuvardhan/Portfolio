import { useEffect, useRef, useCallback } from 'react';

type IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;

interface UseIntersectionObserverReturn {
    observerRef: React.MutableRefObject<IntersectionObserver | null>;
    targetRef: React.MutableRefObject<Element | null>;
    observe: (target: Element) => void;
    unobserve: () => void;
}

export const useIntersectionObserver = (
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {}
): UseIntersectionObserverReturn => {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const targetRef = useRef<Element | null>(null);
    const { threshold = 0.1, root = null, rootMargin = '0px' } = options;

    const observe = useCallback((target: Element) => {
        if (!target) return;
        
        // Disconnect any existing observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }
        
        try {
            const observer = new IntersectionObserver(callback, {
                threshold,
                root,
                rootMargin,
            });
            
            observer.observe(target);
            observerRef.current = observer;
            targetRef.current = target;
        } catch (error) {
            console.error('Error creating IntersectionObserver:', error);
        }
        
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };
    }, [callback, root, rootMargin, threshold]);

    useEffect(() => {
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const unobserve = useCallback(() => {
        if (observerRef.current && targetRef.current) {
            try {
                observerRef.current.unobserve(targetRef.current);
                observerRef.current.disconnect();
            } catch (error) {
                console.error('Error disconnecting IntersectionObserver:', error);
            } finally {
                observerRef.current = null;
                targetRef.current = null;
            }
        }    
    }, [observerRef, targetRef]);

    return {
        observerRef,
        targetRef,
        observe,
        unobserve,
    };
};

export default useIntersectionObserver;
