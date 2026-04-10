'use client'
import { motion } from 'framer-motion'

export default function BlogTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      // Mantendo o seu efeito de blur e escala que combina com blog
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(5px)' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full flex flex-1 flex-col relative"
    >
      {children}
    </motion.div>
  )
}
