'use client';
import HeroBanner from '@/components/assets/hero_banner.png';
import { ContactIcon } from '@/components/assets/icons';
import { LogoDeteksiDiniPrimaryBlack } from '@/components/assets/icons/logo-deteksidini';
import InstallPrompt from '@/components/pwa/install-prompt';
import PushNotificationManager from '@/components/pwa/push-notification-manager';
import HomePageMenu from '@/components/shared-components/home-page-menu';
import LayoutRoot from '@/components/shared-components/layout-root';
import { Button } from '@/components/ui/button';
import { useIsFetching } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';

interface ExtendedUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string | null;
}
interface ExtendedSession extends Session {
  user?: ExtendedUser;
}
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createElement, useEffect } from 'react';
import { HiChevronRight } from 'react-icons/hi2';

function Home() {

  const session = useSession() as { data: ExtendedSession | null };
  const router = useRouter()

  useEffect(() => {
    if(session?.data?.user?.role === 'admin'){
      router.push('/ap/dashboard')
    }
  },[session, router])


  return (
    <>
      {/* <PushNotificationManager />
      <InstallPrompt /> */}
      <LayoutRoot>
        <div className="h-[50rem]">
          <section>
            <div className="relative">
              <div aria-hidden className="select-none">
                <Image src={HeroBanner} alt="hero" height={288} width={640} />
              </div>
              <div className="flex flex-col absolute top-0 left-0 w-full h-full p-4">
                <div className="flex flex-col flex-1 items-start justify-between">
                  <LogoDeteksiDiniPrimaryBlack className="h-8 md:h-10" />
                  <div className="w-[60%] sm:w-[55%] space-y-1">
                    <h5 className="text-primary text-lg sm:text-2xl">
                      Deteksi<span className="font-semibold">Dini</span>
                    </h5>
                    <p className="text-xs sm:text-sm">
                      Inisiatif orang tua baru untuk memantau kesehatan anak dan
                      menjauhkannya dari kondisi Stunting.
                    </p>
                  </div>
                </div>
              </div>
              {/* <Image
            className="w-full"
            src="https://placehold.co/600x400?text=Gambar+Pembuka"
            alt="hero"
            width={600}
            height={400}
          />
          <Card className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 w-3/4">
            <CardContent className="py-3 pl-0">
              <div className="flex flex-row items-center gap-3">
                <Image
                  src="https://placehold.co/200x200?text=Gambar+Pembuka"
                  alt="hero"
                  width={80}
                  height={80}
                />
                <h3 className="text-xl font-bold">
                  Cek Kesehatan Anak Anda Sekarang
                </h3>
              </div>
            </CardContent>
          </Card> */}
            </div>
          </section>
          <div className="px-4 py-6 text-center">
            <h2 className="text-lg sm:text-xl font-semibold sm:mx-6">
              Cek Sekarang Apakah Anak Anda sedang dalam kondisi Stunting
            </h2>
            <Link href="/provinces" passHref>
              <Button className="mt-4 block rounded-full" size="lg" fullWidth>
                Telusuri sekarang
              </Button>
            </Link>
          </div>

          <div className="rounded-sm px-4">
            <div className="flex flex-row relative py-5 px-4 border-gray-100 border-2 rounded-lg justify-between">
              <div className="flex flex-row items-center">
                <div
                  aria-hidden
                  className="flex flex-none items-center justify-center w-12 h-12 bg-blue-50 rounded-full"
                >
                  {createElement(ContactIcon, {
                    className: 'w-6 h-6 text-primary',
                  })}
                </div>
                <div className="ml-4 space-y-1">
                  <h3 className="text-base leading-5 font-semibold">
                    <Link href="/kontak-darurat" className="helper-link-cover">
                      Kontak Darurat
                    </Link>
                  </h3>
                  <p className="text-sm leading-4 text-gray-500">
                    Hubungi kontak darurat terdekat jika terjadi sesuatu pada
                    anak
                  </p>
                </div>
              </div>
              <div
                aria-hidden
                className="flex flex-none items-center justify-center ml-2"
              >
                <HiChevronRight className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="p-4">
            <HomePageMenu />
          </div>
        </div>
      </LayoutRoot>
    </>
  );
}

export default Home;

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
