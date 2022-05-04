import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

function Map() {

  return(

      <GoogleMap defaultZoom={10}
                 defaultCenter={{lat: 51.507351, lng: -0.127758}}
      />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;