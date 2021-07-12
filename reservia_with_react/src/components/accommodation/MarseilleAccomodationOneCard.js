import "../../styles/accomodation/MarseilleAccomodationOneCard.css";

function MarseilleAccomodationOneCard(props) {
  return (
    <a href="#">
      <div className="marseille-case">
        <div className="marseille-case-img" id="room2">
          <img
            className="marseille-case-img-host"
            src={props.image}
            alt={"Image de " + props.name}
          />
        </div>
        <div className="case-text">
          <h3 className="hotel-name">{props.name}</h3>
          <p className="hotel-price">
            Nuit à partir de <span className="price">{props.price}€</span>
          </p>
          <div className="stars">
            <div className="fas fa-star hostingMainCardGradeIcon"></div>
            <div className="fas fa-star hostingMainCardGradeIcon"></div>
            <div className="fas fa-star hostingMainCardGradeIcon"></div>
            <div className="fas fa-star hostingMainCardGradeIcon"></div>
            <div className="fas fa-star hostingMainCardGradeIcon"></div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default MarseilleAccomodationOneCard;
