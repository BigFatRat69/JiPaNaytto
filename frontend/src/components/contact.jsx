import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFileInvoice } from "react-icons/fa";
import backgroundImage from "../assets/JIPA_Yhteiskuva.jpg";

export default function Contact() {
  return (
    <div>
      <div style={{ textAlign: "center", padding: "60px 0 20px 0" }}>
        <h1 className="contact-title purple-font">Yhteystiedot</h1>
      </div>

      <div
        className="contact-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="contact-section">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card className="contact-card">
                <Card.Body>
                  <h4 className="mb-4">Jyväskylän Insinööripalvelu Oy</h4>

                  <p>
                    <FaMapMarkerAlt className="icon" /> Kirrintie 11<br />
                    40270 Jyväskylä
                  </p>

                  <p>
                    <FaEnvelope className="icon" /> etunimi.sukunimi@jipa.fi
                  </p>

                  <p>
                    <FaPhone className="icon" /> 
                    <Link to="/employees">Puhelinnumerot henkilöittäin</Link>
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="contact-card">
                <Card.Body>
                  <h4 className="mb-4">Laskutus</h4>

                  <p>
                    <FaFileInvoice className="icon" />
                    <strong> Verkkolaskutusosoite</strong>
                    <br />
                    003734999895
                  </p>

                  <p>
                    <strong>Välittäjä</strong>
                    <br />
                    Apix Messaging Oy
                  </p>

                  <p>
                    <strong>Operaattoritunnus</strong>
                    <br />
                    003723327487
                  </p>

                  <p>
                    <strong>Maksuehto</strong>
                    <br />
                    30 pv tai sopimuksen mukaan
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
	</div>
)}