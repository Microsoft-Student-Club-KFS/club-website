'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const GA_ID = measurementId || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  
  // Don't load GA in development or if no ID is provided
  const isDevelopment = process.env.NODE_ENV === 'development';
  const hasOptedOut = typeof window !== 'undefined' && 
    document.cookie.includes('ga-opt-out=true');

  useEffect(() => {
    // Check for opt-out cookie
    if (hasOptedOut) {
      console.log('[GA] User has opted out of tracking');
    }
  }, [hasOptedOut]);

  if (!GA_ID || isDevelopment || hasOptedOut) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
            });
          `,
        }}
      />
    </>
  );
}

/**
 * Helper function to set opt-out cookie
 */
export function optOutOfAnalytics() {
  if (typeof window !== 'undefined') {
    document.cookie = 'ga-opt-out=true; max-age=31536000; path=/';
    window.location.reload();
  }
}

/**
 * Helper function to opt back in
 */
export function optInToAnalytics() {
  if (typeof window !== 'undefined') {
    document.cookie = 'ga-opt-out=; max-age=0; path=/';
    window.location.reload();
  }
}
