import DashboardSidebar from "../../components/dashboard/DashboardSidebar"
import DashboardMain from '../../components/dashboard/DashboardMain'

import '../../assets/css/dashboard.css'

export default function Dashboard() {
  return (
    <div id="dashboard">
      <DashboardSidebar id="dashboardSidebar" />
      <DashboardMain id="dashboardMain" />
    </div>
  )
}
