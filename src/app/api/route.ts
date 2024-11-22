import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET() {

  const session = await getServerSession(authOptions);

  // Do whatever you want
  // return NextResponse.json({ message: 'Hello World' }, { status: 200 });
  return NextResponse.json({ authenticated: !!session });
}
