import React from "react";
import "./globalStyles.css";
import { Container, Row, Col } from "react-bootstrap";

const Section3 = () => {
	return (
		<>
			<Container className="text-white text-start">
				<Row className="align-items-center">
					<Col className="text-size1"> Get in touch</Col>
					<Col>
						If you're an institutional investor, mail us at investing@numer.ai
					</Col>
				</Row>
                <hr/>
				<Row className="align-items-center" >
					<Col className="text-size1">Skin in the game incentivizes the crowd.</Col>
					<Col>
						Numerai uses cryptocurrency staking to incentivize our global
						network of data scientists to submit the best possible machine
						learning models which power our global equity hedge fund. We never
						trade crypto. But we have created an institutional grade market
						neutral hedge fund using crypto incentives.
						<Row>
							<Col> 5,467</Col>
							<Col> $13,071,857 </Col>
						</Row>
						<Row>
							<Col>staked AI models power Numerai</Col>
							<Col>at stake</Col>
						</Row>
					</Col>
				</Row>
                <hr/>
			</Container>
		</>
	);
};

export default Section3;
