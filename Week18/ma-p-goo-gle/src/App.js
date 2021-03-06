import './App.css';
import WrappedMap from './components/WrappedMap';


// TO MAKE IT WORKS REMOVE THE APP WRAPPED COMPONENT IN 'index.js' FILE

function App() {
  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBj3SEQEo5iI3xgvzRWieF-b0JoEXuJGbY`}
                  loadingElement={<div style={{height: "100%"}}/>}
                  containerElement={<div style={{height: "100%"}}/>}
                  mapElement={<div style={{height: "100%"}}/>}
      />
    </div>
  );
}

export default App;
