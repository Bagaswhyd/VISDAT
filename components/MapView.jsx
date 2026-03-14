'use client'
import Map, { Source, Layer } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'


const layerStyle = {
id: 'areas',
type: 'fill',
paint: {
'fill-color': ['interpolate', ['linear'], ['get', 'population'], 0, '#2c7bb6', 3000, '#d7191c'],
'fill-opacity': 0.7
}
}


export default function MapView() {
return (
<Map
mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
initialViewState={{ longitude: -0.1, latitude: 51.5, zoom: 9 }}
style={{ width: '100%', height: '100%' }}
mapStyle="mapbox://styles/mapbox/dark-v11"
>
<Source type="geojson" data="/data/small_area.geojson">
<Layer {...layerStyle} />
</Source>
</Map>
)
}