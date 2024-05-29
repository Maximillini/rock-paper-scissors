import { SelectionButton } from '../SelectionButton'
import './styles.scss'
import { Hands } from '../../types/hands'

export const SelectionDisplay = () => {
  return (
    <div className="selection-display-container">
      <div className="top-row">
        <SelectionButton alt={Hands.paper} />
        <SelectionButton alt={Hands.scissors} />
      </div>
      <div className="bottom-row">
        <SelectionButton alt={Hands.rock} />
      </div>
    </div>
  )
}
