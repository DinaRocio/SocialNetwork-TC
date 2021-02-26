import './App.css';

import Main from './pages/Main';
import ShowBoard from './pages/ShowBoard';
import { useState } from 'react';


function App() {
  const [route, setRoute] = useState('main')

    let currentView = null;

    switch (route) {
      case 'main':
        currentView = <Main goto={setRoute} />;
        
        break;
      case 'showBoard':
        currentView = <ShowBoard goto={setRoute} />;
        break;
    }

  return (
    <div className="App">{currentView}</div>
  );
}

export default App;
