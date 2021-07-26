import {React, useState, useEffect} from "react";
import './Completedtask.css';
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

function Completedtask(){
	const [listdata, setlistdata] = useState(data);
	const [taskCompleted, settaskCompleted] = useState({});
	useEffect(()=>{
		console.log(listdata)
		console.log(taskCompleted);
	},[listdata]);

	return(
			<div className="list">
				{
					listdata.map(item=>{
						return(
								<div className="list-items" key={item.taskId}>
									<div className="list-items-items">
									<p>{item.task}</p>	
									<p>{item.time}</p>
									</div>
									<div className="list-completed-items-buttons">
										<span><i className="fas fa-check-circle"></i></span>
									</div>
								</div>
							)
					})
				}
			</div>
		)
}


export default Completedtask;