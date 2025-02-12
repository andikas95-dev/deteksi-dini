import prisma from '@/lib/prisma';
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
  const childId = Number(searchParams.get('cid')) || undefined;

  try {
    const data = await prisma.diagnosa.findMany({
      where: {
        child_id: childId,
      },
      orderBy: {
        created_at: 'desc',
      }
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

// export async function POST(req: NextRequest) {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return NextResponse.json(
//       { message: 'Unauthenticated' },
//       { status: 401, statusText: 'Unauthorized' }
//     );
//   }

//   try {
//     const body = await req.json();
//     console.log("🚀 ~ POST ~ body:", body)
//     const data = await prisma.gejala.create({
//       data: body as any,
//     });
//     return NextResponse.json(
//       {
//         data,
//         status: 201,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: (error as Error).message },
//       { status: 500, statusText: 'Internal Server Error' }
//     );
//   }
// }
