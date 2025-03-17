import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'outline' | 'filled';
type ButtonColor = 'primary' | 'primary-variant' | 'secondary';

// 유효한 조합만 허용하는 타입
type ButtonProps =
  | ({
      variant: 'filled';
      buttonColor: ButtonColor;
    } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      variant: 'outline';
      buttonColor?: never;
    } & ButtonHTMLAttributes<HTMLButtonElement>);

const getVariant = (
  variant: ButtonVariant,
  color?: ButtonColor,
  disabled?: boolean,
) => {
  let buttonStyle = '';

  if (variant === 'outline') {
    buttonStyle = 'border-2 border-primaryVariant text-primaryVariant bg-white';
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
        buttonStyle = 'bg-secondary text-primaryVariant';
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
  ...props
}: ButtonProps) {
  const buttonClasses = twMerge(
    'w-full h-56 py-8 px-16 rounded-8 font-medium',
    getVariant(variant, buttonColor, disabled),
    className,
  );

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      <p>{children}</p>
    </button>
  );
}
