import "../../styles/accomodation/MarseilleAccomodation.css";
import MostPopularsOneCard from "./MostPopularsOneCard";

import HôtelLeSoleilDuMatin from "../../assets/most-populars/emile-guillemot-Bj_rcSC5XfE-unsplash.jpg";
import AuCoeurDeLeauChambreDhôtes from "../../assets/most-populars/aw-creative-VGs8z60yT2c-unsplash.jpg";
import HôtelToutBleuEtBlanc from "../../assets/most-populars/febrian-zakaria-M6S1WvfW68A-unsplash.jpg";

function MarseilleAccomodation() {
  return (
    <div className="bloc bloc-most-popular">
      <div className="most-populars">
        <div className="title-h2-and-icon">
          <h2>Les plus populaires</h2>
          <i className="fas fa-chart-line" />
          <MostPopularsOneCard name="Hôtel Le Soleil Du Matin" price="128" image={HôtelLeSoleilDuMatin}/>
          <MostPopularsOneCard name="Au coeur de l'eau Chambres d'hôtes" price="71" image={AuCoeurDeLeauChambreDhôtes} />
          <MostPopularsOneCard name="Hôtel Tout bleu et blanc" price="68" image={HôtelToutBleuEtBlanc} />
        </div>
      </div>
    </div>
  );
}

export default MarseilleAccomodation;
