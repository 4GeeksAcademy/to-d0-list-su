import React, {useState} from "react";

//delete toDo
//button


//create your first component
const Home = () => {
	const [toDo,setToDo] = useState([])
	const [userInput,setUserInput] = useState("")

//type in toDo
	function addToDo(task){
let temporaryToDo ={lable:task,done:false}
setToDo([...toDo,temporaryToDo])
setUserInput("")
	}

//delete todo
function deleteToDo(remove){
	console.log(remove)
	let newToDo =toDo.filter((task,index)=>index != remove)
	setToDo(newToDo)
}
//handle enter
function handleEnter (e,task){
	if(e.key==="Enter"){
		addToDo(task)
	}
}

	return (
		<div className="text-center">
			<div className="top">
			<h1>To Do</h1>	
			<input type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)} onKeyDown={(e)=>handleEnter(e,userInput)}/>
			<button className="btn btn-success" onClick={()=> addToDo(userInput)}>Add</button>
			</div>
			<div>
				<ul>
					{toDo?.map((task,index)=>(
						<li key={index}>{task.lable} 
						<button className="btn btn-danger" onClick={()=>deleteToDo(index)}>Delete</button>
						</li>
						
					))}
				</ul>
				<p>{toDo.length}Things Left To Do</p>
			</div>
		</div>
	);
};

export default Home;
