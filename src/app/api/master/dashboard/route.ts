import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
) {
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

  try {
    const total_user = await prisma.users.count()
    const total_pasien = await prisma.childs.count()
    const total_gejala = await prisma.gejala.count()
    const total_riwayat = await prisma.diagnosa.count()
    // return NextResponse.json(
    //   {
    //     data,
    //     status: 200,
    //   },
    //   { status: 200 }
    // );
    return NextResponse.json({
      total_user,
      total_pasien,
      total_gejala,
      total_riwayat
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500, statusText: 'Internal Server Error' }
    );
  }
}