import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import Alianda from "../image/a__about.png";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col lg={12}>
            <Card className="contact-card mt-lg-5 py-5 border-0">
              <div className="contact-card__body d-block d-md-flex align-items-md-center justify-content-md-between px-4 px-lg-0 ">
                <div className="contact-card__content pl-md-3 pl-lg-5 text-center text-md-left">
                  <h1 className="second-title text-light">
                    Tertarik bekerja sama dengan saya?
                  </h1>
                  <p className="description text-white mt-4">
                    Sedang menjalani profesi sebagai Freelance, sambil mencari
                    pekerjaan full time
                  </p>
                  <Button
                    variant="second-button"
                    className="px-3 mt-3 mb-lg-0 rounded-lg"
                    href="mailto:alimartondi88@gmail.com"
                  >
                    Kontak Saya
                  </Button>
                </div>
                <img
                  src={Alianda}
                  alt="alianda-batubara"
                  className="card-contact-img text-center pr-md-3 pr-lg-5 img-fluid "
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
