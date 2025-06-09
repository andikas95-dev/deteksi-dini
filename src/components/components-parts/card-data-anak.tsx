import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarIcon,
  AvatarImage,
} from '@/components/ui/avatar';
import { getInitials } from '@/lib/utils';
import Link from 'next/link';
import BabyIcon from '@/components/assets//icons/baby-icon';
import { format } from 'date-fns';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { ChildData } from '@/helpers/hooks/useRiwayatPeriksa';
import { Spinner } from '../ui/spinner';

export interface CardDataAnakProps {
  data?: ChildData | null;
}

function CardDataAnak({ data }: CardDataAnakProps) {
  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner show />
      </div>
    );
  }

  return (
    <Card className="hover:bg-primary/10 cursor-pointer my-3">
      <CardContent className="flex gap-5 items-center p-4">
        <Avatar>
          {/* <AvatarImage src="https://github.com/shadcn.png" alt="baby-icon" /> */}
          <AvatarIcon>
            <BabyIcon />
          </AvatarIcon>
          <AvatarFallback>
            {data ? getInitials(data.nama_anak) : ''}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold uppercase text-lg">
            {data ? data.nama_anak : ''}
          </p>
          <p>
            Tanggal Lahir:{' '}
            {data ? format(data.tanggal_lahir, 'dd MMM yyyy') : ''}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default CardDataAnak;
