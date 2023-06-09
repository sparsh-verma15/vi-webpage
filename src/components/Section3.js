import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./globalStyles.css";
import teamMem1 from "../images/demoTeam.jpg"

const Section3 = () => {
	return (
		<Container className="text-white">
			<div className="text-size1">Team</div>
			<Row className = "text-start">
				<Col md={4} xs={12}>
					<Image fluid src={teamMem1} height={25}/>
				</Col>
				<Col md={8} xs={12}>
					<div className="text-size2">Richard Craib</div>
					<div className="text-size3">Founder & Chief Executive Officer</div>
					<div>
						Richard graduated with a degree in pure mathematics from Cornell
						University. He built a global equity fund powered by machine
						learning at $15 billion asset manager, Prudential (M&G).
					</div>
					<div>
						This is where he first developed Numerai’s approach to financial
						data regularization, a crucial step in applying machine intelligence
						to the stock market.
					</div>
					<div>
						Building on this, in October 2015 Richard founded Numerai in San
						Francisco to build a new kind of hedge fund where data scientists
						around the world collaborate to predict equity returns using
						artificial intelligence.
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Section3;
