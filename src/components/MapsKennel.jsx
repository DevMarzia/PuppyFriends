// craere mappa 
// npm install leaflet react-leaflet installo le due librerie
//  in index.jsx devo importare lo stile altrimenti non funzionao -> import 'leaflet/dist/leaflet.css' 

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MapsKennel() {
  // Coordinate iniziali della mappa (es. centro Italia)
  const posizioneIniziale = [42.5, 12.5];

  return (
    <MapContainer center={posizioneIniziale} zoom={6} style={{ height: '250px', width: '100%' }}>
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Esempio di un marcatore (pin) sulla mappa */}
      <Marker position={[40.175483, 18.014486]}>
        <Popup>
          PuppyFreinds. <br /> Tanti cuccioli ti aspettano!
        </Popup>
      </Marker>

    </MapContainer>
  );
}

export default MapsKennel;