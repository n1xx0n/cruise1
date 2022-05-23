import './App.css';
import Profile from './views/profile';
import Home from './views/home'
import NavBar from './components/nav-bar';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />      
        <div className="container flex-grow-1">
          <div className="mt-5">
            <Routes>
              <Route path="/" exact={true.toString()} element={<Home />} />
              <Route path="/profile" exact={false} element={<Profile />} />
            </Routes>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

