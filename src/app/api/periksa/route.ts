import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

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
    // console.log("🚀 ~ POST ~ body:", body)
    const newDataGejala = body.gejala.map((item: any) => {
      return {
        gejala_id: item.gejala_id,
        cf_pakar: Number(item.cf_pakar),
        cf_user: Number(item.cf_user),
        cf_combined: Number(item.cf_pakar) * Number(item.cf_user),
      }
    })

    const cfRes = newDataGejala.reduce((acc: number, item: any, idx: number ) => {
      if(idx === 0){
        return item.cf_combined
      }
      return acc + item.cf_combined * (1 - acc)
    }, 0)

    const cfResPercent = cfRes * 100

    const transRes = await prisma.$transaction(async (pr) => {
      const diag = await pr.diagnosa.create({
        data: {
          child_id: body.data_anak.id,
          cf_result: cfRes,
          cf_result_percentage: cfResPercent,
        }
      })
      // console.log("🚀 ~ trx ~ diag:", diag)

      if(!diag.id){
        throw new Error(`Gagal`)
      }

      const detailDiag = await pr.detail_diagnosa.createMany({
        data: newDataGejala.map((item: any) => ({
          ...item,
          diagnosa_id: diag.id,
        }))
      })
      console.log("🚀 ~ transRes ~ detailDiag:", detailDiag)

      return diag
    })



    return NextResponse.json(
      {
        data: transRes,
        message: "Berhasil",
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