'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@fluentui/react-components';
import {
  WeatherMoon24Regular,
  WeatherSunny24Regular,
  Home24Regular,
  CalendarLtr24Regular,
  People24Regular,
  Box24Regular,
  Book24Regular,
  News24Regular,
  Trophy24Regular,
  Mail24Regular,
  Navigation24Regular,
  Dismiss24Regular
} from '@fluentui/react-icons';
import { useTheme } from '../app/providers';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home24Regular },
    { href: '/events', label: 'Events', icon: CalendarLtr24Regular },
    { href: '/projects', label: 'Projects', icon: Box24Regular },
    { href: '/resources', label: 'Resources', icon: Book24Regular },
    { href: '/news', label: 'News', icon: News24Regular },
    { href: '/achievements', label: 'Achievements', icon: Trophy24Regular },
    { href: '/about', label: 'About Us', icon: People24Regular },
    { href: '/contact', label: 'Contact', icon: Mail24Regular },
  ];

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-lg border-b shadow-lg"
      style={{
        borderColor: isDark ? 'rgba(59, 59, 59, 0.1)' : 'rgba(224, 224, 224, 0.1)',
        backgroundColor: isDark ? 'rgba(26, 26, 26,0.3)' : 'rgba(255, 255, 255,0.3)',
      }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand with hover animation */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              scroll={false}
              className="transition-transform hover:scale-105 duration-300 inline-block"
            >
              <Image
                src={isDark ? '/images/logo_white.png' : '/images/logo_black.png'}
                alt='Microsoft Learn Student Ambassadors'
                width={192 * 2}
                height={64 * 2}
                className='w-auto h-38'
                priority
              />
            </Link>
          </div>

          {/* Navigation Links with icons and gradient color on hover */}
          <div className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <NavLinkItem key={link.href} link={link} isDark={isDark} />
            ))}
          </div>

          {/* Right side: Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              appearance="subtle"
              icon={isDark ? <WeatherSunny24Regular /> : <WeatherMoon24Regular />}
              onClick={toggleTheme}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="transition-transform hover:rotate-180 duration-500"
            />
            
            {/* Mobile Menu Toggle Button - Only show on mobile/tablet */}
            <div className="lg:hidden">
              <Button
                appearance="subtle"
                icon={isMobileMenuOpen ? <Dismiss24Regular /> : <Navigation24Regular />}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                title="Toggle Menu"
                className="transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu - Collapsible */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={false}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-[1.02] flex items-center gap-3 backdrop-blur-sm"
                  style={{
                    color: isDark ? '#e0e0e0' : '#424242',
                    backgroundColor: isDark ? 'rgba(42, 42, 42, 0.8)' : 'rgba(245, 245, 245, 0.8)',
                    borderLeft: `3px solid transparent`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderLeftColor = '#60a5fa';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderLeftColor = 'transparent';
                  }}
                >
                  <Icon style={{ fontSize: '18px' }} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gradient accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: 'linear-gradient(90deg, #0078d4 0%, #60a5fa 50%, #7c3aed 100%)'
        }}
      />
    </nav>
  );
}

function NavLinkItem({
  link,
  isDark,
}: {
  link: { href: string; label: string; icon: any };
  isDark: boolean;
}) {
  const Icon = link.icon;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      href={link.href}
      scroll={false}
      className="relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group flex items-center gap-1.5"
      style={{
        color: isDark ? '#e0e0e0' : '#424242',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon
        style={{
          fontSize: '16px',
          transition: 'all 0.3s',
          color: isHovered ? (isDark ? '#60a5fa' : '#0078d4') : 'inherit',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
      />
      <span
        style={{
          transition: 'all 0.3s',
          backgroundImage: isHovered
            ? (isDark
              ? 'linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899)'
              : 'linear-gradient(90deg, #0078d4, #7c3aed, #e91e63)')
            : 'none',
          backgroundClip: isHovered ? 'text' : 'initial',
          WebkitBackgroundClip: isHovered ? 'text' : 'initial',
          color: isHovered ? 'transparent' : 'inherit'
        }}
      >
        {link.label}
      </span>
      {/* Animated underline with gradient */}
      <span
        className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
        style={{
          width: isHovered ? '100%' : '0',
          background: isDark
            ? 'linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899)'
            : 'linear-gradient(90deg, #0078d4, #7c3aed, #e91e63)'
        }}
      />
    </Link>
  );
}
