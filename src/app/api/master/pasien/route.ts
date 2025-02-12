import { authOptions } from '@/lib/authOptions';
import prisma from '@/lib/prisma';
import { hash } from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { NextResponse, type NextRequest } from 'next/server';

// export async function authMiddleware() {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return NextResponse.json({ message: 'Unauthenticated' }, { status: 401, statusText: 'Unauthorized' });
//   }

//   return true

//   // switch (req.method) {
//   //   case 'GET':
//   //     return handleGet(req, res);
//   //   // case 'POST':
//   //   //   return handlePost(req, res);
//   //   // case 'DELETE':
//   //   //   return handleDelete(req, res);
//   //   // case 'PATCH':
//   //   //   return handlePatch(req, res);
//   //   default:
//   //     return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
//   // }
// }

type ResponseData = {
  message: string;
};

export async function GET() {
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
    const res = await prisma.childs.findMany({
      include: {
        Users: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
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

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500, statusText: 'Internal Server Error' }
    );
  }
}

export async function POST(req: NextRequest) {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   return NextResponse.json(
  //     { message: 'Unauthenticated' },
  //     { status: 401, statusText: 'Unauthorized' }
  //   );
  // }

  try {
    const body = await req.json();
    console.log("🚀 ~ POST ~ body POST PASIEN:", body)
    const res = await prisma.childs.create({
      data: {
        ...body,
        nama_anak: body.nama_anak,
        user_id: Number(body.user_id),
        tanggal_lahir: new Date(body.tanggal_lahir),
        createdAt: new Date(new Date().setFullYear(new Date().getFullYear())),
        updatedAt: new Date(new Date().setFullYear(new Date().getFullYear())),
      },
    });

    return NextResponse.json(
      {
        res,
        status: 201,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 400, statusText: 'Wrong Insert Data' }
    );
  }
}
