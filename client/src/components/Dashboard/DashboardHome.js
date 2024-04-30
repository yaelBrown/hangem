import { 
  useState,
} from 'react'
import { 
  BottomNavigation, 
  BottomNavigationAction,
  Container,
} from '@mui/material';
import FeedIcon from '@mui/icons-material/Feed';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import SettingsIcon from '@mui/icons-material/Settings';

import DashboardNews from './DashboardNews'
import DashboardGames from './DashboardGames'
import DashboardProfile from './DashboardProfile'
import DashboardSettings from './DashboardSettings'
import Head from '../layouts/LayoutComponents/Head';
import Footer from '../layouts/LayoutComponents/Footer';

const initialstate = {
  dashboard: {
    currentPage: "home"
  }
}

export default function DashboardHome() {
  const [state, setState] = useState(initialstate)

  const changeDashboardView = (name) => {
    const newState = {...state}
    newState.dashboard.currentPage = name 
    setState(newState)
  }

  const displayDashboardView = () => {
    switch(state.dashboard.currentPage) {
      case "News":
        return (<DashboardNews/>)
      case "Games":
        return (<DashboardGames/>)
      case "Profile":
        return (<DashboardProfile/>)
      case "Settings":
        return (<DashboardSettings/>)
      default: 
        return (<DashboardNews/>)
    }
  }
  
  return (
    <Container>
      <Head/>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="News" icon={<FeedIcon/>} onClick={() => changeDashboardView("News")}/>
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon/>} onClick={() => changeDashboardView("Profile")}/>
        <BottomNavigationAction label="Games" icon={<VideogameAssetIcon/>} onClick={() => changeDashboardView("Games")}/>
        <BottomNavigationAction label="Settings" icon={<SettingsIcon/>} onClick={() => changeDashboardView("Settings")}/>
      </BottomNavigation>

      {displayDashboardView()}

      <Footer/>
    </Container>
    
  )
}
