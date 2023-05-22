import React, { useState, useContext } from 'react';
import { Button, Form, Row, Col, Container, Modal } from 'react-bootstrap';
import { CartContext } from '../CartProvider';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const FormOrder = () => {
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const { cart, clearCart } = useContext(CartContext);
 
  const validateEmail = (value) => {
    if (!value || !value.includes('@')) {
      return 'Ingrese un correo electrónico válido.';
    }
    return '';
  };

  const validateLength = (value, minLength) => {
    if (!value || value.length < minLength) {
      return `Por favor, ingrese al menos ${minLength} caracteres.`;
    }
    return '';
  };

  const validateNumber = (value) => {
    if (isNaN(value)) {
      return 'Por favor, ingrese un número válido.';
    }
    return '';
  };

  const agregarDocumento = async (fecha, items, total, user) => {
    try {
      const nuevoDocumento = await addDoc(collection(db, "order"), {
        fecha: fecha,
        items: items,
        total: total,
        user: user,
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleSubmit = async (event) => {
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
  
    if (cart.length === 0) {
      return;
    }
  
    const cartItems = cart.map((item) => ({
      nombre: item.item.nombre,
      cantidad: item.quantity,
      precio: item.item.precio,
    }));
  
    const totalCarrito = cart.reduce(
      (total, item) => total + item.quantity * item.item.precio,
      0
    );
  
    const userData = {
      email: email,
      direccion: direccion,
      localidad: localidad,
      codigoPostal: codigoPostal,
    };
  
    const fecha = new Date();
    const items = cartItems;
    const total = totalCarrito;
    const user = userData;
  
    try {
      await agregarDocumento(fecha, items, total, user);
      setShowModal(true);
    } catch (error) {
      console.error("Error al agregar el documento:", error);
    }
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
    clearCart(); 
    resetForm(); 
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3>Ingrese sus datos</h3>
        <hr style={{ width: "50%" }} />

        <Form.Group as={Row} className="mb-3" controlId="email">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!formErrors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.email}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="direccion">
          <Form.Label column sm={2}>
            Dirección
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Ingrese su dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              isInvalid={!!formErrors.direccion}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.direccion}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="localidad">
          <Form.Label column sm={2}>
            Localidad
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Ingrese su localidad"
              value={localidad}
              onChange={(e) => setLocalidad(e.target.value)}
              isInvalid={!!formErrors.localidad}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.localidad}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="codigoPostal">
          <Form.Label column sm={2}>
            Código Postal
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Ingrese su código postal"
              value={codigoPostal}
              onChange={(e) => setCodigoPostal(e.target.value)}
              isInvalid={!!formErrors.codigoPostal}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.codigoPostal}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Button type="submit">Realizar Pedido</Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Pedido Realizado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Su pedido ha sido realizado exitosamente. ¡Gracias por su compra!
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
