import React, { Component } from "react";
import "../style/Home.css";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function Home() {
	return (
		// <div className="Home-wrapper">
		<div className="Home-wrapper" id="home">
			<div className="Home-content">
				<h1 id="homeTitle">mai dang</h1>
				<p id="homeDescription">
					hi! I'm Mai. I'm a software engineer currently based in San Francisco.
					I have a background in full stack development, specializing in
					building user-centric products.
				</p>
				<p>
					<span role="img" aria-label="truck">
						🚚
					</span>{" "}
					I'm currently working on the Safety Coaching product at{" "}
					<a
						className="link"
						target="blank"
						href={
							"https://kb.samsara.com/hc/en-us/sections/360009157232-Driver-Coaching"
						}
					>
						Samsara.
					</a>
				</p>
				<p>
					<span role="img" aria-label="ship">
						🚢
					</span>{" "}
					Before that, I was at{" "}
					<a
						className="link"
						target="blank"
						href={"https://www.flexport.com/products/order-management/"}
					>
						Flexport
					</a>{" "}
					working on their Order Management and Oceans products.
				</p>
				<p>
					<span role="img" aria-label="computer">
						💻
					</span>{" "}
					I've also previously completed internships at{" "}
					<a
						className="link"
						target="blank"
						href={"https://azure.microsoft.com/en-us/products/iot-central"}
					>
						Microsoft
					</a>{" "}
					on their Universal Store and Azure IoT teams.
				</p>
				<p>
					<span role="img" aria-label="graduation_cap">
						🎓
					</span>{" "}
					I graduated with a Bachelor's in Computer Science from the{" "}
					<a className="link" target="blank" href={"https://www.usc.edu/"}>
						University of Southern California
					</a>
					. During my time there, I spent a lot of my free time building a CS
					community at USC as a board member of{" "}
					<a className="link" target="blank" href={"https://www.scopeusc.com/"}>
						Scope USC
					</a>{" "}
					and exploring the startup space as a member of{" "}
					<a className="link" target="blank" href={"https://usclavalab.org/"}>
						Lavalab
					</a>
					, USC's product incubator. Both experiences have helped shape what I
					look for in my work today: a collaborative and inclusive team as well
					as an impactful product that genuinely captures the user story.
				</p>
				<p>
					In my free time I enjoy eating good food with friends (ask me about my
					SF or LA food list), improving my matcha-making skills, making bad
					pottery, and spending time with my two cats Pickle and Olive.
				</p>
				<p>
					<a className="link" href="mailto:elysemai3@gmail.com">
						email me
					</a>{" "}
					to reach out or to request a resume!
				</p>
				<div>
					<a
						style={{
							color: "#4d79cb",
							fontSize: "30px",
							paddingRight: "20px",
						}}
						target="blank"
						href="https://github.com/Mai-Nhien"
					>
						<FaGithub />
					</a>
					<a
						style={{
							color: "#4d79cb",
							fontSize: "30px",
							paddingRight: "20px",
						}}
						target="blank"
						href="https://www.linkedin.com/in/mai-nhiendang/"
					>
						<FaLinkedin />
					</a>
					<a
						style={{
							color: "#4d79cb",
							fontSize: "30px",
							paddingRight: "20px",
						}}
						target="blank"
						href="https://www.instagram.com/maii.makes/?hl=en"
					>
						<FaInstagramSquare />
					</a>
				</div>
			</div>
		</div>
	);
}
