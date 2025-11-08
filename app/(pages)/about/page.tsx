
'use client';

import { useState } from 'react';
import { Title1, Title2, Title3, Body1, Card, Badge } from '@fluentui/react-components';
import { useTheme } from '@/app/providers';
import Link from 'next/link';
import {
  Target24Regular,
  Eye24Regular,
  Trophy24Regular,
  Rocket24Regular,
  People24Regular,
  Star24Regular,
  Calendar24Regular,
  Code24Regular,
  Globe24Regular,
  PersonBoard24Regular,
  PersonStar24Regular,
  PersonSupport24Regular
} from '@fluentui/react-icons';

export default function AboutPage() {
  const { isDark } = useTheme();
  const [selectedEvent, setSelectedEvent] = useState<number>(0);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const timelineEvents = [
    {
      year: '2023',
      title: 'Club Foundation',
      description: 'MSC Kafr El-Shaikh was established with a vision to empower students through technology.',
      icon: Rocket24Regular,
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
      position: 'left'
    },
    {
      year: '2024',
      title: 'Our First Season',
      description: 'We officially launched our first season.',
      icon: Code24Regular,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
      position: 'right'
    },
    {
      year: '2024',
      title: 'Industry Partnerships',
      description: 'Formed strategic partnerships with leading tech companies for mentorship and internships.',
      icon: People24Regular,
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
      position: 'left'
    },
    {
      year: '2024',
      title: 'Start of TIP Program',
      description: 'Launched the Technical Internship Program (TIP) to give members real-world, hands-on experience.',
      icon: PersonStar24Regular,
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
      position: 'right'
    },
    {
      year: '2025',
      title: 'Website Launch',
      description: 'Released our official MSC KFS website to centralize news, events, and resources for our community.',
      icon: Globe24Regular,
      color: '#2563eb',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
      position: 'left'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Planning AI research lab, startup incubator, and reaching 1000+ active members.',
      icon: Target24Regular,
      color: '#0ea5e9',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)',
      position: 'right'
    }
  ];

  const leadership = [
    {
      name: 'Ahmed Waly',
      role: 'Club President',
      icon: PersonBoard24Regular,
      color: '#3b82f6',
      description: "Leads the club's strategic vision and partnerships."
    },
    {
      name: 'Ahmed Dawoud',
      role: 'TIP Lead',
      icon: PersonStar24Regular,
      color: '#8b5cf6',
      description: 'Technical Internship Program (TIP) Lead.'
    },
    {
      name: 'Osama Yousef',
      role: 'TMP Lead',
      icon: Code24Regular,
      color: '#ec4899',
      description: 'Tech Mentorship Program (TMP) Lead.'
    },
    {
      name: 'Mona Eltobgy',
      role: 'TMP Vice Lead',
      icon: PersonStar24Regular,
      color: '#f59e0b',
      description: 'Supports and co-leads the TMP track.'
    },
    {
      name: 'Mahmoud Abdellatif',
      role: 'Operations Lead',
      icon: PersonSupport24Regular,
      color: '#10b981',
      description: 'Oversees club operations and logistics.'
    }
  ];

  const stats = [
    { value: '1500+', label: 'Active Members', color: '#3b82f6' },
    { value: '20+', label: 'Events Hosted', color: '#8b5cf6' },
    { value: '2+', label: 'Projects Built', color: '#ec4899' },
    { value: '15+', label: 'Industry Partners', color: '#10b981' }
  ];

  return (
    <div className='py-16 md:py-24 relative overflow-hidden'>
      {/* Background gradient orbs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div
          className='absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20'
          style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' }}
        />
        <div
          className='absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20'
          style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)' }}
        />
        <div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20'
          style={{ background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Page Header */}
        <div className='text-center mb-16'>
          <div
            className='inline-block backdrop-blur-xl border rounded-3xl px-12 py-6 mb-6'
            style={{
              background: isDark
                ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                : 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
              borderColor: isDark ? 'rgba(96, 165, 250, 0.5)' : 'rgba(59, 130, 246, 0.5)',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.4)',
            }}
          >
            <Title2 className='text-3xl md:text-4xl font-bold' style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>
              ABOUT US
            </Title2>
          </div>
          <div />
          <Body1 className='text-lg opacity-80 max-w-3xl mx-auto'>
            Empowering the next generation of tech leaders at Kafr El-Shaikh University
          </Body1>
        </div>

        {/* Explore more (secondary navigation) */}
        <div className="mb-16">
          <Card
            className="p-8 backdrop-blur-xl border"
            style={{
              background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
            }}
          >
            <Title3 className="mb-4 font-bold">Explore more</Title3>
            <Body1 className="opacity-80 mb-4">Find more details in these sections:</Body1>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/resources', label: 'Resources' },
                { href: '/news', label: 'News' },
                { href: '/achievements', label: 'Achievements' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] border"
                  style={{
                    color: isDark ? '#e0e0e0' : '#424242',
                    backgroundColor: isDark ? 'rgba(42, 42, 42, 0.6)' : 'rgba(245, 245, 245, 0.8)',
                    borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card
            className="p-8 backdrop-blur-xl border transition-all duration-300 hover:scale-105"
            style={{
              background: isDark
                ? 'rgba(59, 130, 246, 0.1)'
                : 'rgba(59, 130, 246, 0.05)',
              borderColor: isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)',
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl" style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'
              }}>
                <Target24Regular className="text-white" style={{ fontSize: '32px' }} />
              </div>
              <Title3 className="font-bold">Our Mission</Title3>
            </div>
            <Body1 className="leading-relaxed opacity-90">
              To create an inclusive community where students can learn, collaborate, and innovate with cutting-edge technologies.
              We provide hands-on experiences, mentorship, and opportunities to build real-world projects that make an impact.
            </Body1>
          </Card>

          <Card
            className="p-8 backdrop-blur-xl border transition-all duration-300 hover:scale-105"
            style={{
              background: isDark
                ? 'rgba(139, 92, 246, 0.1)'
                : 'rgba(139, 92, 246, 0.05)',
              borderColor: isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.2)',
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl" style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)'
              }}>
                <Eye24Regular className="text-white" style={{ fontSize: '32px' }} />
              </div>
              <Title3 className="font-bold">Our Vision</Title3>
            </div>
            <Body1 className="leading-relaxed opacity-90">
              To be the leading student tech community in Egypt, recognized for producing skilled graduates who drive innovation
              and contribute to the global tech ecosystem. We envision a future where every member achieves their full potential.
            </Body1>
          </Card>
        </div>

        {/* Interactive Timeline Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Title2 className="text-3xl md:text-4xl font-bold mb-4" style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>
              Our Journey
            </Title2>
            <div />

            <Body1 className="opacity-80">Click on any milestone to explore our story</Body1>
          </div>

          {/* INNOVATIVE TIMELINE */}
          <div className="relative">
            {/* Central animated line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block"
              style={{
                background: `linear-gradient(to bottom, 
                  ${timelineEvents[0].color} 0%,
                  ${timelineEvents[1].color} 20%,
                  ${timelineEvents[2].color} 40%,
                  ${timelineEvents[3].color} 60%,
                  ${timelineEvents[4].color} 80%,
                  ${timelineEvents[5].color} 100%
                )`,
                boxShadow: `0 0 20px ${timelineEvents[selectedEvent].color}`,
                transition: 'box-shadow 0.5s ease'
              }}
            />

            {/* Animated progress indicator */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full hidden md:block transition-all duration-700 ease-out"
              style={{
                top: `${(selectedEvent / (timelineEvents.length - 1)) * 100}%`,
                background: timelineEvents[selectedEvent].gradient,
                boxShadow: `0 0 30px ${timelineEvents[selectedEvent].color}, 0 0 60px ${timelineEvents[selectedEvent].color}`,
                animation: 'pulse 2s ease-in-out infinite'
              }}
            />

            {/* Timeline Events */}
            <div className="space-y-12 md:space-y-24">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isSelected = selectedEvent === index;
                const isHovered = hoveredEvent === index;
                const isLeft = event.position === 'left';

                return (
                  <div
                    key={index}
                    className={`relative flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center gap-8`}
                  >
                    {/* Content Card */}
                    <div className="flex-1 w-full">
                      <Card
                        className={`p-6 md:p-8 backdrop-blur-xl border cursor-pointer transition-all duration-500 ${isLeft ? 'md:mr-12' : 'md:ml-12'
                          }`}
                        style={{
                          background: isSelected
                            ? isDark
                              ? `${event.color}20`
                              : `${event.color}10`
                            : isDark
                              ? 'rgba(255, 255, 255, 0.05)'
                              : 'rgba(255, 255, 255, 0.9)',
                          borderColor: isSelected ? event.color : isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
                          transform: isSelected
                            ? 'scale(1.05) translateY(-8px)'
                            : isHovered
                              ? 'scale(1.02) translateY(-4px)'
                              : 'scale(1)',
                          boxShadow: isSelected
                            ? `0 20px 60px ${event.color}40, 0 0 40px ${event.color}30`
                            : '0 8px 32px rgba(0, 0, 0, 0.1)',
                        }}
                        onClick={() => setSelectedEvent(index)}
                        onMouseEnter={() => setHoveredEvent(index)}
                        onMouseLeave={() => setHoveredEvent(null)}
                      >
                        {/* Year Badge - Artistic Painted Style */}
                        <div className="inline-block mb-4 relative group">
                          {/* Soft watercolor background */}
                          <div
                            className="absolute inset-0 blur-2xl opacity-40 transition-opacity duration-500"
                            style={{
                              background: `radial-gradient(ellipse, ${event.color}80 0%, ${event.color}40 50%, transparent 100%)`,
                              transform: 'scale(1.5)',
                            }}
                          />

                          {/* Main badge with painted style */}
                          <div
                            className="relative px-10 py-3 font-bold text-white overflow-hidden rounded-xl"
                            style={{
                              background: `linear-gradient(135deg, ${event.color} 0%, ${event.color}dd 50%, ${event.color} 100%)`,
                              boxShadow: isSelected
                                ? `0 8px 24px ${event.color}50, 0 4px 12px ${event.color}40, inset 2px 2px 8px rgba(255,255,255,0.3), inset -2px -2px 8px rgba(0,0,0,0.2)`
                                : `0 4px 16px ${event.color}30, inset 1px 1px 4px rgba(255,255,255,0.2), inset -1px -1px 4px rgba(0,0,0,0.1)`,
                              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                              filter: 'contrast(1.05) saturate(1.1)',
                            }}
                          >
                            {/* Paint texture overlay */}
                            <div
                              className="absolute inset-0 opacity-20 mix-blend-overlay"
                              style={{
                                background: `
                                  radial-gradient(circle at 20% 30%, rgba(255,255,255,0.8) 0%, transparent 30%),
                                  radial-gradient(circle at 80% 70%, rgba(255,255,255,0.6) 0%, transparent 25%),
                                  radial-gradient(circle at 50% 50%, rgba(0,0,0,0.3) 0%, transparent 40%)
                                `,
                              }}
                            />

                            {/* Animated shine effect - brush stroke */}
                            <div
                              className="absolute top-0 left-0 w-full h-full opacity-40"
                              style={{
                                background: 'linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.9) 45%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.9) 55%, transparent 80%)',
                                animation: isSelected ? 'shine 4s ease-in-out infinite' : 'none',
                                mixBlendMode: 'overlay',
                              }}
                            />

                            {/* Artistic brush stroke accents */}
                            <div
                              className="absolute top-0 left-4 h-1 bg-white opacity-30 rounded-full"
                              style={{ width: '40%', transform: 'rotate(-5deg)' }}
                            />
                            <div
                              className="absolute bottom-0 right-4 h-1 bg-black opacity-20 rounded-full"
                              style={{ width: '35%', transform: 'rotate(-3deg)' }}
                            />

                            <span
                              className="relative z-10 tracking-wider"
                              style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 8px rgba(255,255,255,0.2)',
                                letterSpacing: '0.1em'
                              }}
                            >
                              {event.year}
                            </span>
                          </div>
                        </div>

                        <Title3 className="font-bold mb-3">{event.title}</Title3>
                        <Body1 className="opacity-90 leading-relaxed">{event.description}</Body1>

                        {/* Animated bottom bar */}
                        <div
                          className="h-1 rounded-full mt-6 transition-all duration-500"
                          style={{
                            width: isSelected ? '100%' : '0%',
                            background: event.gradient,
                          }}
                        />
                      </Card>
                    </div>

                    {/* Center Icon */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 z-10 transition-all duration-500"
                      style={{
                        transform: isSelected
                          ? 'scale(1.3) rotate(360deg)'
                          : isHovered
                            ? 'scale(1.15) rotate(180deg)'
                            : 'scale(1) rotate(0deg)',
                      }}
                    >
                      <div
                        className="p-6 rounded-2xl backdrop-blur-xl border-4 cursor-pointer"
                        style={{
                          background: isSelected ? event.gradient : isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)',
                          borderColor: event.color,
                          boxShadow: isSelected
                            ? `0 0 40px ${event.color}, 0 0 80px ${event.color}80`
                            : `0 8px 24px ${event.color}40`,
                        }}
                        onClick={() => setSelectedEvent(index)}
                      >
                        <Icon
                          className={isSelected ? 'text-white' : ''}
                          style={{
                            fontSize: '32px',
                            color: isSelected ? undefined : event.color,
                            filter: isSelected ? 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' : 'none'
                          }}
                        />
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selected Event Large Display */}
          <Card
            className="mt-12 p-8 md:p-12 backdrop-blur-xl border text-center"
            style={{
              background: isDark
                ? `linear-gradient(135deg, ${timelineEvents[selectedEvent].color}30 0%, ${timelineEvents[selectedEvent].color}10 100%)`
                : `linear-gradient(135deg, ${timelineEvents[selectedEvent].color}20 0%, ${timelineEvents[selectedEvent].color}05 100%)`,
              borderColor: timelineEvents[selectedEvent].color,
              boxShadow: `0 20px 60px ${timelineEvents[selectedEvent].color}40`,
            }}
          >
            <div
              className="inline-block px-8 py-3 rounded-full mb-6 text-2xl font-bold text-white"
              style={{
                background: timelineEvents[selectedEvent].gradient,
                boxShadow: `0 8px 32px ${timelineEvents[selectedEvent].color}60`,
              }}
            >
              {timelineEvents[selectedEvent].year}
            </div>
            <Title1 className="mb-4 text-4xl md:text-5xl font-bold">{timelineEvents[selectedEvent].title}</Title1>
            <Body1 className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              {timelineEvents[selectedEvent].description}
            </Body1>
          </Card>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Title2 className="text-3xl md:text-4xl font-bold mb-4" style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>
              Meet Our Leadership
            </Title2>
            <div />

            <Body1 className="opacity-80">The passionate team driving MSC forward</Body1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => {
              const Icon = leader.icon;
              return (
                <Card
                  key={index}
                  className="p-6 backdrop-blur-xl border transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                  style={{
                    background: isDark
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(255, 255, 255, 0.9)',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                    style={{ background: `linear-gradient(135deg, ${leader.color} 0%, ${leader.color}CC 100%)` }}
                  >
                    <Icon className="text-white" style={{ fontSize: '32px' }} />
                  </div>
                  <Title3 className="text-center font-bold mb-2">{leader.name}</Title3>
                  <Body1 className="text-center mb-3" style={{ color: leader.color, fontWeight: 600 }}>
                    {leader.role}
                  </Body1>
                  <Body1 className="text-center text-sm opacity-80">
                    {leader.description}
                  </Body1>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Impact Stats */}
        <Card
          className="p-12 backdrop-blur-xl border"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(236, 72, 153, 0.15) 100%)'
              : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <div className="text-center mb-12">
            <Title2 className="text-3xl md:text-4xl font-bold" style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>
              Our Impact
            </Title2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-5xl md:text-6xl font-bold mb-3"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}CC 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {stat.value}
                </div>
                <Body1 className="opacity-80 font-semibold">{stat.label}</Body1>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
