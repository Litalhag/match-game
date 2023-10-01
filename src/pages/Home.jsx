import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const startGame = () => {
    navigate('/game')
  }

  return (
    <section className="home">
      <div className="title home-page">
        <h2>Welcome to the Game!</h2>
        <div className="title-underline"></div>
        <div className="container">
          <h4>Find the match word to the image!</h4>
          <p>1. The app will present you with images and descriptions.</p>
          <p> 2. For each image, decide whether it's true or false match. </p>
          <p>
            3. Click the corresponding button in the bottom menu to register
            your choice.
          </p>
          <p>
            4. As you make your choice, the app will display the next image, and
            the counter next to the chosen category in the top menu will
            increment by one.
          </p>
        </div>
        <div className="score-card">
          <button className="btn-hipster" onClick={startGame}>
            Start Game
          </button>
        </div>
      </div>
    </section>
  )
}
export default Home
