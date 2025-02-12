'use client';
import { Roboto } from 'next/font/google';
import Sidebar from '@/components/customs/sidebar';
import useIsCollapsed from '@/helpers/hooks/useIsCollapsed';
import { cn } from '@/lib/utils';
import { signOut, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
  const session: any = useSession({
    required: true,
    onUnauthenticated() {
      // Redirect to /login
      // return {redirect: '/login'}
      console.log('Redirect to /login');
      return {
        redirect: '/login',
      };
    },
  });
  const router = useRouter();

  const [isCollapsed, setIsCollapsed] = useIsCollapsed();

  useEffect(() => {
    if (session?.data !== undefined && session?.status === 'authenticated') {
      if (session?.data?.user?.role !== 'admin') {
        router.replace('/');
      }
    }
  }, [router, session]);

  if (session?.data?.user?.role !== 'admin') {
    return null;
  }

  return (
    <>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div
        className={cn([
          'bg-white p-3 rounded-lg flex justify-end',
          isCollapsed ? 'pl-14' : 'pl-64',
        ])}
      >
        <div className="pr-5 ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>DK</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem> */}
              <DropdownMenuItem
                onClick={() =>
                  signOut({
                    callbackUrl: '/', // Redirect to this URL after sign out
                  })
                }
              >
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <main
        id="content"
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${
          isCollapsed ? 'md:ml-14' : 'md:ml-64'
        } h-full`}
      >
        <div className="m-5 bg-white p-3 rounded-lg">{children}</div>
      </main>
    </>
  );
}
