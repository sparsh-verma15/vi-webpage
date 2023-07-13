import React from "react";
import "./Navbar.css";
import logo from "./vlogo.png";
import { Link } from "react-scroll"; //for smooth scrolling to section of page


const Navbar = () => {
	return (
		<div className="outer-container">
			<img src={logo} alt="viccenial technologies" className="logo-style" />
			<div className="right-container">
				<Link className="navbar-button"
					activeClass="active"
					to="section1"
					spy={true}
					smooth={true}
					offset={-70}
					duration={250}
				>
					Section 1
				</Link>
				<Link className="navbar-button"
					activeClass="active"
					to="section2"
					spy={true}
					smooth={true}
					offset={-70}
					duration={250}
				>
					Section 2
				</Link>
				<Link className="navbar-button"
					activeClass="active"
					to="section3"
					spy={true}
					smooth={true}
					offset={-70}
					duration={250}
				>
					Section 3
				</Link>
				<Link className="navbar-button"
					activeClass="active"
					to="section5"
					spy={true}
					smooth={true}
					offset={-70}
					duration={250}
				>
					Team
				</Link>
				<Link className="navbar-button"
					activeClass="active"
					to="section4"
					spy={true}
					smooth={true}
					offset={-70}
					duration={250}
				>
					Contact Us
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
