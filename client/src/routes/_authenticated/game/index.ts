import { createFileRoute } from '@tanstack/react-router'
import { Game } from '@/features/game'

export const Route = createFileRoute('/_authenticated/game/')({
  component: Game,
})