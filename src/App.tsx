import { Header } from './components/Header/index'
import { SelectionDisplay } from './components/SelectionDisplay'
import './App.css'
import { useGameStore } from './stores/useGameStore'

function App() {
  const score = useGameStore((state) => state.score)
  const playerHand = useGameStore((state) => state.playerHand)

  console.log({ playerHand })

  return (
    <>
      <Header score={score} />
      {playerHand ? (
        <div>{playerHand}</div>
      ) : (
        <div className="game-container">
          <SelectionDisplay />
        </div>
      )}
    </>
  )
}

export default App
