'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { locbe } from '@/lib/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function Dasboard() {

  const { data: dasboardInfo, isLoading } = useQuery({
    queryKey: ['Admin Dashboard Info'],
    queryFn: async () => {
      const res = await locbe.get('/master/dashboard');

      return res.data;
    },
    // enabled: !!session?.data?.user?.id,
  });
  console.log("🚀 ~ Dasboard ~ dasboardInfo:", dasboardInfo)

  return (
    <div className='min-h-[88dvh]'>
      <div className='grid grid-cols-2 gap-3'>
      <Card>
        <CardHeader>
          <CardTitle>Total User</CardTitle>
        </CardHeader>
        <CardContent>
          {new Intl.NumberFormat('id-ID').format(dasboardInfo?.total_user || 0)}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Pasien Anak</CardTitle>
        </CardHeader>
        <CardContent>
        {new Intl.NumberFormat('id-ID').format(dasboardInfo?.total_pasien || 0)}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Basis Pengetahuan</CardTitle>
        </CardHeader>
        <CardContent>
        {new Intl.NumberFormat('id-ID').format(dasboardInfo?.total_gejala || 0)}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Pemeriksaan</CardTitle>
        </CardHeader>
        <CardContent>
        {new Intl.NumberFormat('id-ID').format(dasboardInfo?.total_riwayat || 0)}
        </CardContent>
      </Card>
      </div>
    </div>
  )
}

export default Dasboard