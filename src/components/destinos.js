import React, { Component } from "react";
import porfolio1 from "../img/portfolio/1.jpg";
import porfolio2 from "../img/portfolio/2.jpg";
import porfolio3 from "../img/portfolio/3.jpg";
import porfolio4 from "../img/portfolio/4.jpg";
import porfolio5 from "../img/portfolio/5.jpg";
import porfolio6 from "../img/portfolio/6.jpg";

import closeicono from "../img/close-icon.svg";



const Destinos = () => {
    return (
        <section class="page-section bg-light" id="portfolio">
            <div>
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Destinos</h2>
                        <h3 class="section-subheading text-muted">Elegí el lugar de tu próximo viaje!</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-sm-6 mb-4">

                            <div class="portfolio-item">
                                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={porfolio1} alt="..." />
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Aruba</div>
                                    <div class="portfolio-caption-subheading text-muted"> Promociones del 01/08/2022 -
                                        31/10/2022</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 mb-4">

                            <div class="portfolio-item">
                                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={porfolio2} alt="..." />
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Londres</div>
                                    <div class="portfolio-caption-subheading text-muted">Promociones del 01/08/2022 - 31/10/2022
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 mb-4">

                            <div class="portfolio-item">
                                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={porfolio3} alt="..." />
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Buenos Aires</div>
                                    <div class="portfolio-caption-subheading text-muted">Promociones del 01/08/2022 - 31/10/2022
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">

                            <div class="portfolio-item">
                                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={porfolio4} alt="..." />
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">España</div>
                                    <div class="portfolio-caption-subheading text-muted">Promociones del 01/08/2022 - 31/10/2022
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">

                            <div class="portfolio-item">
                                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={porfolio5} alt="..." />
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Estados Unidos</div>
                                    <div class="portfolio-caption-subheading text-muted">Promociones del 01/08/2022 - 31/10/2022
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">

                            <div class="portfolio-item">
                                <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src={porfolio6} alt="..." />
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">Disney</div>
                                    <div class="portfolio-caption-subheading text-muted">Festejá tus 15 en este destino Mágico!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                               
                                <h2 class="text-uppercase">Aruba</h2>
                                <p class="item-intro text-muted">Promociones del 01/08/2022 - 31/10/2022</p>
                                <img class="img-fluid d-block mx-auto" src={porfolio1} alt="..." />
                                <p>Disfruta 5 noches con desayuno en ZENTIVA PINAMAR 4*$ 18.864 POR PERSONA en BASE
                                    DOBLE
                                <ul>
                                    <strong>INCLUYE</strong>

                                    <li>5 noches en Zentiva Pinamar 4* en habitación doble</li>

                                    <li>Desayuno</li>

                                    <li>Spa</li>

                                    <li>Piscina climatizada</li>

                                    <li>Gimnasio</li>

                                    <li>No Incluye alícuota resolución general AFIP Nº 3819/15 Aéreo-Terrestre
                                        (5%),sujeta a modalidad de pago.</li>
                                </ul>
                                </p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Medios de Pagos:</strong>
                                        Consultar
                                    </li>
                                    <li>
                                        <strong>Fechas:</strong>
                                        Consultar
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
              
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                             
                                <h2 class="text-uppercase">Londres</h2>
                                <p class="item-intro text-muted">Promociones del 01/08/2022 - 31/10/2022</p>
                                <img class="img-fluid d-block mx-auto" src={porfolio2} alt="..." />
                                <p>Disfruta 5 noches con desayuno en ZENTIVA PINAMAR 4*$ 18.864 POR PERSONA en BASE
                                    DOBLE
                                <ul>
                                    <strong>INCLUYE</strong>

                                    <li>5 noches en Zentiva Pinamar 4* en habitación doble</li>

                                    <li>Desayuno</li>

                                    <li>Spa</li>

                                    <li>Piscina climatizada</li>

                                    <li>Gimnasio</li>

                                    <li>No Incluye alícuota resolución general AFIP Nº 3819/15 Aéreo-Terrestre
                                        (5%),sujeta a modalidad de pago.</li>
                                </ul>
                                </p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Medios de Pagos:</strong>
                                        Consultar
                                    </li>
                                    <li>
                                        <strong>Fechas:</strong>
                                        Consultar
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                
                                <h2 class="text-uppercase">Buenos Aires</h2>
                                <p class="item-intro text-muted">Promociones del 01/08/2022 - 31/10/2022</p>
                                <img class="img-fluid d-block mx-auto" src={porfolio3} alt="..." />
                                <p>Disfruta 5 noches con desayuno en ZENTIVA PINAMAR 4*$ 18.864 POR PERSONA en BASE
                                    DOBLE
                                <ul>
                                    <strong>INCLUYE</strong>

                                    <li>5 noches en Zentiva Pinamar 4* en habitación doble</li>

                                    <li>Desayuno</li>

                                    <li>Spa</li>

                                    <li>Piscina climatizada</li>

                                    <li>Gimnasio</li>

                                    <li>No Incluye alícuota resolución general AFIP Nº 3819/15 Aéreo-Terrestre
                                        (5%),sujeta a modalidad de pago.</li>
                                </ul>
                                </p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Medios de Pagos:</strong>
                                        Consultar
                                    </li>
                                    <li>
                                        <strong>Fechas:</strong>
                                        Consultar
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                               
                                <h2 class="text-uppercase">España</h2>
                                <p class="item-intro text-muted">Promociones del 01/08/2022 - 31/10/2022</p>
                                <img class="img-fluid d-block mx-auto" src={porfolio4} alt="..." />
                                <p>Disfruta 5 noches con desayuno en ZENTIVA PINAMAR 4*$ 18.864 POR PERSONA en BASE
                                    DOBLE
                                <ul>
                                    <strong>INCLUYE</strong>

                                <li>5 noches en Zentiva Pinamar 4* en habitación doble</li>

                                <li>Desayuno</li>

                                <li>Spa</li>

                                <li>Piscina climatizada</li>

                                <li>Gimnasio</li>

                                <li>No Incluye alícuota resolución general AFIP Nº 3819/15 Aéreo-Terrestre (5%),sujeta a modalidad de pago.</li>
                                </ul>
                                </p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Medios de Pagos:</strong>
                                        Consultar
                                    </li>
                                    <li>
                                        <strong>Fechas:</strong>
                                        Consultar
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
             
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                             
                                <h2 class="text-uppercase">Estados Unidos</h2>
                                <p class="item-intro text-muted">Promociones del 01/08/2022 - 31/10/2022</p>
                                <img class="img-fluid d-block mx-auto" src={porfolio5} alt="..." />
                                <p>Disfruta 5 noches con desayuno en ZENTIVA PINAMAR 4*$ 18.864 POR PERSONA en BASE
                                    DOBLE
                                <ul>
                                    <strong>INCLUYE</strong>

                                <li>5 noches en Zentiva Pinamar 4* en habitación doble</li>

                                <li>Desayuno</li>

                                <li>Spa</li>

                                <li>Piscina climatizada</li>

                                <li>Gimnasio</li>

                                <li>No Incluye alícuota resolución general AFIP Nº 3819/15 Aéreo-Terrestre (5%),sujeta a modalidad de pago.</li>
                                </ul>
                                </p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Medios de Pago:</strong>
                                        Consultar
                                    </li>
                                    <li>
                                        <strong>Fecha:</strong>
                                        Consultar
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
              
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                
                                <h2 class="text-uppercase">Disney</h2>
                                <p class="item-intro text-muted">Festejá tus 15 en este destino Mágico!</p>
                                <img class="img-fluid d-block mx-auto" src={porfolio6}alt="..." />
                                <p>Disfruta 5 noches con desayuno en ZENTIVA PINAMAR 4*$ 18.864 POR PERSONA en BASE
                                    DOBLE
                                <ul>
                                    <strong>INCLUYE</strong>

                                <li>5 noches en Zentiva Pinamar 4* en habitación doble</li>

                                <li>Desayuno</li>

                                <li>Spa</li>

                                <li>Piscina climatizada</li>

                                <li>Gimnasio</li>

                                <li>No Incluye alícuota resolución general AFIP Nº 3819/15 Aéreo-Terrestre (5%),sujeta a modalidad de pago.</li>
                                </ul>
                                </p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Medios de Pago:</strong>
                                        Consultar
                                    </li>
                                    <li>
                                        <strong>Fecha:</strong>
                                        Consultar
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </section>

        
    )
}

export default Destinos