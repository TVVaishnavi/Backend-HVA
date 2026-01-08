import './App.css';
import { useState } from "react";
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("usertoken")
  );

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Body setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
