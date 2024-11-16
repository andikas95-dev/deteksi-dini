import React from 'react';
import { Avatar, AvatarFallback, AvatarIcon, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/lib/utils';
import Link from 'next/link';
import BabyIcon from '@/components/assets//icons/baby-icon';

interface CardDataAnakProps {
  data: {
    id: string;
    nama: string;
    tanggalLahir: string;
  };
}

function CardDataAnak({ data }: CardDataAnakProps) {
  return (
    <Link href={`/data-anak/${data.id}`}>
      <div className="hover:bg-primary/10 p-2">
        <div className="p-3 border rounded-lg shadow flex gap-5 items-center cursor-pointer">
          <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" alt="baby-icon" /> */}
            <AvatarIcon>
              <BabyIcon />
            </AvatarIcon>
            <AvatarFallback>{getInitials(data.nama)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold uppercase text-lg">{data.nama}</p>
            <p>Tanggal Lahir: {data.tanggalLahir}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardDataAnak;
