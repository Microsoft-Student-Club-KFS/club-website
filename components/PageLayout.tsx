'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../app/providers';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { isDark } = useTheme();

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
        color: isDark ? '#f5f5f5' : '#242424',
      }}
    >
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
