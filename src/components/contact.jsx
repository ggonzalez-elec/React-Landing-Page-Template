import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    // emailjs
    //   .sendForm("service_s7mnl2c", "template_0dgmpwd", e.target, "Eh5bR6kijBXgSNCNQ")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setSent(true);
    //       clearState();
    //     }      
    //   )
    //   .catch(
    //     (error) => {
    //       setSent(false);
    //       setError(true);
    //       console.log(error.text);
    //     }
    //   )
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Ponete en contacto</h2>
                <p>
                  Completa el formulario debajo para mandarnos un mail y nos pondremos en contacto lo antes posible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        value={name}
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nombre y Apellido"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        value={email}
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    value={message}
                    className="form-control"
                    rows="4"
                    placeholder="Mensaje"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                {
                  sent ? (
                    <button
                      disabled
                      className="btn btn-custom btn-lg"
                    >
                      <span>
                        <i className="fa fa-check"></i> Mensaje enviado
                      </span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-custom btn-lg"
                    >
                      Enviar mensaje
                    </button>
                  )
                }
                {
                  error && (
                    <div className="service-error">
                      <p>
                        <span>
                          <i className="fa fa-exclamation-circle"></i> No se pudo enviar el mail, intente nuevamente más tarde o comuníquese directamente a email@email.com
                        </span>
                      </p>
                    </div>
                  )
                }
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Información de contacto</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Dirección
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Teléfono
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            Copyright 2023 Barlovento | Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};
