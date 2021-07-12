import '../styles/App.css';
import Header from "./header/Header"
import Research from './research/Research';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Research />
      </main>
    </div>
  );
}

export default App;
