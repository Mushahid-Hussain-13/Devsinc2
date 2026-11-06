import React from 'react';
import './ShopifyAppTwoPaths.css';

const ShopifyAppTwoPaths = () => {
  return (
    <section className="shopify-app-paths" aria-label='shopify app paths'>
      <div className="container">

        <div className="hero-header">
          <span className="section-tag">Two paths</span>
          <h2 className="section-heading">Private or public? It shapes everything.</h2>
        </div>

        <div className="wrapper">
          <div className="content content-1">
            <h3 className="title">You need a private app when</h3>
            <p className="desc">The problem is specific to your business, no public app fits without compromise, the logic touches internal systems, or the data cannot leave your control.</p>

            <div className="points">
              <span className="point">Faster to build</span>
              <span className="point">Yours entirely</span>
              <span className="point">No App Store review</span>
            </div>
          </div>
          <div className="content content-2">
            <h3 className="title">You need a public app when</h3>
            <p className="desc">The problem is shared by other merchants and you want to sell the solution. Multi-tenancy, billing, support, and App Store review all come with it.</p>

            <div className="points">
              <span className="point">Multi-tenant</span>
              <span className="point">Shopify billing</span>
              <span className="point">A sellable asset</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ShopifyAppTwoPaths