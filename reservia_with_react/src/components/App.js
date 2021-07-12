import '../styles/App.css';
import Accomodation from './accommodation/Accomodation';
import Header from "./header/Header"
import Research from './research/Research';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Research />
        <Accomodation />
      </main>
    </div>
  );
}

export default App;
