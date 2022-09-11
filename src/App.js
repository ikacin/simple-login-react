import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import './main.css';

function App() {


  return (
    <div className="App">
            <div className={"card-container"}>
              <form action={"form-action"}>
                    <div className={"card-username"}>
                        <label>Card Holder Name</label>
                        <input type={"text"} placeholder={"Card Name"}/>
                    </div>

                    <div className={"card-number"}>
                        <label>Card Number</label>
                        <input type={"text"} placeholder={"Card Number"}/>
                    </div>

                </form>
            </div>

    </div>
  );
}

export default App;
