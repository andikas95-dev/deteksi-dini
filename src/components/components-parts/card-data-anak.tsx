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

export interface CardDataAnakProps {
  data?: {
    id: number;
    user_id: number;
    nama_anak: string;
    tanggal_lahir: string;
    berat_badan: number;
    tinggi_badan: number;
  } | null;
}

function CardDataAnak({ data }: CardDataAnakProps) {
  return (
    <div className="hover:bg-primary/10 p-2">
      <div className="p-3 border rounded-lg shadow flex gap-5 items-center cursor-pointer">
        <Avatar>
          {/* <AvatarImage src="https://github.com/shadcn.png" alt="baby-icon" /> */}
          <AvatarIcon>
            <BabyIcon />
          </AvatarIcon>
          <AvatarFallback>{data ? getInitials(data.nama_anak) : ''}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold uppercase text-lg">{data ? data.nama_anak : ''}</p>
          <p>Tanggal Lahir: {data ? format(data.tanggal_lahir, 'dd MMM yyyy') : ''}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDataAnak;
