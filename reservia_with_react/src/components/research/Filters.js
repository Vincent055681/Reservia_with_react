import "../../styles/research/Filters.css";

function Filters() {
  return (
    <div className="filters">
      <h3 className="title-h2">Filtres</h3>
      <ul className="filters-ul">
        <li className="filters-button">
          <i className="fas fa-money-bill-wave icon-filter"></i>Économique
        </li>
        <li className="filters-button">
          <i className="fas fa-child icon-filter"></i>Familial
        </li>
        <li className="filters-button">
          <i className="fas fa-heart icon-filter"></i>Romantique
        </li>
        <li className="filters-button">
          <i className="fas fa-dog icon-filter"></i>Animaux autorisés
        </li>
      </ul>
    </div>
  )
}

export default Filters;
