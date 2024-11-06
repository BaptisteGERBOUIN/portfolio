import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import badmintonImage from '../assets/interests/badminton.jpg';
import cookingImage from '../assets/interests/cuisine.jpg';
import cinemaImage from '../assets/interests/cinema.jpg';
import '../styles/interet.css';

const Interet: React.FC = () => {
  return (
    <section id="interet" style={{ minHeight: 'calc(107vh - 56px)', backgroundColor: '#A9A9A9', padding: '20px 0', paddingTop: '110px' }}>
      <Container className="text-center">
        <h1 style={{ marginBottom: '40px', fontSize: '2.5rem', fontWeight: 'bold' }}>Mes intérêts</h1>

        <Row className="interests-row h-100">
          <Col className="interest-image-wrapper">
            <img src={badmintonImage} alt="Badminton" className="interest-image diagonal-left" />
          </Col>
          <Col className="interest-image-wrapper">
            <img src={cookingImage} alt="Cuisine" className="interest-image diagonal-center" />
          </Col>
          <Col className="interest-image-wrapper">
            <img src={cinemaImage} alt="Cinéma" className="interest-image diagonal-right" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Interet;
