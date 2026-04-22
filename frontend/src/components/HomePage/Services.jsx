import { Container, Card, Row, Col, Carousel } from "react-bootstrap";

export default function Services() {
	return (
		<div className="section-white">
			<Container>
				<h2 className="mb-4 text-center purple-font">Palvelumme</h2>
				<Row>
					<Col xs={12} md={6} lg={4} className="mb-4 p-2">
						<Card className="service-card">
							<Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiylqe1GraKYgY--V4AX3wACow56XL3IuAeA&s" />
							<Card.Title>Rakennuttaminen ja valvonta</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna erat,
								auctor a fringilla ut, consectetur non felis.
							</Card.Text>
						</Card>
					</Col>
					<Col xs={12} md={6} lg={4} className="mb-4 p-2">
						<Card className="service-card">
							<Card.Img src="https://images.pexels.com/photos/8469989/pexels-photo-8469989.jpeg" />
							<Card.Title>Projektinjohto</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna erat,
								auctor a fringilla ut, consectetur non felis.
							</Card.Text>
						</Card>
					</Col>
					<Col xs={12} md={6} lg={4} className="mb-4 p-2">
						<Card className="service-card">
							<Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLWHlaevo98twp2LvNRFaW2E6R77yAH4U5w&s" />
							<Card.Title>Rakenne- ja elementtisuunnittelu</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna erat,
								auctor a fringilla ut, consectetur non felis.
							</Card.Text>
						</Card>
					</Col>
				</Row>
				<h2>Lisäksi tarjoamme:</h2>
				<Row>
					<Carousel data-bs-theme="dark" fade>
						<Carousel.Item>
							<img
								className="carousel-image"
								src="https://cdn.pixabay.com/photo/2019/02/06/16/32/architect-3979490_1280.jpg"
							/>
							<Carousel.Caption>
								<h3>Konepajasuunnittelu</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="carousel-image"
								src="https://cdn.pixabay.com/photo/2016/12/09/17/35/worker-1895691_1280.jpg"
							/>
							<Carousel.Caption>
								<h3>Rakennesuunnitelmien kolmannen osapuolten tarkastus</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="carousel-image"
								src="https://cdn.pixabay.com/photo/2021/10/27/11/47/construction-site-6747104_1280.jpg"
							/>
							<Carousel.Caption>
								<h3>Uudis- ja korjausrakennuttaminen</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="carousel-image"
								src="https://cdn.pixabay.com/photo/2024/08/03/10/09/construction-8941880_1280.jpg"
							/>
							<Carousel.Caption>
								<h3>Työmaavalvonta</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item md>
							<img
								className="carousel-image"
								src="https://cdn.pixabay.com/photo/2024/05/02/09/41/construction-8734283_1280.png"
							/>
							<Carousel.Caption>
								<h3>Kosteudenhallinta- ja turvallisuuskoordinaattorin tehtävät</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="carousel-image"
								src="https://cdn.pixabay.com/photo/2024/02/26/14/14/construction-8598093_1280.jpg"
							/>
							<Carousel.Caption>
								<h3>Takuuajan tarkastukset</h3>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Row>
			</Container>
		</div>
	);
}
