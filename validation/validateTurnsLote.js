export default function validateTurnsLote(values) {
    let errors = {};

     if(!values.selectedDate) {
         errors.selectedDate = "La fecha es obligatoria"
     }


     return errors;
}

// selectedDate,
// 		selectedTime,
// 		daysQuantity,
// 		turnsQuantity,
// 		duration,
// 		client,