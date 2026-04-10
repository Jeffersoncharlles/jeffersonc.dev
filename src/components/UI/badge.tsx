import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface BadgeRootProps extends ComponentProps<'div'> {}

const BadgeRoot = ({ className, ...props }: BadgeRootProps) => {
  return (
    <div
      className={twMerge(
        'bg-[rgba(139,233,253,0.1)] border border-[rgba(139,233,253,0.2)] flex px-[13px] py-[7px] rounded-[12px]',
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
        'font-bold text-dracula-cyan text-[10px] tracking-[1px] uppercase',
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
