import "../../styles/accomodation/MostPopularsOneCard.css";

function MostPopularsOneCard(props) {
  return (
    <a href="#">
      <div className="most-popular" id="popular-room2">
        <div className="most-popular-case-img" id="most-popular-img2">
          <img
            src={props.image}
            alt={"Image de " + props.name}
          />
        </div>
        <div className="case-text">
          <div className="most-popular-name-and-price">
            <h3 className="hotel-name">{props.name}</h3>
            <p className="hotel-price">
              Nuit à partir de <span className="price">{props.price}€</span>
            </p>
          </div>
          <div className="stars">
            <div className="fas fa-star hostingMainCardGradeIcon"></div>
            <div className="fas fa-star hostingMainCardGradeIcon"></div>
            <div className="fas fa-star hostingMainCardGradeIcon"></div>
            <div className="fas fa-star hostingMainCardGradeIcon"></div>
            <div className="fas fa-star hostingMainCardGradeIconEmpty"></div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default MostPopularsOneCard;
