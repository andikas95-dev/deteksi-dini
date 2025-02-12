import { authOptions } from '@/lib/authOptions';
import prisma from '@/lib/prisma';
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
  message: string
}

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
    const data = await prisma.gejala.findMany();
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
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   return NextResponse.json(
  //     { message: 'Unauthenticated' },
  //     { status: 401, statusText: 'Unauthorized' }
  //   );
  // }

  try {
    const body = await req.json();
    const data = await prisma.gejala.create({
      data: {
        ...body,
        gejala_id: "GRandom"
      } as any,
    });

    const updateData = await prisma.gejala.update({
      data: {
        gejala_id: `G${data.id.toString()}`,
      },
      where: {
        id: data.id,
      }
    })

    return NextResponse.json(
      {
        updateData,
        status: 201,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500, statusText: 'Internal Server Error' }
    );
  }
}
