import { SessionServerProps } from "@/helpers/types/serverSession";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
    const session = (await getServerSession(
      authOptions
    )) as SessionServerProps | null;

  // if (!session) {
  //   return NextResponse.json(
  //     { message: 'Unauthenticated' },
  //     { status: 401, statusText: 'Unauthorized' }
  //   );
  // }

  // Do whatever you want
  // return NextResponse.json({ message: 'Hello World' }, { status: 200 });
  // return NextResponse.json({ authenticated: !!session });

  // const searchParams = req.nextUrl.searchParams;
  // const queryUserId = Number(searchParams.get('usid')) || undefined;

  try {
    const data = await prisma.childs.findFirst({
      where: {
        id: Number(params.id),
        user_id: Number(session?.user?.id),
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

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const { nama_anak, tanggal_lahir } = body;

  try {
    const res = await prisma.childs.update({
      where: {
        id: Number(params.id),
      },
      data: {
        nama_anak,
        tanggal_lahir,
        updatedAt: new Date(new Date().setFullYear(new Date().getFullYear())),
      },
    });

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500, statusText: 'Internal Server Error' }
    );
  }
}