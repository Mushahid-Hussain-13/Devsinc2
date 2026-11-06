import React from 'react'
import './Blogs.css';

const Blogs = () => {
  return (
    <section className="blogs">
      <div className="container">

        <div className="blogs-header">
          <div className="elem">
            <span className="section-tag">Technology insights and guides</span>
            <h2 className="section-heading">Blogs</h2>
          </div>
          <a href="#">All blogs →</a>
        </div>

        <div className="wrapper">

          <a href="#">
            <div className="content-left">
              <div className="elem1">
                <div className="child1">
                  <p>The Build vs Buy Ledger</p>
                  <p>No. 01</p>
                </div>
                <div className="child2">
                  <h2>By Year <br />Three</h2>
                  <span className="line"></span>
                </div>
                <div className="child3">
                  <div>
                    <p>Avg. breach cost, ungoverned AI</p>
                    <h4 className='text-teal'>$4.63M</h4>
                  </div>
                  <p>IBM, 2025 Cost of a Data Breach</p>
                </div>
              </div>

              <div className="elem2">
                <span className='text'>Featured essay</span>
                <span className="line"></span>
                <span className="date-text">Aug 9, 2026 · 5 min read</span>
              </div>

              <h2 className="section-heading">
                Vibe Coded CRMs Promise to Replace Salesforce for Free. Here's What It Actually Costs by Year Three.
              </h2>
            </div>
          </a>

          <div className="content-right">
            <div className="blog-item">
              <a href="#">
                <span className='num-text'>01</span>
                <div>
                  <h3>Vibe Coded CRMs Promise to Replace Salesforce for Free. Here's What It Actually Costs by Year Three.</h3>
                  <span>Build vs Buy · 5 min read</span>
                </div>
              </a>
            </div>
            <div className="blog-item">
              <a href="#">
                <span className='num-text'>02</span>
                <div>
                  <h3>Cloud Transformation: Enhancing Agility & Scalability</h3>
                  <span>Cloud Computing · 6 min read</span>
                </div>
              </a>
            </div>
            <div className="blog-item">
              <a href="#">
                <span className='num-text'>03</span>
                <div>
                  <h3>Revolutionizing Fintech with Artificial Intelligence</h3>
                  <span>Fintech · 3 min read</span>
                </div>
              </a>
            </div>
            <div className="blog-item">
              <a href="#">
                <span className='num-text'>04</span>
                <div>
                  <h3>Devsinc and Packages Group Sign Strategic Technology Partnership MOU</h3>
                  <span>Business · 6 min read</span>
                </div>
              </a>
            </div>
            <div className="blog-item">
              <a href="#">
                <span className='num-text'>05</span>
                <div>
                  <h3>Custom Web App Development: What You Need to Know</h3>
                  <span>Web Development · 6 min read</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        <div className="wrapper2">
          <p>A weekend of AI-assisted building looks free in month one. Here is what it costs by year three.</p>
          <br />
          <p>Written by <strong>MarTech</strong> · Devsinc</p>
        </div>

      </div>
    </section>
  )
}

export default Blogs