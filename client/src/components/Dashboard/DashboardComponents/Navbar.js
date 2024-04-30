import React from 'react'
import { 
  BottomNavigation, 
  BottomNavigationAction,
} from '@mui/material';
import FeedIcon from '@mui/icons-material/Feed';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar() {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label="News" icon={<FeedIcon/>} />
      <BottomNavigationAction label="Profile" icon={<AccountCircleIcon/>} />
      <BottomNavigationAction label="Games" icon={<VideogameAssetIcon/>} />
      <BottomNavigationAction label="Settings" icon={<SettingsIcon/>} />
    </BottomNavigation>
  )
}