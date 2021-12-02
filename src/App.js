import './App.css';
import Header from './Header.js';
import TinderCards from './TinderCards.js'

function App() {
  return (  // Here is where all components are being rendered from.
    <div className="app">
      
      <Header />

      <TinderCards />

      {/* Bottom */}  

    </div>
  );
}

export default App;
