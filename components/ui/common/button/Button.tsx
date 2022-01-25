import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

function Button({ children, className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 border rounded-md text-base font-medium ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  className: 'text-white bg-indigo-600 hover:bg-indigo-700',
};
