import React from 'react'
import './TrustedByClients.css';
import client1 from '../assets/client1.webp';
import client2 from '../assets/client2.webp';
import client3 from '../assets/client3.webp';
import client4 from '../assets/client4.webp';
import client5 from '../assets/client5.webp';
import client6 from '../assets/client6.webp';
import client7 from '../assets/client7.webp';
import client8 from '../assets/client8.webp';

const clients = [client1, client2, client3, client4, client5, client6, client7, client8];

const TrustedByClients = () => {
  return (
    <section className="trusted-by-clients">
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Clients</span>
          <h2 className="section-heading">Trusted by teams worldwide</h2>
        </div>

        <ul className="list">
          {clients.map((logo, index) => (
            <li className="item" key={index}>
              <img src={logo} alt={`Client ${index + 1}`} />
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default TrustedByClients