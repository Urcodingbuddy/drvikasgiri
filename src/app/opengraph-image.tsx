import { ImageResponse } from 'next/og'
import { logoDataUri } from './logo-data'

export const runtime = 'edge'
export const alt = 'Dr. Vikas Giri | Veneers & Cosmetic Dentist, Dubai'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: 'linear-gradient(150deg, #0a0a0a 0%, #111111 60%, #161208 100%)',
          padding: '72px 100px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top gold accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '5px',
            background: 'linear-gradient(90deg, #ECB044 0%, #F5C96A 50%, #C49A2E 100%)',
          }}
        />

        {/* Soft gold glow — top right */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236,176,68,0.12) 0%, transparent 65%)',
          }}
        />

        {/* Soft gold glow — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(196,154,46,0.07) 0%, transparent 65%)',
          }}
        />

        {/* Logo — right side */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoDataUri}
          alt=""
          style={{
            position: 'absolute',
            top: '100px',
            right: '90px',
            width: '390px',
            height: '390px',
            objectFit: 'contain',
          }}
        />

        {/* Specialty pill badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(236,176,68,0.12)',
              border: '1px solid rgba(236,176,68,0.3)',
              borderRadius: '100px',
              padding: '7px 18px',
            }}
          >
            <div
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#ECB044',
              }}
            />
            <span
              style={{
                color: '#ECB044',
                fontSize: '15px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              Cosmetic Dentistry · Dubai
            </span>
          </div>
        </div>

        {/* Name — with left gold accent bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px',
            marginBottom: '18px',
          }}
        >
          <div
            style={{
              width: '5px',
              height: '106px',
              borderRadius: '4px',
              background: 'linear-gradient(180deg, #ECB044 0%, #C49A2E 100%)',
              marginTop: '6px',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: '88px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            Dr. Vikas Giri
          </span>
        </div>

        {/* Specialty line */}
        <div
          style={{
            fontSize: '28px',
            color: '#9ca3af',
            fontWeight: 400,
            marginBottom: '48px',
            letterSpacing: '-0.01em',
            paddingLeft: '25px',
          }}
        >
          Veneers Specialist &amp; Smile Design Expert
        </div>

        {/* Stat cards row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: '16px',
            paddingLeft: '25px',
          }}
        >
          {/* Card: Years */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(236,176,68,0.2)',
              borderRadius: '16px',
              padding: '18px 30px',
              gap: '6px',
            }}
          >
            <span style={{ fontSize: '40px', fontWeight: 800, color: '#ECB044', lineHeight: 1 }}>23+</span>
            <span style={{ fontSize: '12px', color: '#6b7280', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Years Exp.</span>
          </div>

          {/* Card: Smiles */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(236,176,68,0.2)',
              borderRadius: '16px',
              padding: '18px 30px',
              gap: '6px',
            }}
          >
            <span style={{ fontSize: '40px', fontWeight: 800, color: '#ECB044', lineHeight: 1 }}>5000+</span>
            <span style={{ fontSize: '12px', color: '#6b7280', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Happy Smiles</span>
          </div>

          {/* Card: Rating */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(236,176,68,0.2)',
              borderRadius: '16px',
              padding: '18px 30px',
              gap: '6px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ fontSize: '40px', fontWeight: 800, color: '#ECB044', lineHeight: 1 }}>4.9</span>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#ECB044"/>
              </svg>
            </div>
            <span style={{ fontSize: '12px', color: '#6b7280', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Google Rating</span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            left: '100px',
            right: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontSize: '15px', color: '#4b5563', letterSpacing: '0.04em' }}>
            www.drvikasgiri.com
          </span>
          <span style={{ fontSize: '13px', color: '#374151', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Dubai · UAE
          </span>
        </div>

        {/* Bottom gold border */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #ECB044 0%, #F5C96A 50%, #C49A2E 100%)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
