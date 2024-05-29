import logo from '../../assets/images/logo.svg'
import './styles.scss'

export const Header = ({ score }: { score: number }) => {
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
