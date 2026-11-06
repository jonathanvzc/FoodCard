function FoodCard({ title, description, buttonText, price, image }) {
  return (
    <article className="food-card">
      <img src={image} alt={title} className="food-image" />

      <div className="food-content">
        <h2>{title}</h2>

        <p className="food-price">${price}</p>

        <p className="food-description">{description}</p>

        <button className="food-button">
          {buttonText}
        </button>
      </div>
    </article>
  );
}

export  {FoodCard};