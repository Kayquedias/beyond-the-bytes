import React, { ReactNode } from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode;
  background?: 'primary' | 'secondary';
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  background = 'primary',
  ...props
}) => {
  const backgroundColor =
    background === 'primary'
      ? 'bg-dark text-white hover:bg-black/90'
      : 'bg-white text-dark border-dark hover:text-red-500';

  return (
    <button
      {...props}
      className={`uppercase py-2.5 px-5 w-full  font-grotesk transition-colors duration-400 border tracking-widest ${backgroundColor}`}
    >
      <span />
      {isLoading ? 'Carregando' : children}
    </button>
  );
};

export { Button };
