import React from 'react'
import './contacto.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function contacto() {
  return (
    <Container>
      <Form className="form" method='POST'>
      <Form.Group className="mb-3" >
        <Form.Label className="label">Nombre completo</Form.Label>
        <Form.Control type="text" placeholder="Introduzca su nombre" />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label className="label">Email</Form.Label>
        <Form.Control type="email" placeholder="Introduzca su email" />
        <Form.Text className="text-muted">
          No compartiré su email con nadie más.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="label">Asunto</Form.Label>
        <Form.Control type="text" placeholder="Introduzca el asunto" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="label">Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Deje su mensaje acá"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </Container>
  )
}

export default contacto