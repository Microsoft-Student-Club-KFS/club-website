'use client';

import Link from 'next/link';
import { useTheme } from '../app/providers';
import { Text } from '@fluentui/react-components';
import { ChevronRight24Regular } from '@fluentui/react-icons';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer 
      className="border-t mt-auto"
      style={{ 
        borderColor: isDark ? '#3b3b3b' : '#e0e0e0',
        backgroundColor: isDark ? '#1a1a1a' : '#fafafa'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section (MSC) */}
          <div>
            <Text
              size={500}
              weight="semibold"
              className="block mb-3"
              style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              MSC Kafr El-Shaikh
            </Text>
            <div
              className="rounded-2xl p-4 border backdrop-blur-xl"
              style={{
                borderColor: isDark ? 'rgba(96,165,250,0.3)' : 'rgba(59,130,246,0.25)',
                background: isDark
                  ? 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(124,58,237,0.08))'
                  : 'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(124,58,237,0.06))'
              }}
            >
              <Text size={300} className="block text-gray-600 dark:text-gray-400">
                Microsoft Student Club at Kafr El-Shaikh University. 
                Empowering students through technology and innovation.
              </Text>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Text
              size={500}
              weight="semibold"
              className="block mb-3"
              style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Quick Links
            </Text>
            <div
              className="rounded-2xl p-4 border backdrop-blur-xl"
              style={{
                borderColor: isDark ? 'rgba(96,165,250,0.3)' : 'rgba(59,130,246,0.25)',
                background: isDark
                  ? 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(124,58,237,0.08))'
                  : 'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(124,58,237,0.06))'
              }}
            >
              <div className="flex flex-col">
                {[
                  { href: '/events', label: 'Events' },
                  { href: '/projects', label: 'Projects' },
                  { href: '/resources', label: 'Resources' },
                  { href: '/news', label: 'News' },
                  { href: '/achievements', label: 'Achievements' },
                  { href: '/about', label: 'About Us' },
                  { href: '/contact', label: 'Contact' },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group text-sm text-gray-600 dark:text-gray-400 px-3 py-2 rounded-lg flex items-center justify-between transition-all hover:bg-white/40 dark:hover:bg-white/5"
                  >
                    <span className="opacity-90 group-hover:opacity-100 transition-colors">{l.label}</span>
                    <ChevronRight24Regular
                      style={{ fontSize: 18 }}
                      className="text-gray-400 group-hover:text-[#60a5fa] transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <Text size={500} weight="semibold" className="block mb-3" style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>
              Connect With Us
            </Text>
            <div
              className="rounded-2xl p-4 border backdrop-blur-xl"
              style={{
                borderColor: isDark ? 'rgba(96,165,250,0.3)' : 'rgba(59,130,246,0.25)',
                background: isDark
                  ? 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(124,58,237,0.08))'
                  : 'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(124,58,237,0.06))'
              }}
            >
              <SocialLinks variant="iconAndLabel" direction="col" gap={12} />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t" style={{ borderColor: isDark ? '#3b3b3b' : '#e0e0e0' }}>
          <Text size={200} className="block text-center text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} MSC Kafr El-Shaikh Club. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
}
