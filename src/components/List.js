import {React, useState, useEffect} from "react";
import axios from "axios";
import './List.css';
import Add from './Add';


const data = [
	{
		taskId: 1,
		task: "Do your homework",
		time: "9 AM"
	},
	{
		taskId: 2,
		task: "Clean your house",
		time: "9:30 AM"
	},
	{
		taskId: 3,
		task: "Go to school",
		time: "11 AM"
	},
]


function List(){
	const [listdata, setlistdata] = useState([]);
	const [taskCompleted, settaskCompleted] = useState({});
	const [check, setCheck] = useState(0);


	const done = (id)=>{
		let newData = listdata.filter(items=>{
			return(items.taskId !== id)
		})
		let newData2 = listdata.filter(items=>{
			return (items.taskId == id)
		})
		setlistdata(newData);
		settaskCompleted(newData2);
	}

	const remove = async (id)=>{
		let newData = listdata.filter(items=>{
			return(items.taskId !== id)
		})
		setlistdata(newData);
		const done = await axios.post("http://localhost:5000/user/remove",{taskId:id.toString()});

	}
	const convertTime=(time)=>{
		let date = (time-(new Date().getTime()))/1000;
		console.log(date)
		// Create a new JavaScript Date object based on the timestamp
		// multiplied by 1000 so that the argument is in milliseconds, not seconds.
		// var date = new Date(unix_timestamp );
		var hours = parseInt(date/(60*60));
		var minutes = parseInt(date%(3600)/60);
		var seconds =parseInt(date%(3600)%60);
		var formattedTime = `${hours}:${minutes}`;
		return formattedTime;
	}
	const fetchData = ()=>{
		const data = axios.get("http://localhost:5000/user/list")
					.then(items=>setlistdata(items.data))
	}

	useEffect(()=>{
		fetchData();
		// setInterval(()=>{
		// 	setCheck(!check)
		// },1000)
	},[])

	return(
			<div className="list">
				{
					(listdata.length > 0)?(listdata.map(item=>{
						return(
								<div className="list-items" key={item.taskId}>
									<div className={`list-items-items ${!item.expire?"":"expired"}`}>
									<p>{item.task}</p>	
									<p>{convertTime(item.time)}</p>
									</div>
									<div className="list-items-buttons">
										<span onClick={()=>done(item.taskId)}><i className="fas fa-check-circle"></i></span>
										<span onClick={()=>remove(item.taskId)}><i className="fas fa-times-circle"></i></span>
									</div>
								</div>
							)
					})):""
				}
				<Add listdata={listdata} setlistdata={setlistdata}/>
			</div>
		)
}

export default List;