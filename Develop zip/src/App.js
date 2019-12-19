import React, { Component } from "react";
import "./App.css";
import FilteredList from "./FilteredList"
import Wine from "./Wine.jsx"
import kj from './my_wine.jpg'
import yang from './yangarra.jpg'
import lass from './lassegue.jpg'
import pens from './penfolds.jpeg'
import ten from './tenuta.jpg'
import nip from './nipozzano_chianti_bottle.jpg'
import hart from './hartford.jpg'
import mat from './matanzas.jpg'
import cam from './cambria.png'
import lac from './lacrema.png'
import vert from './verite.png'
import stone from './stonestreet.png'

const wines = [
  <Wine name="KJ" type="Type: White" country="Country: U.S." score="91" image={kj}/>,
  <Wine name= "Yangarra" type= "Type: Red" country= "Country: Australia" score= "92" image={yang}/>,
  <Wine name= "Penfold's" type= "Type: Red" country= "Country: Australia" score= "84" image={pens}/>,
  <Wine name= "Lassegue" type= "Type: Red" country= "Country: France" score= "99" image = {lass}/>,
  <Wine name= "Tenuta" type= "Type: Red" country= "Country: Italy" score= "85" image = {ten}/>,
  <Wine name= "Nipozzano" type= "Type: Red" country= "Country: Italy" score= "86" image = {nip}/>,
  <Wine name= "Matanzas" type= "Type: White" country= "Country: U.S." score= "93" image= {mat}/>,
  <Wine name= "Hartford" type= "Type: White" country= "Country: U.S." score= "98" image= {hart}/>,
  <Wine name= "Stonestreet" type= "Type: White" country= "Country: U.S." score= "97" image= {stone}/>,
  <Wine name= "La Crema" type= "Type: White" country= "Country: U.S." score= "94" image= {lac}/>,
  <Wine name= "Cambria" type= "Type: White" country= "Country: U.S." score= "90" image= {cam}/>,
  <Wine name= "Verite" type= "Type: Red" country= "Country: U.S." score= "100" image= {vert}/>
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A Family of Wines</h1>
        {/*TODO (FilteredList): create an instance of the FilteredList Component with a variable named items that takes in your produce list*/}
        <FilteredList items = {wines}/>
      </div>

    );
  }
}

export default App;
