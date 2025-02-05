'use client';
import { Roboto } from 'next/font/google';
import Sidebar from '@/components/customs/sidebar';
import useIsCollapsed from '@/helpers/hooks/useIsCollapsed';
import { cn } from '@/lib/utils';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
});

// export const metadata: Metadata = {
//   title: 'deteksi dini',
//   description: 'Aplikasi untuk mendeteksi gejala stunting pada anak',
// };

export default function LayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed();
  return (
    <>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className={
        cn(['bg-white p-3 rounded-lg', isCollapsed ? 'pl-14' : 'pl-64'])
      }>
        <div className='pl-5'>
        test
        </div>
      </div>
      <main
        id="content"
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${
          isCollapsed ? 'md:ml-14' : 'md:ml-64'
        } h-full`}
      >
        <div className='m-5 bg-white p-3 rounded-lg'>
        {children}
        </div>
      </main>
    </>
  );
}
