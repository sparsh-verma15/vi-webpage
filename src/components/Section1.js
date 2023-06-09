import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './globalStyles.css'
import './Section1.css'
import graph from "../images/graphtemp.jpg"
import { Image } from "react-bootstrap";

const Section1 = () => {
	return (
		<Container className="text-white pt-md-5 mt-md-5">
			<Row>
				<Col md={5} xs={12} className="text-size3">
					<div className="p-2">
						Numerai has gathered the best data scientists in the world and let
						them build machine learning models on the highest quality stock
						market data.
					</div>
					<div className="p-2">
						The result is a next-generation hedge fund which is outperforming
						market neutral indexes and traditional quant funds.
					</div>
				</Col>
				<Col md={7} xs={12} className="text-size3">
					<Container>
                        <div>
                            <Image src={graph} fluid/>
                        </div>
                        <div className="text-size2 text-left">
                        Monthly performance net of fees
                        </div>
						<Row className="table-row">
							<Col>Annualized Return</Col>
							<Col className="text-bold">12.53%</Col>
						</Row>
						<Row className="table-row">
							<Col>Annualized Volatility</Col>
							<Col className="text-bold">7.63%</Col>
						</Row>
						<Row className="table-row">
							<Col>Sharpe Ratio</Col>
							<Col className="text-bold">1.64</Col>
						</Row>
						<Row className="table-row">
							<Col>Sortino Ratio</Col>
							<Col className="text-bold">4.46</Col>
						</Row>
						<Row className="table-row">
							<Col>Correlation to S&P 500</Col>
							<Col className="text-bold">-0.06</Col>
						</Row>
                        <Row>
                            <button className="download-performance-button">
                                Download Performance
                            </button>
                        </Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default Section1;
