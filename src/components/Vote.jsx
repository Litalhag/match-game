const Vote = ({ currentItem, handleVote }) => {
  return (
    <section className="section-center">
      {currentItem && (
        <>
          <button className="checkmark false" onClick={() => handleVote(false)}>
            False
          </button>
          <div className="item-text">
            <h3>{currentItem.title}</h3>
          </div>
          <button className="checkmark true" onClick={() => handleVote(true)}>
            True
          </button>
        </>
      )}
    </section>
  )
}

export default Vote
