import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import "./globalStyles.css";

const Section6 = () => {
	let faqs = [
        {  "question" : "What is Numerai?" ,
           "answer" : "Numerai is a quant hedge fund built on thousands of crowdsourced machine learning models.",
           "hide" : true
        },
        {  "question" : "What's in the Numerai dataset?" ,
           "answer" : "The Numerai dataset consists of standard financial market data for a universe of roughly 5,000 global equities. We assemble it from several market data providers and consistently research both traditional and unique features in data that's available over a 10-20 year timeframe.",
           "hide" : true
        }
    ]

	return (
		<Container className="text-white">
			<div className="text-size1">Learn More</div>
			<Row className="text-start">
				<Col>
					{
                        faqs.map( (val,index) => {
                            let q = val[0];
                            let a = val[1];
                            return (
                                <div>
                                    <div>{q}</div>
                                    <div className={`show`}>{a}</div>
                                </div>
                            )
                        } )
                    }
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
};

export default Section6;
