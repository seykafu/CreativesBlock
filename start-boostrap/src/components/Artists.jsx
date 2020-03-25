import React from 'react'
import image from './artist.jpg'

export default ({artist_1}) => {
    return (
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
                { 
                    artist_1 && artist_1.map(({title, caption}, index) => 
                    <div className=".col-md-10 .col-md-10 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img className="img-fluid" src={image} alt="" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>{ title }</h4>
                            <p className="text-muted">{ caption }</p>
                        </div>
                    </div>
                    )
                }
        </div>
    </section>
    )
}