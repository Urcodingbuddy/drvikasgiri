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
          background: 'linear-gradient(135deg, #0e0e0e 0%, #1a1a1a 100%)',
          padding: '80px 100px',
          position: 'relative',
        }}
      >
        {/* Decorative background glows */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236,176,68,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-150px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236,176,68,0.05) 0%, transparent 70%)',
          }}
        />

        {/* Top gold accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #ECB044, #d19938, #ECB044)',
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoDataUri}
          alt=""
          style={{
            position: 'absolute',
            top: '140px',
            right: '100px',
            width: '360px',
            height: '360px',
            opacity: 0.9,
          }}
        />

        {/* Label with clean separator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '32px',
          }}
        >
          <div style={{ width: '40px', height: '2px', background: '#ECB044' }} />
          <span style={{ color: '#ECB044', fontSize: '18px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700 }}>
            Cosmetic Dentistry | Dubai
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '92px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          Dr. Vikas Giri
        </div>

        {/* Specialty */}
        <div
          style={{
            fontSize: '32px',
            color: '#b0b0b0',
            fontWeight: 400,
            marginBottom: '56px',
            letterSpacing: '-0.01em',
          }}
        >
          Veneers Specialist &amp; Smile Design Expert
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '36px', fontWeight: 700, color: '#ECB044' }}>23+</span>
            <span style={{ fontSize: '14px', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Years Exp.</span>
          </div>

          <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '36px', fontWeight: 700, color: '#ECB044' }}>5000+</span>
            <span style={{ fontSize: '14px', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Smiles</span>
          </div>

          <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '36px', fontWeight: 700, color: '#ECB044' }}>4.9</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#ECB044"/>
              </svg>
            </div>
            <span style={{ fontSize: '14px', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Rating</span>
          </div>
        </div>

        {/* Website URL footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '100px',
            fontSize: '16px',
            color: '#666',
            letterSpacing: '0.05em',
          }}
        >
          www.drvikasgiri.com
        </div>

        {/* Bottom gold subtle border */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'rgba(236,176,68,0.15)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
