import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Perfil = () => {
  // Datos personales del usuario
  const userData = {
    firstName: 'Jose',
    lastName: 'Perez',
    address: 'Av. Corrientes 123',
    city: 'Buenos Aires',
    postalCode: '1234',
    phoneNumber: '555-1234',
    email: 'jose@example.com',
  };

  // Historial de compras del usuario
  const compras = [
    {
      fecha: '10/05/2023',
      productos: [
        { nombre: 'Gorro', precio: 10, cantidad: 2 },
        { nombre: 'Camiseta', precio: 20, cantidad: 1 },
      ],
    },
    {
      fecha: '20/05/2023',
      productos: [
        { nombre: 'Pantalón', precio: 30, cantidad: 1 },
        { nombre: 'Zapatillas', precio: 50, cantidad: 1 },
      ],
    },
  ];

  return (
    <Container className="text-center">
      <Row>
        <Col md={6} className="text-left">
          <h2 className="mt-3">{`${userData.firstName} ${userData.lastName}`}</h2>
          <ul className="list-unstyled">
            <li>
              <strong>Dirección:</strong> {userData.address}
            </li>
            <li>
              <strong>Localidad:</strong> {userData.city}
            </li>
            <li>
              <strong>Código Postal:</strong> {userData.postalCode}
            </li>
            <li>
              <strong>Número de Teléfono:</strong> {userData.phoneNumber}
            </li>
            <li>
              <strong>Email:</strong> {userData.email}
            </li>
          </ul>
        </Col>
        <Col md={6} className="text-left">
          <h4 className="mt-3">Historial de Compra</h4>
          {compras.map((compra, index) => (
            <div key={index} className="mb-3">
              <p>
                <strong>Fecha:</strong> {compra.fecha}
              </p>
              <ul className="list-unstyled">
                {compra.productos.map((producto, index) => (
                  <li key={index}>
                    <strong>Producto:</strong> {producto.nombre}
                    <br />
                    <strong>Precio:</strong> {producto.precio}
                    <br />
                    <strong>Cantidad:</strong> {producto.cantidad}
                  </li>
                ))}
              </ul>
              <hr />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Perfil;
