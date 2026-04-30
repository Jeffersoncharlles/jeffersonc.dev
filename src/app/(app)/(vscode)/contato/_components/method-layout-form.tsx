'use client'

import { BookText, FileJson } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/UI/button'

export const MethodLayoutForm = () => {
  const [method, setMethod] = React.useState<'json' | 'email'>('email')

  const handleMethodChange = () => {
    setMethod(method === 'json' ? 'email' : 'json')
  }

  return (
    <Button onClick={handleMethodChange} className=" cursor-pointer ">
      {method === 'json' ? (
        <FileJson className="text-muted-foreground hover:text-muted-foreground/70 lg:w-12 lg:h-12 mr-2 h-6 w-6" />
      ) : (
        <BookText className="text-muted-foreground hover:text-muted-foreground/70 lg:w-12 lg:h-12 mr-2 h-6 w-6" />
      )}
    </Button>
  )
}
