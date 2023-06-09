import React from "react";
import "./globalStyles.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { TbCircle1Filled,TbCircle2Filled,TbCircle3Filled,TbCircle4Filled,TbCircle5Filled,TbCircle6Filled } from 'react-icons/tb';
import flowchart from "../images/flow-chart.png"; 

const Section2 = () => {
	return (
		<Container className="text-white">
			<div className="text-size1">Investment Process</div>
			<Row>
				<Col md={6} xs={12}>
                    <Image src={flowchart} fluid/>
                </Col>
				<Col className="text-start" md={6} xs={12}>
                    <Container>
					<Row >
						<div className="text-size3 text-bold ">
                            <TbCircle1Filled/>&nbsp;
							Regularized Data
						</div>
						<div className="">
							Numerai researches and combines a large number of data sources
							together and transforms the data into regularized features and
							targets to create a pure dataset for Numerai's data science
							community.
						</div>
					</Row>
					<Row className="mt-4">
						<div className="text-size3 text-bold "><TbCircle2Filled/>&nbsp;Modeling</div>
						<div className="">
							Datasets are made available to our community of thousands of data
							scientists who compete to create the best predictive models in our
							data science tournament.
						</div>
					</Row>
					<Row className="mt-4">
						<div className="text-size3 text-bold "><TbCircle3Filled/>&nbsp;Stakes</div>
						<div className="">
							Data scientists stake their best models with our cryptocurrency,
							NMR. Good models are rewarded with more NMR. Bad models have their
							stakes burned.
						</div>
					</Row>
					<Row className="mt-4">
						<div className="text-size3 text-bold ">
                        <TbCircle4Filled/>&nbsp;Stake-Weighted Meta Model Signal
						</div>
						<div className="">
							Numerai creates the Stake-Weighted Meta Model by combining the
							latest predictions from the tournaments and outputs a signal for
							each stock in our investable universe.
						</div>
					</Row>
					<Row className="mt-4">
						<div className="text-size3 text-bold ">
                        <TbCircle5Filled/>&nbsp;Portfolio Construction
						</div>
						<div className="">
							Convex optimization turns Meta Model signal into a portfolio by
							constraining risk factors such as country, sector and market risk.
						</div>
					</Row>
					<Row className="mt-4">
						<div className="text-size3 text-bold ">
                        <TbCircle6Filled/>&nbsp;Portfolio Returns
						</div>
						<div className="">
							Numerai's returns are uncorrelated with the market and
							uncorrelated with traditional quant funds creating a
							differentiated and diversifying asset for institutional
							allocators.
						</div>
					</Row>
                    </Container>
				</Col>
			</Row>
		</Container>
	);
};

export default Section2;
