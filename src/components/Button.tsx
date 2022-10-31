import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  disabled?: boolean;
}

export function Button({ children, asChild, disabled, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp 
      className={clsx(
        'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white', 
        {
          'bg-cyan-800 text-gray-800 pointer-events-none': disabled,
        },
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}