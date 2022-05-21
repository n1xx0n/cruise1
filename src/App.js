import './App.css';
import img from "./images/cruiseship.jpg"
import LoginButton from './login';
import LogoutButton from './logout';

function CruiseShipImage(){
  return <img src={img} alt="Cruise1, Ahoi!"/>
 }

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {CruiseShipImage()}      
        <p>
          Cruise1
        </p>
        <LoginButton />
        <LogoutButton />
      
      </header>
    </div>
  );
}

export default App;


// JS
//var img = document.createElement("img");
//img.src = "../ressources/cruiseship.jpg";
