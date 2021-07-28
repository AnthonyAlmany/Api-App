

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
import { instanceEth, instanceBtc, instanceLink, instanceWeather } from './axios'


function App() {

  const linkStyle = { textDecoration: "none", color: "#3dc9af" }

  // UseState Currency API
  const [BtcPrice, setBtcPrice] = useState("");
  const [EthPrice, setEthPrice] = useState("");
  const [LinkPrice, setLinkPrice] = useState("");

  // UseState Weather API
  const [Temperature, setTemperature] = useState("");
  const [City, setCity] = useState("");
  const [Condition, setCondition] = useState("");

  // Fetch Currency API
  useEffect(() => {
    async function fetchData() {
      const requestEth = await instanceEth.get();
      const requestBtc = await instanceBtc.get();
      const requestLink = await instanceLink.get();

      setBtcPrice(requestBtc.data.bitcoin.usd)
      setEthPrice(requestEth.data.ethereum.usd)
      setLinkPrice(requestLink.data.chainlink.usd)
    }
    fetchData();
  }, [])

  // Fetch weather API
  useEffect(() => {
    async function fetchWeatherData() {
      const requestWeather = await instanceWeather.get();

      setTemperature(requestWeather.data.current.temp_c)
      setCondition(requestWeather.data.current.condition.icon)
      setCity(requestWeather.data.location.name)

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
                  <Link to="/" style={linkStyle}><MenuItem><TimelineIcon style={{ fontSize: 30 }} /> </MenuItem> </Link>
                </div>
                <div className="link">
                  <Link to="/link2" style={linkStyle}><MenuItem><CloudIcon style={{ fontSize: 30 }} /></MenuItem></Link>
                </div>
                <div className="link">
                  <Link to="/link3" ></Link>
                </div>

              </div>
            </div>
            <Switch>
              <Route path="/" exact>
                <div className="cards">
                  <Card title="BTC" price={BtcPrice} logo={BtcLogo} />
                  <Card title="ETH" price={EthPrice} logo={EthLogo} />
                  <Card title="Link" price={LinkPrice} logo={LinkLogo} />
                </div>
              </Route>

              <Route path="/link2" exact>
                <WeatherCard temperature={Temperature} city={City} condition={Condition} />
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


