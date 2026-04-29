'use client'

import { transformerRenderIndentGuides } from '@shikijs/transformers'
import { useLayoutEffect, useState } from 'react'
import { codeToHtml } from 'shiki'
import { twMerge } from 'tailwind-merge'

interface CodeBlockProps extends React.ComponentProps<'div'> {
  code: string
  language?: string
}

export const CodeBlock = ({
  className,
  code,
  language = 'json',

  ...props
}: CodeBlockProps) => {
  const [parsedCode, setParsedCode] = useState('')

  useLayoutEffect(() => {
    if (!code) return

    codeToHtml(code, {
      lang: language,
      theme: 'vesper',
      transformers: [transformerRenderIndentGuides()],
    })
      .then((html) => {
        setParsedCode(html)
      })
      // .then((html) => {
      //   try {
      //     // Post-process HTML returned by shiki to add a line-number gutter.
      //     // We parse the returned HTML, extract the <pre> contents and wrap each
      //     // line with a container that includes a line number and the original
      //     // highlighted HTML for that line.
      //     const wrapper = document.createElement('div')
      //     wrapper.innerHTML = html
      //     const pre = wrapper.querySelector('pre')

      //     if (pre) {
      //       const preClass = pre.className
      //       // Get inner HTML of pre (contains highlighted code possibly with newlines)
      //       const inner = pre.innerHTML

      //       // Split into lines. Keep trailing empty lines.
      //       const lines = inner.split(/\n/)

      //       const rebuilt = lines
      //         .map((lineHtml, index) => {
      //           const number = index + 1
      //           // Use a wrapper per line: .sh-line -> gutter + code
      //           return `<div class="sh-line"><span class="sh-ln">${number}</span><span class="sh-code">${lineHtml || ' '}</span></div>`
      //         })
      //         .join('')

      //       const final = `<pre class="${preClass}"><code>${rebuilt}</code></pre>`
      //       setParsedCode(final)
      //       return
      //     }

      //     // Fallback: use original html
      //     setParsedCode(html)
      //   } catch (err) {
      //     console.error(err)
      //     setParsedCode(html)
      //   }
      // })
      .catch((err) => console.error(err))
  }, [code, language])

  return (
    <div
      {...props}
      className={twMerge(
        'relative rounded-lg border border-zinc-700 overflow-x-auto',
        className,
      )}
    >
      <div
        className={twMerge(
          '[&_pre]:p-4 [&_pre]:text-sm [&_pre]:font-mono [&_pre]:leading-relaxed ',
          // quebrar linhas longas na horizontal
          '[&_pre]:whitespace-pre-wrap [&_pre]:wrap-break-word',
          //daqui para baixo é para as linhas de indentação
          '[&_pre_.indent]:inline-block [&_pre_.indent]:relative [&_pre_.indent]:left-(--indent-offset)',
          '[&_pre_.indent:empty]:h-[1lh][&_pre_.indent:empty]:align-bottom',
          "[&_pre_.indent::before]:content-['']",
          '[&_pre_.indent::before]:absolute',
          '[&_pre_.indent::before]:opacity-20',
          '[&_pre_.indent::before]:w-px',
          '[&_pre_.indent::before]:h-full',
          '[&_pre_.indent::before]:bg-current',
          //até aqui é para as linhas de indentação
        )}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: true - we trust the output from shiki
        dangerouslySetInnerHTML={{ __html: parsedCode }}
      />
    </div>
  )
}
