import './App.css';
import Header from './Header.js';
import SwipeButtons from './SwipeButtons.js';
import TinderCards from './TinderCards.js'


function App() {
  return (  // Here is where all components are being rendered from.
    <div className="app">
      
      <Header />

      <TinderCards />

      <SwipeButtons />

    </div>
  );
}

export default App;
