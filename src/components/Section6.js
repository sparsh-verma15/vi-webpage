import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./globalStyles.css";
import yashpic from '../images/yash-profile.jpg'

const FAQ = (props) => {
	const [toHide, setToHide] = useState(false);
	return (
		<>
			<div
				onClick={() => setToHide((prev) => !prev)}
				style={{ cursor: "pointer" }}
			>
				&#10148;{props.q}
			</div>
			{toHide ? <div>{props.a}</div> : <div></div>}
		</>
	);
};

const Section6 = () => {
	return (
		<Container className="text-white">
			<div className="text-size1 mt-5 mb-5">Learn More</div>
			<Row className="text-start">
				<Col>
					<div className="text-size3 mb-3">Frequently Asked Questions</div>
					<FAQ
						q={"What is Numerai?"}
						a={
							"Numerai is a quant hedge fund built on thousands of crowdsourced machine learning models."
						}
					/>
					<FAQ
						q={"What's in the Numerai dataset?"}
						a={
							"The Numerai dataset consists of standard financial market data for a universe of roughly 5,000 global equities. We assemble it from several market data providers and consistently research both traditional and unique features in data that's available over a 10-20 year timeframe."
						}
					/>
					<FAQ
						q={"Why give it away for free?"}
						a={
							"Numerai gives away data so that users around the world have free, hedge-fund quality data to build their machine learning models -- data they would otherwise not have access to. From inception, Numerai has believed that open participation, in the form of readily available data, is a core component in crowdsourcing solutions to significant data science problems."
						}
					/>
                    <FAQ
                        q = {"Why is the data obfuscated for the tournament participants?"}
                        a = {"Finding a way to share data without revealing it, a solution that allows us to freely distribute a high-quality set of financial data, was also an early, core innovation that Numerai built. We needed a way to secure the value of the data set while simultaneously retaining its unique features for the purpose of building predictive models with machine learning."}
                    />
					<FAQ
						q={"What is Numerai?"}
						a={
							"Numerai is a quant hedge fund built on thousands of crowdsourced machine learning models."
						}
					/>
					<FAQ
						q={"What's in the Numerai dataset?"}
						a={
							"The Numerai dataset consists of standard financial market data for a universe of roughly 5,000 global equities. We assemble it from several market data providers and consistently research both traditional and unique features in data that's available over a 10-20 year timeframe."
						}
					/>
					<FAQ
						q={"Why give it away for free?"}
						a={
							"Numerai gives away data so that users around the world have free, hedge-fund quality data to build their machine learning models -- data they would otherwise not have access to. From inception, Numerai has believed that open participation, in the form of readily available data, is a core component in crowdsourcing solutions to significant data science problems."
						}
					/>
                    <FAQ
                        q = {"Why is the data obfuscated for the tournament participants?"}
                        a = {"Finding a way to share data without revealing it, a solution that allows us to freely distribute a high-quality set of financial data, was also an early, core innovation that Numerai built. We needed a way to secure the value of the data set while simultaneously retaining its unique features for the purpose of building predictive models with machine learning."}
                    />
				</Col>
				<Col className="text-center">
					<div className="text-size3 mb-3">Building the Meta Model</div>
					<Image src={yashpic} height={450}/>
				</Col>
			</Row>
		</Container>
	);
};

export default Section6;
