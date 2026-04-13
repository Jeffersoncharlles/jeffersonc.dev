import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface BadgeRootProps extends ComponentProps<'div'> {}

const BadgeRoot = ({ className, ...props }: BadgeRootProps) => {
  return (
    <div
      className={twMerge(
        'bg-[rgba(139,233,253,0.1)] border border-[rgba(139,233,253,0.2)] flex px-[13px] py-[7px] rounded-[12px]',
        'data-[color=blue]:bg-dracula-cyan/10 data-[color=blue]:border-dracula-cyan/20 data-[color=blue]:text-dracula-cyan',
        'data-[color=purple]:bg-dracula-purple/10 data-[color=purple]:border-dracula-purple/20 data-[color=purple]:text-dracula-purple',
        'data-[color=pink]:bg-dracula-pink/10 data-[color=pink]:border-dracula-pink/20 data-[color=pink]:text-dracula-pink',
        'data-[color=green]:bg-dracula-green/10 data-[color=green]:border-dracula-green/20 data-[color=green]:text-dracula-green',
        'data-[color=orange]:bg-dracula-orange/10 data-[color=orange]:border-dracula-orange/20 data-[color=orange]:text-dracula-orange',
        className,
      )}
      {...props}
    />
  )
}

interface BadgeContentProps extends ComponentProps<'span'> {}

const BadgeContent = ({ className, ...props }: BadgeContentProps) => {
  return (
    <span
      className={twMerge(
        'font-bold text-current text-[10px] tracking-[1px] uppercase',
        '',
        className,
      )}
      {...props}
    />
  )
}

export const Badge = {
  Root: BadgeRoot,
  Content: BadgeContent,
  // Adicione outros sub-componentes aqui
}
