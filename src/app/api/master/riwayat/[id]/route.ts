import { authOptions } from '@/lib/authOptions';
import prisma from '@/lib/prisma';
import { hash } from 'bcrypt';
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

  // Do whatever you want
  // return NextResponse.json({ message: 'Hello World' }, { status: 200 });
  // return NextResponse.json({ authenticated: !!session });

  try {
    const resDiagnosa = await prisma.diagnosa.findFirstOrThrow({
      where: {
        id: Number(params.id),
      },
    })
    const resChildInfo = await prisma.childs.findFirstOrThrow({
      where: {
        id: resDiagnosa.child_id,
      }
    })
    const resDetailDiagnosa = await prisma.detail_diagnosa.findMany({
      where: {
        diagnosa_id: Number(params.id),
      },
      include: {
        Gejala: true,
      }
    });
    // console.log("🚀 ~ resDetailDiagnosa:", resDetailDiagnosa)
    // return NextResponse.json(
    //   {
    //     data,
    //     status: 200,
    //   },
    //   { status: 200 }
    // );

    // const res = data.map((item) => ({
    //   id: item.id,
    //   name: item.name,
    //   email: item.email,
    //   role: item.role,
    // }))

    return NextResponse.json({
      info_anak: resChildInfo,
      diagnosa: resDiagnosa,
      detail_diagnosa: resDetailDiagnosa,
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500, statusText: 'Internal Server Error' }
    );
  }
}

// export async function PATCH(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return NextResponse.json(
//       { message: 'Unauthenticated' },
//       { status: 401, statusText: 'Unauthorized' }
//     );
//   }

//   try {
//     const body = await req.json();
//     const res = await prisma.childs.update({
//       where: { id: Number(params.id) },
//       data: {
//         ...body,
//         user_id: Number(body.user_id),
//         updatedAt: new Date(new Date().setFullYear(new Date().getFullYear())),
//       },
//     });
//     return NextResponse.json(res, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: (error as Error).message },
//       { status: 400, statusText: 'Internal Server Error' }
//     );
//   }
// }

// export async function DELETE(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return NextResponse.json(
//       { message: 'Unauthenticated' },
//       { status: 401, statusText: 'Unauthorized' }
//     );
//   }

//   try {
//     // const body = await req.json();
//     const data = await prisma.childs.delete({
//       where: { id: Number(params.id) },
//     });
//     return NextResponse.json(
//       {
//         data,
//         status: 200,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: (error as Error).message },
//       { status: 400, statusText: 'Internal Server Error' }
//     );
//   }
// }
