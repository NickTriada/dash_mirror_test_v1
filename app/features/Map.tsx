import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  DirectionsRenderer,
  useJsApiLoader,
  TrafficLayer,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const MapWithRoute = ({ origin, destination }) => {
  const [eta, setEta] = useState("");
  const [traffic, setTraffic] = useState(true);
  const [directions, setDirections] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBlttYAQZIlFHqTnmFZK7LZkHW6A7hiEvk",
    libraries: ["places"],
  });

  useEffect(() => {
    setInterval(() => {
      setTraffic((t) => !t);
    }, 3000);
  });

  useEffect(() => {
    if (!isLoaded) return;

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
        drivingOptions: {
          departureTime: new Date(), // can be set to current or future time
          trafficModel: "pessimistic",
        },
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
          const duration = result.routes[0].legs[0].duration.text;
          const arrivalTime = new Date(
            new Date().getTime() +
              result.routes[0].legs[0].duration.value * 1000
          );
          setEta(`ETA: ${arrivalTime.toLocaleTimeString()} (${duration})`);
        } else {
          console.error(`Error fetching directions ${result}`);
        }
      }
    );
  }, [isLoaded, origin, destination]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap mapContainerStyle={{ width: "100%", height: "400px" }} zoom={10}>
      {directions && (
        <DirectionsRenderer
          options={{ draggable: true }}
          directions={directions}
        />
      )}
      {directions && (
        <InfoWindow
          position={{ lng: -121.92034773316128, lat: 37.37003722537348}}
        >
          <>{eta}</>
        </InfoWindow>
      )}

      {traffic ? <TrafficLayer options={{ autoRefresh: true }} /> : undefined}
    </GoogleMap>
  );
};
export default MapWithRoute;
