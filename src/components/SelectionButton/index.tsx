import { useGameStore } from '../../stores/useGameStore'
import { Hand } from '../../types/hands'
import './styles.scss'

type SelectionButtonProps = {
  imgSrc: string
  alt: string
}

export const SelectionButton = ({ imgSrc, alt }: SelectionButtonProps) => {
  const game = useGameStore()
  const choosePlayerHand = useGameStore((state) => state.choosePlayerHand)

  const handlePlayerHandChoice = (hand: Hand) => {
    console.log({ hand })
    choosePlayerHand(hand)

    console.log({ game })
  }

  return (
    <div
      className={`selection-button ${alt}-button`}
      onClick={() => handlePlayerHandChoice(alt as Hand)}
    >
      <img src={imgSrc} alt={alt} />
    </div>
  )
}
