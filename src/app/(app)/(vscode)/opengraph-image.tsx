import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const alt = 'Jefferson Charlles - Engenheiro de Software Full Stack'
export const contentType = 'image/png'

const colors = {
  backgroundStart: '#1a1b26',
  backgroundEnd: '#24283b',
  foreground: '#f8f8f2',
  mutedForeground: 'rgba(248, 248, 242, 0.72)',
  border: 'rgba(189, 147, 249, 0.24)',
  purple: '#bd93f9',
  pink: '#ff79c6',
}

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${colors.backgroundStart} 0%, ${colors.backgroundEnd} 100%)`,
        color: colors.foreground,
        fontFamily: 'Space Grotesk, Inter, sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 820,
          height: 820,
          left: -300,
          top: -260,
          borderRadius: 999,
          background:
            'radial-gradient(circle, rgba(189,147,249,0.38) 0%, rgba(189,147,249,0) 72%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: 720,
          height: 720,
          right: -220,
          bottom: -260,
          borderRadius: 999,
          background:
            'radial-gradient(circle, rgba(255,121,198,0.32) 0%, rgba(255,121,198,0) 72%)',
        }}
      />

      <div
        style={{
          margin: 54,
          padding: '42px 46px',
          width: '100%',
          borderRadius: 28,
          border: `1px solid ${colors.border}`,
          background: 'rgba(40, 42, 54, 0.56)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 20,
              color: colors.purple,
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          >
            <span>Visual Studio Portfolio</span>
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 66,
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: -1.8,
            }}
          >
            Jefferson Charlles
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: 32,
              color: colors.purple,
              opacity: 0.92,
            }}
          >
            Engenheiro de Software Full Stack
          </p>

          <p
            style={{
              margin: 0,
              maxWidth: 860,
              fontSize: 25,
              lineHeight: 1.35,
              color: colors.mutedForeground,
              fontFamily: 'Liberation Mono, Menlo, monospace',
            }}
          >
            Construindo ecossistemas de alta performance com mentalidade de
            Engenharia de Software.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 14,
            }}
          >
            <div
              style={{
                border: `1px solid ${colors.purple}`,
                color: colors.purple,
                background: 'rgba(189, 147, 249, 0.14)',
                padding: '8px 14px',
                borderRadius: 999,
                fontSize: 17,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Pos-graduado (2026)
            </div>
            <div
              style={{
                border: `1px solid ${colors.border}`,
                color: colors.foreground,
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '8px 14px',
                borderRadius: 999,
                fontSize: 17,
                opacity: 0.86,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Especialista JS/TS
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 24,
              color: colors.pink,
              fontWeight: 700,
            }}
          >
            <span>jeffersonc.dev</span>
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
