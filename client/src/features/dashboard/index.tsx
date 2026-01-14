// Used for dashboard home
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'
import { Analytics } from './components/analytics'
import { RecentSales } from './components/recent-sales'
import { News } from './components/news'
import { IconUsersIcon } from '@/assets/icons/icon-usersIcon'
import { IconCreditCard } from '@/assets/icons/icon-creditCard'
import { IconSquareWave } from '@/assets/icons/icon-squareWave'
import { IconDollarSign } from '@/assets/icons/icon-dollarSign'
import SampleNewsData from './sample_data/sample_news.json'
import regionEnum from '../game-search/util/region-enum.json'

export function Dashboard() {
  // State for holding information to pass to the dashboard
  const initialState = {
    // dashboardNews: [],
    dashboardNews: SampleNewsData, // Used for dev purposes
    dashboardTotalPlayers: 0,
    dashboardGamesActive: 0,
    dashboardGamesActivePlayers: 0,
    userSol: 1.4,
    userPrevGames: 0,
    userPrevGamesWon: 0,
    cryptoSolUsd: 143.66962931373857
  }

  const [state, setState] = useState(initialState)

  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <div className='ms-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Main ===== */}
      <Main>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
        </div>
        <Tabs
          orientation='vertical'
          defaultValue='overview'
          className='space-y-4'
        >
          <div className='w-full overflow-x-auto pb-2'>
          </div>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>

              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Total SOL
                  </CardTitle>
                  <IconDollarSign/>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>
                    {(state.userSol).toFixed(3)}
                  </div>
                  <p className='text-xs text-muted-foreground'>
                    ${(state.userSol * state.cryptoSolUsd).toFixed(2)} USD
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Games Played
                  </CardTitle>
                  <IconUsersIcon/>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>{state.userPrevGames}</div>
                  <p className='text-xs text-muted-foreground'>
                    {state.userPrevGamesWon} game(s) won
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Games Active</CardTitle>
                  <IconCreditCard/>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>{state.dashboardGamesActive}</div>
                  <p className='text-xs text-muted-foreground'>
                    Current game(s) active on the network.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Active Players
                  </CardTitle>
                  <IconSquareWave/>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>{state.dashboardGamesActivePlayers}</div>
                  <p className='text-xs text-muted-foreground'>
                    Current active player(s) on the network
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
              <Card className='col-span-1 lg:col-span-4'>
                <CardHeader>
                  <CardTitle>News</CardTitle>
                </CardHeader>
                <CardContent className='ps-2'>
                  <News items={state.dashboardNews} />
                </CardContent>
              </Card>

              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>

          </TabsContent>

          {/* Replace with previous games component */}
          <TabsContent value='analytics' className='space-y-4'>
            <Analytics />
          </TabsContent>

        </Tabs>
      </Main>
    </>
  )
}

const topNav = [
  {
    title: 'Overview',
    href: 'dashboard/overview',
    isActive: true,
    disabled: false,
  },
  {
    title: 'Customers',
    href: 'dashboard/customers',
    isActive: false,
    disabled: true,
  },
  {
    title: 'Products',
    href: 'dashboard/products',
    isActive: false,
    disabled: true,
  },
  {
    title: 'Settings',
    href: 'dashboard/settings',
    isActive: false,
    disabled: true,
  },
]
