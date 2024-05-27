import logo from '../../assets/images/logo.svg'
import './styles.scss'

export const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} />
      <div className="score-container">
        <div>Score</div>
        <div>0</div>
      </div>
    </div>
  )
}
