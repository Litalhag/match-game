const Score = ({ positiveScore, negativeScore }) => {
  return (
    <div className="score-container">
      {/* negative score */}
      <div className="score-card">
        <span className="score-label">Negative score:</span>
        <span className="score-value">{negativeScore}</span>
      </div>
      {/* positive score */}
      <div className="score-card">
        <span className="score-label">Positive score:</span>
        <span className="score-value">{positiveScore}</span>
      </div>
    </div>
  )
}

export default Score
