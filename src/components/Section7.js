import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { styled } from "styled-components";
import Logo from "../images/vlogo.png"

const Terms = () => {
	return (
		<>
			<div className="text-size2 mb-2">Terms</div>
			<Row className="bottom-border top-border">
				<Col>Minimum InvestMent</Col>
				<Col>$5mm</Col>
				<Col>$5mm</Col>
			</Row>
			<Row className="bottom-border">
				<Col>Lockup</Col>
				<Col>1 Month Notice, 1 Month Liquidity</Col>
				<Col>90 Days Notice, 1 Month Liquidity</Col>
			</Row>
			<Row className="bottom-border">
				<Col>Fund Capacity</Col>
				<Col>$1bn</Col>
				<Col>$250mm</Col>
			</Row>
			<Row className="bottom-border">
				<Col>Management Fee</Col>
				<Col>1% annualized</Col>
				<Col>2% annualized</Col>
			</Row>
			<Row className="bottom-border">
				<Col>Management Fee</Col>
				<Col>
					25% with high-water mark (Class A) 20% with high-water mark (Founders
					Class)
				</Col>
				<Col>
					25% with high-water mark (Class A) 20% with high-water mark (Founders
					Class)
				</Col>
			</Row>
		</>
	);
};

const PortfolioExposure = () => {
	return (
		<>
			<div className="text-size2 mb-2">Portfolio Exposures</div>
			<Row className="bottom-border top-border">
				<Col>Investment Products</Col>
				<Col>100% Equities (Across market capitalizations)</Col>
				<Col>100% Equities (Across market capitalizations)</Col>
			</Row>
			<Row className="bottom-border">
				<Col>Holding Period</Col>
				<Col>2-4 Months (Weekly trading)</Col>
				<Col>2-4 Months (Weekly trading)</Col>
			</Row>
		</>
	);
};

const RiskManagement = () => {
	return (
		<>
			<div className="text-size2 mb-2">Risk Management</div>
			<Row className="bottom-border top-border">
				<Col>Maximum position size</Col>
				<Col>{"<"}3% AUM, monitored daily</Col>
				<Col>~ 6% AUM, monitored daily</Col>
			</Row>
			<Row className="bottom-border">
				<Col>Trading</Col>
				<Col>Monitor for event risk and close or restrict security</Col>
				<Col>Monitor for event risk and close or restrict security</Col>
			</Row>
			<Row className="bottom-border">
				<Col>Factor Exposure</Col>
				<Col>Beta of ~0 with limited exposure to core style factors</Col>
				<Col>Beta of ~0 with limited exposure to core style factors</Col>
			</Row>
			<Row className="bottom-border">
				<Col>Target Volatility</Col>
				<Col>15%</Col>
				<Col>20%</Col>
			</Row>
			<Row className="bottom-border">
				<Col>Industries</Col>
				<Col>All except Biotechnology and REITS</Col>
				<Col>All except Biotechnology and REITS</Col>
			</Row>
		</>
	);
};

const ServiceProviders = () => {
    return (
        <>
            <div className="text-size2 mb-2">Service Providers</div>
            <Row>
                <Col className="top-border bottom-border">Fund Administrator</Col>
                <Col className="top-border bottom-border">SS&C</Col>
                <Col></Col>
            </Row>
            <Row>
                <Col className="bottom-border">Auditor</Col>
                <Col className="bottom-border">KPMG</Col>
                <Col></Col>
            </Row>
            <Row>
                <Col className="bottom-border">Legal Counsel (US)</Col>
                <Col className="bottom-border">Cole-Frieman & Mallon</Col>
                <Col></Col>
            </Row>
            <Row>
                <Col className="bottom-border">Legal Counsel (Cayman)</Col>
                <Col className="bottom-border">Maples</Col>
                <Col></Col>
            </Row>
            <Row>
                <Col className="bottom-border">Prime Broker</Col>
                <Col className="bottom-border">UBS</Col>
                <Col></Col>
            </Row>
            <Row>
                <Col className="bottom-border">Tax Advisor</Col>
                <Col className="bottom-border">KPMG</Col>
                <Col></Col>
            </Row>
            <Row>
                <Col className="bottom-border">Compliance Consultant</Col>
                <Col className="bottom-border">Waystone Compliance Solutions</Col>
                <Col></Col>
            </Row>
        </>
    )
}

const EndLogo = () => {
	return (
		<Container className="text-center m">
			<Image src={Logo} height={75}/>
		</Container>
	)
}

const Section7 = () => {
	return (
		<OuterDiv>
			<Container className="text-white mt-5 text-start">
				<hr />
				<Terms />
				<br />
				<PortfolioExposure />
				<br />
                <RiskManagement/>
                <br/>
                <ServiceProviders/>
				<br/>
			</Container>
			<EndLogo/>
		</OuterDiv>
	);
};

const OuterDiv = styled.div`
	.bottom-border {
		border-bottom: 1px dotted white;
		padding-top: 2px;
		padding-bottom: 2px;
	}
	.top-border {
		border-top: 1px dotted white;
	}
`;

export default Section7;
