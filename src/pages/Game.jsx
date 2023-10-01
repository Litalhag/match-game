import { useState, useEffect } from 'react'
import { items } from '../data'
import Header from '../components/Header'
import ItemImage from '../components/ItemImage'
import Score from '../components/Score'
import Vote from '../components/Vote'

const Game = () => {
  // State for the ID of the currently displayed item
  const [currentItemId, setCurrentItemId] = useState(null)

  // State for positive and negative scores
  const [positiveScore, setPositiveScore] = useState(0)
  const [negativeScore, setNegativeScore] = useState(0)

  // State for the shuffled list of item IDs
  const [shuffledIds, setShuffledIds] = useState([])

  // Effect to shuffle item IDs when the component mounts
  useEffect(() => {
    const shuffled = shuffleArray(items.map((item) => item.id))
    setShuffledIds(shuffled)
    setCurrentItemId(shuffled[0])
  }, [])

  // Finding the current item from the list of items using its ID
  const currentItem = items.find((item) => item.id === currentItemId)

  const handleVote = (isPositive) => {
    // Check the currentItem's state against the user's vote
    if (
      (isPositive && currentItem.state) ||
      (!isPositive && !currentItem.state)
    ) {
      // If both the user's vote and the currentItem's state are True OR both are False
      setPositiveScore(positiveScore + 1)
    } else {
      // If the user's vote and the currentItem's state do not match
      setNegativeScore(negativeScore + 1)
    }

    // Check for game-over condition based on scores
    if (positiveScore >= 10 || negativeScore >= 10) {
      if (positiveScore > negativeScore) {
        alert('Game Over! You Win!')
      } else {
        alert('Game Over! You Lose!')
      }
      resetGame()
      return // Exit out of the function so we don't process the rest
    }

    // Move to the next item in the shuffled list
    const currentIndex = shuffledIds.indexOf(currentItemId)

    if (currentIndex < shuffledIds.length - 1) {
      setCurrentItemId(shuffledIds[currentIndex + 1])
    } else {
      alert('Game Over!')
      resetGame() // Reset the game when the end of the shuffled list is reached
    }
  }

  // Reset the game: Shuffle IDs again, reset scores, and display the first item from the new shuffled list
  const resetGame = () => {
    const shuffled = shuffleArray(items.map((item) => item.id))
    setShuffledIds(shuffled)
    setCurrentItemId(shuffled[0])
    setPositiveScore(0)
    setNegativeScore(0)
  }

  // Shuffle function using the Fisher-Yates (aka Durstenfeld) algorithm
  function shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  return (
    <>
      <main className="menu">
        <Header />
        <Score positiveScore={positiveScore} negativeScore={negativeScore} />
        <ItemImage currentItem={currentItem} />
        <Vote currentItem={currentItem} handleVote={handleVote} />
      </main>
    </>
  )
}
export default Game
