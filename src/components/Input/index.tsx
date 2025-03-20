'use client';

import {
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from 'react';
import { IconClose } from '@/public/svgs';
import TextLengthCounter from './TextLengthCounter';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  variant: 'default' | 'limit';
  hasClearButton: boolean;
  maxLength?: number;
  children?: ReactNode;
}

type ConditionalInputProps = InputProps extends { variant: 'limit' }
  ? InputProps & { maxLength: number }
  : InputProps;

const inputContainerStyle =
  'w-full flex gap-12 justify-between rounded-8 border border-gray-5 text-14 px-16 py-13 focus-within:border-primaryVariant focus-within:bg-surface';

export default function Input({
  inputText,
  setInputText,
  type = 'text',
  variant,
  hasClearButton,
  maxLength = 5,
  children,
  ...props
}: ConditionalInputProps) {
  return (
    <div className={inputContainerStyle}>
      <div className='flex w-full justify-between gap-12'>
        <label className='w-full'>
          <input
            type={type}
            maxLength={maxLength}
            className={`w-full bg-transparent focus:outline-none`}
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            {...props}
          />
        </label>
        {/* 클리어 버튼*/}
        {hasClearButton && inputText && (
          <button type='button' onClick={() => setInputText('')}>
            <IconClose />
          </button>
        )}
      </div>
      {/* 글자수 카운터 */}
      {variant === 'limit' && (
        <TextLengthCounter text={inputText} maxLength={maxLength} />
      )}
      {/* 아이콘 버튼 */}
      {children}
    </div>
  );
}
