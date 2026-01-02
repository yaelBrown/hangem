import DashboardSidebar from "../../components/dashboard/DashboardSidebar"
import DashboardMain from '../../components/dashboard/DashboardMain'

import './dashboard.css'

export default function Dashboard() {
  return (
    <div id="dashboard">
      <DashboardSidebar/>
      <DashboardMain/>
    </div>
  )
}
