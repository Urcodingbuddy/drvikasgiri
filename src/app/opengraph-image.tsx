import { ImageResponse } from 'next/og'

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
          background: '#0e0e0e',
          padding: '80px 100px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Gold top border */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '5px',
            background: 'linear-gradient(90deg, #ECB044, #d19938)',
          }}
        />

        {/* Decorative background glow */}
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

        {/* Label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '28px',
          }}
        >
          <div style={{ width: '32px', height: '2px', background: '#ECB044' }} />
          <span style={{ color: '#ECB044', fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
            Cosmetic Dentistry · Dubai
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '88px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            marginBottom: '24px',
          }}
        >
          Dr. Vikas Giri
        </div>

        {/* Specialty */}
        <div
          style={{
            fontSize: '30px',
            color: '#a0a0a0',
            fontWeight: 400,
            marginBottom: '48px',
            letterSpacing: '-0.5px',
          }}
        >
          Veneers Specialist &amp; Smile Design Expert
        </div>

        {/* Divider */}
        <div style={{ width: '64px', height: '2px', background: '#ECB044', marginBottom: '40px' }} />

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '60px' }}>
          {[
            { value: '23+', label: 'Years Experience' },
            { value: '5000+', label: 'Smiles Transformed' },
            { value: '4.9★', label: 'Patient Rating' },
          ].map(({ value, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '32px', fontWeight: 700, color: '#ECB044' }}>{value}</span>
              <span style={{ fontSize: '14px', color: '#666', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Bottom gold border */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'rgba(236,176,68,0.2)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
