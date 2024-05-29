import { SelectionButton } from '../SelectionButton'
import { determineWinner } from '../../helpers/gameHelper'
import { useGameStore } from '../../stores/useGameStore'
import './styles.scss'

const RESULT_MESSAGE = Object.freeze(['TIE', 'YOU WIN', 'THE HOUSE WINS'])

const addWinnerClassName = (result: number, value: number) => {
  return result === value ? 'winner' : ''
}

export const Result = () => {
  const playerChoice = useGameStore((state) => state.playerHand)
  const computerChoice = useGameStore((state) => state.computerHand)
  const increaseScore = useGameStore((state) => state.increaseScore)
  const clearHands = useGameStore((state) => state.clearHands)
  const result = determineWinner(playerChoice, computerChoice)

  const getResultMessage = () => {
    if (result === 1) increaseScore()

    return RESULT_MESSAGE[result]
  }

  return (
    <div className="result-container">
      <div
        className={`choice-container player ${addWinnerClassName(result, 1)}`}
      >
        <div>YOU PICKED</div>
        <SelectionButton alt={playerChoice} />
      </div>
      <div className="result-message-container">
        <div>{getResultMessage()}</div>
        <input type="button" value="Play Again?" onClick={() => clearHands()} />
      </div>
      <div
        className={`choice-container computer ${addWinnerClassName(result, 2)}`}
      >
        <div>THE HOUSE PICKED</div>
        <SelectionButton alt={computerChoice} />
      </div>
    </div>
  )
}
