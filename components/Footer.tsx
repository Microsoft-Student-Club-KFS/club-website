'use client';

import Link from 'next/link';
import { useTheme } from '../app/providers';
import { Text } from '@fluentui/react-components';

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
          {/* About Section */}
          <div>
            <Text size={500} weight="semibold" className="block mb-3">
              MSC Kafr El-Shaikh
            </Text>
            <Text size={300} className="block text-gray-600 dark:text-gray-400">
              Microsoft Student Club at Kafr El-Shaikh University. 
              Empowering students through technology and innovation.
            </Text>
          </div>

          {/* Quick Links */}
          <div>
            <Text size={500} weight="semibold" className="block mb-3">
              Quick Links
            </Text>
            <div className="flex flex-col space-y-2">
              <Link href="/events" className="text-sm hover:underline text-gray-600 dark:text-gray-400">
                Events
              </Link>
              <Link href="/projects" className="text-sm hover:underline text-gray-600 dark:text-gray-400">
                Projects
              </Link>
              <Link href="/team" className="text-sm hover:underline text-gray-600 dark:text-gray-400">
                Team
              </Link>
              <Link href="/contact" className="text-sm hover:underline text-gray-600 dark:text-gray-400">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <Text size={500} weight="semibold" className="block mb-3">
              Connect With Us
            </Text>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:underline text-gray-600 dark:text-gray-400"
              >
                Facebook
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:underline text-gray-600 dark:text-gray-400"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:underline text-gray-600 dark:text-gray-400"
              >
                GitHub
              </a>
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
