'use client';

import Carousel from '@/src/components/Carousel';
import Image from 'next/image';

interface Card {
  id: number;
  [key: string]: any;
}

interface QuestionStatCarouselProps {
  cards: Card[];
}

export default function QuestionStatCarousel({
  cards,
}: QuestionStatCarouselProps) {
  return (
    <Carousel cards={cards}>
      {(card) => (
        <div>
          <Image
            src={card.imageUrl}
            alt=''
            fill
            className='overflow-hidden rounded-12'
            draggable={false}
          />
          <div className='absolute bottom-0 flex h-74 w-full items-end overflow-hidden rounded-b-8 bg-image-overlay px-12 py-8'>
            <p className='text-small-01 text-white'>
              <span className='text-title-04'>{card.answer}</span>
              이(가)
              <br />
              {card.text}
            </p>
          </div>
        </div>
      )}
    </Carousel>
  );
}
