import {React, useState, useEffect} from 'react';
import axios from "axios";
import './Add.css';

function Add(props){
	const {listdata, setlistdata} = props;
	const [id, setId] = useState(0);
	const [cross, setCross] = useState(false);
	
	const add = async (id)=>{
		const data={
			taskId: id,
			task: document.querySelector("#task").value,
			time: document.querySelector("#time").value
		}
		const done = await axios.post("http://localhost:5000/user/add",data)
		setlistdata([...listdata,data])
		showCross();
	}
	const showCross = ()=>{
		setCross(!cross);
	}

	const fetchId = (id)=>{
		axios.get("http://localhost:5000/user/list")
		.then(items => setId(Number(items.data[items.data.length-1].taskId)))
	}

	const showForm = ()=>{
		return(
				<div className="add-items-form">
					<input type="text" id="task" placeholder="Your task"/>
					<br/>
				 	<input type="datetime-local" id="time"/>
				 	<br/>
					<button onClick={()=>{add(id+1)}}>Done</button>
					<div className="add-items-button" ><i className={!cross? "fas fa-plus-circle": "fas fa-times-circle"} onClick={showCross}></i></div>	
				</div>	
			)
	}

	useEffect(()=>{
		fetchId();
		console.log(listdata)
	},[listdata, cross])
	return(
			<div className="add-items">
				<div className="add-items-button"><i className={!cross? "fas fa-plus-circle": "fas fa-times-circle"} onClick={showCross}></i></div>
				{cross?showForm():""}
			</div>
		)
}



export default Add;