import React, { Component } from "react";
import contacto from "../img/map-image.png";

const Contacto = () =>{
    return(
        <div>
            <br></br>
           <section class="page-section" id="contact" >
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">¿Cómo podemos ayudarte?</h2>
            </div>

            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div class="row align-items-stretch mb-5">
                    <div class="col-md-6">
                        <div class="form-group">
                            
                            <input class="form-control" id="name" type="text" placeholder="Nombre *"
                                data-sb-validations="required" />
                            <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                        </div>
                        <div class="form-group">
                           
                            <input class="form-control" id="email" type="email" placeholder="Correo Electrónico *"
                                data-sb-validations="required,email" />
                            <div class="invalid-feedback" data-sb-feedback="email:required">Un correo eléctronico es
                                requerido</div>
                            <div class="invalid-feedback" data-sb-feedback="email:email">Correo Eléctrónico no válido
                            </div>
                        </div>
                        <div class="form-group mb-md-0">
                          
                            <input class="form-control" id="phone" type="tel" placeholder="Teléfono *"
                                data-sb-validations="required" />
                            <div class="invalid-feedback" data-sb-feedback="phone:required">Un número de teléfono es
                                requerido</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group form-group-textarea mb-md-0">
                          
                            <textarea class="form-control" id="message" placeholder="Tu mensaje *"
                                data-sb-validations="required"></textarea>
                            <div class="invalid-feedback" data-sb-feedback="message:required">Un mensaje es requerido.
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled"
                        id="submitButton" type="submit">Enviar Mensaje</button></div>
            </form>
        </div>
    </section>
        </div>
    )
}

export default Contacto