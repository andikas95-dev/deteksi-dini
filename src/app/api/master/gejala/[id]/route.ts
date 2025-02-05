import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, {params}: {params: {id: string}}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: 'Unauthenticated' },
      { status: 401, statusText: 'Unauthorized' }
    );
  }

  try {
    const body = await req.json();
    const data = await prisma.gejala.update({
      where: { idx: Number(params.id) },
      data: body as any,
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

export async function DELETE(req: NextRequest, {params}: {params: {id: string}}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: 'Unauthenticated' },
      { status: 401, statusText: 'Unauthorized' }
    );
  }

  try {
    // const body = await req.json();
    const data = await prisma.gejala.delete({
      where: { idx: Number(params.id) },
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