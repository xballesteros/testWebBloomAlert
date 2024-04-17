import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import '../assets/ultimate.css';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 



const Mapa = (props) => {

    const [geojsonData, setGeojsonData] = useState(null);

    useEffect(() => {
        // Obtenemos datos GeoJSON desde API (Aca puede modificar EndPoints)
        fetch('http://127.0.0.1:8000/geo')
            .then(response => response.json())
            .then(data => setGeojsonData(data));
    }, []);

    // Componente personalizado para volver a centrar el mapa
    function ReCenterButton() {
        const map = useMap();
        const handleClick = () => {
            map.setView([geojsonData.features[0].geometry.coordinates[0][0][1], geojsonData.features[0].geometry.coordinates[0][0][0]], 12); // Seteamos el primer punto del area como centro
            console.log("DATO: " + geojsonData.features[0].geometry.coordinates[0][0][0]);
        };
        return (
            <Button label="Centrar Mapa" onClick={handleClick} className="p-button-raised" style={{ position: 'absolute', top: '100px', left: '10px', zIndex: 1000 }} />
        );
    }

    return (
        <>
            {geojsonData ? (

                <MapContainer
                    center={[geojsonData.features[0].geometry.coordinates[0][0][1], geojsonData.features[0].geometry.coordinates[0][0][0]]} // Seteamos el primer punto del area como centro
                    zoom={12}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        attribution='&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    />
                    {geojsonData && <GeoJSON data={geojsonData} />}
                    <ReCenterButton />
                </MapContainer>

            ) : (
                <p>Cargando Solicitud ...</p>
            )}
        </>
    );
};


const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode && prevProps.isNewThemeLoaded === nextProps.isNewThemeLoaded && prevProps.onNewThemeChange === nextProps.onNewThemeChange;
};

export default React.memo(Mapa, comparisonFn);
