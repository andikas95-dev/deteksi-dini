'use client';
import BabyIcon from '@/components/assets/icons/baby-icon';
import LayoutRoot from '@/components/shared-components/layout-root';
import { Avatar, AvatarIcon } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { signOut, useSession } from 'next-auth/react';
import { HiMiniUserCircle } from 'react-icons/hi2';

function Profil() {
  const session = useSession()
  console.log("🚀 ~ Profil ~ session:", session)

  return (
    <LayoutRoot className="px-4 min-h-screen">
      <h3 className="mt-5 text-2xl">Profil</h3>
      <Separator className="my-3" />
      {/* <FormPasien
        status="create"
        onSubmitDataAnak={(data) => mutateDataAnak(data)}
        default_tanggal_lahir={{
          from: new Date(),
          to: new Date(),
        }}
      /> */}
      <div className="py-8">
        <Avatar className="h-48 w-48 mx-auto">
          <AvatarIcon>
            <HiMiniUserCircle className='text-[12rem] text-primary' />
            {/* <BabyIcon /> */}
          </AvatarIcon>
        </Avatar>
      </div>
      <h3 className='mb-5'>Halo, {session?.data?.user?.name}</h3>
      <Button
        className="w-full"
        onClick={() =>
          signOut({
            callbackUrl: '/', // Redirect to this URL after sign out
          })
        }
      >
        Sign Out
      </Button>
    </LayoutRoot>
  );
}

export default Profil;
