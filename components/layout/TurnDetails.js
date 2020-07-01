import React, { useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import moment from "moment";

const TurnDetails = ({ turn }) => {
	const { isLogged, userId } = useContext(AuthContext);

	const { id, turnDate } = turn;
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
	const post = async (id) => {
		const url = "http://localhost:8080/turn/addCustomerTurn/";

		var json = {
			userId: userId,
			turnId: id,
		};

		const res = await axios.post(url, json);
		return res;
	};

	useEffect(() => {
		if(turnDate !== null){
			orderTurn();
		}	
	}, [])
		

	const solicitar = (id) => {
		alert("userid " + userId + "solicitar turno " + id);

		post(id).then((res) => {
			alert("userid " + userId + " respuesta turno " + id);
			console.log(res);
			//setData(res.data);
		});
	};

	


	return (
		<>
			{/* 
			{turnDate.substr(0, 10)} - {turnDate.substr(11, 5)}
			{isLogged === "true" ? (
				<Button variant="contained" onClick={() => solicitar(id)}>
					{" "}
					Solicitar{" "}
				</Button>
			) : null} */}

			<tr class="">
				<td class="text " data-title="Horarios">
					{turnDate.substr(11, 5)}
				</td>
				<td class=" " data-title="Lun" id="lun"></td>
				<td class=" " data-title="Mar" id="mar"></td>
				<td class=" " data-title="Mie" id="mié"></td>
				<td class=" " data-title="Jue" id="jue"></td>
				<td class=" " data-title="Vie" id="vie"></td>
				<td class=" " data-title="Sab" id="sáb"></td>
				<td class=" " data-title="Dom" id="dom"></td>
			</tr>
		</>
	);
};

export default TurnDetails;
