'use client'
import { useSession } from "next-auth/react"

function Dashboard() {

  const session = useSession({
    required: true,
    onUnauthenticated() {
      // Redirect to /login
      // return {redirect: '/login'}
      console.log("Redirect to /login")
    },
  })
  console.log("🚀 ~ Dashboard ~ status:", session)

  return (
    <div>Halaman Dashboard Admin</div>
  )
}

export default Dashboard