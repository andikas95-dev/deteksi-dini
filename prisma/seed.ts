import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'
import { dummyAnak } from './dummy/anak'
import { dummyGejala } from './dummy/gejala'

const prisma = new PrismaClient()

async function main() {
  const password = await hash('test', 12)
  await prisma.users.upsert({
    where: { email: 'andika@gmail.com' },
    update: {},
    create: {
      email: 'andika@gmail.com',
      name: 'Andika',
      password,
      role: 'admin' // or any appropriate role value
    }
  })
  // await prisma.users.upsert({
  //   where: { email: 'user@gmail.com' },
  //   update: {},
  //   create: {
  //     email: 'user@gmail.com',
  //     name: 'user',
  //     password,
  //     role: 'user' // or any appropriate role value
  //   }
  // })
  // const user = await prisma.users.upsert({
  //   where: { email: 'andika@gmail.com' },
  //   update: {},
  //   create: {
  //     email: 'andika@gmail.com',
  //     name: 'Andika',
  //     password,
  //     role: 'admin' // or any appropriate role value
  //   }
  // })

  await prisma.users.createMany({
    data: [
      {
        email: '1@mail.com',
        name: '1',
        password,
        role: 'user'
      },
      {
        email: '2@mail.com',
        name: '2',
        password,
        role: 'user'
      },
    ]
  })

  // console.log({ user })

  await prisma.gejala.createMany({
    data: dummyGejala
  })

  // await prisma.penyakit.create({
  //   data: {
  //     penyakit_id: 'P001',
  //     nama_penyakit: 'Depresi',
  //     deskripsi: 'Test Deskripsi'
  //   }
  // })

  await prisma.childs.createMany({
    data: dummyAnak
  })


}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });