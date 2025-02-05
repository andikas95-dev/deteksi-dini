import { detail_diagnosa } from './../../../../../../node_modules/.prisma/client/index.d';
import { authOptions } from '@/lib/authOptions';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   return NextResponse.json(
  //     { message: 'Unauthenticated' },
  //     { status: 401, statusText: 'Unauthorized' }
  //   );
  // }

  try {
    // const body = await req.json();
    const data = await prisma.diagnosa.findFirst({
      where: {
        id: Number(params.id),
      },
      include: {
        DetailDiagnosa: {
          select: {
            cf_pakar: true,
            cf_user: true,
            cf_combined: true,
            Gejala: {
              select: {
                nama_gejala: true,
              },
            },
          },
        },
      },
    });
    return NextResponse.json(
      {
        data,
        status: 200,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500, statusText: 'Internal Server Error' }
    );
  }
}
