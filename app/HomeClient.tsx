'use client';

import { Title1, Title2, Title3, Body1, Button, Card } from '@fluentui/react-components';
import { ArrowRight24Regular, Book24Regular, People24Regular, Lightbulb24Regular, Calendar24Regular, Location24Regular } from '@fluentui/react-icons';
import Link from 'next/link';
import { useTheme } from '@/app/providers';
import Image from 'next/image';
import { scrapedHome } from '@/lib/content/scraped';

interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  location: string;
  image: string | null;
}

interface HomeClientProps {
  recentEvents: Event[];
}

export function HomeClient({ recentEvents }: HomeClientProps) {
  const { isDark } = useTheme();
  // Subscription functionality disabled for static site
  const recentEventsStatic: any[] = [];

  return (
    <div>
      {/* Hero Section with Background */}
      <section className='relative py-20 md:py-32 overflow-hidden min-h-[600px]'>
        {/* Background Image with Gradient Overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/people.png'
            alt='MSC Community'
            fill
            className='object-cover object-center'
            priority
            quality={90}
          />
          {/* Gradient overlay - fades from left (solid) to right (transparent) */}
          <div
            className='absolute inset-0'
            style={{
              background: isDark
                ? 'linear-gradient(to right, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 40%, rgba(0, 0, 0, 0.4) 70%, transparent 100%)'
                : 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 40%, rgba(255, 255, 255, 0.4) 70%, transparent 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className='relative z-10 max-w-7xl mx-auto px-6'>
          <div className='max-w-3xl text-left'>
            {/* Logo and Title Section */}
            <div className='flex items-start gap-6 mb-10 flex-wrap md:flex-nowrap'>
              <div className='flex-shrink-0'>
                <Image
                  src='/images/logo.png'
                  alt='MSC Logo'
                  width={150}
                  height={150}
                  className='w-32 h-32 md:w-40 md:h-40 object-contain' priority
                />
              </div>
              <div className='flex flex-col gap-3'>
                <Title1 className='text-3xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                  {scrapedHome.siteTitle}
                </Title1>
                <Title2 className='text-xl md:text-2xl lg:text-3xl opacity-90'>
                  {scrapedHome.tagline}
                </Title2>
              </div>
            </div>

            <Body1 className='text-lg md:text-xl opacity-90 max-w-2xl leading-relaxed'>
              {scrapedHome.callToAction}
            </Body1>
            <div className='flex flex-wrap gap-4 mt-12'>
              <Link href='#about'>
                <button
                  className='group relative px-8 py-4 rounded-2xl text-base font-bold transition-all duration-300 hover:scale-105 overflow-hidden'
                  style={{
                    background: isDark
                      ? 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)'
                      : 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)',
                    color: 'white',
                    boxShadow: isDark
                      ? '0 8px 32px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(96, 165, 250, 0.2)'
                      : '0 8px 32px rgba(37, 99, 235, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2)',
                  }}
                >
                  {/* Animated glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)',
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
                    <ArrowRight24Regular className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>

              <Link href="/events">
                <button
                  className='group relative px-8 py-4 rounded-2xl text-base font-bold transition-all duration-300 hover:scale-105 backdrop-blur-md overflow-hidden'
                  style={{
                    background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
                    border: `2px solid ${isDark ? 'rgba(96, 165, 250, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
                    color: isDark ? '#60a5fa' : '#2563eb',
                    boxShadow: isDark
                      ? '0 4px 24px rgba(59, 130, 246, 0.2)'
                      : '0 4px 24px rgba(37, 99, 235, 0.2)',
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: isDark
                        ? 'radial-gradient(circle at center, rgba(96, 165, 250, 0.2) 0%, transparent 70%)'
                        : 'radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                    }}
                  />
                  <span className="relative z-10">Explore Events</span>
                </button>
              </Link>

              <a href="https://chat.whatsapp.com/DCT6ZhD7cP4DyANHrVLdhU" target="_blank" rel="noopener noreferrer">
                <button
                  className='group relative px-8 py-4 rounded-2xl text-base font-bold transition-all duration-300 hover:scale-105 overflow-hidden'
                  style={{
                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                    color: 'white',
                    boxShadow: '0 8px 32px rgba(34, 197, 94, 0.35)',
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">Join WhatsApp Community</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Glassy & Innovative Design */}
      <section id='about' className='py-16 md:py-24 relative overflow-hidden'>
        {/* Background gradient orbs */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div
            className='absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20'
            style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' }}
          />
          <div
            className='absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20'
            style={{ background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' }}
          />
        </div>

        <div className='max-w-6xl mx-auto px-6 relative z-10'>
          {/* Large Centered About Us Badge */}
          <div className='flex justify-center mb-12'>
            <div
              className='inline-block backdrop-blur-xl border rounded-3xl px-16 py-8'
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                  : 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                borderColor: isDark ? 'rgba(96, 165, 250, 0.5)' : 'rgba(59, 130, 246, 0.5)',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.4)',
              }}
            >
              <Title1 className='font-bold text-3xl md:text-5xl' style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}>
                ABOUT US
              </Title1>
            </div>
          </div>

          {/* Microsoft Student Club Content Rectangle */}
          <div className='mb-16'>
            <div
              className='backdrop-blur-xl border rounded-3xl p-12 md:p-16 text-left transition-all duration-500'
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(236, 72, 153, 0.15) 100%)'
                  : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.5)',
                boxShadow: isDark
                  ? '0 20px 60px rgba(0, 0, 0, 0.3)'
                  : '0 20px 60px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Title */}
              <Title1
                className='mb-8 text-4xl md:text-6xl font-bold'
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Microsoft Student Club - Kafr El-Shaikh University
              </Title1>
              <div className="h-4" />

              {/* Divider
              <div
                className='w-170 h-1 mt-1 mb-2 ml-2 rounded-full'
                style={{
                  background: isDark
                    ? 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)'
                    : 'linear-gradient(90deg, #2563eb 0%, #7c3aed 50%, #db2777 100%)',
                }}
              /> */}

              {/* Description */}
              <Body1 className='text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto'>
                A dynamic community of passionate students dedicated to learning, building, and sharing knowledge in technology.
                We foster innovation, collaboration, and leadership through hands-on experiences.
              </Body1>
            </div>
          </div>

          {/* Mission Cards - Clean Minimalist Design */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            {[
              {
                icon: <Book24Regular />,
                title: 'Learn',
                description: 'Access cutting-edge workshops, tutorials, and resources to master the latest technologies, tools, and best practices in software development and cloud computing.',
                color: '#3b82f6',
                glowColor: 'rgba(59, 130, 246, 0.4)'
              },
              {
                icon: <Lightbulb24Regular />,
                title: 'Innovate',
                description: 'Work on real-world projects, participate in hackathons and competitions, and bring your creative ideas to life with mentorship from industry professionals.',
                color: '#f59e0b',
                glowColor: 'rgba(245, 158, 11, 0.4)'
              },
              {
                icon: <People24Regular />,
                title: 'Connect',
                description: 'Network with fellow students, experienced mentors, industry leaders, and Microsoft professionals in our thriving community of tech enthusiasts.',
                color: '#10b981',
                glowColor: 'rgba(16, 185, 129, 0.4)'
              }
            ].map((mission, index) => (
              <div
                key={index}
                className='group relative p-10 rounded-3xl backdrop-blur-xl border transition-all duration-300 overflow-hidden'
                style={{
                  background: isDark
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(255, 255, 255, 0.9)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* Upper Solid Line */}
                <div
                  className='absolute top-0 left-0 right-0 h-1 transition-opacity duration-500'
                  style={{ background: mission.color }}
                />

                {/* Upper Glow Line */}
                <div
                  className='absolute -top-1 left-0 right-0 h-2 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                  style={{ background: mission.color, boxShadow: `0 0 20px ${mission.glowColor}` }}
                />

                {/* Lower Solid Line */}
                <div
                  className='absolute bottom-0 left-0 right-0 h-1 transition-opacity duration-500'
                  style={{ background: mission.color }}
                />

                {/* Lower Glow Line */}
                <div
                  className='absolute -bottom-1 left-0 right-0 h-2 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                  style={{ background: mission.color, boxShadow: `0 0 20px ${mission.glowColor}` }}
                />

                {/* Icon with Colored Path Trace */}
                <div className='relative mb-8 flex justify-center'>
                  {/* Outline version */}
                  <div
                    className='absolute transition-all duration-300 group-hover:scale-110'
                    style={{
                      fontSize: '80px',
                      color: mission.color,
                      filter: `blur(0.5px) drop-shadow(0 0 1px ${mission.color}) drop-shadow(0 0 2px ${mission.color})`,
                    }}
                  >
                    {mission.icon}
                  </div>
                  {/* Main icon slightly smaller to create traced effect */}
                  <div
                    className='relative transition-all duration-300 group-hover:scale-110'
                    style={{
                      fontSize: '76px',
                      color: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {mission.icon}
                  </div>
                </div>

                {/* Title - Whole Word on One Line */}
                <div className='mb-6 text-center'>
                  <div
                    className='text-4xl font-bold'
                    style={{
                      color: mission.color,
                      textShadow: `0 0 20px ${mission.glowColor}`,
                    }}
                  >
                    {mission.title}
                  </div>
                </div>

                {/* Description */}
                <Body1 className='opacity-80 text-center leading-relaxed'>
                  {mission.description}
                </Body1>
              </div>
            ))}
          </div>

          {/* Club Impact Stats - Ultra Glassy */}
          <div
            className='relative rounded-3xl p-8 md:p-12 backdrop-blur-xl border overflow-hidden'
            style={{
              background: isDark
                ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                : 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.5)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Animated gradient background */}
            <div
              className='absolute inset-0 opacity-30'
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradient 15s ease infinite',
              }}
            />

            <Title2 className='text-center mb-12 mt-10 relative z-10 text-3xl font-bold'>
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}>

                Our Impact
              </span>
            </Title2>
            <div className="h-4" />

            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10'>
              {[
                { number: '500+', label: 'Active Members' },
                { number: '50+', label: 'Events Hosted' },
                { number: '30+', label: 'Projects Built' },
                { number: '15+', label: 'Awards Won' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className='group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-110'
                  style={{
                    background: isDark
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(255, 255, 255, 0.6)',
                    borderColor: isDark
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  <Title1
                    className='mb-2 text-4xl font-bold'
                    style={{
                      background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {stat.number}
                  </Title1>
                  <Body1 className='opacity-90 font-medium'>{stat.label}</Body1>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add animation keyframes */}
        <style jsx>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </section>

      {/* Recent Activities Section */}
      <section className='py-16 md:py-24 relative overflow-hidden'>
        {/* Background gradient orbs */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div
            className='absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20'
            style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)' }}
          />
        </div>

        <div className='max-w-6xl mx-auto px-6 relative z-10'>
          {/* Section Header */}
          <div className='text-center mb-12'>
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
                RECENT ACTIVITIES
              </Title2>
            </div>
            <div />
            <Body1 className='text-lg opacity-80 max-w-2xl mx-auto'>
              Stay updated with our latest events and workshops
            </Body1>
          </div>

          {recentEvents.length === 0 ? (
            <Card
              className='p-12 text-center backdrop-blur-xl border'
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)'
                  : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.5)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Calendar24Regular className='mx-auto mb-4' style={{ fontSize: '48px', opacity: 0.6 }} />
              <Body1 className='text-lg opacity-80 mb-6'>
                No recent events yet. Check back soon for upcoming activities!
              </Body1>
              <Link href='/events'>
                <Button
                  appearance='primary'
                  size='large'
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    border: 'none',
                  }}
                >
                  Explore All Events
                </Button>
              </Link>
            </Card>
          ) : (
            <div className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {recentEvents.map(event => (
                  <Card
                    key={event.id}
                    className='p-6 backdrop-blur-xl border transition-all duration-300 hover:scale-105'
                    style={{
                      background: isDark
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'rgba(255, 255, 255, 0.9)',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.title}
                        className='w-full h-48 object-cover rounded-lg mb-4'
                      />
                    )}
                    <Title3 className='mb-3'>{event.title}</Title3>
                    <Body1 className='mb-4 opacity-80 line-clamp-2'>
                      {event.description}
                    </Body1>
                    <div className='flex items-center gap-2 mb-2 text-sm'>
                      <Calendar24Regular />
                      <Body1 className='text-sm'>
                        {new Date(event.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </Body1>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                      <Location24Regular />
                      <Body1 className='text-sm opacity-70'>{event.location}</Body1>
                    </div>
                  </Card>
                ))}
              </div>

              {/* View All Events Button */}
              <div className='text-center mt-8'>
                <Link href='/events'>
                  <Button
                    appearance='primary'
                    size='large'
                    icon={<ArrowRight24Regular />}
                    iconPosition='after'
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                      border: 'none',
                    }}
                  >
                    View All Events
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
