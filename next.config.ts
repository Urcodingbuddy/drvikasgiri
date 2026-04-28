import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.29.18'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply CSP to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              // Default — restrictive fallback
              "default-src 'self'",
              // Scripts: self + GTM + GA4 inline boot snippet
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://tagmanager.google.com",
              // Script elements (stricter browsers honour this separately)
              "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://tagmanager.google.com",
              // Styles: self + inline (needed by GTM previews & fonts)
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://tagmanager.google.com",
              // Web fonts
              "font-src 'self' https://fonts.gstatic.com",
              // Images: self + GA beacon + GTM preview + data URIs
              "img-src 'self' data: https://www.google-analytics.com https://ssl.google-analytics.com https://www.googletagmanager.com https://lh3.googleusercontent.com",
              // Outbound XHR/fetch: GA4 measurement endpoint + GTM
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com https://www.googletagmanager.com",
              // Frames: GTM noscript iframe
              "frame-src https://www.googletagmanager.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
