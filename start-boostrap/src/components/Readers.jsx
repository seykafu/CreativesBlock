import React from 'react'
import image from './anime_reader.jpg'

export default ({reader_1}) => {
    return (
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
                { 
                    reader_1 && reader_1.map(({title, caption}, index) => 
                    <div className=".col-md-4 .col-md-4 portfolio-item">
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