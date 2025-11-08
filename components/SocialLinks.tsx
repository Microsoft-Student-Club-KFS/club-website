'use client';

import React from 'react';

type Variant = 'icon' | 'iconAndLabel';
type Direction = 'row' | 'col';

export interface SocialLinksProps {
  size?: number; // icon size in px
  gap?: number; // gap in px
  variant?: Variant;
  direction?: Direction;
  className?: string;
  includeNames?: string[]; // optional allowlist of social names to render
  limit?: number; // optional max number of items to render
}

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/msc1kfs/',
    color: '#1877F2',
    shadow: 'rgba(24, 119, 242, 0.35)',
    // SimpleIcons-inspired minimal SVG path
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.62h3.128V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.098 2.794.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.765v2.316h3.59l-.467 3.62h-3.123V24h6.127C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/msc-kfs',
    color: '#0A66C2',
    shadow: 'rgba(10, 102, 194, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.603 0 4.268 2.371 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.559V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/msc_kfs/',
    color: '#E1306C',
    shadow: 'rgba(225, 48, 108, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.428 3.68 1.407 2.7 2.386 2.404 3.498 2.345 4.779 2.287 6.059 2.274 6.468 2.274 9.727v4.546c0 3.259.013 3.668.071 4.948.059 1.281.355 2.393 1.334 3.372.979.979 2.091 1.275 3.372 1.334 1.28.058 1.689.071 4.948.071s3.668-.013 4.948-.071c1.281-.059 2.393-.355 3.372-1.334.979-.979 1.275-2.091 1.334-3.372.058-1.28.071-1.689.071-4.948V9.727c0-3.259-.013-3.668-.071-4.948-.059-1.281-.355-2.393-1.334-3.372-.979-.979-2.091-1.275-3.372-1.334C15.668.013 15.259 0 12 0z"/>
        <path d="M12 5.838A6.162 6.162 0 1 0 18.162 12 6.169 6.169 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 16 12a4.004 4.004 0 0 1-4 4z"/>
        <circle cx="18.406" cy="5.594" r="1.44"/>
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@msc-kfs',
    color: '#FF0000',
    shadow: 'rgba(255, 0, 0, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="3" ry="3" fill="currentColor" />
        <polygon points="10,9 16,12 10,15" fill="#fff" />
      </svg>
    )
  },
  {
    name: 'X',
    href: 'https://x.com/MSC_KFS',
    color: '#000000',
    shadow: 'rgba(0, 0, 0, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: 'Telegram',
    href: 'https://t.me/MLSA1KFS',
    color: '#26A5E4',
    shadow: 'rgba(38, 165, 228, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M9.032 15.64l-.374 5.28c.535 0 .765-.23 1.042-.505l2.5-2.4 5.177 3.79c.95.524 1.627.25 1.89-.88l3.423-16.034h.001c.303-1.419-.515-1.976-1.44-1.628L1.34 9.77c-1.389.54-1.368 1.316-.236 1.665l5.24 1.636 12.156-7.647c.571-.374 1.091-.167.663.206L9.031 15.64z"/>
      </svg>
    )
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/sc58svZ9u8',
    color: '#5865F2',
    shadow: 'rgba(88, 101, 242, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M20 4a4 4 0 0 0-3.464 2H7.464A4 4 0 0 0 4 4a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h1l1.5 2 3-2h5l3 2 1.5-2H20a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zM8.5 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg>
    )
  },
  {
    name: 'WhatsApp Community',
    href: 'https://chat.whatsapp.com/DCT6ZhD7cP4DyANHrVLdhU',
    color: '#25D366',
    shadow: 'rgba(37, 211, 102, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.944 14.56L2 22l5.56-1.056A10 10 0 1 0 12 2zm5.2 14.2c-.22.62-1.266 1.18-1.88 1.22-.48.03-1.08.04-1.74-.108-.4-.09-.92-.3-1.6-.62-2.82-1.34-4.65-4.42-4.79-4.63-.14-.2-1.15-1.53-1.15-2.92 0-1.39.73-2.07.98-2.36.25-.28.55-.35.73-.35h.52c.16 0 .4-.06.62.47.22.53.76 1.84.83 1.98.06.14.1.3.02.48-.08.18-.12.3-.24.46-.12.16-.26.36-.37.49-.12.13-.25.27-.11.5.14.22.62 1.02 1.34 1.65.92.82 1.7 1.08 1.94 1.2.24.12.38.1.52-.06.16-.2.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.39.66 1.63.78.24.12.4.18.46.28.06.1.06.58-.14 1.2z"/>
      </svg>
    )
  },
  {
    name: 'WhatsApp DM',
    href: 'https://wa.me/+201063647503',
    color: '#25D366',
    shadow: 'rgba(37, 211, 102, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.944 14.56L2 22l5.56-1.056A10 10 0 1 0 12 2z"/>
        <path d="M16.2 15.2c-.2.6-1.2 1.2-1.8 1.2-.5 0-1.2 0-1.9-.2-.4-.1-.9-.3-1.6-.7-2.6-1.2-4.3-4.1-4.4-4.3-.1-.2-1.1-1.4-1.1-2.8s.7-2 .9-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4-.1.6.4.2.5.7 1.7.8 1.9.1.2.1.3 0 .5-.1.2-.1.3-.2.5-.1.2-.2.3-.4.5-.1.2-.2.2-.1.5.1.2.6 1 .1 1.6.9.8 1.6 1.1 1.9 1.2.2.1.4.1.5-.1.1-.2.6-.7.7-.9.2-.2.3-.2.5-.1.2.1 1.3.6 1.5.7.2.1.4.2.4.3s0 .6-.2 1.2z"/>
      </svg>
    )
  },
  {
    name: 'Email',
    href: 'mailto:info@mlsa-kfs.com',
    color: '#EA4335',
    shadow: 'rgba(234, 67, 53, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="M4 7l8 6 8-6" fill="#fff"/>
      </svg>
    )
  }
];

export default function SocialLinks({ size = 22, gap = 10, variant = 'icon', direction = 'row', className = '', includeNames, limit }: SocialLinksProps) {
  const filtered = includeNames ? socials.filter(s => includeNames.includes(s.name)) : socials;
  const items = typeof limit === 'number' ? filtered.slice(0, Math.max(0, limit)) : filtered;
  return (
    <div
      className={[
        'social-links',
        direction === 'row' ? 'flex items-center' : 'flex flex-col',
        className
      ].join(' ')}
      style={{ gap }}
    >
      {items.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${s.name}`}
          title={s.name}
          className="group inline-flex items-center transition-all"
          style={{ color: s.color }}
        >
          <span
            className="inline-flex items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300"
            style={{
              width: size + 16,
              height: size + 16,
              borderColor: 'rgba(96, 165, 250, 0.35)',
              boxShadow: `0 6px 20px ${s.shadow}`,
              background: 'linear-gradient(135deg, rgba(96,165,250,0.08), rgba(99,102,241,0.06))'
            }}
          >
            <span
              className="transition-transform duration-300 group-hover:scale-110"
              style={{ width: size, height: size, display: 'inline-flex' }}
            >
              {s.svg}
            </span>
          </span>
          {variant === 'iconAndLabel' && (
            <span className="ml-2 text-sm font-medium opacity-90">
              {s.name}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
