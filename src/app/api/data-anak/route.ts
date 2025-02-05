import prisma from '@/lib/prisma';
import { NextApiRequest } from 'next';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   return NextResponse.json(
  //     { message: 'Unauthenticated' },
  //     { status: 401, statusText: 'Unauthorized' }
  //   );
  // }

  // Do whatever you want
  // return NextResponse.json({ message: 'Hello World' }, { status: 200 });
  // return NextResponse.json({ authenticated: !!session });

  const searchParams = req.nextUrl.searchParams;
  const queryUserId = Number(searchParams.get('usid')) || undefined;

  try {
    const data = await prisma.childs.findMany({
      where: {
        user_id: queryUserId,
      },
      orderBy: [
        {
          tanggal_lahir: 'desc',
        }
      ]
    });
    // return NextResponse.json(
    //   {
    //     data,
    //     status: 200,
    //   },
    //   { status: 200 }
    // );
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500, statusText: 'Internal Server Error' }
    );
  }
}

export async function POST(req: NextRequest) {
  // const token = await getToken({ req, secret: process.env.SECRET });
  // const user_id = token?.id;

  const body = await req.json();
  const { nama_anak, tanggal_lahir, usid } = body;

  try {
    const data = await prisma.childs.create({
      data: {
        user_id: Number(usid),
        nama_anak,
        // berat_badan: 0,
        // tinggi_badan: 0,
        tanggal_lahir: new Date(tanggal_lahir),
        createdAt: new Date(new Date().setFullYear(new Date().getFullYear())),
        updatedAt: new Date(new Date().setFullYear(new Date().getFullYear())),
      },
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500, statusText: 'Internal Server Error' }
    );
  }
}
