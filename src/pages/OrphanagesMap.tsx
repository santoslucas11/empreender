import React from 'react';

import mapMarkerImg from '../images/map-marker.svg';
import {FiPlus} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {Map, TileLayer} from 'react-leaflet'
import '../styles/pages/orphanages-map.css';

import 'leaflet/dist/leaflet.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Mapa"/>

                    <h2>Escolha um orfanato</h2>
                    <p>Muitas crianças estão esperando sua visita!</p>
                </header>
                <footer>
                    <strong> Rio de Janeiro </strong>
                    <span> RJ </span>
                </footer>
            </aside>

           <Map 
                center={[-22.8775524,-43.3618939]}
                zoom={15}
                style={{width: '100%', height: '100%'}}>
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap;