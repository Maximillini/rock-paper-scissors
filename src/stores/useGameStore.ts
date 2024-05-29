import { create } from 'zustand'
import { Hand } from '../types/hands'

type GameStore = {
  playerHand: Hand | ''
  score: number
  increaseScore: () => void
  resetScore: () => void
  choosePlayerHand: (hand: Hand) => void
  clearHand: () => void
}

export const useGameStore = create<GameStore>((set) => ({
  playerHand: '',
  score: 0,
  increaseScore: () =>
    set((state) => {
      score: state.score + 1
    }),
  resetScore: () => set({ score: 0 }),
  choosePlayerHand: (hand: Hand) => set({ playerHand: hand }),
  clearHand: () => set({ playerHand: '' }),
}))
