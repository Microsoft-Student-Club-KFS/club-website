'use client';

import { Title1, Title2, Body1, Card } from '@fluentui/react-components';
import { useTheme } from '@/app/providers';

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

        <Card className='p-12 text-center backdrop-blur-xl border' style={{
          background: isDark ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)' : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          borderColor: isDark ? 'rgba(96, 165, 250, 0.3)' : 'rgba(59, 130, 246, 0.3)',
        }}>
          <Title1 className='mb-4'>Coming Soon</Title1>
          <Body1 className='opacity-70'>Contact us content will be available soon.</Body1>
        </Card>
      </div>
    </div>
  );
}
