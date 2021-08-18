
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Material UI
import { MenuItem } from '@material-ui/core';
import TimelineIcon from '@material-ui/icons/Timeline';
import CloudIcon from '@material-ui/icons/Cloud';

//Styles
import "./style/style.css"
import BtcLogo from "./style/BTC_Logo.svg.png"
import EthLogo from "./style/Ethereum_Logo.png"
import LinkLogo from "./style/Link_Logo.png"

//Components
import Card from "./components/Card"
import WeatherCard from "./components/Link2"
import { instanceStockQuote, instanceWeather } from './axios'

const mapping = {bitcoin: {title: 'BTC', logo: BtcLogo}, ethereum: {title: 'ETH', logo: EthLogo}, chainlink: {title: 'Link', logo: LinkLogo}};
const cities = ['Sydney', 'Tokyo', 'Paris'];


function App() {

  const linkStyle = { textDecoration: "none", color: "#3dc9af" }

  const [StockQuotes, setStockQuotes] = useState([])
  const [Weathers, setWeathers] = useState([]);


  // Fetch Currency API
  useEffect(() => {
    async function fetchData() {

      const promises = Object.keys(mapping).map((apiName) => instanceStockQuote(apiName).get());
   
      try {
        const quotes = (await Promise.allSettled(promises)).map((result) => {
          const apiName = Object.keys(result.value.data)[0];
          return {
              apiName,
              title: mapping[apiName].title,
              price: result.value.data[apiName].usd,
              logo: mapping[apiName].logo
          }
        });
  
        setStockQuotes(quotes);
       
      } catch(err) {
        console.error(err);
        setStockQuotes([]);
      }      
    }
    fetchData();
  }, [])

  // Fetch weather API
  useEffect(() => {
    async function fetchWeatherData() {

      const promises = cities.map((city) => instanceWeather(city).get());
      try {
        const weathers = (await Promise.allSettled(promises)).map((result) => { return {
          city: result.value.data.location.name,
          condition: result.value.data.current.condition.icon,
          temperature: result.value.data.current.temp_c
        };
      });
      
      setWeathers(weathers);

      } catch(err) {
        console.error(err);
        setWeathers([]);
      }
    }
    fetchWeatherData();
  }, [])

  return (
    <Router>
      <div>
        <main>
          <div className="glass">
            <div className="dash-menu">
              <div className="logo">
                <h3>DashApi</h3>
              </div>
              <div className="links">
                <div className="link">
                  <Link to="/" style={linkStyle}><MenuItem><span className="menu-icon"><TimelineIcon /></span> </MenuItem> </Link>
                </div>
                <div className="link">
                  <Link to="/link2" style={linkStyle}><MenuItem><span className="menu-icon"><CloudIcon /></span></MenuItem></Link>
                </div>
                <div className="link">
                  <Link to="/link3" ></Link>
                </div>

              </div>
            </div>
            <Switch>
              <Route path="/" exact>
                <div className="cards">
                  {StockQuotes.map((quote) => <Card key={quote.title} title={quote.title} price={quote.price} logo={quote.logo}/>)}
                </div>
              </Route>

              <Route path="/link2" exact>
            <div className="cards">
                {Weathers.map((weather) => <WeatherCard key={weather.city} temperature={weather.temperature} city={weather.city} condition={weather.condition} />)}
                </div>
              </Route>
            </Switch>

          </div>

        </main >
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div >


    </Router >
  )
}

export default App


