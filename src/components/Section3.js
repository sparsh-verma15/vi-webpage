import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './globalStyles.css'
import graphLeft from "../images/numari-one-graph.png"
import graphRight from "../images/numerai-supreme-graph.png"

const Section3 = () => {
	return (
		<>
			{/* <Container className="text-white text-start">
				<Row>
					<Col>
						<Row className="text-size1">Numerai One</Row>
						<Row className="text-size3">Numerai's Flagship Market Neutral Fund</Row>
                        <Row>
                            <hr />
                        </Row>
						<Row className="text-size4">
							Numerai One seeks to deliver consistent returns in any market
							environment with a highly diversified portfolio that is market,
							country, sector, and factor neutral.
						</Row>
                        <Row className="mt-5">
                            <Image style={{width:"700px"}} src={graphLeft}/>
                        </Row>
					</Col>
					<Col>
						<Row className="text-size1">Numerai Supreme</Row>
						<Row  className="text-size3">The Unconstrained Expression of the Meta Model</Row>
                        <Row>
                            <hr/>
                        </Row>
						<Row  className="text-size4">
							Built on the same investment framework as Numerai One, Numerai
							Supreme1 seeks to deliver higher returns with higher volatility.
							This is achieved through a concentrated portfolio of the Meta
							Model's highest conviction selections while remaining market
							neutral.
						</Row>
                        <Row className="mt-5">
                        <Image style={{width:"700px"}}  src={graphRight}/>
                        </Row>
					</Col>
				</Row>
			</Container> */}
			<Container className="text-start text-white">
				<Row>
					<Col className="text-size1">Numerai One</Col>
					<Col className="text-size1">Numerai Supreme</Col>
				</Row>
				<Row>
					<Col className="text-size3">Numerai's Flagship Market Neutral Fund <hr/></Col>
					<Col className="text-size3">The Unconstrained Expression of the Meta Model <hr/></Col>
				</Row>
				<Row>
					<Col>Numerai One seeks to deliver consistent returns in any market environment with a highly diversified portfolio that is market, country, sector, and factor neutral.</Col>
					<Col>Built on the same investment framework as Numerai One, Numerai Supreme1 seeks to deliver higher returns with higher volatility. This is achieved through a concentrated portfolio of the Meta Model's highest conviction selections while remaining market neutral.</Col>
				</Row>
				<Row>
					<Col><Image fluid  src={graphLeft} /></Col>
					<Col><Image fluid  src={graphRight} /></Col>
				</Row>
			</Container>
		</>
	);
};

export default Section3;
