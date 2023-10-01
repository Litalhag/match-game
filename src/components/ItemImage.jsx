const ItemImage = ({ currentItem }) => {
  return (
    <section className="section-center">
      {currentItem ? (
        <article className="menu-item">
          <img src={currentItem.img} alt={currentItem.title} className="img" />
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}

export default ItemImage
