import "../../styles/research/Filters.css";
import OneFilter from "./OneFilter";

function Filters() {
  return (
    <div className="filters">
      <h3 className="title-h2">Filtres</h3>
      <ul className="filters-ul">
        <OneFilter name="Économique" />
        <OneFilter name="Familial" />
        <OneFilter name="Romantique" />
        <OneFilter name="Animaux autorisés" />
      </ul>
    </div>
  );
}

export default Filters;
