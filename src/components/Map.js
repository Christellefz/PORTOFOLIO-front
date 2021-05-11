import 'leaflet/dist/leaflet.css'
import './Map.css'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import L from 'leaflet'
import rouge from '../Images/rouge.svg'

const Map = () => {
  const position = [43.8201935, 4.6189143]
  const grenIcon = L.icon({
    iconUrl: rouge,
    iconSize: [38, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76]
  })
  return (
    <MapContainer
      center={position}
      zoom={12}
      scrollWheelZoom={false}
      className='Map'
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker position={position} icon={grenIcon}>
        <Popup>Je suis ici.</Popup>
      </Marker>
    </MapContainer>
  )
}
export default Map
