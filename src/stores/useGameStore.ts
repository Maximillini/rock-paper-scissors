import { create } from 'zustand'
import { Hand } from '../types/hands'
import { randomComputerChoice } from '../helpers/gameHelper'

type GameStore = {
  playerHand: Hand | ''
  computerHand: Hand | ''
  score: number
  increaseScore: () => void
  resetScore: () => void
  choosePlayerHand: (hand: Hand) => void
  chooseComputerHand: () => void
  clearHands: () => void
}

export const useGameStore = create<GameStore>((set) => ({
  playerHand: '',
  computerHand: '',
  score: 0,
  increaseScore: () =>
    set((state) => ({
      score: state.score + 1,
    })),
  resetScore: () => set({ score: 0 }),
  choosePlayerHand: (hand: Hand) => set({ playerHand: hand }),
  chooseComputerHand: () => set({ computerHand: randomComputerChoice() }),
  clearHands: () => set({ playerHand: '', computerHand: '' }),
}))
