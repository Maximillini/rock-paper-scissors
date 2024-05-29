import { SelectionButton } from '../SelectionButton'
import paper from '../../assets/images/icon-paper.svg'
import scissors from '../../assets/images/icon-scissors.svg'
import rock from '../../assets/images/icon-rock.svg'
import './styles.scss'
import { Hands } from '../../types/hands'

export const SelectionDisplay = () => {
  return (
    <div className="selection-display-container">
      <div className="top-row">
        <SelectionButton imgSrc={paper} alt={Hands.paper} />
        <SelectionButton imgSrc={scissors} alt={Hands.scissors} />
      </div>
      <div className="bottom-row">
        <SelectionButton imgSrc={rock} alt={Hands.rock} />
      </div>
    </div>
  )
}
