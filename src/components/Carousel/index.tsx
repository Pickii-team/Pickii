'use client';
import { motion } from 'framer-motion';
import useCarousel from '@/src/hooks/useCarousel';
import { ReactNode } from 'react';

interface CarouselProps<T> {
  cards: T[];
  children: (card: T) => ReactNode;
}

export default function Carousel<T extends { id: number }>({
  cards,
  children,
}: CarouselProps<T>) {
  const {
    currentIndex,
    cardWidth,
    isLoaded,
    isAnimated,
    handleSwipe,
    getCardStyle,
  } = useCarousel({ cards });

  return (
    <div className='w-full overflow-hidden'>
      <motion.div
        className='relative flex w-full items-center justify-center'
        style={{ minHeight: `${cardWidth * 1.2}px` }}
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(e, info) => handleSwipe(info.offset.x)}
      >
        {isLoaded &&
          cards.map((card, index) => {
            const style = getCardStyle(index);

            return (
              <motion.div
                key={card.id}
                className='absolute rounded-12 shadow-elevation1'
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardWidth * 1.2}px`,
                  zIndex: style.zIndex,
                }}
                initial={isAnimated ? { opacity: 0 } : { ...style }}
                animate={isAnimated ? { ...style, opacity: style.opacity } : {}}
                transition={
                  isAnimated
                    ? { type: 'spring', stiffness: 300, damping: 30 }
                    : {}
                }
              >
                <div key={card.id}>{children(card)}</div>
              </motion.div>
            );
          })}
      </motion.div>

      <div className='mt-16 flex justify-center gap-8'>
        {cards.map((_, index) => (
          <div
            key={index}
            className={`box-border h-12 w-12 rounded-full ${
              currentIndex === index
                ? 'bg-primaryVariant'
                : 'border-2 border-primaryVariant bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
