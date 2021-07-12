import "../../styles/header/Links.css";

function Links() {
  return (
    <div className="navbar">
      <div className="navbar-link active-link" id="navbar-link-accomodation">
        <div className="underline-effect"></div>
        <a href="#blocs">Hébergement</a>
      </div>
      <div className="navbar-link" id="navbar-link-activities">
        <div className="underline-effect"></div>
        <a href="#title-activities">Activités</a>
      </div>
      <div className="navbar-link login" id="navbar-link-sign-up">
        <a href="index">S'inscrire</a>
      </div>
    </div>
  );
}

export default Links;
