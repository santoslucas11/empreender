import React from 'react';

import mapMarkerImg from '../images/map-marker.svg';
import {FiPlus} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {Map, TileLayer} from 'react-leaflet'
import '../styles/pages/enterprising-map.css';

import 'leaflet/dist/leaflet.css';

function EnterprisingMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Mapa"/>

                    <h2>Escolha um Produto ou Serviço</h2>
                    <p>Muitos microempreendedores podem estar perto da sua casa!</p>
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

export default EnterprisingMap;