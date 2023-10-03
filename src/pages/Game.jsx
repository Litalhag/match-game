import { useState } from 'react'
import { items } from '../data'
import Header from '../components/Header'
import ItemImage from '../components/ItemImage'
import Score from '../components/Score'
import Vote from '../components/Vote'

const Game = () => {
  const [currentItemId, setCurrentItemId] = useState(0)

  const [positiveScore, setPositiveScore] = useState(0)
  const [negativeScore, setNegativeScore] = useState(0)

  const [gameStatus, setGameStatus] = useState('playing')

  const currentItem = items[currentItemId]

  const handleVote = (isPositive) => {
    if (
      (isPositive && currentItem.state) ||
      (!isPositive && !currentItem.state)
    ) {
      setPositiveScore(positiveScore + 1)
    } else {
      setNegativeScore(negativeScore + 1)
    }

    if (positiveScore >= 10 || negativeScore >= 10) {
      if (positiveScore > negativeScore) {
        setGameStatus('win')
      } else {
        setGameStatus('lose')
      }
      resetGame()
      return
    }

    setCurrentItemId((prevId) => prevId + 1)

    const resetGame = () => {
      setCurrentItemId
      setPositiveScore(0)
      setNegativeScore(0)
      setGameStatus('playing')
    }
  }

  return (
    <>
      <main className="menu">
        <Header />
        <Score positiveScore={positiveScore} negativeScore={negativeScore} />
        <ItemImage currentItem={currentItem} />
        <Vote currentItem={currentItem} handleVote={handleVote} />

        {gameStatus === 'win' && (
          <h2 className="game-status">Game over! You Win</h2>
        )}
        {gameStatus === 'lose' && (
          <h2 className="game-status">Game over! You Lose</h2>
        )}
      </main>
    </>
  )
}
export default Game
