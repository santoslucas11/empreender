import React from 'react';

import mapMarkerImg from '../images/map-marker.svg';
import {FiPlus} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import '../styles/pages/orphanages-map.css';

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

            <div></div>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap;