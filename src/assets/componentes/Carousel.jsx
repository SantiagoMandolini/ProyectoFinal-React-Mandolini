import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carousel = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="position-relative">
                    <div id="carouselWithControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../assets/componentes/img/Rog-phone-8-banner.webp" className="d-block w-100" alt="Rog-phone-8-banner.webp" />
                            </div>
                            <div className="carousel-item">
                                <img src="/assets/componentes/img/switch-banner.webp" className="d-block w-100" alt="switch-banner" />
                            </div>
                            <div className="carousel-item">
                                <img src="/assets/componentes/img/persona-3-banner.webp" className="d-block w-100" alt="persona-3-banner" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselWithControls" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselWithControls" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
