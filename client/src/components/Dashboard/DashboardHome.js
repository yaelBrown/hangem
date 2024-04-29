import { useState } from 'react'

const initialstate = {
  dashboard: {
    currentPage: "home"
  }
}

export default function DashboardHome() {
  const [state, setState] = useState(initialstate)

  return (
    <div>DashboardHome</div>
  )
}
