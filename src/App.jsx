import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [count, setCount] = useState(0);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBcj2ip9AhD5Q6MhtVMFREpApc6hBTmN9Y",
  });

  const containerStyle = {
    width: "44vw",
    height: "22vw",
  };
  const center = {
    lat: -6.716048796790917,
    lng: 108.50263419796549,
  };
  const [markers, setMarker] = useState([]);
  const handleClickMarker = (e) => {
    alert(`latitude ${e.latLng.lat()}, longitude ${e.latLng.lng()}`);
  };
  const handleClicked = (e) => {
    setMarker((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    ]);
  };
  return (
    <>
      {isLoaded ? (
        <div className="row">
          <div className="col-7 ">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={20}
              mapTypeId="roadmap"
              mapContainerClassName="card-body d-inline-block rounded mobile-100"
              onClick={handleClicked}>
              {markers.map((marker) => (
                // eslint-disable-next-line react/jsx-key
                <Marker
                  position={{
                    lat: marker.lat,
                    lng: marker.lng,
                  }}
                  onClick={handleClickMarker}
                />
              ))}
            </GoogleMap>
          </div>
        </div>
      ) : (
        <p>loading data</p>
      )}
    </>
  );
}

export default App;
