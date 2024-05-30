import React, { ReactNode } from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode;
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...props }) => {
  return (
    <button
      {...props}
      className="uppercase py-2.5 px-5 w-full bg-dark text-white font-grotesk transition-colors duration-400 border tracking-widest hover:border-dark hover:text-dark hover:bg-white"
    >
      <span />
      {isLoading ? 'Carregando' : children}
    </button>
  );
};

export { Button };
