import React, {useState} from 'react';
import AutoCompleteText from './components/AutoCompleteText'
import CurrentWeather from './components/CurrentWeather'
import FiveDaysForcast from './components/FiveDaysForcast'
import './App.css';

export const AppContext = React.createContext(null)

function App() {

  const [city, setCity] = useState('Tel Aviv');
  const [country, setCountry] = useState('Israel');
  const [cityKey,setCityKey] = useState(215854);
  const [metric, setMetric] = useState(true)

  return (
    <AppContext.Provider value={{
      city,
      setCity,
      cityKey,
      setCityKey,
      metric,
      setMetric,
      country,
      setCountry
  }}>
      <div className="App">
        <AutoCompleteText />
        <CurrentWeather />
        <FiveDaysForcast />
      </div>
    </AppContext.Provider>
  );
}

export default App;


///https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=apikew&metric=true
