import { Hand } from '../../types/hands'

type ResultProps = {
  playerChoice: Hand
  computerChoice: Hand
}

export const Result = ({ playerChoice, computerChoice }: ResultProps) => {
  return (
    <div className="result-container">
      <div className="player-choice-container">{playerChoice}</div>
      <div className="computer-choice-container">{computerChoice}</div>
    </div>
  )
}
