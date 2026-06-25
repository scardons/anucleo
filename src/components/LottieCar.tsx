import { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import carAnimation from '@/assets/car-animation.json';

const LottieCar = ({ size = 120 }: { size?: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: carAnimation,
    });
    return () => anim.destroy();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: size, height: size * (100 / 230) }}
    />
  );
};

export default LottieCar;
