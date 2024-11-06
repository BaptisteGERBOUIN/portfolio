import React from 'react';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';
import imgbdd from '../assets/cards/basededonnees.jpg';
import imgpacman from '../assets/cards/pacman.png';
import imgmorpion from '../assets/cards/morpion.png';
import imgeau from '../assets/cards/eau.jpg';
import '../styles/projets.css';


const Projets: React.FC = () => {
  return (
    <section 
      id="projets" 
      style={{ minHeight: 'calc(106vh - 56px)', paddingTop: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Container className="text-center">
        {/* Titre de la section */}
        <h2 className="mes-projets-title">Mes projets</h2>
        <Carousel indicators={false}>
          {/* Premier item avec trois cartes */}
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={4} md={3} className="d-flex justify-content-center">
                <Card className="card-gradient" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src= {imgbdd} />
                  <Card.Body>
                    <Card.Title>Modélisation et implémentation d'une base de données de l'INSEE</Card.Title>
                    <Card.Text>
                      Projet de modélisation de données avec des techniques avancées pour l'INSEE.
                    </Card.Text>
                    <Button 
                      variant="primary" 
                      href='https://github.com/Myuketsu/Design-and-implementation-of-an-INSEE-database' 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Découvrir
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4} md={3} className="d-flex justify-content-center">
                <Card className="card-gradient" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src= {imgeau} />
                  <Card.Body>
                    <Card.Title>Analyse des ressources d'eau en France</Card.Title>
                    <Card.Text>
                      Analyse approfondie des ressources en eau en utilisant des données nationales.
                    </Card.Text>
                    <Button 
                      variant="primary" 
                      href='https://github.com/BaptisteGERBOUIN/French-water-resources-analysis-platform' 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Découvrir
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4} md={3} className="d-flex justify-content-center">
                <Card className="card-gradient" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src= {imgmorpion} />
                  <Card.Body>
                    <Card.Title>Modèle d'intelligence artificielle pour le jeu de Morpion</Card.Title>
                    <Card.Text>
                      Développement d'un modèle d'IA pour jouer au jeu du Morpion.
                    </Card.Text>
                    <Button 
                      variant="primary" 
                      href='https://github.com/HamadTria/Board-Games-with-AI' 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Découvrir
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          {/* Deuxième item avec une carte */}
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={4} md={3} className="d-flex justify-content-center">
                <Card className="card-gradient" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src= {imgpacman} />
                  <Card.Body>
                    <Card.Title>Projets d'intelligence artificielle pour le jeu PACMAN</Card.Title>
                    <Card.Text>
                      Implémentation de stratégies d'IA pour le jeu PACMAN.
                    </Card.Text>
                    <Button 
                      variant="primary" 
                      href='https://github.com/BaptisteGERBOUIN/PROJET-IA-PACMAN' 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Découvrir
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Projets;
