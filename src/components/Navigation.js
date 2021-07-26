import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation(){
	const [cross, setCross]=useState(false);

	const navigationPage = ()=>{
		setCross(!cross);
	}

	const navigationMenu = ()=>{
		return(
		<ul className="navigation-menu">
			<Link to="/" onClick={navigationPage}>
				<li>Home</li>
			</Link>
			<Link to="/completed" onClick={navigationPage}>
				<li>Completed Tasks</li>
			</Link>
		</ul>
		);
	}

	useEffect(()=>{

	},[cross])

	return(
		<div className="navigation">
		<div className="navbar">
			<h2>ToDo List</h2>
			<div className="hamburger">
				<i className={!cross?"fas fa-bars":"fas fa-times"} onClick={navigationPage}></i>
			</div>
		</div>
		{cross?navigationMenu():""}
		</div>
		)
}


export default Navigation;