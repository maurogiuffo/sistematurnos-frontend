import React, { useContext, useEffect,useState } from "react";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import moment from "moment";

const TurnDetails = ({ turn }) => {
	const { isLogged, userId } = useContext(AuthContext);

	const [state , setState] = useState(false);
	const { id, turnDate, professionalId ,customerId } = turn;
	console.log(turn);

	//////////////////////////////////
	function orderTurn(turnDate) {
		let turndate = moment(turnDate);
		let day = moment(turnDate).locale("es").format("LLLL");
		console.log(day);
		let res = day.substring(0, 3);
		console.log(res);
		console.log(document.getElementById(res));
	}

	////////////////////////////////////////


	useEffect(() => {
		/*if(turnDate !== null){
			orderTurn();
		}*/	
	}, [])
		

	const solicitar = (turn) => {

		const post = async (id) => {
			const url = "http://localhost:8080/turn/addCustomerTurn/";
	
			var json = {
				userId: userId,
				turnId: id,
			};
	
			const res = await axios.post(url, json);
			return res;
		};



		post(id).then((res) => {
			alert("userid " + userId + " respuesta turno " + id);
			turn.customerId
			console.log(res);
			setState(true)
			
		});
	};

	const eliminar = (id) => {

		const post = async (id) => {
			const url = "http://localhost:8080/turn/deleteTurn/";
	
			var json = {
				id: id,
			};
	
			const res = await axios.post(url, json);
			return res;
		};


		post(id).then((res) => {
			alert("userid " + userId + " respuesta turno " + id);
			turn.customerId
			console.log(res);
			setState(true)
			
		});
	};



	return (
		<>
			<tr>

		
			<td>{id} - {turnDate.substr(0, 10)} - </td>
			<td> {turnDate.substr(11, 5)}</td>
			
			
			<td>

			{isLogged === "true" && customerId == null && userId !== professionalId && state=== false? (

				<Button variant="contained" onClick={() => solicitar(id)}>
					{" "}
					Solicitar{" "}
				</Button>
			) : null} 
			
			{isLogged === "true" && userId === professionalId && state === false? (

				<Button variant="contained" onClick={() => eliminar(id)}>
					{" "}
					Eliminar{" "}
				</Button>
				) : null} 
			
			</td>
			
			</tr>
			
		</>
	);
};

export default TurnDetails;
