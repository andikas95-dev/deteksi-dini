// 'use client'
// import { columns } from "@/components/customs/data-table/columns"
// import { DataTable } from "@/components/customs/data-table/data-table"
// import { tasks } from "@/components/customs/data-table/data/tasks"
// import { useSession } from "next-auth/react"

// function Dashboard() {

//   const session = useSession({
//     required: true,
//     onUnauthenticated() {
//       // Redirect to /login
//       // return {redirect: '/login'}
//       console.log("Redirect to /login")
//     },
//   })
//   console.log("🚀 ~ Dashboard ~ status:", session)

//   return (
//     <div className="m-5">
//       <DataTable
//       columns={columns}
//       data={tasks}
//       />
//     </div>
//   )
// }

// export default Dashboard

import Dashboard from '@/features/admin/ui/Dasboard'

export default Dashboard

