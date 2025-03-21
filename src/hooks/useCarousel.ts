import { useState, useEffect } from 'react';

interface CarouselOptions<T> {
  cards: T[];
  initialWidth?: number;
}

interface CarouselState {
  currentIndex: number;
  cardWidth: number;
  isLoaded: boolean;
  isAnimated: boolean;
  handleSwipe: (offsetX: number) => void;
  getCardStyle: (index: number) => {
    scale: number;
    zIndex: number;
    opacity: number;
    x: number;
    rotateY: number;
  };
}

const useCarousel = <T extends { id: number }>({
  cards,
  initialWidth = 272,
}: CarouselOptions<T>): CarouselState => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(initialWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newWidth = Math.min(500, Math.max(200, screenWidth * 0.7));
      setCardWidth(newWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => {
        setIsAnimated(true);
      }, 100);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleSwipe = (offsetX: number) => {
    if (offsetX < -50) {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    } else if (offsetX > 50) {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }
  };

  const getCardStyle = (index: number) => {
    const offset = index - currentIndex;
    const absOffset = Math.abs(offset);
    const scale = offset === 0 ? 1 : 0.8;
    const zIndex = 10 - absOffset;
    const spacing = cardWidth - 16;
    const x = offset * spacing;
    const rotateY = offset * -10;
    const opacity = offset === 0 ? 1 : 0.6;

    return { scale, zIndex, opacity, x, rotateY };
  };

  return {
    currentIndex,
    cardWidth,
    isLoaded,
    isAnimated,
    handleSwipe,
    getCardStyle,
  };
};

export default useCarousel;
