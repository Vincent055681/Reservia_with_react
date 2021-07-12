import "../../styles/research/ResearchBar.css";

function ResearchBar() {
  return (
    <div className="research-box">
      <div className="icon-location">
        <i className="fas fa-map-marker-alt"></i>
      </div>
      <input type="text" placeholder="Marseille, France" className="research-bar" />
      <button className="button-research" id="button-research">Rechercher</button>
      <button className="button-research searchFormSubmitinputIcon fas fa-search" id="icon-glass" />
    </div>
  );
}

export default ResearchBar;
