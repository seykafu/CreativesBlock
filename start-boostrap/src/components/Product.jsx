import React from 'react'
import image from './64681.jpg'

export default ({product}) => {
    return (
        <section className="page-section" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Product Vision</h2>
                <h3 className="section-subheading text-muted">So how are we going to empower all creatives around the world while providing them income?</h3>
                </div>
            </div>
            <div className="row">
                    { 
                    product && product.map(({problem, solution}, index) => 
                    <div className=".col-md-1 .col-md-1 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div className="portfolio-hover">
                        </div>
                        <img className="img-fluid" src={image} alt=""/>
                        </a>
                        <div className="portfolio-caption">
                            <p>{ problem }</p>
                            <p className="text-muted">{ solution }</p>
                        </div>
                    </div>
                    )
                }
                </div>
            </div>
        </section>
    )
}