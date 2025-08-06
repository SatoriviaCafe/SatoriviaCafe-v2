'use client';

import dynamic from 'next/dynamic';

// 關閉 SSR，避免 Hydration 錯誤
const StarsBackground = dynamic(() => import('./StarsBackground'), {
  ssr: false,
  loading: () => <div className='fixed inset-0 bg-black' />
});

export default function BackgroundWrapper() {
  return <StarsBackground />;
}
