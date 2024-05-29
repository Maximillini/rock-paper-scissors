import { useGameStore } from '../../stores/useGameStore'
import { Hand } from '../../types/hands'
import paper from '../../assets/images/icon-paper.svg'
import scissors from '../../assets/images/icon-scissors.svg'
import rock from '../../assets/images/icon-rock.svg'
import './styles.scss'

type SelectionButtonProps = {
  alt: string
}

const handImage = {
  paper: paper,
  scissors: scissors,
  rock: rock,
}

export const SelectionButton = ({ alt }: SelectionButtonProps) => {
  const choosePlayerHand = useGameStore((state) => state.choosePlayerHand)
  const chooseComputerHand = useGameStore((state) => state.chooseComputerHand)

  const handlePlayerHandChoice = (hand: Hand) => {
    choosePlayerHand(hand)
    chooseComputerHand()
  }

  return (
    <div
      className={`selection-button ${alt}-button`}
      onClick={() => handlePlayerHandChoice(alt as Hand)}
    >
      <img src={handImage[alt]} alt={alt} />
    </div>
  )
}
