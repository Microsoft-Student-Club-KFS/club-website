'use client';

import { Title1, Title2, Body1, Card, Button } from '@fluentui/react-components';
import { useTheme } from '@/app/providers';
import { scrapedHome } from '@/lib/content/scraped';
import { Chat24Regular, Mail24Regular } from '@fluentui/react-icons';

export default function ContactPage() {
  const { isDark } = useTheme();

  return (
    <div className='py-16 md:py-24 relative overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20' style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' }} />
        <div className='absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20' style={{ background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' }} />
      </div>

      <div className='max-w-6xl mx-auto px-6 relative z-10'>
        <div className='text-center mb-12'>
          <div className='inline-block backdrop-blur-xl border rounded-3xl px-12 py-6 mb-6' style={{
            background: isDark ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)' : 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
            borderColor: isDark ? 'rgba(96, 165, 250, 0.5)' : 'rgba(59, 130, 246, 0.5)',
            boxShadow: '0 8px 32px rgba(59, 130, 246, 0.4)',
          }}>
            <Title2 className='text-3xl md:text-4xl font-bold' style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>CONTACT US</Title2>
          </div>
          <div />

          <Body1 className='text-lg opacity-80 max-w-2xl mx-auto'>Get in touch with us</Body1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          {/* WhatsApp Direct Contact */}
          <Card className='p-8 backdrop-blur-xl border transition-all duration-300 hover:scale-105' style={{
            background: isDark ? 'linear-gradient(135deg, rgba(37, 211, 102, 0.15) 0%, rgba(37, 211, 102, 0.05) 100%)' : 'linear-gradient(135deg, rgba(37, 211, 102, 0.1) 0%, rgba(37, 211, 102, 0.05) 100%)',
            borderColor: 'rgba(37, 211, 102, 0.3)',
          }}>
            <div className='text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full mb-4' style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
              }}>
                <Chat24Regular style={{ fontSize: '32px', color: 'white' }} />
              </div>
              <Title2 className='mb-3'>Chat on WhatsApp</Title2>
              <Body1 className='opacity-80 mb-6'>Get instant responses to your questions</Body1>
              <a href={scrapedHome.socials.whatsappDirect} target="_blank" rel="noopener noreferrer">
                <Button
                  appearance='primary'
                  size='large'
                  style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    border: 'none',
                    boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)',
                  }}
                >
                  Start Chat
                </Button>
              </a>
            </div>
          </Card>

          {/* Email Contact */}
          <Card className='p-8 backdrop-blur-xl border transition-all duration-300 hover:scale-105' style={{
            background: isDark ? 'linear-gradient(135deg, rgba(234, 67, 53, 0.15) 0%, rgba(234, 67, 53, 0.05) 100%)' : 'linear-gradient(135deg, rgba(234, 67, 53, 0.1) 0%, rgba(234, 67, 53, 0.05) 100%)',
            borderColor: 'rgba(234, 67, 53, 0.3)',
          }}>
            <div className='text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full mb-4' style={{
                background: 'linear-gradient(135deg, #EA4335 0%, #C5221F 100%)',
                boxShadow: '0 8px 24px rgba(234, 67, 53, 0.4)',
              }}>
                <Mail24Regular style={{ fontSize: '32px', color: 'white' }} />
              </div>
              <Title2 className='mb-3'>Send us an Email</Title2>
              <Body1 className='opacity-80 mb-6'>For detailed inquiries and official communication</Body1>
              <a href={scrapedHome.socials.email}>
                <Button
                  appearance='primary'
                  size='large'
                  style={{
                    background: 'linear-gradient(135deg, #EA4335 0%, #C5221F 100%)',
                    border: 'none',
                    boxShadow: '0 4px 16px rgba(234, 67, 53, 0.4)',
                  }}
                >
                  Send Email
                </Button>
              </a>
            </div>
          </Card>
        </div>

        <Card className='p-12 text-center backdrop-blur-xl border' style={{
          background: isDark ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)' : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          borderColor: isDark ? 'rgba(96, 165, 250, 0.3)' : 'rgba(59, 130, 246, 0.3)',
        }}>
          <Title1 className='mb-4'>Join Our Community</Title1>
          <Body1 className='opacity-70 mb-4'>Connect with us on social media or join our WhatsApp community for updates and discussions</Body1>
          <a href={scrapedHome.socials.whatsappCommunity} target="_blank" rel="noopener noreferrer">
            <Button
              appearance='outline'
              size='large'
              style={{
                borderColor: isDark ? 'rgba(96, 165, 250, 0.5)' : 'rgba(59, 130, 246, 0.5)',
                color: isDark ? '#60a5fa' : '#2563eb',
              }}
            >
              Join WhatsApp Community
            </Button>
          </a>
        </Card>
      </div>
    </div>
  );
}
