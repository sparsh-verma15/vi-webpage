import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './globalStyles.css'
import ChartComponent from "./ChartsComponent";

const Section3 = () => {
	const chartData1 = {
		labels: ['Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022'],
		datasets: [
		  {
			label: 'Numer AI One',
			data: [15, -17, 18, -24, -10, -30],
			backgroundColor: 'red', // Change color to fit your dark mode theme
			borderColor: 'red', // Change color to fit your dark mode theme
			borderWidth: 1,
		  }
		],
	  };
	
	  const chartOptions1 = {
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
	  const chartData2 = {
		labels: ['Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022'],
		datasets: [
		  {
			label: 'Numer AI Supreme',
			data: [5, -10, 15, -20, 25, -30],
			backgroundColor: 'yellow', // Change color to fit your dark mode theme
			borderColor: 'yellow', // Change color to fit your dark mode theme
			borderWidth: 1,
		  }
		],
	  };
	
	  const chartOptions2 = {
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
		<>
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
					<Col>
						<ChartComponent data = {chartData1} options={chartOptions1}/>
					</Col>
					<Col>
						<ChartComponent data = {chartData2} options={chartOptions2}/>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Section3;
