import React from 'react';
import './OurClients.css';

const OurClients = ({
  client1heading,
  client1phrase,
  client2heading,
  client2phrase,
  client3heading,
  client3phrase,
  client4heading,
  client4phrase,
  client5heading,
  client5phrase,
}) => {
  return (
    <section className="clients" aria-label='our happy clients'>
      <div className="container">

        <ul className="list">
          <li className="item">
            <h2 className='section-heading'>{client1heading}</h2>
            <p className='section-desc'>{client1phrase}</p>
          </li>
          <li className="item">
            <h2 className='section-heading'>{client2heading}</h2>
            <p className='section-desc'>{client2phrase}</p>
          </li>
          <li className="item">
            <h2 className='section-heading'>{client3heading}</h2>
            <p className='section-desc'>{client3phrase}</p>
          </li>
          <li className="item">
            <h2 className='section-heading'>{client4heading}</h2>
            <p className='section-desc'>{client4phrase}</p>
          </li>
          <li className="item">
            <h2 className='section-heading'>{client5heading}</h2>
            <p className='section-desc'>{client5phrase}</p>
          </li>
        </ul>

      </div>
    </section>
  )
}

export default OurClients