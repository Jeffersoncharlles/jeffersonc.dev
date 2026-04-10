import { Slot } from 'radix-ui'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface FileItemRootProps extends ComponentProps<'div'> {
  asChild?: boolean
}
const FileItemRoot = ({
  className,
  asChild = false,
  ...props
}: FileItemRootProps) => {
  const Comp = asChild ? Slot.Root : 'div'

  return (
    <Comp
      className={twMerge(
        'flex items-center gap-2 px-2 py-1.5 hover:bg-secondary cursor-pointer select-none rounded-r-full mr-4 mt-0.5 transition-colors',
        className,
      )}
      {...props}
    />
  )
}

interface FileItemTitleProps extends ComponentProps<'span'> {}
const FileItemTitle = ({ className, ...props }: FileItemTitleProps) => {
  return (
    <span
      className={twMerge(
        'text-[13px] text-foreground/70 hover:text-foreground min-w-0 truncate transition-opacity duration-300',
        className,
      )}
      {...props}
    />
  )
}

// interface FileItemContentProps extends ComponentProps<'div'> {}
// const FileItemContent = ({ className, ...props }: FileItemContentProps) => {
//   return <div className={twMerge('', className)} {...props} />
// }

interface FileItemFooterProps extends ComponentProps<'footer'> {}
const FileItemFooter = ({ className, ...props }: FileItemFooterProps) => {
  return <footer className={twMerge('', className)} {...props} />
}

export const FileItem = {
  Root: FileItemRoot,
  Title: FileItemTitle,
  Footer: FileItemFooter,
}
