import React from 'react';
import { useState } from 'react';
import { Container, Tab, Row, Col, Nav, Image, Carousel, Modal, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import CSSLogo from '../assets/autres/CSSLogo.png';
import GitLogo from '../assets/autres/git.png';
import HTMLLogo from '../assets/autres/html.png';
import mongodb from '../assets/BDD/mongodb.png';
import postgresql from '../assets/BDD/mysql.webp';
import mysql from '../assets/BDD/postgresql.png';
import python from '../assets/langages/python.webp';
import C from '../assets/langages/C.png';
import R from '../assets/langages/R.svg';
import java from '../assets/langages/java.webp';
import scikitlearn from '../assets/librairies/scikitlearn.png';
import pandas from '../assets/librairies/pandas.webp';
import pytorch from '../assets/librairies/pytorch.png';
import numpy from '../assets/librairies/numpy.png';
import plotly from '../assets/librairies/plotly.png';
import tensorflow from '../assets/librairies/tensorflow.png';
import '../styles/parcours.css';

const Parcours: React.FC = () => {

  // État pour gérer l'affichage de la modale
  const [showModal, setShowModal] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);

  // Détails avec Markdown
  const details = {
    "Master 1 & 2": `
      ### Master 1 & 2
      Description détaillée du Master 1 & 2 à l'Université de Bordeaux.
      - **Année 1** : Cours fondamentaux et projet de recherche.
      - **Année 2** : Stage en entreprise et rédaction de mémoire.
    `,
    "Licence 3": `
      ### Licence 3
      Description détaillée de l'Erasmus à l'Université Libre de Bruxelles.
      - **Semestre 1** : Cours de spécialité en informatique.
      - **Semestre 2** : Projet en groupe et découverte culturelle.
    `,
    "Licence 1 & 2": `
      ### Licence 1 & 2
      Description détaillée des Licences 1 & 2 au CMI ISI - Université de Bordeaux.
      - **Année 1** : Introduction aux sciences informatiques.
      - **Année 2** : Approfondissement des langages de programmation.
    `
  };

  // // Fonction pour ouvrir la modale
  // const handleShow = (year) => {
  //   setSelectedYear(year);
  //   setShowModal(true);
  // };

  // Fonction pour fermer la modale
  const handleClose = () => {
    setShowModal(false);
    setSelectedYear(null);
  };

  return (
    <section id="parcours" style={{ minHeight: 'calc(106vh - 56px)', paddingTop: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container>
        <Row className="mb-5 d-flex flex-column align-items-center">
          <Col xs={12} className="text-center">
            <h2>Mon Parcours</h2>
          </Col>
        </Row>
        <Row>
          {/* Master */}
          <Col className="parcours-item" >
            <h4>Master 1 & 2</h4>
            <p>CMI ISI - Université de Bordeaux</p>
          </Col>

          {/* Licence 3 */}
          <Col className="parcours-item">
            <h4>Licence 3</h4>
            <p>Erasmus à l'Université Libre de Bruxelles</p>
          </Col>

          {/* Licence 1 & 2 */}
          <Col className="parcours-item">
            <h4>Licence 1 & 2</h4>
            <p>CMI ISI - Université de Bordeaux</p>
          </Col>
        </Row>

        {/* Modale pour afficher les détails */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedYear}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedYear ? (
              <ReactMarkdown>{details[selectedYear]}</ReactMarkdown>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Texte Mes compétences */}
        <Row style={{ marginTop: '100px' }} className="mb-5 d-flex flex-column align-items-center">
          <Col xs={12} className="text-center">
            <h2>Mes compétences</h2>
          </Col>
        </Row>

        {/* Partie inférieure : Langages et librairies (sous le texte) */}
        <Tab.Container id="langages-tabs" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Langages</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Librairies Python</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Base de données</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Autres</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {/* Onglet 1: Langages */}
                  <Tab.Pane eventKey="first">
                    <Carousel indicators={false} interval={null}>
                      <Carousel.Item>
                        <Row className="justify-content-center">
                          <Col xs={4} md={3} className="d-flex justify-content-center">
                            <Image src={python} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                          </Col>
                          <Col xs={4} md={3} className="d-flex justify-content-center">
                            <Image src={C} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                          </Col>
                          <Col xs={4} md={3} className="d-flex justify-content-center">
                            <Image src={R} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                          </Col>
                        </Row>
                      </Carousel.Item>
                      <Carousel.Item>
                        <Row className="justify-content-center">
                          <Col xs={4} md={3} className="d-flex justify-content-center">
                            <Image src={java} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                          </Col>
                        </Row>
                      </Carousel.Item>
                    </Carousel>
                  </Tab.Pane>

                  {/* Onglet 2: Librairies Python */}
                  <Tab.Pane eventKey="second">
                    <Carousel indicators={false} interval={null}>
                      <Carousel.Item>
                        <Row className="justify-content-center">
                          <Col xs={4} md={3} className="d-flex justify-content-center">
                            <Image src={scikitlearn} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                          </Col>
                          <Col xs={4} md={3} className="d-flex justify-content-center">
                            <Image src={pandas} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                          </Col>
                          <Col xs={4} md={3} className="d-flex justify-content-center">
                            <Image src={pytorch} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                          </Col>
                        </Row>
                      </Carousel.Item>
                      <Carousel.Item>
                        <Row className="justify-content-center">
                          <Col xs={4} md={3} className="d-flex justify-content-center">
                            <Image src={numpy} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                          </Col>
                          <Col xs={4} md={3} className="d-flex justify-content-center">
                            <Image src={plotly} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                          </Col>
                          <Col xs={4} md={3} className="d-flex justify-content-center">
                            <Image src={tensorflow} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                          </Col>
                        </Row>
                      </Carousel.Item>
                    </Carousel>
                  </Tab.Pane>

                  {/* Onglet 3: Bases de données */}
                  <Tab.Pane eventKey="third">
                    <Row className="justify-content-center">
                      <Col xs={4} md={3} className="d-flex justify-content-center">
                        <Image src={mongodb} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                      </Col>
                      <Col xs={4} md={3} className="d-flex justify-content-center">
                        <Image src={postgresql} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                      </Col>
                      <Col xs={4} md={3} className="d-flex justify-content-center">
                        <Image src={mysql} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                      </Col>
                    </Row>
                  </Tab.Pane>

                  {/* Onglet 4: Autres */}
                  <Tab.Pane eventKey="fourth">
                    <Row className="justify-content-center">
                      <Col xs={4} md={3} className="d-flex justify-content-center">
                        <Image src={GitLogo} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                      </Col>
                      <Col xs={4} md={3} className="d-flex justify-content-center">
                        <Image src={CSSLogo} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                      </Col>
                      <Col xs={4} md={3} className="d-flex justify-content-center">
                        <Image src={HTMLLogo} fluid style={{ width: '150px', height: '150px', objectFit: 'contain' }} className="icon-image"/>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>

      </Container>
    </section>
  );
};

export default Parcours;



