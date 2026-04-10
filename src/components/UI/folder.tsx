import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface FolderRootProps extends ComponentProps<'div'> {}
const FolderRoot = ({ className, ...props }: FolderRootProps) => {
  return (
    <div className={twMerge('flex flex-col mb-0.5', className)} {...props} />
  )
}

interface FolderButtonProps extends ComponentProps<'button'> {}
const FolderButton = ({ className, ...props }: FolderButtonProps) => {
  return (
    <button
      className={twMerge(
        'w-full flex items-center gap-2 px-3 py-1.5 hover:bg-secondary cursor-pointer select-none rounded-r-full mr-4 transition-colors',
        className,
      )}
      {...props}
    />
  )
}

interface FolderIconProps extends ComponentProps<'div'> {}
const FolderIcon = ({ className, ...props }: FolderIconProps) => {
  return (
    <div
      className={twMerge(
        'w-4 h-4 flex items-center justify-center text-foreground/50 shrink-0 transition-opacity',
        className,
      )}
      {...props}
    />
  )
}

interface FolderTitleProps extends ComponentProps<'span'> {}
const FolderTitle = ({ className, ...props }: FolderTitleProps) => {
  return (
    <span
      className={twMerge(
        'text-[13px] tracking-wide min-w-0 truncate transition-opacity duration-300 ',
        'font-normal text-foreground/70',
        'data-[open=true]:font-semibold data-[open=true]:text-foreground',
        className,
      )}
      {...props}
    />
  )
}

interface FolderFooterProps extends ComponentProps<'footer'> {}
const FolderFooter = ({ className, ...props }: FolderFooterProps) => {
  return <footer className={twMerge('', className)} {...props} />
}

export const Folder = {
  Root: FolderRoot,
  Button: FolderButton,
  Icon: FolderIcon,
  Title: FolderTitle,
  Footer: FolderFooter,
}
