import React, { useState, useContext } from 'react';
import { Button, Form, Row, Col, Container, Modal } from 'react-bootstrap';
import { CartContext } from '../CartProvider';

const FormOrder = () => {
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const { clearCart } = useContext(CartContext);

  const validateEmail = (value) => {
    if (!value || !value.includes('@')) {
      return 'Ingrese  un mail válido.';
    }
    return '';
  };

  const validateLength = (value, minLength) => {
    if (!value || value.length < minLength) {
      return `Por favor, ingresa al menos ${minLength} caracteres.`;
    }
    return '';
  };

  const validateNumber = (value) => {
    if (isNaN(value)) {
      return 'Por favor, ingresa un número válido.';
    }
    return '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailError = validateEmail(email);
    const direccionError = validateLength(direccion, 6);
    const localidadError = validateLength(localidad, 6);
    const codigoPostalError = validateNumber(codigoPostal);

    const errors = {
      email: emailError,
      direccion: direccionError,
      localidad: localidadError,
      codigoPostal: codigoPostalError,
    };

    setFormErrors(errors);

    if (emailError || direccionError || localidadError || codigoPostalError) {
    
      return;
    }

    setShowModal(true);
  };
  const resetForm = () => {
    setEmail("");
    setDireccion("");
    setLocalidad("");
    setCodigoPostal("");
    setFormErrors({});
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
    clearCart();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="jose.perez@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!formErrors.email}
            />
            <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <Form.Label>Dirección de envio</Form.Label>
            <Form.Control
              placeholder="Av. corrientes 1500"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              isInvalid={!!formErrors.direccion}
            />
            <Form.Control.Feedback type="invalid">{formErrors.direccion}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Localidad</Form.Label>
            <Form.Control
              value={localidad}
              placeholder="Ciudad Autónoma de Buenos Aires"
              onChange={(e) => setLocalidad(e.target.value)}
              isInvalid={!!formErrors.localidad}
            />
            <Form.Control.Feedback type="invalid">{formErrors.localidad}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control
              value={codigoPostal}
              placeholder="1431"
              onChange={(e) => setCodigoPostal(e.target.value)}
              isInvalid={!!formErrors.codigoPostal}
            />
            <Form.Control.Feedback type="invalid">{formErrors.codigoPostal}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Realizar compra
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Su compra fue realizada con éxito</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>El detalle de la compra y la factura le estará llegando al correo registrado.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default FormOrder;
