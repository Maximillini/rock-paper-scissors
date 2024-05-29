import logo from '../../assets/images/logo.svg'
import { useGameStore } from '../../stores/useGameStore'
import './styles.scss'

export const Header = () => {
  const score = useGameStore((state) => state.score)
  return (
    <div className="header-container">
      <img src={logo} />
      <div className="score-container">
        <div className="score-header">SCORE</div>
        <div className="score">{score}</div>
      </div>
    </div>
  )
}
