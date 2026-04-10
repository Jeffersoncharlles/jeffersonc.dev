import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonRootProps extends ComponentProps<'div'> {}
const ButtonRoot = ({ className, ...props }: ButtonRootProps) => {
  return <div className={twMerge('', className)} {...props} />
}

interface ButtonHeaderProps extends ComponentProps<'header'> {}
const ButtonHeader = ({ className, ...props }: ButtonHeaderProps) => {
  return <header className={twMerge('', className)} {...props} />
}

interface ButtonTitleProps extends ComponentProps<'h3'> {}
const ButtonTitle = ({ className, ...props }: ButtonTitleProps) => {
  return <h3 className={twMerge('', className)} {...props} />
}

interface ButtonContentProps extends ComponentProps<'div'> {}
const ButtonContent = ({ className, ...props }: ButtonContentProps) => {
  return <div className={twMerge('', className)} {...props} />
}

interface ButtonFooterProps extends ComponentProps<'footer'> {}
const ButtonFooter = ({ className, ...props }: ButtonFooterProps) => {
  return <footer className={twMerge('', className)} {...props} />
}

export const Button = {
  Root: ButtonRoot,
  Header: ButtonHeader,
  Title: ButtonTitle,
  Content: ButtonContent,
  Footer: ButtonFooter,
}
