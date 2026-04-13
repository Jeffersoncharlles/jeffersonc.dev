'use client'
import { motion } from 'framer-motion'

export default function VSCodeTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      // Animação mais seca e técnica, como um editor real
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: 'circOut' }}
      className="flex-1 flex flex-col "
    >
      {children}
    </motion.div>
  )
}
