'use client';

import Carousel from '@/src/components/Carousel';
import React from 'react';
import Image from 'next/image';
import { IconLeftArrow, IconSend } from '@/public/svgs';
import Input from '@/src/components/Input';

type Props = {};

interface Card {
  id: number;
  [key: string]: any;
}

interface CardContentProps {
  card: Card;
  src: string;
}

function CardContent({ card, src }: CardContentProps) {
  return (
    <div>
      <Image
        src={src}
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
  );
}

const cards = [
  {
    id: 1,
    answer: '부먹',
    text: '지고 있어요ㅠㅠ',
    imageUrl: 'https://picsum.photos/600',
    description: '간장 부먹派',
    totalVotes: 120,
  },
  {
    id: 2,
    answer: '찍먹',
    text: '이기고 있어요!',
    imageUrl: 'https://picsum.photos/600',
    description: '소스 찍먹派',
    totalVotes: 180,
  },
];

interface VoteBarProps {
  answerA: string;
  answerB: string;
  totalVotesA: number; // A 항목 비율 (예: 찍먹)
  totalVotesB: number; // B 항목 비율 (예: 부먹)
  colorA: string; // A 항목 색상 (찍먹 색상)
  colorB: string; // B 항목 색상 (부먹 색상)
}

function VoteBar({
  answerA,
  answerB,
  totalVotesA,
  totalVotesB,
  colorA,
  colorB,
}: VoteBarProps) {
  const votesSum = totalVotesA + totalVotesB;

  return (
    <div className='w-full space-y-4 px-16'>
      {/* answerA 투표율 */}

      <div>
        <span className='text-small-01 text-primaryVariant'>A. {answerA}</span>

        <div className='flex h-16 w-full items-center gap-4 rounded-full bg-transparent'>
          <div
            className={`h-full ${colorA} rounded-full`}
            style={{ width: `${(totalVotesA / votesSum) * 100}%` }}
          />
          <span className='text-small-01'>
            {Math.floor((totalVotesA / votesSum) * 100)}%
          </span>
        </div>
      </div>

      {/* answerA 투표율 */}
      <div>
        <span className='text-small-01 text-primaryVariant'>B. {answerB}</span>
        <div className='flex h-16 w-full items-center gap-4 rounded-full bg-transparent'>
          <div
            className={`h-full ${colorB} rounded-full`}
            style={{ width: `${(totalVotesB / votesSum) * 100}%` }}
          />
          <span className='text-small-01 text-gray-8'>
            {Math.floor((totalVotesB / votesSum) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function QuestionDetailPage({}: Props) {
  return (
    <div className='h-full'>
      <header className='sticky top-0 z-50 flex h-64 items-center bg-white px-16 py-8'>
        <button>
          <IconLeftArrow />
        </button>
      </header>
      <div className='flex basis-full flex-col gap-20 pb-40'>
        <section className='flex w-full flex-col items-center gap-16'>
          <div className='w-full px-16'>
            <div className='flex w-full flex-col items-center justify-center rounded-32 border border-primaryVariant bg-surface px-16 py-8 text-title-03 text-primaryVariant'>
              <span>Q.</span>
              <h1>탕수육 먹을 땐?</h1>
            </div>
          </div>
          <Carousel cards={cards}>
            {(card) => <CardContent card={card} src={card.imageUrl} />}
          </Carousel>
          <VoteBar
            answerA='부먹'
            answerB='찍먹'
            totalVotesA={72} // A 투표 비율 (찍먹)
            totalVotesB={28} // B 투표 비율 (부먹)
            colorA='bg-primary' // A 색상 (찍먹 색상)
            colorB='bg-secondary' // B 색상 (부먹 색상)
          />
        </section>

        {/* Comments */}
        <section className=''>
          <h2 className='border-b border-gray-4 pb-8 pl-16 text-small-01'>
            댓글(10)
          </h2>
          {[1, 2, 3, 4, 5].map((index) => (
            <li
              key={index}
              className={`flex list-none flex-col gap-4 border-b border-gray-4 px-16 py-8`}
            >
              <div className='flex items-center gap-8'>
                <div className='relative h-24 w-24'>
                  <Image
                    src='https://picsum.photos/600'
                    alt=''
                    fill
                    className='overflow-hidden rounded-32'
                    draggable={false}
                  />
                </div>
                <span className='text-small-01'>무도키즈</span>
              </div>
              <p className='text-small-02'>
                탕수육은 원래 부어먹는 음식입니다.
              </p>
            </li>
          ))}
        </section>
      </div>

      <footer className='sticky bottom-0 border-t border-gray-4 bg-white px-12 py-8'>
        <Input
          inputText=''
          setInputText={() => {}}
          variant='default'
          hasClearButton
          placeholder='댓글을 입력해 주세요.'
        >
          <button>
            <IconSend />
          </button>
        </Input>
      </footer>
    </div>
  );
}
