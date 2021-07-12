import "../../styles/accomodation/MarseilleAccomodation.css";
import "../../styles/accomodation/MostPopulars.css";

import MarseilleAccomodation from "./MarseilleAccomodation";
import MostPopulars from "./MostPopulars";

function Accomodation() {
  return (
    <section class="blocs" id="blocs">
      <MarseilleAccomodation />
      <MostPopulars />
    </section>
  );
}

export default Accomodation;
