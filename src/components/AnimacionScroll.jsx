import { useEffect, useRef } from 'react';
import '../styles/AnimacionScroll.css'; // o estilos en línea

export default function AnimacionScroll({ children, direction = 'right' }) {
    const ref = useRef();
  
    useEffect(() => {
        const el = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                el.classList.add('in-view');
            } else {
                el.classList.remove('in-view');
            }
        });
  
        if (el) observer.observe(el);
  
        return () => observer.disconnect();
    }, []);
  
    const directionMap = {
        left: 'off-left',
        right: 'off-right',
        top: 'off-top',
        bottom: 'off-bottom',
    };
  
    const directionClass = directionMap[direction] || 'off-right';
  
    return (
      <div ref={ref} className={`scroll-in-view animate-on-scroll ${directionClass}`}>
        {children}
      </div>
    );
  }