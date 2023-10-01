import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const backToStart = () => {
    navigate('/')
  }

  return (
    <header className="title">
      <button className="back-btn" onClick={backToStart}>
        back
      </button>
      <h2>Guessing Game!</h2>
      <div className="title-underline"></div>
    </header>
  )
}

export default Header
