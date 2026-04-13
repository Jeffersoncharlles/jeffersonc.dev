import { Badge } from '@/components/UI/badge'
import { Card } from '@/components/UI/card'
import { Icon } from '@/components/UI/icon'
import { makeGetHomeCards } from '@/core/infra/services/home-service'

// export const revalidate = 3600

export const CardList = async () => {
  const cards = await makeGetHomeCards().execute()

  if (!cards) {
    return <p>No cards available</p>
  }

  return (
    <>
      {cards.map((card) => (
        <Card.Root key={card.id} data-color={card.color}>
          <Card.Overlay />
          <Card.Header>
            <Badge.Root data-color={card.color}>
              <Badge.Content>{card.badge}</Badge.Content>
            </Badge.Root>

            <Icon
              name={card.icon}
              colorName={card.color}
              className="size-4 opacity-70 group-hover:opacity-100 transition-opacity"
            />
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
                data-color={card.color}
                className="
                  font-['Liberation_Mono:Bold',sans-serif] text-[11px] px-2 py-1 rounded
                  data-[color=blue]:text-dracula-cyan data-[color=blue]:bg-dracula-cyan/10
                  data-[color=purple]:text-dracula-purple data-[color=purple]:bg-dracula-purple/10
                  data-[color=green]:text-dracula-green data-[color=green]:bg-dracula-green/10
                  data-[color=orange]:text-dracula-orange data-[color=orange]:bg-dracula-orange/10
                "
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
