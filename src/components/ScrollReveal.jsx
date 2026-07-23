import React, { useEffect, useRef, useState } from 'react';

export const ScrollReveal = ({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in'
  delay = 0,
  duration = 800,
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optionally unobserve after revealing
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.15 }
    );

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getTransformStyle = () => {
    if (isVisible) return 'none';

    switch (animation) {
      case 'fade-left':
        return 'translateX(-40px)';
      case 'fade-right':
        return 'translateX(40px)';
      case 'zoom-in':
        return 'scale(0.9)';
      case 'fade-up':
      default:
        return 'translateY(40px)';
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyle(),
        transition: `opacity ${duration}ms cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style
      }}
    >
      {children}
    </div>
  );
};
