import "../../styles/research/Filters.css";

function OneFilter(props) {
  return (
        <li className="filters-button">
          <i className="fas fa-money-bill-wave icon-filter"></i>{props.name}
        </li>
  )
}

export default OneFilter;
