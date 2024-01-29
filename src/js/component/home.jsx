import React, {useState, useEffect} from "react";

//delete toDo
//button


//create your first component
const Home = () => {
	const [toDo,setToDo] = useState([])
	const [userInput,setUserInput] = useState("")
	useEffect(() => {
		async function getToDo() {
			const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/Suri1336")
			const data = await response.json()
			console.log(data)
			setToDo(data)
		}
		getToDo()
	}, [])
	useEffect (()=>{
		async function updateToDo(){
			const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/Suri1336", {
				method:"PUT",
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify(toDo)
			})
			const data = await response.json()
		}
		updateToDo()
	},[toDo])
//type in toDo
	function addToDo(task){
let temporaryToDo ={label : task,done:false}
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
		<div  id="card" className="text-center position-relative overflow-scroll">
			<div className="top">
			<h1>To Do</h1>	
			<input type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)} onKeyDown={(e)=>handleEnter(e,userInput)}/>
			<button id="addbtn" className="btn btn-success" onClick={()=> addToDo(userInput)}>Add</button>
			
			</div>
		
			<div>
			<p className="position-absolute">{toDo.length}Things Left To Do</p>
				<ul className="d-flex flex-column" id="list">
					{toDo?.map((task,index)=>(
						<div><li key={index}>{task.label} 
						<button id="deletebtn" className="btn btn-danger" onClick={()=>deleteToDo(index)}>Delete</button>
						</li>
						</div>
						
						
					))}
				</ul>
				
			</div>
			
		</div>
	);
};

export default Home;
