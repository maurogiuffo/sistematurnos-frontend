export default function validateRegister(values) {
    let errors = {};

    // validar nombre user
    if(!values.name) {
        errors.name = "El nombre es obligatorio"
     }
    
     if(!values.lastname) {
         errors.lastname = "El apellido es obligatorio"
     }
     
     if(!values.dni) {
         errors.dni = "El DNI es obligatorio"
     }

     if(!values.email) {
         errors.email = "El email es obligatorio"
     }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
         errors.email = "Email no válido"
     }

     if(!values.password) {
         errors.password = "Contraseña obligatoria"
     }else if( values.password.length < 6) {
         errors.password = "La contraseña debe poseer al menos 6 caracteres"
     }

     return errors;
}