import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'outline' | 'filled' | 'custom';
type ButtonColor = 'primary' | 'primary-variant' | 'secondary';

// 유효한 조합만 허용하는 타입
type ButtonProps =
  | ({
      variant: 'filled';
      buttonColor: ButtonColor;
      icon?: ReactNode;
    } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      variant: 'outline';
      buttonColor?: never;
      icon?: ReactNode;
    } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      variant: 'custom';
      buttonColor?: never;
      className: string;
      icon?: ReactNode;
    } & ButtonHTMLAttributes<HTMLButtonElement>);

const getVariant = (
  variant: ButtonVariant,
  color?: ButtonColor,
  disabled?: boolean,
) => {
  if (variant === 'custom') return '';
  let buttonStyle = '';

  if (variant === 'outline') {
    buttonStyle = 'border border-primaryVariant text-primaryVariant bg-white';
  }

  if (variant === 'filled') {
    switch (color) {
      case 'primary':
        buttonStyle = 'bg-primary text-onBackground';
        break;
      case 'primary-variant':
        buttonStyle = 'bg-primaryVariant text-secondary';
        break;
      case 'secondary':
        buttonStyle =
          'bg-secondary text-primaryVariant border border-primaryVariant';
        break;
      default:
        buttonStyle = 'bg-primary text-onBackground';
        break;
    }
  }

  if (disabled) buttonStyle += ' opacity-40';

  return buttonStyle;
};

export default function Button({
  children,
  variant,
  type = 'button',
  className,
  buttonColor,
  disabled,
  icon,
  ...props
}: ButtonProps) {
  const variantClass =
    variant === 'custom'
      ? ''
      : getVariant(variant, buttonColor ?? 'primary', disabled);

  const buttonClasses = twMerge(
    'w-full h-56 py-8 px-16 rounded-8 font-medium',
    variantClass,
    className,
  );

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {icon}
      <p className='basis-full text-medium-01'>{children}</p>
    </button>
  );
}
