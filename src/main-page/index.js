import './main-page.css';
import Header from './header';
import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';


function App() {

  const [allHouses, setAllHouses] = useState([]);

  useEffect(()=>{
    const fetchHouses = async()=>{
      const rsp = await fetch('/houses.json');
      const houses = await rsp.json();
      setAllHouses(houses)
    };

    fetchHouses();


  }, []);

  let featuredHouse = useMemo(()=>{
    if (allHouses.length){
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }


  }, [allHouses]);
  
  return (
    <Router>
        <div className='container'> <Header subtitle = "Providing houses all over Kenya"/> </div>
    <Switch>
      <Route></Route>
    </Switch>
    </Router>
  
    
  );
}

export default App;
