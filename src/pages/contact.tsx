import React from 'react';
import '../styles/contact.css';
import { Container, Form, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logique d'envoi d'email sécurisée ici
  };

  return (
    <section id="contact" 
      style={{ minHeight: 'calc(100vh - 56px)', paddingTop: '56px', backgroundColor: '#D9D9D9' }}
    >
      <Container className="contact-container">
        <h2 className="contact-title">Contactez-moi</h2>
        <p className="contact-description">Envoyez-moi un message pour toute question ou collaboration.</p>
        
        <Form onSubmit={handleSubmit} className="contact-form">
          <Form.Group controlId="formName">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Votre nom" required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Votre email" required />
          </Form.Group>

          <Form.Group controlId="formSubject">
            <Form.Label>Sujet</Form.Label>
            <Form.Control type="text" placeholder="Sujet du message" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Votre message" required />
          </Form.Group>

          <Button variant="primary" type="submit" className="submit-button">
            Envoyer
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
