import {
  Construction,
  LayoutDashboard,
  Monitor,
  Bug,
  ListTodo,
  FileX,
  HelpCircle,
  Lock,
  Bell,
  Package,
  Palette,
  ServerOff,
  Settings,
  Wrench,
  UserCog,
  UserX,
  Users,
  MessagesSquare,
  ShieldCheck,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
} from 'lucide-react'
import { ClerkLogo } from '@/assets/clerk-logo'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'user',
    email: 'user_email@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Home',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Game',
          url: '/game',
          icon: Package,
        },
        {
          title: 'Game Search',
          url: '/search',
          icon: ListTodo,
        },
        {
          title: 'Chats',
          url: '/chats',
          badge: '0',
          icon: MessagesSquare,
        }
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: Settings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: UserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: Wrench,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: Palette,
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
              icon: Bell,
            },
            {
              title: 'Display',
              url: '/settings/display',
              icon: Monitor,
            },
          ],
        },
         {
          title: 'Report',
          url: '/report',
          icon: Bug,
        },
        {
          title: 'Help Center',
          url: '/help-center',
          icon: HelpCircle,
        },
      ],
    },
  ],
}
