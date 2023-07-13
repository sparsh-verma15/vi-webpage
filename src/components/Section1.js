import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './globalStyles.css'
import './Section1.css'
import ChartComponent from "./ChartsComponent";


//data and options for making line chart
const Section1 = () => {
	const chartData = {
		labels: ['Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022'],
		datasets: [
		  {
			label: 'Numer AI',
			data: [5, -10, 15, -20, 25, -30],
			backgroundColor: 'yellow', // Change color to fit your dark mode theme
			borderColor: 'yellow', // Change color to fit your dark mode theme
			borderWidth: 1,
		  },
		  {
			label: 'Market Neutral Fund',
			data: [15, -17, 18, -24, -10, -30],
			backgroundColor: 'red', // Change color to fit your dark mode theme
			borderColor: 'red', // Change color to fit your dark mode theme
			borderWidth: 1,
		  },
		],
	  };
	
	  const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
		  x: {
			grid: {
			  display: false,
			  color: '#888', // Change color to fit your dark mode theme
			},
			ticks: {
			  color: '#fff', // Change color to fit your dark mode theme
			},
		  },
		  y: {
			grid: {
			  color: '#888', // Change color to fit your dark mode theme
			  lineWidth: 1,
			},
			ticks: {
			  color: '#fff', // Change color to fit your dark mode theme
			  callback: (value) => value + '%', // Add the percentage sign to each tick
			},
		  },
		},
	  };
	return (
		<Container className="text-white pt-md-5 mt-md-5 text-start">
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
                            {/* <Image src={graph} fluid/> */}
							<ChartComponent data = {chartData} options={chartOptions}/>
                        </div>
                        <div className="text-size2 text-left mt-5">
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
