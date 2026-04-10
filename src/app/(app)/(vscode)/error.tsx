'use client'

import { Button } from '@/components/UI/button'

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center p-10 border border-red-500/20 bg-red-500/5 rounded-lg">
      {/** biome-ignore lint/suspicious/noCommentText: <explanation> */}
      <h2 className="text-red-400 font-mono"> // 500: Internal Server Error</h2>
      <p className="text-sm text-gray-400 my-2">{error.message}</p>
      <Button
        onClick={() => reset()}
        type="button"
        className="mt-4 px-4 py-2 bg-red-500/20 hover:bg-red-500/40 text-red-200 text-xs rounded"
      >
        Tentar novamente
      </Button>
    </div>
  )
}
