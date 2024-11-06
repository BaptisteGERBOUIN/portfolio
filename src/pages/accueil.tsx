import React from 'react';
import { Container, Image, Button, Row, Col } from 'react-bootstrap';
import '../styles/accueil.css';
import imagePresentation from '../assets/photodemoi.jpg';

const AccueilSimplifie: React.FC = () => {
  return (
    <section id="accueil" className="accueil-simplifie-section">
      <Container>
        <Row className="align-items-center">
          {/* Colonne pour la photo de profil */}
          <Col md={4} className="text-center mb-4 mb-md-0">
            <Image 
              src={imagePresentation} 
              alt="Photo de présentation" 
              roundedCircle 
              className="profile-photo" 
            />
          </Col>

          {/* Colonne pour le texte de présentation */}
          <Col>
            <p className="Nom_prenom">
              Baptiste Gerbouin
            </p>
            <p className="presentation-text">
              Passionné de <strong>data science</strong> et d’<strong>intelligence artificielle</strong>,
              j’adore explorer les données et transformer des défis en solutions innovantes. 
              N'hésitez pas à explorer mon portfolio pour découvrir mes projets, mon parcours et mes compétences!
            </p>

            {/* Bouton pour accéder au portfolio */}
            <Button 
              href="#projets" 
              className="me-3 mb-3 explore-button"
              style={{ backgroundColor: '#c6e1f4', color: '#333', border: 'none' }}
            >
              Projets
            </Button>
            <Button 
              href="#parcours" 
              className="me-3 mb-3 explore-button"
              style={{ backgroundColor: '#c6e1f4', color: '#333', border: 'none' }}
            >
              Parcours et Compétences
            </Button>
            {/* <Button 
              href="#interet"
              className="me-3 mb-3 explore-button"
              style={{ backgroundColor: '#c6e1f4', color: '#333', border: 'none' }}
            >
              Centres d'intérêts
            </Button> */}
            <Button 
              href="#contact" 
              className="me-3 mb-3 explore-button"
              style={{ backgroundColor: '#c6e1f4', color: '#333', border: 'none' }}
            >
              Contactez-moi
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AccueilSimplifie;
