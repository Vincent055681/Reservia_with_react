import "../../styles/accomodation/MarseilleAccomodation.css";
import MarseilleAccomodationOneCard from "./MarseilleAccomodationOneCard";
import AubergeDeLaCannebiereImg from "../../assets/marseille-accomodation/marcus-loke-WQJvWU_HZFo-unsplash.jpg";
import HôtelDuPortImg from "../../assets/marseille-accomodation/fred-kleber-gTbaxaVLvsg-unsplash.jpg";
import HôtelLesMouettesImg from "../../assets/marseille-accomodation/reisetopia-B8WIgxA_PFU-unsplash.jpg";
import AubergeDeLaMerImg from "../../assets/marseille-accomodation/annie-spratt-Eg1qcIitAuA-unsplash.jpg";
import AubergeLePanierImg from "../../assets/marseille-accomodation/marcus-loke-WQJvWU_HZFo-unsplash.jpg";
import HôtelChezAminaImg from "../../assets/marseille-accomodation/fred-kleber-gTbaxaVLvsg-unsplash.jpg";

function MarseilleAccomodation() {
  return (
    <div className="bloc bloc-accomodation">
      <h2 className="title-h2 push-to-right">Hébérgement à Marseille</h2>
      <div className="marseille-cases">
          <MarseilleAccomodationOneCard name="Auberge de la Cannebière" price="25" image={AubergeDeLaCannebiereImg}/>
          <MarseilleAccomodationOneCard name="Hôtel du Port" price="52" image={HôtelDuPortImg} />
          <MarseilleAccomodationOneCard name="Hôtel les Mouettes" price="76" image={HôtelLesMouettesImg} />
          <MarseilleAccomodationOneCard name="Auberge de la Mer" price="46" image={AubergeDeLaMerImg} />
          <MarseilleAccomodationOneCard name="Auberge le Panier" price="23" image={AubergeLePanierImg} />
          <MarseilleAccomodationOneCard name="Hôtel chez Amina" price="96" image={HôtelChezAminaImg} />
      </div>
      <p className="show-more push-to-right"> <a href="#">Afficher plus</a> </p>
    </div>
  );
}

export default MarseilleAccomodation;
