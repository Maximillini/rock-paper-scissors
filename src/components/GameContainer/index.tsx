import { useGameStore } from '../../stores/useGameStore'
import { Result } from '../Result'
import { SelectionDisplay } from '../SelectionDisplay'
import './styles.scss'

export const GameContainer = () => {
  const playerHand = useGameStore((state) => state.playerHand)

  return (
    <div className="game-container">
      {playerHand === '' ? <SelectionDisplay /> : <Result />}
    </div>
  )
}
