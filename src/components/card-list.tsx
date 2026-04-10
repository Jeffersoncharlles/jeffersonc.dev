import { AppWindow } from 'lucide-react'
import { makeGetHomeCards } from '@/core/infra/services/home-service'
import { Badge } from './UI/badge'
import { Card } from './UI/card'

// export const revalidate = 3600

export const CardList = async () => {
  const cards = await makeGetHomeCards().execute()

  return (
    <>
      {cards.map((card) => (
        <Card.Root key={card.id}>
          <Card.Overlay />
          <Card.Header>
            <Badge.Root>
              <Badge.Content>{card.badge}</Badge.Content>
            </Badge.Root>

            <AppWindow className="size-4 opacity-70 group-hover:opacity-100 transition-opacity text-cyan-300" />
          </Card.Header>
          <Card.Title>
            <h3 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[20px] text-white">
              {card.title}
            </h3>
          </Card.Title>
          <Card.Content>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] md:text-[14px] text-[rgba(248,248,242,0.8)] leading-[1.6]">
              {card.description}
            </p>
          </Card.Content>
          <Card.Footer>
            {card.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index.toString()}
                className="font-['Liberation_Mono:Bold',sans-serif] text-dracula-cyan text-[11px] bg-dracula-cyan/10 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </Card.Footer>
        </Card.Root>
      ))}
    </>
  )
}
