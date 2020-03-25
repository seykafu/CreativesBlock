import React from 'react'

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
                    <div className=".col-md-2 .col-md-2 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img className="img-fluid" src="https://unsplash.it/97/140/?random" alt=""/>
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