import { createFileRoute } from '@tanstack/react-router'
import { GameSearch } from '@/features/game-search'

export const Route = createFileRoute('/_authenticated/search/')({
  component: GameSearch,
})