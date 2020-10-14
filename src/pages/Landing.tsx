import React from 'react';

import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/map-marker.svg';

function Landing(){
    return(
        <div id="page-landing">
      <div className="content-wrapper">
        <img src= {logoImg} alt="Empreende Local"/>
        <h1>Empreende Local</h1>

        <main>
          <h1>Ajude a melhorar o seu bairro</h1>
          <p>Procure e compre com empreendedores da sua região</p>
        </main>

        <div className="location">
          <strong>Rio de Janeiro</strong>
          <span>RJ</span>
        </div>

        <Link to="/app" className="enter-app" >
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </Link>
        
      </div>
    </div>
    );
}

export default Landing;